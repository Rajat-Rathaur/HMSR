const addComplaintValidations = (req, res, next) => {
    const { issue, priority, description } = req.body;

    // const validIssues = ['Maintenance', 'Security', 'Room Condition', 'Noise Complaint'];
    // if (!issue || !validIssues.includes(issue)) {
    //     return res.status(400).json({ error: 'Invalid or missing issue in the request body.' });
    // }

    // if (!priority || (priority !== 'High' && priority !== 'Regular')) {
    //     return res.status(400).json({ error: 'Invalid or missing priority in the request body.' });
    // }

    // if (description && typeof description !== 'string') {
    //     return res.status(400).json({ error: 'Invalid or missing description in the request body.' });
    // }

    next();
};

module.exports = addComplaintValidations;
