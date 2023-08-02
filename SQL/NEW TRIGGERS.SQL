-- ***********************      DELETE FROM HOSTELITES        ***********************

DELIMITER //

CREATE TRIGGER `delete_from_H_fk`
BEFORE DELETE ON `hostelites`
FOR EACH ROW
BEGIN
    DELETE FROM `h_payment` WHERE `H_no` = OLD.`H_id`;
    DELETE FROM `H_DEPENDENTS` WHERE `H_no` = OLD.`H_id`;
    DELETE FROM `H_CONTACTS` WHERE `H_no` = OLD.`H_id`;
    DELETE FROM `H_ATTENDANCE` WHERE `H_no` = OLD.`H_id`;
    DELETE FROM `BELONGS_TO` WHERE `H_no` =  OLD.`H_ID`;
END //

DELIMITER ;


DELIMITER //

CREATE TRIGGER before_delete_employee
BEFORE DELETE ON employee
FOR EACH ROW
BEGIN
    -- Remove dependent data of the employee
    DELETE FROM e_dependents WHERE E_no = OLD.E_ID;
    
    -- Remove contact data of the employee
    DELETE FROM e_contacts WHERE E_no = OLD.E_ID;
    
    -- Remove work data of the employee
    DELETE FROM works_for WHERE E_NO = OLD.E_ID;
END //

DELIMITER ;




CREATE TRIGGER update_laundry_weight
BEFORE UPDATE ON LAUNDRY
FOR EACH ROW
SET NEW.Total_Weight_Left = NEW.Total_Weight_Left + 15;


-- FORE