const express = require("express");
const router = express.Router();
const requireAuth = require("../Middlewares/reqAuth");

const { getMessData, addMessDays, getLaundryWeight, addLaundryWeight } = require("../Operations/servicesOperations");
const addMessDaysValidations = require("../Validations/ServiceValidations/messDaysValidations");
const addLaundryWeightValidation = require("../Validations/ServiceValidations/laundryWeightValidations");

router.use(requireAuth);

// Your existing route
router.post('/mess', addMessDaysValidations, async (req, res) => {
    const { daysToAdd, amount } = req.body;
    const hNo = req.id;

    try {
        const result = await addMessDays(hNo, daysToAdd, amount);

        if (!result.success)
            return res.status(404).json({ error: result.error });

        return res.status(200).json(result);

    } catch (err) {
        console.error('Error adding days:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/mess', async (req, res) => {
    const hNo = req.id;
    try {
        const result = await getMessData(hNo);

        if (!result.success)
            return res.status(404).json({ error: result.error });

        return res.status(200).json(result);
    } catch (err) {
        console.error('Error getting mess data:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/laundry', async (req, res) => {
    const hNo = req.id;

    try {
        const result = await getLaundryWeight(hNo);

        if (!result.success)
            return res.status(404).json({ error: result.error });

        return res.status(200).json(result);
    } catch (err) {
        console.error('Error in get laundry weight route:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/laundry', addLaundryWeightValidation, async (req, res) => {
    const hNo = req.id;
    const { weightToAdd, amount } = req.body;

    try {
        const result = await addLaundryWeight(hNo, weightToAdd, amount);

        if (!result.success)
            return res.status(404).json({ error: result.error });

        res.status(200).json(result);

    } catch (err) {
        console.error('Error in add laundry weight route:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;
