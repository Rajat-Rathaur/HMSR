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

module.exports = { addHostelite, getHostelite, updateHostelite, updatedHostelitePassword };


