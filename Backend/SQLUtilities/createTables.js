const connection = require('../Connections/connect.js');



async function createHosteliteTab() {
  try {
    await connection.query(`
        CREATE TABLE IF NOT EXISTS hostelites (
          H_id INT AUTO_INCREMENT PRIMARY KEY,
          F_name VARCHAR(20) NOT NULL,
          M_name VARCHAR(20),
          L_name VARCHAR(20),
          Email_id VARCHAR(40) UNIQUE NOT NULL,
          gender ENUM('Male', 'Female', 'other') NOT NULL,
          DOB DATE NOT NULL,
          WORK VARCHAR(20),
          Age INT ,
          State VARCHAR(20),
          city VARCHAR(20),
          street VARCHAR(20),
          Pincode INT,
          photo LONGBLOB
         )
      `);
    console.log('Hostelites table created successfully');
  } catch (err) {
    console.error('Error creating hostelites table:', err);
  }
}

async function createHContactsTab() {
  try {
    await connection.query(`
      CREATE TABLE IF NOT EXISTS H_CONTACTS (
        H_no INT PRIMARY KEY,
        phone_no BIGINT UNIQUE NOT NULL
      )
    `);
    console.log('H_CONTACTS table created successfully');
  } catch (err) {
    console.error('Error creating H_CONTACTS table:', err);
  }
}

const createTables = async () => {
  try {
    console.log('Database connected');
    await createHosteliteTab();
    await createHContactsTab();
  } catch (err) {
    console.error('Error creating tables:', err);
  }
};


module.exports = createTables;