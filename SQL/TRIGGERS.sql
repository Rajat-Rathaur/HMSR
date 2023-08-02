DELIMITER $$
CREATE TRIGGER h_payments_log_trigger
AFTER INSERT ON h_payment
FOR EACH ROW
BEGIN
    INSERT INTO payments_log (party_id, type, category, amount)
    VALUES (NEW.H_no, 'incoming', 'rent', NEW.Amount_paid);
END $$
DELIMITER ;


DELIMITER $$
CREATE TRIGGER `set_default_password` 
BEFORE INSERT ON `login` 
FOR EACH ROW 
SET NEW.Password = NEW.UserID
$$
DELIMITER ;


DELIMITER $$
CREATE TRIGGER `update_curr_status` 
BEFORE UPDATE ON `mess` 
FOR EACH ROW BEGIN
        IF NEW.Days_Left = 0 THEN    
            SET NEW.curr_status = '';
        END IF;
    END
$$
DELIMITER ;

----------------------------------------------------------------------------------------

-- ~ ***** EMPLOYEE 
DELIMITER $$
CREATE TRIGGER `add_employee_login` 
AFTER INSERT ON `employee` 
FOR EACH ROW BEGIN
    INSERT INTO login (UserID, Password)
    VALUES (CONCAT('E',NEW.E_ID), CONCAT('pass',NEW.E_ID));
END
$$
DELIMITER ;


DELIMITER $$
CREATE TRIGGER `before_delete_employee` 
BEFORE DELETE ON `employee` 
FOR EACH ROW BEGIN
    
    DELETE FROM e_dependents WHERE E_no = OLD.E_ID;
    DELETE FROM e_contacts WHERE E_no = OLD.E_ID;
    DELETE FROM works_for WHERE E_NO = OLD.E_ID;
END
$$
DELIMITER ;


DELIMITER $$
CREATE TRIGGER `insert_employee_trigger` 
AFTER INSERT ON `employee` 
FOR EACH ROW BEGIN
  INSERT INTO works_for (E_NO, Date_of_Join) 
  VALUES (NEW.E_ID, NOW());
END
$$
DELIMITER ;

-- ---------------------------------------------------------------------------------------------
-- ~ ***** hostelites
--
DELIMITER $$
CREATE TRIGGER `delete_from_H_fk` 
BEFORE DELETE ON `hostelites` 
FOR EACH ROW BEGIN
    DELETE FROM `h_payment` WHERE `H_no` = OLD.`H_id`;
    DELETE FROM `H_DEPENDENTS` WHERE `H_no` = OLD.`H_id`;
    DELETE FROM `H_CONTACTS` WHERE `H_no` = OLD.`H_id`;
    DELETE FROM `H_ATTENDANCE` WHERE `H_no` = OLD.`H_id`;
    DELETE FROM `BELONGS_TO` WHERE `H_no` =  OLD.`H_ID`;
END
$$

DELIMITER $$
CREATE TRIGGER `insert_login` 
AFTER INSERT ON `hostelites` 
FOR EACH ROW BEGIN
    INSERT INTO login (UserID, Password) 
    VALUES (CONCAT('H', NEW.H_id), CONCAT('pass',NEW.H_id));
END
$$
DELIMITER ;

--------------------------------------------------------------------------------------------------------------------------------
-- ~ ***** h_payment
--
DELIMITER $$
CREATE TRIGGER `h_payments_log_trigger` 
AFTER INSERT ON `h_payment` 
FOR EACH ROW BEGIN
    INSERT INTO payments_log (party_id, type, category, amount)
    VALUES (NEW.H_no, 'incoming', 'rent', NEW.Amount_paid);
END
$$
DELIMITER ;
--------------------------------------------------------------------------------------------------------------------------------

-- ~ ****** laundry
--
DELIMITER $$
CREATE TRIGGER `set_valid_from` 
BEFORE INSERT ON `laundry` 
FOR EACH ROW 
    SET NEW.Valid_From = CURRENT_DATE(),
    NEW.Valid_Till = DATE_ADD(CURRENT_DATE(), INTERVAL 30 DAY),
    NEW.Total_Weight_Left = 15
$$
DELIMITER ;


DELIMITER $$
CREATE TRIGGER `update_laundry_weight` 
BEFORE UPDATE ON `laundry` 
FOR EACH ROW 
    SET NEW.Total_Weight_Left = NEW.Total_Weight_Left + 15
$$
DELIMITER ;
--------------------------------------------------------------------------------------------------------------------------------

-- ~ ****** mess
DELIMITER $$
CREATE TRIGGER `mess_daily_charge_insert` AFTER INSERT ON `mess` FOR EACH ROW BEGIN
  DECLARE b_no INT;
  DECLARE m_daily_charge INT;
  DECLARE diff INT;
  
  SET diff = NEW.Days_Left;
  SELECT B_no INTO b_no FROM belongs_to WHERE H_no = NEW.H_no;
  SELECT M_Daily_Charge INTO m_daily_charge FROM services_details WHERE B_no = b_no;
  INSERT INTO payments_log (party_id, type, category, amount)
    VALUES (NEW.H_no, 'incoming', 'mess', m_daily_charge*diff);
END
$$

DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_curr_status` BEFORE UPDATE ON `mess` FOR EACH ROW BEGIN
        IF NEW.Days_Left = 0 THEN
            
            SET NEW.curr_status = '';
        END IF;
    END
$$
DELIMITER ;

