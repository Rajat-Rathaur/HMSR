const express = require("express");
const router = express.Router();

const addBranchValidations = require("../Validations/BranchValidations/addBranchValidations");
const { addNewAdmission } = require("../Operations/AdmissionOperation");
const addHosteliteValidations = require("../Validations/admissionDataValidations/addHosteliteValidations");
const admissionDataValidations = require("../Validations/admissionDataValidations/admissionDataValidations");
const bcrypt = require('bcrypt');

router.use(express.json());

// ~ LATER WILL ADD REQ ADMIN
router.post("/addNewAdmission", addHosteliteValidations, admissionDataValidations, async (req, res) => {
    try {
        const { hosteliteData, admissionData, hosteliteDependentData } = req.body;

        const password = "Temp@123";
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        hosteliteData.password = hash;
        
        const result = await addNewAdmission(hosteliteData, admissionData, hosteliteDependentData);
        const error = result.error;

        if (result.success) {
            return res.status(200).json(result);
        } else {
            return res.status(409).json({ error, success: false });
        }

    } catch (error) {
        res.status(500).json({
            error: "An internal server error occurred while adding the branch: " + error.message,
            success: false,
        });
    }
});

module.exports = router;