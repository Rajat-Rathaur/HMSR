const connection = require('../Connections/connect.js');


async function addNewAdmission(hosteliteData, admissionData) {
    
    const { branchNo, roomNo, bedNo, dateOfJoin, dateOfExit, dateOfLeave } = admissionData;
    try {
        // Start a transaction
        await connection.query('START TRANSACTION');

        // Check if the hostelite already exists in the hostelites table
        const [existingHostelite] = await connection.query('SELECT * FROM hostelites WHERE email_id = ? OR phone_no = ?', [hosteliteData.email_id, hosteliteData.phone_no]);

        if (existingHostelite.length > 0) {
            await connection.query('ROLLBACK');
            return { error: "Hostelite with the provided EmailId or phone number already exists", success: false };
        }

        // Check if the room exists
        const [existingRoom] = await connection.query('SELECT * FROM rooms WHERE roomNo = ? AND branchNo = ?', [roomNo, branchNo]);

        if (existingRoom.length === 0) {
            await connection.query('ROLLBACK');
            return { error: "Room with the provided roomNo does not exist.", success: false };
        }

        const roomStatus = existingRoom[0].roomStatus;
        const roomType = existingRoom[0].roomType;

        if (roomStatus === 'Occupied') {
            await connection.query('ROLLBACK');
            return { error: "Room is already occupied.", success: false };
        }

        // Check if the bed exists and is empty
        const [existingBed] = await connection.query('SELECT * FROM belongs_to WHERE branchNo = ? AND roomNo = ? AND bedNo = ?', [branchNo, roomNo, bedNo]);

        if (existingBed.length > 0) {
            await connection.query('ROLLBACK');
            return { error: "Bed is already occupied.", success: false };
        }

        // Insert the new hostelite into the hostelites table
        const insertHosteliteQuery = 'INSERT INTO hostelites SET ?';
        const [insertedHostelite] = await connection.query(insertHosteliteQuery, hosteliteData);

        // Insert the new belongs_to data
        const insertBelongsToQuery = 'INSERT INTO belongs_to (hId, branchNo, roomNo, bedNo, dateOfJoin, dateOfExit, dateOfLeave) VALUES (?, ?, ?, ?, ?, ?, ?)';
        await connection.query(insertBelongsToQuery, [insertedHostelite.insertId, branchNo, roomNo, bedNo, dateOfJoin, dateOfExit, dateOfLeave]);

        // Update the roomStatus in the rooms table
        const updateRoomStatusQuery = 'UPDATE rooms SET roomStatus = ? WHERE roomNo = ? AND branchNo = ?';
        const newRoomStatus = (roomType === 'S' ? 'Occupied' : roomStatus === 'Partially Occupied' ? 'Occupied' : 'Partially Occupied');
        await connection.query(updateRoomStatusQuery, [newRoomStatus, roomNo, branchNo]);


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
