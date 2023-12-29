const connection = require("../Connections/connect");

async function getComplaints(hno) {
    try {
        const [result] = await connection.query('SELECT * FROM complaint WHERE hNo = ? ORDER BY start_date DESC', [hno]);

        if (result.length > 0)
            return { success: true, data: result };
        else
            return { success: true, data: [] };

    } catch (err) {
        console.error('Error getting complaints:', err);
        return { success: false, error: 'Internal server error' };
    }
}

async function addComplaint(hNo, issue, priority, description) {
    try {

        await connection.query('START TRANSACTION');

        const start_date = new Date();

        // Insert into the complaint table
        const [result] = await connection.query(
            'INSERT INTO complaint (hNo, issue, priority, description, status, start_date) VALUES (?, ?, ?, ?, ?, ?)',
            [hNo, issue, priority, description, 'Pending', start_date]
        );

        if (result.affectedRows > 0) {
            await connection.query('COMMIT');
            return { success: true, message: 'Complaint added successfully.' };
        } else {
            await connection.query('ROLLBACK');
            return { success: false, error: 'Error adding complaint.' };
        }

    } catch (err) {
        await connection.query('ROLLBACK');
        console.error('Error adding complaint:', err);
        return { success: false, error: 'Internal server error' };
    }
}

async function updateComplaintStatus(c_id, status, response) {
    try {
        await connection.query('START TRANSACTION');
        if (status === 'Ongoing') {
            console.log(status);
            await connection.query('UPDATE complaint SET status = ?, response = ? WHERE c_id = ?', [status, response, c_id]);
        }

        else if (status === 'Resolved') {
            const currentDate = new Date();

            // Update end_date to current date and update response
            await connection.query('UPDATE complaint SET status = ?, end_date = ?, response = ? WHERE c_id = ?',
                [status, currentDate, response, c_id]
            );
        }

        await connection.query('COMMIT');
        return { success: true, message: 'Complaint status updated successfully.' };
    } catch (err) {
        // Rollback the transaction on error
        await connection.query('ROLLBACK');
        console.error('Error updating complaint status:', err);
        return { success: false, error: 'Internal server error' };
    }
}

async function getAllComplaintsByStatus(status) {
    try {
        let query;
        let queryParams;

        if (status === null) {
            query = 'SELECT * FROM complaint ORDER BY start_date DESC';
            queryParams = [];
        } else {
            query = 'SELECT * FROM complaint WHERE status = ? ORDER BY start_date DESC';
            queryParams = [status];
        }

        const [complaints] = await connection.query(query, queryParams);

        return { success: true, data: complaints };
    } catch (err) {
        console.error('Error getting complaints by status:', err);
        return { success: false, error: 'Internal server error' };
    }
}

module.exports = { getComplaints, addComplaint, updateComplaintStatus, getAllComplaintsByStatus };