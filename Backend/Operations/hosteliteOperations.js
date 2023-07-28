const connection = require('../Connections/connect.js');

async function addHostelite(hosteliteData) {
    try {
        const existsQuery = 'SELECT * FROM hostelites WHERE Email_id = ?';
        const [existingHostelite] = await connection.query(existsQuery, hosteliteData.Email_id);

        if (existingHostelite.length > 0) {
            return { error: "Hostelite EmailId already exists", success: false };
        }
        const query = 'INSERT INTO hostelites SET ?';
        console.log(query, hosteliteData)
        const [result] = await connection.query(query, hosteliteData);

        const insertedId = result.insertId;
        console.log('New hostelite added with H_id:', result.insertId);
        return { insertedId, success: true };

    } catch (err) {
        return { error: "Error adding hostelite : ", success: false, };
    }
}

async function editHostelite(hosteliteData) {
    try {
        const existsQuery = 'SELECT * FROM hostelites WHERE Email_id = ?';
        const [existingHostelite] = await connection.query(existsQuery, hosteliteData.Email_id);

        if (existingHostelite.length > 0) {
            return { error: "Hostelite EmailId already exists", success: false };
        }
        const query = 'INSERT INTO hostelites SET ?';
        console.log(query, hosteliteData)
        const [result] = await connection.query(query, hosteliteData);

        const insertedId = result.insertId;
        console.log('New hostelite added with H_id:', result.insertId);
        return { insertedId, success: true };

    } catch (err) {
        return { error: "Error adding hostelite : ", success: false, };
    }
}

async function getHostelite(hosteliteData) {
    try {
        const existsQuery = 'SELECT * FROM hostelites WHERE Email_id = ?';
        const [existingHostelite] = await connection.query(existsQuery, hosteliteData.Email_id);

        if (existingHostelite.length > 0) {
            return { error: "Hostelite EmailId already exists", success: false };
        }
        const query = 'INSERT INTO hostelites SET ?';
        console.log(query, hosteliteData)
        const [result] = await connection.query(query, hosteliteData);

        const insertedId = result.insertId;
        console.log('New hostelite added with H_id:', result.insertId);
        return { insertedId, success: true };

    } catch (err) {
        return { error: "Error adding hostelite : ", success: false, };
    }
}


module.exports = addHostelite;

