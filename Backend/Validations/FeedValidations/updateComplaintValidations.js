const updateComplaintValidations = (req, res, next) => {
    const { status, response } = req.body;

    if (!status || !['Ongoing', 'Resolved'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status in the request body.' });
    }

    if (response && typeof response !== 'string') {
        return res.status(400).json({ error: 'Invalid response in the request body.' });
    }
    
    next();
};

// Export the middleware
module.exports = updateComplaintValidations;
