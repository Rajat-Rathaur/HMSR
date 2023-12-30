const connection = require('../Connections/connect.js');

/**
 * Retrieves payments for a hostelite by hostelite ID, sorted by date in descending order.
 * @param {number} h_id - Hostelite ID
 * @returns {Object} - Object containing payments || error message
 */
async function getPaymentsHostelite(h_id) {
    try {
        const [paymentsByHostelite] = await connection.query(
            `
            SELECT 
                payments.payment_id,
                payments.from_user_id,
                payments.amount,
                payments.payment_date,
                payments.payment_type,
                payments.to_user_id,
                payments.payment_category,
                hostelites.name AS hostelite_name
            FROM 
                payments
            LEFT JOIN 
                hostelites ON payments.from_user_id = hostelites.h_id
            WHERE 
                hostelites.h_id = ?
            ORDER BY 
                payments.payment_date DESC;
            `,
            [h_id]
        );

        if (paymentsByHostelite.length === 0) {
            return { error: "No payments found for the hostelite with the provided h_id.", success: false };
        } else {
            return { payments: paymentsByHostelite, success: true };
        }

    } catch (err) {
        console.error('Error retrieving hostelite payments:', err);
        return { error: "An error occurred while retrieving hostelite payments.", success: false };
    }
}

async function getPaymentsAdmin(e_id) {
    try {
        // Fetch the manager details using e_id
        console.log('Received e_id:', e_id);
        const [managerDetails] = await connection.query(
            'SELECT * FROM employee WHERE e_id = ? AND designation = "MANAGER"',
            [e_id]
        );

        if (managerDetails.length === 0) {
            return { error: "Manager not found with the provided e_id.", success: false };
        }

        const branchNo = managerDetails[0].bNo;

        // Fetch all payments for hostelites in the same branch as the manager
        const paymentQuery = `
            SELECT 
                payments.payment_id,
                payments.from_user_id,
                payments.amount,
                payments.payment_date,
                payments.payment_type,
                payments.to_user_id,
                payments.payment_category,
                hostelites.name AS hostelite_name
            FROM 
                payments
            LEFT JOIN 
                hostelites ON payments.from_user_id = hostelites.h_id
            LEFT JOIN 
                belongs_to ON hostelites.h_id = belongs_to.hNo
            LEFT JOIN
                rooms ON belongs_to.rNo = rooms.r_id
            WHERE 
                rooms.branchNo = ?`;

        const [paymentsForBranch] = await connection.query(paymentQuery, [branchNo]);

        return { payments: paymentsForBranch, success: true };
    } catch (err) {
        console.error('Error retrieving payments details:', err);
        return { error: "An error occurred while retrieving payments details.", success: false };
    }
}

async function addFeesPayment(amount, from_user_id, date = new Date(), payment_type = "Outgoing", category = 'Fees') {
    try {
        // Assuming your 'payments' table has columns: payment_id, amount, from_user_id, payment_date, payment_type
        const addFeesPaymentQuery = `
            INSERT INTO payments (amount, from_user_id, payment_date, payment_type, payment_category)
            VALUES (?, ?, ?, ?, ?)
        `;

        const [result] = await connection.query(addFeesPaymentQuery, [amount, from_user_id, date, payment_type, category]);

        if (result.affectedRows > 0) {
            console.log('Fees payment added successfully');
            return { payment_id: result.insertId, success: true };
        } else {
            console.error('Error adding fees payment');
            return { error: 'Failed to add fees payment', success: false };
        }
    } catch (err) {
        console.error('Error adding fees payment:', err);
        return { error: 'An error occurred while adding fees payment', success: false };
    }
}


module.exports = { getPaymentsHostelite, getPaymentsAdmin, addFeesPayment }