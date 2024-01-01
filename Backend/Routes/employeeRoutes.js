const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
// const { addEmployee, deleteEmployee, getEmployee } = require("../Operations/employeeOperations");


const addEmployeeValidations = require("../Validations/EmployeeValidations/addEmployeeValidation");
const deleteEmployeeValidations = require("../Validations/EmployeeValidations/deleteEmployeeValidation");
const requireAuth = require("../Middlewares/reqAuth");

router.post("/addEmployee", addEmployeeValidations, async (req, res) => {
    try {
        const { employeeData, admissionData, employeeDependentData } = req.body;

        const password = "Temp@123";
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        employeeData.password = hash;

        const result = await addEmployee(employeeData, admissionData, employeeDependentData);
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

router.delete('/deleteEmployee', requireAuth, deleteEmployeeValidations, async (req, res) => {
    const id = req.body.id;
    const e_id = id.substring(1);
    try {
        const result = await deleteEmployee(e_id);

        if (result.success) {
            res.status(200).json({ message: 'Employee deleted successfully.' });
        } else {
            res.status(404).json({ error: result.error });
        }

    } catch (err) {
        console.error('Error in deleteHostelite route:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/getEmployee', requireAuth, async (req, res) => {
    try {
        const userId = req.id;
        console.log(userId);
        const user = await getEmployee(userId)
        return res.status(200).json({ data: user.employee, success: true });

    } catch (error) {
        res.status(500).json({
            error: "An internal server error occurred while fetching the employee details: " + error.message,
            success: false,
        });
    }
});

module.exports = router;