const express = require("express");
const router = express.Router();

const { addHostelite, getHostelite, updateHostelite, updatedHostelitePassword } = require("../Operations/HosteliteOperations");
const addHosteliteValidations = require("../Validations/HosteliteValidations/addHosteliteValidations");
const requireAuth = require("../Middlewares/reqAuth");

router.use(express.json());

router.post("/addHostelite", addHosteliteValidations, async (req, res) => {
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

router.get('/getHostelite', requireAuth, async (req, res) => {
    try {
        const userId = req.id;
        const user = await getHostelite(userId)
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({
            error: "An internal server error occurred while fetching the user details: " + error.message,
            success: false,
        });
    }
});

router.put('/updateHostelite', requireAuth, async (req, res) => {
    const userId = req.id;
    const hosteliteData = req.body
    try {
        const updatedHostelite = await updateHostelite(userId, hosteliteData);

        if (updatedHostelite.success) {
            res.status(200).json(updatedHostelite);
        }
        else {
            res.status(400).json({ error: updatedHostelite.error, success: false });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "An internal server error occurred while updating the user details: " + error.message,
            success: false,
        });
    }
});

router.put('/updatePassword', requireAuth, async (req, res) => {
    const userId = req.id;
    const hosteliteData = req.body;
    try {
        const updatedHostelite = await updatedHostelitePassword(userId, hosteliteData);

        if (updatedHostelite.success) {
            res.status(200).json({ message: "Password updated successfully" });
        }
        else {
            res.status(400).json({ error: updatedHostelite.error, success: false });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "An internal server error occurred while updating the user details: " + error.message,
            success: false,
        });
    }
});


//  ~ HOSTELITE UTILITIES
router.get('/getPaymentDetails', async (req, res) => {
});
router.get('/addRequest', async (req, res) => {
});
router.get('/getHostelite', async (req, res) => {
});


module.exports = router;