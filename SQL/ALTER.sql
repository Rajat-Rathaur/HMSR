ALTER TABLE `belongs_to`
  ADD KEY `B_no` (`B_no`),
  ADD KEY `R_no` (`R_no`),
  ADD KEY `belongs_to_fk_hostelites` (`H_no`);

ALTER TABLE `branch`
  ADD PRIMARY KEY (`B_id`);

ALTER TABLE `b_contacts`
  ADD UNIQUE KEY `phone_no` (`phone_no`),
  ADD KEY `B_no` (`B_no`);

ALTER TABLE `complaints`
  ADD PRIMARY KEY (`R_ID`),
  ADD KEY `complaints_ibfk_1` (`h_no`);

ALTER TABLE `employee`
  ADD PRIMARY KEY (`E_ID`),
  ADD UNIQUE KEY `Account_No` (`Account_No`),
  ADD KEY `B_no` (`B_no`);

ALTER TABLE `e_attendance`
  ADD KEY `e_attendance_fk1` (`E_NO`);

ALTER TABLE `e_contacts`
  ADD PRIMARY KEY (`E_no`),
  ADD UNIQUE KEY `phone_no` (`phone_no`);

ALTER TABLE `e_dependents`
  ADD UNIQUE KEY `phone_no` (`phone_no`),
  ADD KEY `idx_e_no` (`E_no`);

ALTER TABLE `hostelites`
  ADD PRIMARY KEY (`H_id`);

ALTER TABLE `h_attendance`
  ADD KEY `h_attendance_ibfk_1` (`H_NO`);

ALTER TABLE `h_contacts`
  ADD PRIMARY KEY (`H_no`),
  ADD UNIQUE KEY `phone_no` (`phone_no`);

ALTER TABLE `h_dependents`
  ADD PRIMARY KEY (`H_no`);

ALTER TABLE `h_payment`
  ADD PRIMARY KEY (`H_no`);

ALTER TABLE `laundry`
  ADD PRIMARY KEY (`L_id`),
  ADD UNIQUE KEY `H_no` (`H_no`);

ALTER TABLE `leaves`
  ADD PRIMARY KEY (`L_ID`),
  ADD KEY `leaves_ibfk_1` (`H_no`);

ALTER TABLE `login`
  ADD PRIMARY KEY (`UserID`);

ALTER TABLE `mess`
  ADD PRIMARY KEY (`M_id`),
  ADD UNIQUE KEY `unique_h_no` (`H_no`);

ALTER TABLE `new_hostelite_log`
  ADD KEY `new_hostelite_log_ibfk_1` (`new_H_no`);

ALTER TABLE `payments_log`
  ADD PRIMARY KEY (`p_id`);

ALTER TABLE `remainder`
  ADD PRIMARY KEY (`Re_id`),
  ADD KEY `remainder_ibfk_1` (`H_no`);

ALTER TABLE `request`
  ADD PRIMARY KEY (`R_no`);

ALTER TABLE `rooms`
  ADD PRIMARY KEY (`R_ID`,`B_no`,`Bed_no`),
  ADD KEY `B_no` (`B_no`);

ALTER TABLE `services`
  ADD PRIMARY KEY (`S_id`),
  ADD KEY `services_ibfk_1` (`H_no`);

ALTER TABLE `services_details`
  ADD KEY `B_no` (`B_no`);

ALTER TABLE `wage`
  ADD PRIMARY KEY (`B_No`,`designation`);

ALTER TABLE `works_for`
  ADD KEY `works_for_ibfk_1` (`E_NO`);

ALTER TABLE `complaints`
  MODIFY `R_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

ALTER TABLE `employee`
  MODIFY `E_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1041;

ALTER TABLE `hostelites`
  MODIFY `H_id` int NOT NULL AUTO_INCREMENT;

