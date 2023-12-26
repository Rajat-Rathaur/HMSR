// MAKE SURE THAT BED NO IS LESS THAN 3 FOR DOUBLE..

const validator = require("validator");

const admissionDataValidations = async (req, res, next) => {
    try {
        const { branchName, roomNo, bedNumber, dateOfJoin, dateOfExit } = req.body.admissionData;

        if (!branchName || !roomNo || !bedNumber || !dateOfJoin) {
            return res.status(400).json({ error: "Missing required fields for admission data.", success: false });
        }

        if (isNaN(roomNo) || isNaN(bedNumber)) {
            return res.status(400).json({ error: "roomNo, and bedNumber must be numeric values.", success: false });
        }

        if (!dateOfJoin || isNaN(new Date(dateOfJoin).getTime())) {
            return res.status(400).json({ error: "Invalid dateOfJoin format. It must be a valid date.", success: false });
        }

        if (dateOfExit && isNaN(new Date(dateOfExit).getTime())) {
            return res.status(400).json({ error: "Invalid dateOfExit format. It must be a valid date.", success: false });
        }
        
        if (bedNumber > 2){
            return res.status(400).json({ error: "Invalid Bed No, must be less than 3", success: false });
        }

        next();

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error occurred while validating fields while adding the new Hostelite.", success: false });

    }
}


module.exports = admissionDataValidations;
