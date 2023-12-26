// Middleware to validate and check if 'id' (starting with capital 'H') is present in the request body
const deleteHosteliteValidations = (req, res, next) => {
    const id = req.body.id;

    if (!id || !id.match(/^[H]/)) {
        return res.status(400).json({ error: 'Missing or invalid parameter' });
    }

    next();
};

module.exports = deleteHosteliteValidations;
