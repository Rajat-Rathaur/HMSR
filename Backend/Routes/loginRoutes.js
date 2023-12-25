const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getHostelite } = require("../Operations/HosteliteOperations");
const loginValidations = require("../Validations/loginValidations");

router.use(express.json());

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

router.post("/", loginValidations, async (req, res) => {
    try {
        const hosteliteData = req.body;

        if (hosteliteData.h_id.startsWith('H')) {
            hosteliteData.h_id = hosteliteData.h_id.substring(1);
            const result = await getHostelite(hosteliteData.h_id, hosteliteData.password);

            if (!result.success)
                return res.status(401).json({ error: result.error, success: false });

            console.log(result);
            const token = createToken(result.hostelite.h_id);
            return res.status(200).json({ token, success: true, h_id: hosteliteData.h_id });

        } else if (hosteliteData.h_id.startsWith('E')) {
            hosteliteData.h_id = hosteliteData.h_id.substring(1);
            return res.status(500).json({ error: "EMPLOYEE WORK IN PROGRESS", success: false });
        }
        else {
            return res.status(400).json({ error: "Invalid ID Type", success: false });
        }

    } catch (error) {
        res.status(500).json({
            error: "An internal server error occurred while logging in: " + error.message,
            success: false,
        });
    }
});


module.exports = router;
