const validator = require("validator");

const loginValidations = async (req, res, next) => {
    try {

        const { password, h_id } = req.body;

        if (password == null || h_id == null) {
            res.status(400).json({ error: "The request body doesn't contain email or h_id", success: false, });
        }
        else if (password.length < 8) {
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