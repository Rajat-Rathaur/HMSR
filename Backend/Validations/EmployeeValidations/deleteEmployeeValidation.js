const deleteEmployeeValidations = (req, res, next) => {
    const id = req.body.id;

    if (!id || !id.match(/^[E]/)) {
        return res.status(400).json({ error: 'Missing or invalid parameter' });
    }

    next();
};

module.exports = deleteEmployeeValidations;
