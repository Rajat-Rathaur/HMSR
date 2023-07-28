const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createTables = require("../SQLUtilities/createTables");
const addHostelite = require("../Operations/HosteliteOperations");
const { addHosteliteValidations } = require("../Validations/addHosteliteValidations");

createTables();
router.use(express.json());

router.get("/addHostelite", addHosteliteValidations, async (req, res) => {
    try {
        const hosteliteData = req.body;
        const result = await addHostelite(hosteliteData);
        const error = result.error;

        if (result.success) {
            return res.status(200).json({ message: "Hostelite added successfully!", newHosteliteId: result.insertedId, success: true });
        } else {
            return res.status(409).json({ error, success: false });
        }

    } catch (error) {
        res.status(500).json({
            error: "An internal server error occurred while adding the user: " + error.message,
            success: false,
        });
    }
});





module.exports = router;