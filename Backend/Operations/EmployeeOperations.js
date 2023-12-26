const connection = require('../Connections/connect.js');
const bcrypt = require("bcrypt");

async function addEmployee(employeeData, admissionData, employeeDependentData) {
    const { branchName } = admissionData;

    try {
        // Start a transaction
        await connection.query('START TRANSACTION');

        // Check if the employee already exists in the employee table
        const [existingEmployees] = await connection.query('SELECT * FROM employee WHERE email_id = ? OR phone_no = ? OR account_No = ?', [employeeData.email_id, employeeData.phone_no, employeeData.account_No]);
        if (existingEmployees.length > 0) {
            await connection.query('ROLLBACK');
            return { error: "Employee with the provided EmailId, phone number or account number already exists", success: false };
        }


        // get the b_id from branch table where name = branchName
        const [branch_row] = await connection.query('SELECT b_id FROM branch WHERE b_name = ?', [branchName]);
        let bNo;
        if (branch_row.length > 0)
            bNo = branch_row[0].b_id;
        else {
            await connection.query('ROLLBACK');
            return { error: "Branch not found with the branch Name", success: false };
        }

        // Adding bNo to employee
        employeeData.bNo = bNo;

        if (employeeData.designation === 'MANAGER') {
            // Check if there are already two managers for the same bNo
            const [managerCountResult] = await connection.query('SELECT COUNT(*) AS managerCount FROM employee WHERE bNo = ? AND designation = "MANAGER"', [bNo]);
            const managerCount = managerCountResult[0].managerCount;

            if (managerCount > 2) {
                await connection.query('ROLLBACK');
                return { error: "Already 2 managers exist in the branch", success: false };
            }
        }

        // Insert the new employee into the employee table
        const insertEmployeeQuery = 'INSERT INTO employee SET ?';
        const [insertedEmployee] = await connection.query(insertEmployeeQuery, employeeData);

        employeeDependentData.eNo = insertedEmployee.insertId;

        // Insert the new h_dependent into table
        const insertEmployeeDependentQuery = 'INSERT INTO e_dependents SET ?';
        await connection.query(insertEmployeeDependentQuery, employeeDependentData);

        // Commit the transaction
        await connection.query('COMMIT');

        console.log('New employee added with e_id:', insertedEmployee.insertId);
        return { insertedId: insertedEmployee.insertId, success: true };
    } catch (err) {
        // Rollback the transaction in case of error
        await connection.query('ROLLBACK');
        console.error('Error adding employee:', err);
        return { error: `Error adding employee: ${err}`, success: false };
    }
}

// ASSUMING ONLY ONE MANAGER FOR EACH BRANCH THAT CAN BE DELETED THROUGH DIRECT DB ONLY
async function deleteEmployee(e_id) {
    try {
        await connection.query('START TRANSACTION');

        // Get information about the employee details before deletion
        const [employeeDetails] = await connection.query('SELECT * FROM employee WHERE e_id = ?', [e_id]);
        // Check if employeeDetails is empty
        if (employeeDetails.length === 0) {
            await connection.query('ROLLBACK');
            return { error: `Employee with e_id ${e_id} does not exist.`, success: false };
        }

        const designation = employeeDetails[0].designation;
        
        if (designation === 'MANAGER') {
            await connection.query('ROLLBACK');
            return { error: "Cannot delete the manager in the branch. Contact Admin", success: false };
        }
        
        // const bNo = employeeDetails[0].bNo;
        // // Check if the employee is the only manager in the branch
        // if (designation === 'MANAGER') {
        //     const [managerCountResult] = await connection.query('SELECT COUNT(*) AS managerCount FROM employee WHERE bNo = ? AND designation = ?', [bNo, 'MANAGER']);
        //     const managerCount = managerCountResult[0].managerCount;

        //     if (managerCount <= 1) {
        //         await connection.query('ROLLBACK');
        //         return { error: "Cannot delete the only manager in the branch. Add another manager before deletion.", success: false };
        //     }
        // }

        // Delete employee and e_dependents entries
        await connection.query('DELETE FROM employee WHERE e_id = ?', [e_id]);
        await connection.query('DELETE FROM e_dependents WHERE eNo = ?', [e_id]);

        // // If the deleted employee is a manager, Set the manager position to NULL in the branch
        // if (designation === 'MANAGER')
        //     await connection.query('UPDATE branch SET mgr_id = NULL WHERE b_id = ?', [bNo]);


        await connection.query('COMMIT');
        console.log(`Employee with e_id ${e_id} deleted successfully.`);
        return { success: true };
    } catch (err) {
        await connection.query('ROLLBACK');
        console.error('Error deleting employee details:', err);
        return { error: "An error occurred while deleting employee details.", success: false };
    }
}
// GET EMPLOYEE
// EDIT EMPLOYEE
// UPDATE EMPLOYEE

module.exports = { addEmployee, deleteEmployee }




