

// UPdateWage of Employeee
// check students fees
// give student notice

// Add Room
const connection = require('../Connections/connect.js');

async function addRoom(roomNo, roomType, branchNo) {
    try {
        // Check if the room already exists with the provided roomNo
        const existsQuery = 'SELECT * FROM rooms WHERE roomNo = ? AND branchNo = ?';
        const [existingRoom] = await connection.query(existsQuery, [roomNo, branchNo]);

        if (existingRoom.length > 0) {
            return { error: "Room with the provided roomNo already exists.", success: false };
        }

        // Insert the new room data
        const query = 'INSERT INTO rooms (roomNo, branchNo, roomType, roomStatus) VALUES (?, ?, ?, ?)';
        const roomStatus = 'Empty'; // Assuming that the new room is initially empty
        const [result] = await connection.query(query, [roomNo, branchNo, roomType, roomStatus]);

        const insertedRows = result.affectedRows;
        console.log('New room added to rooms table:', insertedRows, 'row(s) inserted');
        return { insertedRows, success: true };
    } catch (err) {
        return { error: `Error adding room data: ${err}`, success: false };
    }
}



module.exports = { addRoom }
