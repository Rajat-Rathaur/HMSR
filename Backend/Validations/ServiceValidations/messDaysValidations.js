const addMessDaysValidation = (req, res, next) => {
    const { daysToAdd } = req.body;

    if (daysToAdd === undefined || daysToAdd === null || isNaN(daysToAdd)) {
        return res.status(400).json({ error: 'Invalid or missing daysToAdd in the request body.' });
    }

    req.body.daysToAdd = Math.abs(parseInt(daysToAdd));

    next();
};

// Export the middleware
module.exports = addMessDaysValidation;
