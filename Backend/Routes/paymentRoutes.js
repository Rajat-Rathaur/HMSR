1. getPaymentsHostelite: select  (req for payments table frontend payments page)

payment_id INT AUTO_INCREMENT PRIMARY KEY,
from_user_id INT NOT NULL,
amount DECIMAL(10, 2) NOT NULL,
payment_date DATE NOT NULL,
payment_category ENUM('Mess', 'Laundry', 'Fees', 'Wages', 'Others') NOT NULL,

where from_user_id = req.id


2. getPaymentsAdmin: select *  (requires at admin side frontend)

where from_user_id in belongsto table has b_id = manager.b_id


3. addFeesPayment : (requires in payments page frontend)
body : amount
from_user_id = req.id
date = curr date
type = 'Fees'