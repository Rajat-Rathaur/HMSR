const express = require('express');
const { getComplaints, addComplaint, updateComplaintStatus, addFeedback } = require('../Operations/feedsOperations');
const requireAuth = require('../Middlewares/reqAuth');
const addComplaintValidations = require('../Validations/FeedValidations.js/AddComplaintValidations');
const updateComplaintValidations = require('../Validations/FeedValidations.js/updateComplaintValidations');

const router = express.Router();
router.use(requireAuth);

router.get('/complaint', async (req, res) => {
  const hid = req.id;

  try {
    const result = await getComplaints(hid);

    if (result.success) {
      return res.status(200).json({ data: result.data, success: true });
    } else {
      return res.status(404).json({ error: 'No complaints found' });
    }
  } catch (err) {
    console.error('Error in get complaints route:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/complaint', addComplaintValidations, async (req, res) => {
  const { issue, priority, description } = req.body;
  const hid = req.id;

  try {
    const result = await addComplaint(hid, issue, priority, description);

    if (result.success) {
      return res.status(201).json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (err) {
    console.error('Error in add complaint route:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/complaint/:c_id', updateComplaintValidations, async (req, res) => {
  const { c_id } = req.params;
  const { status, response } = req.body;

  try {
    const result = await updateComplaintStatus(c_id, status, response);

    if (result.success) {
      return res.status(200).json(result);
    } else {
      return res.status(404).json(result);
    }
  } catch (err) {
    console.error('Error in update complaint status route:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/complaint/:status', async (req, res) => {
  const { status } = req.params;

  try {
    const result = await getAllComplaintsByStatus(status);

    if (result.success) {
      return res.status(200).json(result.data); // Assuming the data property contains the array of complaints
    } else {
      return res.status(404).json({ error: 'No complaints found with the specified status' });
    }
  } catch (err) {
    console.error('Error in get complaints by status route:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/feedback', async (req, res) => {
  try {
    const h_id = req.id;
    const { rating, description } = req.body;

    const result = await addFeedback(h_id, rating, description);
  
    if (result.success)
      res.status(200).json({ message: 'Feedback added successfully', success: true });
    else
      res.status(500).json({ error: result.error, success: false });

  } catch (error) {
    console.error('Error in addFeedback route:', error);
    res.status(500).json({
      error: 'An internal server error occurred while adding feedback: ' + error.message,
      success: false,
    });
  }
});

module.exports = router;