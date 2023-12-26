const addLaundryWeightValidation = (req, res, next) => {
    const { weightToAdd, amount } = req.body;

    if (isNaN(parseFloat(weightToAdd)) || !isFinite(weightToAdd) || parseFloat(weightToAdd) <= 0) {
        return res.status(400).json({ error: 'Invalid or missing weightToAdd in the request body.' });
    }

    if (isNaN(parseFloat(amount)) || !isFinite(amount) || parseFloat(amount) <= 0) {
        return res.status(400).json({ error: 'Invalid or missing amount in the request body.' });
    }

    req.body.weightToAdd = Math.abs(parseFloat(weightToAdd));
    req.body.amount = Math.abs(parseFloat(amount));

    next();
};

module.exports = addLaundryWeightValidation;
