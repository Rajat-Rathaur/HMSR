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

async function createBranchTab() {
  try {
    await connection.query(`
          CREATE TABLE IF NOT EXISTS branch (
              b_id INT AUTO_INCREMENT PRIMARY KEY,
              b_name VARCHAR(20) NOT NULL,
              mgr_id INT,
              state VARCHAR(20) NOT NULL,
              city VARCHAR(20) NOT NULL,
              street VARCHAR(20),
              pincode INT NOT NULL,
              email_id VARCHAR(40) UNIQUE NOT NULL,
              phone_no BIGINT UNIQUE NOT NULL
          )
      `);
    console.log('Branch table created successfully');
  } catch (err) {
    console.error('Error creating branch table:', err);
  }
}

async function createBelongsToTab() {
  try {
    await connection.query(`
      CREATE TABLE IF NOT EXISTS belongs_to (
        hId INT,
        branchNo INT,
        roomNo INT,
        bedNo INT,
        dateOfJoin TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        dateOfExit DATE,
        dateOfLeave DATE
      )
    `);
    console.log('belongs_to table created successfully');
  } catch (err) {
    console.error('Error creating belongs_to table:', err);
  }
}

async function createRoomsTab() {
  try {
    await connection.query(`
          CREATE TABLE IF NOT EXISTS rooms (
              roomNo INT NOT NULL,
              roomType ENUM('S', 'D') NOT NULL,
              roomStatus ENUM('Occupied', 'Partially Occupied', 'Empty') NOT NULL
              
          )
      `);
    console.log('Rooms table created successfully');
  } catch (err) {
    console.error('Error creating rooms table:', err);
  }
}


const createTables = async () => {
  try {
    console.log('Database connected');
    await createHosteliteTab();
    await createBranchTab();
    await createBelongsToTab();
    await createRoomsTab();

  } catch (err) {
    console.error('Error creating tables:', err);
  }
};


module.exports = createTables;