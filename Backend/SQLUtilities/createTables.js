const connection = require('../Connections/connect.js');



async function createHosteliteTab() {
  try {
    await connection.query(`
        CREATE TABLE IF NOT EXISTS hostelites (
          H_id INT AUTO_INCREMENT PRIMARY KEY,
          f_name VARCHAR(20) NOT NULL,
          m_name VARCHAR(20),
          l_name VARCHAR(20),
          email_id VARCHAR(40) UNIQUE NOT NULL,
          phone_no BIGINT UNIQUE NOT NULL,
          gender ENUM('Male', 'Female', 'other') NOT NULL,
          dob DATE NOT NULL,
          work VARCHAR(20),
          age INT ,
          state VARCHAR(20),
          city VARCHAR(20),
          street VARCHAR(20),
          pincode INT,
          photo LONGBLOB,
          password VARCHAR(20)
         )
      `);
    console.log('Hostelites table created successfully');
  } catch (err) {
    console.error('Error creating hostelites table:', err);
  }
}


const createTables = async () => {
  try {
    console.log('Database connected');
    await createHosteliteTab();
  } catch (err) {
    console.error('Error creating tables:', err);
  }
};


module.exports = createTables;