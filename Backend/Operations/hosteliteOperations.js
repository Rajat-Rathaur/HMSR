const connection = require('../Connections/connect');
const bcrypt = require("bcrypt");

async function addHostelite(hosteliteData, admissionData, hosteliteDependentData) {

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
        const [rows] = await connection.query('SELECT r_id FROM rooms WHERE roomNo = ? AND branchNo = ?', [roomNo, branchNo]);
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

        // Adding hNo to h_dependent
        hosteliteDependentData.hNo = insertedHostelite.insertId;

        // Insert the new h_dependent into table
        const insertHosteliteDependentQuery = 'INSERT INTO h_dependents  SET ?';
        await connection.query(insertHosteliteDependentQuery, hosteliteDependentData);

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

async function checkHosteliteCredentials(h_id, password) {
    const [rows] = await connection.query('SELECT password FROM hostelites WHERE h_id = ?', [h_id]);
    if (rows.length === 0)
        return { error: "Hostelite not found with the provided h_id.", success: false };

    const hashedPasswordFromDatabase = rows[0].password;
    const isPasswordValid = await bcrypt.compare(password, hashedPasswordFromDatabase);

    if (!isPasswordValid)
        return { error: "Incorrect ID or password", success: false };

    return { success: true };
}

async function deleteHostelite(h_id) {
    try {
        await connection.query('START TRANSACTION');

        // Get information about the hostelite Details before deletion
        const [existingBelongsToDetails] = await connection.query('SELECT rNo FROM belongs_to WHERE hNo = ?', [h_id]);
        if (existingBelongsToDetails.length === 0) {
            // Rollback the transaction if details not found
            await connection.query('ROLLBACK');
            return { error: "Hostelite details not found with the provided H_id.", success: false };
        }

        // Delete hostelite and belongs_to entries
        await connection.query('DELETE FROM hostelites WHERE h_id = ?', [h_id]);
        await connection.query('DELETE FROM h_dependents WHERE hNo = ?', [h_id]);
        await connection.query('DELETE FROM belongs_to WHERE hNo = ?', [h_id]);

        // Get room details based on the belongs_to relationship
        const r_id = existingBelongsToDetails[0].rNo;
        const [existingRoom] = await connection.query('SELECT * FROM rooms WHERE r_id = ?', [r_id]);

        const roomStatus = existingRoom[0].roomStatus;
        const roomType = existingRoom[0].roomType;
        const roomNo = existingRoom[0].roomNo;
        const branchNo = existingRoom[0].branchNo;

        // Update room status based on room type and occupancy
        const updateRoomStatusQuery = 'UPDATE rooms SET roomStatus = ? WHERE roomNo = ? AND branchNo = ?';
        const newRoomStatus = roomType === 'S' ? 'Empty' : (roomStatus === 'Partially Occupied' ? 'Empty' : 'Partially Occupied');
        await connection.query(updateRoomStatusQuery, [newRoomStatus, roomNo, branchNo]);

        
        await connection.query('COMMIT');
        console.log(`Hostelite with h_id ${h_id} deleted successfully.`);
        return { success: true };
    } catch (err) {
        await connection.query('ROLLBACK');
        console.error('Error deleting hostelite details:', err);
        return { error: "An error occurred while deleting hostelite details.", success: false };
    }
}

async function getHostelite(h_id) {
    try {

        const [existingHostelite] = await connection.query(
            `
            SELECT 
            hostelites.h_id,
            hostelites.name AS hostelite_name,
            hostelites.email_id,
            hostelites.phone_no,
            hostelites.gender,
            hostelites.dob,
            hostelites.work,
            hostelites.state AS hostelite_state,
            hostelites.city AS hostelite_city,
            hostelites.street AS hostelite_street,
            hostelites.pincode AS hostelite_pincode,
            
            branch.b_id,
            branch.b_name,
            branch.mgr_id,
            
            belongs_to.rNo,
            belongs_to.bedNumber,
            belongs_to.dateOfJoin,
            belongs_to.dateOfExit,
            
            h_dependents.name AS h_dependents_name,
            h_dependents.phone_no AS h_dependents_phone_no,
            h_dependents.relationship AS h_dependents_relationship,
            
            employee.name AS mgr_name,
            employee.phone_no AS mgr_phone_no
        FROM 
            hostelites
        LEFT JOIN 
            belongs_to ON hostelites.h_id = belongs_to.hNo
        LEFT JOIN 
            h_dependents ON hostelites.h_id = h_dependents.hNo
        LEFT JOIN 
            rooms ON belongs_to.rNo = rooms.r_id
        LEFT JOIN 
            branch ON rooms.branchNo = branch.b_id
        LEFT JOIN 
            employee ON branch.mgr_id = employee.e_id
        WHERE 
            hostelites.h_id = ?;`,
            [h_id]
        );

        if (existingHostelite.length === 0) {
            return { error: "Hostelite not found with the provided H_id.", success: false };
        } else {
            return { hostelite: existingHostelite[0], success: true };
        }

    } catch (err) {
        console.error('Error retrieving hostelite details:', err);
        return { error: "An error occurred while retrieving hostelite details.", success: false };
    }
}

async function updateHostelite(h_id, hosteliteData) {
    try {
        // ! CHECK 1 : NEW EMAIL OR PHONE_NO SHOULD NOT BELONG TO OTHER EXISTING HOSTELITES
        const [existingHostelite] = await connection.query(
            'SELECT * FROM hostelites WHERE (email_id = ? OR phone_no = ?) AND h_id != ?', [hosteliteData.email_id, hosteliteData.phone_no, h_id]
        );
        if (existingHostelite.length > 0) {
            return { error: "Email_id or Phone no already exist for Other User", success: false };
        }

        // ! CHECK 2:  HOSTELITE WITH H_ID EXIST
        const [hostelite] = await connection.query(
            'SELECT * FROM hostelites WHERE H_id = ?', [h_id]
        );
        if (hostelite.length === 0) {
            return { error: "Hostelite not found with the provided h_id.", success: false };

        } else {
            let updateQuery = 'UPDATE hostelites SET ';
            const updateValues = [];

            // ! CHECK 3:  HOSTELITE PASSWORD CANT BE UPDATED HERE 
            for (const key in hosteliteData) {
                if (key !== 'password') {
                    updateQuery += `${key} = ?, `;
                    updateValues.push(hosteliteData[key]);
                }
            }

            updateQuery = updateQuery.slice(0, -2); // Remove the last comma and space
            updateQuery += ' WHERE H_id = ?';
            updateValues.push(h_id);

            await connection.query(updateQuery, updateValues);

            const [updatedHostelite] = await connection.query(
                'SELECT * FROM hostelites WHERE H_id = ?', [h_id]
            );

            delete updatedHostelite[0].password;
            return { hostelite: updatedHostelite[0], success: true };
        }

    } catch (err) {
        console.error('Error updating hostelite:', err);
        return { error: "An error occurred while updating hostelite.", success: false };
    }
}

async function updatedHostelitePassword(h_id, hosteliteData) {
    try {
        // ! CHECK 1: CHECK IF THE OLD PASSWORD MATCHES BEFORE UPDATING
        const [hostelite] = await connection.query(
            'SELECT * FROM hostelites WHERE H_id = ?', [h_id]
        );

        if (hostelite.length === 0) {
            return { error: "Hostelite not found with the provided h_id.", success: false };
        } else {
            const isOldPasswordMatch = await bcrypt.compare(hosteliteData.oldPassword, hostelite[0].password);
            if (!isOldPasswordMatch) {
                return { error: "Old password does not match.", success: false };
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(hosteliteData.newPassword, salt);

            let updatePassQuery = 'UPDATE hostelites SET password = ? WHERE H_id = ?';
            await connection.query(updatePassQuery, [hashedPassword, h_id]);
            return { success: true };
        }
    } catch (err) {
        console.error('Error updating hostelite Password: ' + err);
        return { error: "An error occurred while updating hostelite Password.", success: false };
    }
}

module.exports = { checkHosteliteCredentials, addHostelite, getHostelite, updateHostelite, updatedHostelitePassword, deleteHostelite };


