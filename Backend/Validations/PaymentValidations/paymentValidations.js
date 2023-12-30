const addPaymentsValidations = (req, res, next) => {
    const amount = req.body.amount;

    if (!Number.isInteger(amount) || amount <= 0) {
        return res.status(400).json({
            error: "Amount must be a positive integer.",
            success: false
        });
    }

    next();
};

module.exports = addPaymentsValidations;
