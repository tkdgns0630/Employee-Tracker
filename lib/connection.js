// establishing connection
const mysql = require("mysql2");

const db = new mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "123qwe",
    database: "employee_tracker",
  },
  console.log("Logged into the database.")
);

module.exports = db;
