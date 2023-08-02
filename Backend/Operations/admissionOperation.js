const connection = require('../Connections/connect.js');

async function addmision(rNo,.. ) {
    // add hostelite in the room no along with it change the room table update the room table as well
    try {
        const existsQuery = 'SELECT * FROM belongs_to WHERE hNo = ? AND rNo = ? AND bNo = ?';
        const [existingBelongsTo] = await connection.query(existsQuery, [belongsToData.hNo, belongsToData.rNo, belongsToData.bNo]);

        if (existingBelongsTo.length > 0) {
            return { error: "Belongs_to data with the provided hNo, rNo, and bNo already exists", success: false };
        } else {
            const query = 'INSERT INTO belongs_to SET ?';
            const [result] = await connection.query(query, belongsToData);
            console.log(result);

            const insertedRows = result.affectedRows;
            console.log('New data added to belongs_to table:', insertedRows, 'row(s) inserted');
            return { insertedRows, success: true };
        }

    } catch (err) {
        return { error: `Error adding belongs_to data: ${err}`, success: false };
    }
}


module.exports = { addBelongsTo }
