const loginValidations = async (req, res, next) => {
    try {
        const { password, h_id } = req.body;

        if (password == null || h_id == null) {
            res.status(400).json({ error: "The request body doesn't contain h_id or password", success: false, });
        }
        else if (password.length <= 7) {
            res.status(400).json({ error: "Password must be at least 8 characters long", success: false });
        }
        else {
            next();
        }
    } catch (err) {
        res.status(500).json({ error: `Internal server error occurred while validating fields during logging in. ${err}`, success: false });
    }
}

module.exports = loginValidations