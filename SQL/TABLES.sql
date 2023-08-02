CREATE TABLE `belongs_to` (
  `H_no` int DEFAULT NULL,
  `R_no` int DEFAULT NULL,
  `B_no` int DEFAULT NULL,
  `Date_of_Join` date NOT NULL,
  `Date_of_Exit` date DEFAULT NULL,
  `Date_of_Leave` date DEFAULT NULL,
  `bed_no` int DEFAULT NULL
);
CREATE TABLE `branch` (
  `B_id` int NOT NULL,
  `b_name` varchar(20) NOT NULL,
  `mgr_id` int DEFAULT NULL,
  `state` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `street` varchar(20) DEFAULT NULL,
  `pincode` int NOT NULL,
  `Single_Room` int DEFAULT NULL,
  `Double_Room` int DEFAULT NULL
) CREATE TABLE `b_contacts` (
  `B_no` int DEFAULT NULL,
  `phone_no` bigint NOT NULL,
  `Email_id` varchar(20) NOT NULL
) CREATE TABLE `complaints` (
  `R_ID` int NOT NULL,
  `h_no` int DEFAULT NULL,
  `Priority` enum('High Priority', 'Mid Priority', 'Low Priority') DEFAULT NULL,
  `C_DESCRIPTION` text,
  `Response` text,
  `Status` enum('PENDING', 'APPROVED', 'REJECTED') DEFAULT NULL
) CREATE TABLE `employee` (
  `E_ID` int NOT NULL,
  `B_no` int NOT NULL,
  `F_name` varchar(20) DEFAULT NULL,
  `M_name` varchar(10) DEFAULT NULL,
  `L_name` varchar(10) DEFAULT NULL,
  `gender` enum('Male', 'Female', 'other') NOT NULL,
  `state` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `street` varchar(20) DEFAULT NULL,
  `pincode` int NOT NULL,
  `Designation` enum(
    'MANAGER',
    'CLEANER',
    'CHEF',
    'STAFF',
    'WATCHMAN'
  ) NOT NULL,
  `Account_No` varchar(17) NOT NULL,
  `IFSC_Code` varchar(10) NOT NULL,
  `DOB` date NOT NULL,
  `Age` int DEFAULT ((year(curdate()) - year(`DOB`))),
  `phone_no` bigint DEFAULT NULL,
  `emailid` varchar(50) DEFAULT NULL
) CREATE TABLE `e_attendance` (
  `E_NO` int DEFAULT NULL,
  `E_status` varchar(20) DEFAULT NULL,
  `A_DATE` date DEFAULT NULL
) CREATE TABLE `e_contacts` (
  `E_no` int NOT NULL,
  `phone_no` bigint NOT NULL
) CREATE TABLE `e_dependents` (
  `E_no` int NOT NULL,
  `F_name` varchar(20) NOT NULL,
  `M_name` varchar(20) DEFAULT NULL,
  `L_name` varchar(20) DEFAULT NULL,
  `Relation` varchar(10) NOT NULL,
  `phone_no` bigint NOT NULL,
  `state` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `street` varchar(20) DEFAULT NULL,
  `pincode` int NOT NULL
) CREATE TABLE `hostelites` (
  `H_id` int NOT NULL,
  `F_name` varchar(20) NOT NULL,
  `M_name` varchar(20) DEFAULT NULL,
  `L_name` varchar(20) DEFAULT NULL,
  `Email_id` varchar(30) DEFAULT NULL,
  `gender` enum('Male', 'Female', 'other') NOT NULL,
  `DOB` date NOT NULL,
  `WORK` varchar(20) DEFAULT NULL,
  `Age` int DEFAULT ((year(curdate()) - year(`DOB`))),
  `state` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `street` varchar(20) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `photo` longblob,
  `phone_number` bigint UNSIGNED DEFAULT NULL
);
CREATE TABLE `h_attendance` (
  `H_NO` int DEFAULT NULL,
  `A_status` enum('MARKED', 'UNMARKED') DEFAULT NULL,
  `A_DATE` date DEFAULT NULL
);
CREATE TABLE `h_contacts` (
  `H_no` int NOT NULL,
  `phone_no` bigint NOT NULL
);
CREATE TABLE `h_dependents` (
  `H_no` int NOT NULL,
  `F_name` varchar(20) NOT NULL,
  `M_name` varchar(20) DEFAULT NULL,
  `L_name` varchar(20) NOT NULL,
  `Relation` varchar(10) NOT NULL,
  `phone_no` bigint NOT NULL,
  `state` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `street` varchar(20) DEFAULT NULL,
  `pincode` int NOT NULL
);
CREATE TABLE `h_payment` (
  `H_no` int NOT NULL,
  `Payment_Status` enum('Paid', '1st Paid', '2nd Paid', '3rd Paid') NOT NULL,
  `Amount_paid` decimal(10, 2) NOT NULL,
  `Next_Installment_Date` date DEFAULT NULL,
  `Installments_Left` int DEFAULT NULL
);
CREATE TABLE `laundry` (
  `L_id` varchar(7) NOT NULL,
  `H_no` int DEFAULT NULL,
  `Valid_From` date DEFAULT NULL,
  `Valid_Till` date DEFAULT NULL,
  `Total_Weight_Left` int DEFAULT NULL,
  `Additional_Weight` int DEFAULT '0',
  `extra_charges` float DEFAULT '0'
);
CREATE TABLE `leaves` (
  `L_ID` int NOT NULL,
  `H_no` int DEFAULT NULL,
  `From_Date` date NOT NULL,
  `Till_Date` date NOT NULL,
  `Reason` varchar(250) NOT NULL,
  `Response` varchar(200) DEFAULT NULL,
  `status` enum('Approved', 'Rejected', 'Pending') DEFAULT 'Pending'
);
CREATE TABLE `login` (
  `UserID` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL
);
CREATE TABLE `mess` (
  `M_id` varchar(7) NOT NULL,
  `H_no` int DEFAULT NULL,
  `Days_Left` int DEFAULT NULL,
  `curr_status` enum('Opted-in', 'Opted-out', '') DEFAULT 'Opted-in'
);
CREATE TABLE `new_employee_log` (
  `e_id` int NOT NULL,
  `new_e_no` int NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE `new_hostelite_log` (
  `e_id` int NOT NULL,
  `new_H_no` int NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE `payments_log` (
  `p_id` int NOT NULL,
  `party_id` int NOT NULL,
  `type` enum('incoming', 'outgoing') NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `category` enum('salary', 'laundry', 'mess') NOT NULL
);
CREATE TABLE `remainder` (
  `Re_id` int NOT NULL,
  `H_no` int NOT NULL,
  `type` varchar(50) NOT NULL,
  `description` text,
  `R_Date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Last_date` date DEFAULT NULL
);
CREATE TABLE `request` (
  `R_no` varchar(10) NOT NULL,
  `Request_Time` datetime NOT NULL,
  `Response_Time` datetime DEFAULT NULL
);
CREATE TABLE `rooms` (
  `R_ID` int NOT NULL,
  `B_no` int NOT NULL,
  `Rent` int NOT NULL,
  `R_Type` enum('SINGLE', 'DOUBLE') NOT NULL,
  `Bed_no` int NOT NULL,
  `BED_STATUS` enum('OCCUPIED', 'FREE') DEFAULT 'FREE'
);
CREATE TABLE `services` (
  `S_id` varchar(7) NOT NULL,
  `H_no` int DEFAULT NULL
);
CREATE TABLE `services_details` (
  `B_no` int DEFAULT NULL,
  `M_Daily_Charge` int DEFAULT NULL,
  `L_Fixed_Charge` int NOT NULL,
  `L_Price_per_kg` int NOT NULL
);
CREATE TABLE `subscribers` (
  `email` varchar(40) NOT NULL,
  `subscription_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE `wage` (
  `B_No` int NOT NULL,
  `designation` varchar(20) NOT NULL,
  `daily_wage` varchar(20) DEFAULT NULL
);
CREATE TABLE `works_for` (
  `E_NO` int DEFAULT NULL,
  `Date_of_Join` date NOT NULL,
  `Date_of_Exit` date DEFAULT NULL
);