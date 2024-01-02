const validator = require("validator");

const updateHosteliteValidations = async (req, res, next) => {
    try {
        const { name, gender, email_id, dob, work, state, city, street, pincode, phone_no, h_dependents_name, h_dependents_phone_no, h_dependents_relationship } = req.body;
        const dobDate = new Date(dob);
        // console.log(name, gender, email_id, dob, work, state, city, street, pincode, phone_no, h_dependents_name, h_dependents_phone_no, h_dependents_relationship)

        if (!name || !gender || !dob || !state || !city || !street || !pincode || !work || !phone_no || !h_dependents_name || !h_dependents_phone_no || !h_dependents_relationship) {
            return res.status(400).json({ error: "Missing required fields.", success: false });
        }

        else if (email_id && !validator.isEmail(email_id)) {
            return res.status(400).json({ error: "Invalid email address.", success: false });
        }

        else if (typeof name !== 'string' || typeof gender !== 'string' || typeof dob !== 'string' || typeof state !== 'string' || typeof city !== 'string' || typeof street !== 'string' || typeof h_dependents_name !== 'string' || typeof h_dependents_relationship !== 'string') {
            return res.status(400).json({ error: "Invalid data types for some fields.", success: false });
        }

        else if (gender !== 'Male' && gender !== 'Female' && gender !== 'Others') {
            return res.status(400).json({ error: "Invalid gender value. Allowed values are 'Male', 'Female', or 'Others'.", success: false });
        }

        else if (parseInt(pincode) < 10000 || parseInt(pincode) > 999999) {
            return res.status(400).json({ error: "Invalid pincode. pincode must be a 6-digit integer.", success: false });
        }

        else if (!dobDate || dobDate >= new Date()) {
            return res.status(400).json({ error: "Invalid date of birth. Date of birth must be a valid date in the past.", success: false });
        }

        else {
            next();
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error occurred while validating fields while adding the new Hostelite.", success: false });

    }
}


module.exports = updateHosteliteValidations;
