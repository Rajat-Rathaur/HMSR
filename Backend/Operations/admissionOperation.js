const connection = require('../Connections/connect.js');


async function addNewAdmission(hosteliteData, admissionData, hosteliteDependentData) {

    const { branchName, roomNo, bedNumber, dateOfJoin, dateOfExit } = admissionData;
    try {
        // Start a transaction
        await connection.query('START TRANSACTION');

        // Check if the hostelite already exists in the hostelites table
        const [existingHostelite] = await connection.query('SELECT * FROM hostelites WHERE email_id = ? OR phone_no = ?', [hosteliteData.email_id, hosteliteData.phone_no]);

        if (existingHostelite.length > 0) {
            await connection.query('ROLLBACK');
            return { error: "Hostelite with the provided EmailId or phone number already exists", success: false };
        }

        // get the b_id from branch table where name = branchName
        const [branch_row] = await connection.query('SELECT b_id FROM branch WHERE b_name = ?', [branchName]);
        let branchNo;
        if (branch_row.length > 0)
            branchNo = branch_row[0].b_id;
        else {
            await connection.query('ROLLBACK');
            return { error: "branch not found with the branch Name", success: false };
        }

        // Check if the room exists
        const [existingRoom] = await connection.query('SELECT * FROM rooms WHERE roomNo = ? AND branchNo = ?', [roomNo, branchNo]);

        if (existingRoom.length === 0) {
            await connection.query('ROLLBACK');
            return { error: "Room with the provided roomNo does not exist.", success: false };
        }

        const roomStatus = existingRoom[0].roomStatus;
        const roomType = existingRoom[0].roomType;
        const r_id = existingRoom[0].r_id;

        if (roomStatus === 'Occupied') {
            await connection.query('ROLLBACK');
            return { error: "Room is already occupied.", success: false };
        }

        // Check if the bed exists and is empty
        const [existingBed] = await connection.query('SELECT * FROM belongs_to WHERE rNo = ? AND bedNumber  = ?', [r_id, bedNumber]);

        if (existingBed.length > 0) {
            await connection.query('ROLLBACK');
            return { error: "Bed is already occupied.", success: false };
        }

        // get the r_id from room table from roomNo
        const [rows] = await connection.query('SELECT r_id FROM rooms WHERE roomNo = ?', [roomNo]);
        let rNo;
        if (rows.length > 0)
            rNo = rows[0].r_id;
        else {
            await connection.query('ROLLBACK');
            return { error: "branch not found with the roomNo", success: false };
        }

        // Insert the new hostelite into the hostelites table
        const insertHosteliteQuery = 'INSERT INTO hostelites SET ?';
        const [insertedHostelite] = await connection.query(insertHosteliteQuery, hosteliteData);

        // Insert the new belongs_to data
        const insertBelongsToQuery = 'INSERT INTO belongs_to (hNo, rNo, bedNumber, dateOfJoin, dateOfExit) VALUES (?, ?, ?, ?, ?)';
        await connection.query(insertBelongsToQuery, [insertedHostelite.insertId, rNo, bedNumber, dateOfJoin, dateOfExit]);

        // Update the roomStatus in the rooms table
        const updateRoomStatusQuery = 'UPDATE rooms SET roomStatus = ? WHERE roomNo = ? AND branchNo = ?';
        const newRoomStatus = (roomType === 'S' ? 'Occupied' : roomStatus === 'Partially Occupied' ? 'Occupied' : 'Partially Occupied');
        await connection.query(updateRoomStatusQuery, [newRoomStatus, roomNo, branchNo]);

        // Insert the new h_dependent into table
        const insertHosteliteDependentQuery = 'INSERT INTO h_dependents  SET ?';
        const [insertedHosteliteDependent] = await connection.query(insertHosteliteDependentQuery, hosteliteDependentData);

        // Commit the transaction
        await connection.query('COMMIT');

        console.log('New hostelite added with H_id:', insertedHostelite.insertId);
        return { insertedId: insertedHostelite.insertId, success: true };
    } catch (err) {

        // Rollback the transaction in case of error
        await connection.query('ROLLBACK');
        console.error('Error adding hostelite:', err);
        return { error: `Error adding hostelite: ${err}`, success: false };
    }
}


module.exports = { addNewAdmission }
