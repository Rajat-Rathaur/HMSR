const express = require("express");
const router = express.Router();
const { getPaymentsHostelite, getPaymentsAdmin, addFeesPayment } = require("../Operations/paymentOperations");
const requireAuth = require("../Middlewares/reqAuth");
const addPaymentsValidations = require("../Validations/PaymentValidations/paymentValidations");

router.get('/getPayment', requireAuth, async (req, res) => {
    try {
        const h_id = req.id;
        const result = await getPaymentsHostelite(h_id); 4
        console.log(result);
        if (result.success)
            res.status(200).json({ data: result.payments, success: true });
        else
            res.status(404).json({ error: result.error, success: false });

    } catch (error) {
        res.status(500).json({
            error: "An internal server error occurred while fetching hostelite payments: " + error.message,
            success: false,
        });
    }
});

router.get('/getPaymentAdmin', requireAuth, async (req, res) => {
    try {
        const e_id = req.id; // Assuming the employee ID is available in req.user

        const result = await getPaymentsAdmin(e_id);

        if (result.success) {
            res.status(200).json({
                payments: result.payments,
                success: true,
            });
        } else {
            res.status(404).json({
                error: result.error,
                success: false,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "An internal server error occurred while fetching the payments details: " + error.message,
            success: false,
        });
    }
});

router.post('/addFeesPayment', addPaymentsValidations, requireAuth, async (req, res) => {
    try {
        const { amount } = req.body;
        const from_user_id = req.id; // Assuming req.id contains the user ID

        const result = await addFeesPayment(amount, from_user_id);

        if (result.success) {
            res.status(200).json({ payment_id: result.payment_id, success: true });
        } else {
            res.status(500).json({ error: result.error, success: false });
        }
    } catch (error) {
        res.status(500).json({
            error: 'An internal server error occurred while adding fees payment: ' + error.message,
            success: false,
        });
    }
});


/* 1. getPaymentsHostelite: select  (req for payments table frontend payments page)

payment_id INT AUTO_INCREMENT PRIMARY KEY,
from_user_id INT NOT NULL,
amount DECIMAL(10, 2) NOT NULL,
payment_date DATE NOT NULL,
payment_category ENUM('Mess', 'Laundry', 'Fees', 'Wages', 'Others') NOT NULL,

where from_user_id = req.id


2. getPaymentsAdmin: select *  (requires at admin side frontend)

where from_user_id in belongsto table has b_id = manager.b_id


3. addFeesPayment : (requires in payments page frontend)
body : amount
from_user_id = req.id
date = curr date
type = 'Fees' */

module.exports = router;