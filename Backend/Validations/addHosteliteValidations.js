const validator = require("validator");

const addHosteliteValidations = async (req, res, next) => {
    try {
        const { F_name, gender, Email_id, DOB, WORK, Age, State, city, street, Pincode } = req.body;
        const dobDate = new Date(DOB);

        if (!F_name || !gender || !DOB || !Age || !State || !city || !street || !Pincode || !WORK) {
            return res.status(400).json({ error: "Missing required fields.", success: false });
        }
        else if (Email_id && !validator.isEmail(Email_id)) {
            return res.status(400).json({ error: "Invalid email address.", success: false });
        }
        else if (typeof F_name !== 'string' || typeof gender !== 'string' || typeof DOB !== 'string' || typeof State !== 'string' || typeof city !== 'string' || typeof street !== 'string') {
            return res.status(400).json({ error: "Invalid data types for some fields.", success: false });
        }
        else if (gender !== 'Male' && gender !== 'Female' && gender !== 'other') {
            return res.status(400).json({ error: "Invalid gender value. Allowed values are 'Male', 'Female', or 'other'.", success: false });
        }
        else if (!Number.isInteger(Age) || Age <= 0) {
            return res.status(400).json({ error: "Invalid age value. Age must be a positive integer.", success: false });
        }
        else if (!Number.isInteger(Pincode) || Pincode < 100000 || Pincode > 999999) {
            return res.status(400).json({ error: "Invalid pincode. Pincode must be a 6-digit integer.", success: false });
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

const addHContactValidations = (req, res, next) => {
    // Your logic for the second function here
    // For example:
    res.status(200).json({ message: "This is another function.", success: true });
};


module.exports = { addHosteliteValidations, addHContactValidations };
