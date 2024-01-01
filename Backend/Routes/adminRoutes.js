const express = require("express");
const router = express.Router();

const { addRoom } = require("../Operations/AdminOperations");

// ~ LATER WILL ADD REQ ADMIN, ADD ROOM VALIDATION

router.post('/addRoom', async (req, res) => {
    try {
        const { roomNo, roomType, branchNo } = req.body;

        const result = await addRoom(roomNo, roomType, branchNo);

        if (result.success) {
            res.status(200).json({ message: "Room added successfully!", success: true });
        } else {
            res.status(409).json({ error: result.error, success: false });
        }
    } catch (error) {
        res.status(500).json({ error: "An internal server error occurred while adding the room.", success: false });
    }
});

module.exports = router;