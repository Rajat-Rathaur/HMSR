const connection = require('../Connections/connect.js');

async function createHosteliteTab() {
  try {
    const [result] = await connection.query(`
        CREATE TABLE IF NOT EXISTS hostelites (
          h_id INT AUTO_INCREMENT PRIMARY KEY,
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

    if (result.warningStatus === 0) {
      console.log('Hostelites table created successfully');
    } else {
      console.log('Hostelites table already exists');
    }
  } catch (err) {
    console.error('Error creating hostelites table:', err);
  }
}

async function createBranchTab() {
  try {
    const [result] = await connection.query(`
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
    if (result.warningStatus === 0) {
      console.log('Branch table created successfully');
    } else {
      console.log('Branch table already exists');
    }
  } catch (err) {
    console.error('Error creating branch table:', err);
  }
}

async function createBelongsToTab() {
  try {
    const [result] = await connection.query(`
      CREATE TABLE IF NOT EXISTS belongs_to (
        hNo INT,
        branchNo INT,
        roomNo INT,
        bedNo INT,
        dateOfJoin DATE,
        dateOfExit DATE,
        dateOfLeave DATE
      )
    `);

    if (result.warningStatus === 0) {
      console.log('belongs_to table created successfully');
    } else {
      console.log('belongs_to table already exists');
    }
    
  } catch (err) {
    console.error('Error creating belongs_to table:', err);
  }
}

async function createRoomsTab() {
  try {
    const [result] = await connection.query(`
          CREATE TABLE IF NOT EXISTS rooms (
              roomNo INT NOT NULL,
              branchNo INT NOT NULL, 
              roomType ENUM('S', 'D') NOT NULL,
              roomStatus ENUM('Occupied', 'Partially Occupied', 'Empty') NOT NULL Default 'Empty'  
          )
      `);
      if (result.warningStatus === 0) {
        console.log('Rooms table created successfully');
      } else {
        console.log('Rooms table already exists');
      }
      
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