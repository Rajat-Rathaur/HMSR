const express = require("express");
const router = express.Router();

const requireAuth = require("../Middlewares/reqAuth");
const addBranchValidations = require("../Validations/BranchValidations/addBranchValidations");
const { addBranch, getBranch, updateBranch } = require("../Operations/BranchOperations");

router.use(express.json());
router.use(requireAuth);

// ~ LATER WILL ADD REQADMIN

router.post("/addBranch", addBranchValidations, async (req, res) => {
    try {
        const branchData = req.body;
        const result = await addBranch(branchData);
        const error = result.error;

        if (result.success) {
            return res.status(200).json({ message: "Branch added successfully!", newBranchId: result.insertedId, success: true });
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

router.get('/getBranch/:b_id', async (req, res) => {
    try {
        const b_id = req.params.b_id;
        const branch = await getBranch(b_id);

        if (branch.success) {
            res.status(200).json(branch);
        } else {
            res.status(404).json({ error: "Branch not found with the provided B_id.", success: false });
        }
    } catch (error) {
        res.status(500).json({ error: "An internal server error occurred while fetching the branch.", success: false });
    }
});


router.put('/updateBranch/:b_id', async (req, res) => {
    try {
        const b_id = req.params.b_id;

        const branchUpdatedData = req.body;
        const updatedBranch = await updateBranch(b_id, branchUpdatedData);

        if (updatedBranch.success) {
            res.status(200).json({ message: "Branch updated successfully!", branch: updatedBranch.branch, success: true });
        } else {
            res.status(400).json({ error: "Error updating branch.", success: false });
        }
    } catch (error) {
        res.status(500).json({ error: "An internal server error occurred while updating the branch.", success: false });
    }
});

module.exports = router;

