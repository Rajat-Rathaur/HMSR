const connection = require('../Connections/connect');

async function addBranch(branchData) {
    try {
        const existsQuery = 'SELECT * FROM branch WHERE email_id = ? OR phone_no = ?';
        const [existingBranch] = await connection.query(existsQuery, [branchData.email_id, branchData.phone_no]);

        if (existingBranch.length > 0) {
            if (existingBranch.some((branch) => branch.email_id === branchData.email_id)) {
                return { error: "Branch with the provided EmailId already exists", success: false };
            }

            if (existingBranch.some((branch) => branch.phone_no === branchData.phone_no)) {
                return { error: "Branch with the provided phone number already exists", success: false };
            }
        } else {
            const query = 'INSERT INTO branch SET ?';
            const [result] = await connection.query(query, branchData);
            console.log(result);

            const insertedId = result.insertId;
            console.log('New branch added with B_id:', result.insertId);
            return { insertedId, success: true };
        }

    } catch (err) {
        return { error: `Error adding branch: ${err}`, success: false };
    }
}

async function getBranch(b_id) {
    try {
        const [existingBranch] = await connection.query(
            'SELECT * FROM branch WHERE B_id = ?', [b_id]
        );
        if (existingBranch.length === 0) {
            return { error: "Branch not found with the provided B_id.", success: false };
        } else {
            return { branch: existingBranch[0], success: true };
        }
    } catch (err) {
        return { error: "An error occurred while retrieving branch.", success: false };
    }
}

async function updateBranch(b_id, branchData) {
    try {

        const [existingBranch] = await connection.query(
            'SELECT * FROM branch WHERE B_id = ?', [b_id]
        );

        if (existingBranch.length === 0) {
            return { error: "Branch not found with the provided B_id.", success: false };
        } else {

            const existsQuery = 'SELECT * FROM branch WHERE (email_id = ? OR phone_no = ?) AND B_id != ?';
            const [existingBranches] = await connection.query(existsQuery, [branchData.email_id, branchData.phone_no, b_id]);
            if (existingBranches.length > 0) {
                if (existingBranches.some(branch => branch.email_id === branchData.email_id)) {
                    return { error: "Branch with the provided EmailId already exists.", success: false };
                }

                if (existingBranches.some(branch => branch.phone_no === branchData.phone_no)) {
                    return { error: "Branch with the provided phone number already exists.", success: false };
                }
            }

            const updateFields = {};
            if (branchData.b_name) updateFields.b_name = branchData.b_name;
            if (branchData.mgr_id) updateFields.mgr_id = branchData.mgr_id;
            if (branchData.state) updateFields.state = branchData.state;
            if (branchData.city) updateFields.city = branchData.city;
            if (branchData.street) updateFields.street = branchData.street;
            if (branchData.pincode) updateFields.pincode = branchData.pincode;
            if (branchData.email_id) updateFields.email_id = branchData.email_id;
            if (branchData.phone_no) updateFields.phone_no = branchData.phone_no;

            const updateQuery = 'UPDATE branch SET ? WHERE B_id = ?';
            console.log(updateQuery, [updateFields, b_id]);
            const updatedData = await connection.query(updateQuery, [updateFields, b_id]);
            console.log(updatedData);

            return { success: true };
        }
    } catch (err) {
        return { error: "An error occurred while updating branch.", success: false };
    }
}

// DELETE AND MOVE TO LOG FILE


module.exports = { addBranch, getBranch, updateBranch }