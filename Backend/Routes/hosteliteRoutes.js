const express = require("express");
const router = express.Router();

const requireAuth = require("../Middlewares/reqAuth");
const addHosteliteValidations = require("../Validations/admissionDataValidations/addHosteliteValidations");
const { addHostelite, getHostelite, updateHostelite, updatedHostelitePassword, deleteHostelite } = require("../Operations/HosteliteOperations");

router.use(express.json());

router.post("/addHostelite", addHosteliteValidations, admissionDataValidations, async (req, res) => {
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

router.get('/getHostelite', requireAuth, async (req, res) => {
    try {
        const userId = req.id;
        console.log(userId);
        const user = await getHostelite(userId)
        return res.status(200).json({ data: user.hostelite, success: true });

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

router.post('/deleteHostelite', async (req, res) => {
    const id = req.body.id;
    try {
        const result = await deleteHostelite(h_id);

        if (result.success) {
            // Hostelite deleted successfully
            res.status(200).json({ message: 'Hostelite deleted successfully.' });
        } else {
            // Error in deleting hostelite
            res.status(404).json({ error: result.error });
        }
    } catch (err) {
        // Internal server error
        console.error('Error in deleteHostelite route:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


//  ~ HOSTELITE UTILITIES
router.get('/getPaymentDetails', async (req, res) => {
});
router.get('/addRequest', async (req, res) => {
});

module.exports = router;