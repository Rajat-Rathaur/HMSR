const validator = require("validator");

const addBranchValidations = async (req, res, next) => {
    try {
        const { b_name, mgr_id, state, city, street, pincode, email_id, phone_no } = req.body;
        console.log(req.body);

        if (!b_name || !state || !city || !pincode || !email_id || !phone_no || !mgr_id) {
            return res.status(400).json({ error: "Missing required fields.", success: false });
        }

        else if (typeof b_name !== 'string' || typeof state !== 'string' || typeof city !== 'string' || typeof street !== 'string') {
            return res.status(400).json({ error: "Invalid data types for some fields.", success: false });
        }

        else if (email_id && !validator.isEmail(email_id)) {
            return res.status(400).json({ error: "Invalid email address.", success: false });
        }


        else if (!Number.isInteger(pincode) || pincode < 100000 || pincode > 999999) {
            return res.status(400).json({ error: "Invalid pincode. pincode must be a 6-digit integer.", success: false });
        }

        else {
            next();
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error occurred while validating fields while adding the new branch.", success: false });

    }
}

module.exports = addBranchValidations;