ALTER TABLE `leaves`
  MODIFY `L_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

ALTER TABLE `payments_log`
  MODIFY `p_id` int NOT NULL AUTO_INCREMENT;

ALTER TABLE `belongs_to`
  ADD CONSTRAINT `belongs_to_fk_hostelites` FOREIGN KEY (`H_no`) REFERENCES `hostelites` (`H_id`),
  ADD CONSTRAINT `belongs_to_ibfk_1` FOREIGN KEY (`B_no`) REFERENCES `branch` (`B_id`),
  ADD CONSTRAINT `belongs_to_ibfk_3` FOREIGN KEY (`R_no`) REFERENCES `rooms` (`R_ID`);

ALTER TABLE `b_contacts`
  ADD CONSTRAINT `b_contacts_ibfk_1` FOREIGN KEY (`B_no`) REFERENCES `branch` (`B_id`);

ALTER TABLE `complaints`
  ADD CONSTRAINT `complaints_ibfk_1` FOREIGN KEY (`h_no`) REFERENCES `hostelites` (`H_id`);

ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`B_no`) REFERENCES `branch` (`B_id`);

ALTER TABLE `e_attendance`
  ADD CONSTRAINT `e_attendance_fk1` FOREIGN KEY (`E_NO`) REFERENCES `employee` (`E_ID`);

ALTER TABLE `e_contacts`
  ADD CONSTRAINT `e_contacts_ibfk_1` FOREIGN KEY (`E_no`) REFERENCES `employee` (`E_ID`);

ALTER TABLE `e_dependents`
  ADD CONSTRAINT `e_dependents_ibfk_1` FOREIGN KEY (`E_no`) REFERENCES `employee` (`E_ID`);

ALTER TABLE `h_attendance`
  ADD CONSTRAINT `h_attendance_ibfk_1` FOREIGN KEY (`H_NO`) REFERENCES `hostelites` (`H_id`);

ALTER TABLE `h_contacts`
  ADD CONSTRAINT `h_contacts_fk1` FOREIGN KEY (`H_no`) REFERENCES `hostelites` (`H_id`),
  ADD CONSTRAINT `h_contacts_ibfk_1` FOREIGN KEY (`H_no`) REFERENCES `hostelites` (`H_id`);

ALTER TABLE `h_dependents`
  ADD CONSTRAINT `h_dependents_ibfk_1` FOREIGN KEY (`H_no`) REFERENCES `hostelites` (`H_id`);

ALTER TABLE `h_payment`
  ADD CONSTRAINT `h_payment_ibfk_1` FOREIGN KEY (`H_no`) REFERENCES `hostelites` (`H_id`);

ALTER TABLE `laundry`
  ADD CONSTRAINT `laundry_fk1` FOREIGN KEY (`H_no`) REFERENCES `hostelites` (`H_id`),
  ADD CONSTRAINT `laundry_ibfk_1` FOREIGN KEY (`H_no`) REFERENCES `hostelites` (`H_id`);

ALTER TABLE `leaves`
  ADD CONSTRAINT `leaves_ibfk_1` FOREIGN KEY (`H_no`) REFERENCES `hostelites` (`H_id`);

ALTER TABLE `mess`
  ADD CONSTRAINT `mess_fk1` FOREIGN KEY (`H_no`) REFERENCES `hostelites` (`H_id`),
  ADD CONSTRAINT `mess_ibfk_1` FOREIGN KEY (`H_no`) REFERENCES `hostelites` (`H_id`);

ALTER TABLE `new_hostelite_log`
  ADD CONSTRAINT `new_hostelite_log_ibfk_1` FOREIGN KEY (`new_H_no`) REFERENCES `hostelites` (`H_id`);

ALTER TABLE `remainder`
  ADD CONSTRAINT `remainder_ibfk_1` FOREIGN KEY (`H_no`) REFERENCES `hostelites` (`H_id`);

ALTER TABLE `rooms`
  ADD CONSTRAINT `rooms_ibfk_1` FOREIGN KEY (`B_no`) REFERENCES `branch` (`B_id`);

ALTER TABLE `services`
  ADD CONSTRAINT `services_ibfk_1` FOREIGN KEY (`H_no`) REFERENCES `hostelites` (`H_id`);

ALTER TABLE `services_details`
  ADD CONSTRAINT `services_details_ibfk_1` FOREIGN KEY (`B_no`) REFERENCES `branch` (`B_id`);

ALTER TABLE `wage`
  ADD CONSTRAINT `wage_ibfk_1` FOREIGN KEY (`B_No`) REFERENCES `branch` (`B_id`);

ALTER TABLE `works_for`
  ADD CONSTRAINT `works_for_ibfk_1` FOREIGN KEY (`E_NO`) REFERENCES `employee` (`E_ID`);
COMMIT;
