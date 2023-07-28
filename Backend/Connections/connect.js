const mysql = require('mysql2/promise');

let connection;

try {
  connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'HMSR',
    
  });
} catch (err) {
  console.error('Error creating database connection:', err);
}

module.exports = connection;
