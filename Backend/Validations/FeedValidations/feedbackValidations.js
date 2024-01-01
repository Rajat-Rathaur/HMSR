const addFeedbackValidations = (req, res, next) => {
    const { rating, description } = req.body;

    if (!Number.isInteger(Number(rating)) || rating < 0.5 || rating > 5) {
        return res.status(400).json({ error: 'Rating must be an integer between 1 and 5', success: false });
    }

    if (description && description.trim() === '') {
        return res.status(400).json({ error: 'Description is required', success: false });
    }
    
    next();
};

module.exports = addFeedbackValidations;
