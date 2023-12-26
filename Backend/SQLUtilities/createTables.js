const connection = require('../Connections/connect.js');

async function createHosteliteTab() {
  try {
    const [result] = await connection.query(`
        CREATE TABLE IF NOT EXISTS hostelites (
          h_id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(60) NOT NULL,
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
          photo VARCHAR(100),
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

async function createHDependentsTab() {
  try {
    const [result] = await connection.query(
      `CREATE TABLE IF NOT EXISTS h_dependents (
          hNo INT,
          name VARCHAR(20) NOT NULL,
          phone_no BIGINT UNIQUE NOT NULL,
          relationship VARCHAR(25),
          state VARCHAR(20),
          city VARCHAR(20),
          street VARCHAR(20),
          pincode INT
         )
      `);

    if (result.warningStatus === 0) {
      console.log('h_dependents table created successfully');
    } else {
      console.log('h_dependents table already exists');
    }
  } catch (err) {
    console.error('Error creating h_dependents table:', err);
  }
}

async function createEmployeeTab() {
  try {
    const [result] = await connection.query(`
        CREATE TABLE IF NOT EXISTS employee (
          e_id INT AUTO_INCREMENT PRIMARY KEY,
          bNo INT NOT NULL,
          name VARCHAR(20) DEFAULT NULL,
          gender ENUM('Male', 'Female', 'other') NOT NULL,
          state VARCHAR(20) DEFAULT NULL,
          city VARCHAR(20) DEFAULT NULL,
          street VARCHAR(20) DEFAULT NULL,
          pincode INT NOT NULL,
          designation ENUM(
            'MANAGER',
            'CLEANER',
            'CHEF',
            'STAFF',
            'WATCHMAN'
          ) NOT NULL,
          account_No VARCHAR(17) UNIQUE NOT NULL,
          ifsc_code VARCHAR(12) NOT NULL,
          dob DATE NOT NULL,
          phone_no BIGINT DEFAULT NULL,
          email_id VARCHAR(50) DEFAULT NULL,
          password VARCHAR(60)
        )
    `);

    if (result.warningStatus === 0) {
      console.log('employee table created successfully');
    } else {
      console.log('employee table already exists');
    }
  } catch (err) {
    console.error('Error creating employee table:', err);
  }
}

async function createEDependentsTab() {
  try {
    const [result] = await connection.query(`
        CREATE TABLE IF NOT EXISTS e_dependents (
          eNo int NOT NULL,
          name varchar(20) NOT NULL,
          phone_no bigint NOT NULL,
          relation varchar(10) NOT NULL,
          state varchar(20) NOT NULL,
          city varchar(20) NOT NULL,
          street varchar(20) DEFAULT NULL,
          pincode int NOT NULL
         )
      `);

    if (result.warningStatus === 0) {
      console.log('e_dependents table created successfully');
    } else {
      console.log('e_dependents table already exists');
    }
  } catch (err) {
    console.error('Error creating e_dependents table:', err);
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
        rNo INT,
        bedNumber INT,
        dateOfJoin DATE,
        dateOfExit DATE
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
              r_id INT AUTO_INCREMENT PRIMARY KEY,
              roomNo INT NOT NULL,
              branchNo INT NOT NULL, 
              roomType ENUM('S', 'D') NOT NULL,
              roomStatus ENUM('Occupied', 'Partially Occupied', 'Empty') NOT NULL Default 'Empty'
            );`
    );
    if (result.warningStatus === 0) {
      console.log('Rooms table created successfully');
    } else {
      console.log('Rooms table already exists');
    }

  } catch (err) {
    console.error('Error creating rooms table:', err);
  }
}

async function createPaymentsTable() {
  try {
    const [result] = await connection.query(`
          CREATE TABLE IF NOT EXISTS payments (
              payment_id INT AUTO_INCREMENT PRIMARY KEY,
              from_user_id INT NOT NULL,
              amount DECIMAL(10, 2) NOT NULL,
              payment_date DATE NOT NULL,
              payment_type ENUM('Incoming', 'Outgoing') NOT NULL,
              to_user_id INT
          );`
    );
    if (result.warningStatus === 0) {
      console.log('Payments table created successfully');
    } else {
      console.log('Payments table already exists');
    }
  } catch (err) {
    console.error('Error creating payments table:', err);
  }
}

async function createMessTable() {
  try {
    const [result] = await connection.query(`
        CREATE TABLE IF NOT EXISTS mess (
          hNo INT PRIMARY KEY,
          start_date DATE NOT NULL,
          end_date DATE NOT NULL
        );`
    );
    if (result.warningStatus === 0) {
      console.log('Mess table created successfully');
    } else {
      console.log('Mess table already exists');
    }
  } catch (err) {
    console.error('Error creating Mess table:', err);
  }
}

async function createLaundryTable() {
  try {
    const [result] = await connection.query(`
          CREATE TABLE IF NOT EXISTS laundry (
              hNo INT PRIMARY KEY,
              weight_left DECIMAL(10, 2) NOT NULL
          );
      `);

    if (result.warningStatus === 0) {
      console.log('Laundry table created successfully');
    } else {
      console.log('Laundry table already exists');
    }
  } catch (err) {
    console.error('Error creating laundry table:', err);
  }
}

const createTables = async () => {
  try {
    console.log('Table Check Started');

    await createHosteliteTab();
    await createHDependentsTab();
    await createEmployeeTab();
    await createEDependentsTab();
    await createBranchTab();
    await createBelongsToTab();
    await createRoomsTab();
    await createPaymentsTable();
    await createMessTable();
    await createLaundryTable();

  } catch (err) {
    console.error('Error creating tables:', err);
  }
};


module.exports = createTables;