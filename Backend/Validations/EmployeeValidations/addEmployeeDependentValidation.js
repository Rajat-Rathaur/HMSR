const validator = require("validator");

const addEmployeeDependentValidations = async (req, res, next) => {
    try {
        const { name,relation , state, city, street, pincode, phone_no } = req.body.employeeDependentData;
      

        if (!name || !relation ||  !state || !city || !street || !pincode || !phone_no) {
            return res.status(400).json({ error: "Missing required fields.", success: false });
        }

      

        else if (typeof name !== 'string'|| typeof state !== 'string' || typeof city !== 'string' || typeof street !== 'string') {
            return res.status(400).json({ error: "Invalid data types for some fields.", success: false });
        }

   

        else if (!Number.isInteger(pincode) || pincode < 10000 || pincode > 999999) {
            return res.status(400).json({ error: "Invalid pincode. pincode must be a 6-digit integer.", success: false });
        }

        
        else {
            next();
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error occurred while validating fields while adding the new Hostelite dependent.", success: false });

    }
}


module.exports = addEmployeeDependentValidations;
