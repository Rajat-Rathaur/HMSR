const addMessDaysValidation = (req, res, next) => {
    const { daysToAdd, amount } = req.body;

    if (daysToAdd === undefined || daysToAdd === null || isNaN(daysToAdd)) {
        return res.status(400).json({ error: 'Invalid or missing daysToAdd in the request body.' });
    }

    if (amount === undefined || amount === null || isNaN(amount) || amount <= 0) {
        return res.status(400).json({ error: 'Invalid or missing amount in the request body.' });
    }

    req.body.daysToAdd = Math.abs(parseInt(daysToAdd));
    req.body.amount = parseFloat(amount);

    next();
};

// Export the middleware
module.exports = addMessDaysValidation;
