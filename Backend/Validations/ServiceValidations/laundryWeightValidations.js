const addLaundryWeightValidation = (req, res, next) => {
    const { weightToAdd } = req.body;

    if (isNaN(parseFloat(weightToAdd)) || !isFinite(weightToAdd)) {
        return res.status(400).json({ error: 'Invalid request parameters. Please provide valid hNo and weightToAdd.' });
    }

    next();
};

module.exports = addLaundryWeightValidation;
