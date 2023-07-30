const connection = require('../Connections/connect.js');
const bcrypt = require("bcrypt");

async function addHostelite(hosteliteData) {
    try {
        const existsQuery = 'SELECT * FROM hostelites WHERE email_id = ? OR phone_no = ?';
        const [existingHostelite] = await _query(existsQuery, [hosteliteData.email_id, hosteliteData.phone_no]);

        if (existingHostelite.length > 0) {
            if (existingHostelite.some((hostelite) => hostelite.email_id === hosteliteData.email_id)) {
                return { error: "Hostelite with the provided EmailId already exists", success: false };
            }

            if (existingHostelite.some((hostelite) => hostelite.phone_no === hosteliteData.phone_no)) {
                return { error: "Hostelite with the provided phone number already exists", success: false };
            }
        }

        else {
            const salt = await genSalt(10);
            const password = "Temp@123";
            hosteliteData.password = await hash(password, salt);

            const query = 'INSERT INTO hostelites SET ?';
            const [result] = await _query(query, hosteliteData);
            console.log(result);

            const insertedId = result.insertId;
            console.log('New hostelite added with H_id:', result.insertId);
            return { insertedId, success: true };
        }

    } catch (err) {
        return { error: `Error adding hostelite : ${err}`, success: false, };
    }
}

async function editHostelite(hosteliteData) {
    try {
        const existsQuery = 'SELECT * FROM hostelites WHERE email_id = ?';
        const [existingHostelite] = await _query(existsQuery, hosteliteData.email_id);

        if (existingHostelite.length > 0) {
            return { error: "Hostelite EmailId already exists", success: false };
        }
        const query = 'INSERT INTO hostelites SET ?';
        console.log(query, hosteliteData)
        const [result] = await _query(query, hosteliteData);

        const insertedId = result.insertId;
        console.log('New hostelite added with H_id:', result.insertId);
        return { insertedId, success: true };

    } catch (err) {
        return { error: "Error adding hostelite : ", success: false, };
    }
}


async function getHostelite(h_id) {
    try {
        const [existingHostelite] = await connection.query(
            'SELECT * FROM hostelites WHERE H_id = ?', [h_id]
        );
        if (existingHostelite.length === 0) {
            return { error: "Hostelite not found with the provided h_id.", success: false };
        } else {
            return { hostelite: existingHostelite[0], success: true };
        }

    } catch (err) {
        console.error('Error retrieving hostelite:', err);
        return { error: "An error occurred while retrieving hostelite.", success: false };
    }
}



module.exports = { addHostelite, getHostelite };


