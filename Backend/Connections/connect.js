const dotenv = require("dotenv");
const mysql = require('mysql2/promise');

dotenv.config({ path: "config.env" });
// const host = 'localhost';
// const user = 'root';
// const password = 'admin';
// const database = 'HMSR';

const connectionString = process.env.URL;
let connection;

try {
  connection = mysql.createPool(connectionString);
} catch (err) {
  console.error('Error creating database connection:', err);
}

module.exports = connection;
