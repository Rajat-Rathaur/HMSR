CREATE FUNCTION `insert_hostelite` (
    `f_name` VARCHAR(20),
    `m_name` VARCHAR(20),
    `l_name` VARCHAR(20),
    `email` VARCHAR(30),
    `gender` ENUM('Male', 'Female', 'other'),
    `dob` DATE,
    `work` VARCHAR(20),
    `state` VARCHAR(20),
    `city` VARCHAR(20),
    `street` VARCHAR(20),
    `pincode` INT,
    `phone_number` BIGINT UNSIGNED,
    `r_no` INT,
    `b_no` INT,
    `payment_amount` DECIMAL(10, 2)
) RETURNS VARCHAR(255) CHARSET utf8mb4 DETERMINISTIC BEGIN
DECLARE h_id INT;
DECLARE installment_amount DECIMAL(10, 2);
DECLARE total_installments INT;
DECLARE next_installment_date DATE;
DECLARE payment_status VARCHAR(20);
DECLARE rent INT;
INSERT INTO hostelites (
        F_name,
        M_name,
        L_name,
        Email_id,
        gender,
        DOB,
        WORK,
        state,
        city,
        street,
        photo,
        phone_number
    )
VALUES (
        f_name,
        m_name,
        l_name,
        email,
        gender,
        dob,
        work,
        state,
        city,
        street,
        pincode,
        phone_number
    );
SET h_id = LAST_INSERT_ID();
SELECT Rent INTO rent
FROM rooms
WHERE R_ID = r_no;
SET installment_amount = rent / 3;
IF payment_amount = rent THEN
SET total_installments = 0;
SET next_installment_date = NULL;
SET payment_status = 'paid';
ELSEIF payment_amount = rent / 2 THEN
SET total_installments = 1;
SET next_installment_date = DATE_ADD(NOW(), INTERVAL 8 MONTH);
SET payment_status = '2nd Paid';
ELSEIF payment_amount = rent / 3 THEN
SET total_installments = 2;
SET next_installment_date = DATE_ADD(NOW(), INTERVAL 4 MONTH);
SET payment_status = '1st Paid';
END IF;
INSERT INTO H_Payment (
        H_no,
        Payment_Status,
        Amount_paid,
        Next_Installment_Date,
        Installments_Left
    )
VALUES (
        h_id,
        payment_status,
        payment_amount,
        next_installment_date,
        total_installments
    );
RETURN CONCAT(
    'Hostelite with ID ',
    h_id,
    ' added successfully.'
);
END $$ DELIMITER;