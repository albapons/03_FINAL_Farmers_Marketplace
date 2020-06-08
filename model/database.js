require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "farmers",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
  "DROP TABLE if exists login; CREATE TABLE login (id INT AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(255), firstname VARCHAR(255), lastname VARCHAR(255), email VARCHAR(255), PRIMARY KEY(id));";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `login` was successful!");

    console.log("Closing...");
  });

  con.end();
});
