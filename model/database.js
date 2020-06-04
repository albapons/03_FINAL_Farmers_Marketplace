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
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = `DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS markets;
    DROP TABLE IF EXISTS users_markets;
    
    CREATE TABLE products (
      id int NOT NULL AUTO_INCREMENT,
      name varchar(255) NOT NULL,
      unit_price decimal NOT NULL,
      units varchar(4) NOT NULL,
      description varchar(255) NOT NULL,
      tax_code varchar(255) NOT NULL,
      catery_id varchar(255) NOT NULL,
      isPerishable binary(1) NOT NULL,
      shelf_life_count int NOT NULL,
      shelf_life_units varchar(255) NOT NULL,
      seller_id int NOT NULL,
      PRIMARY KEY (id)
    
    );
    
    CREATE TABLE users (
      id int NOT NULL AUTO_INCREMENT,
      firstname varchar(255) NOT NULL,
      lastname varchar(255) NOT NULL,
      email varchar(255) NOT NULL,
      address1 varchar(255) NOT NULL,
      postcode varchar(255) NOT NULL,
      city varchar(255) NOT NULL,
      location varchar(255) NOT NULL,
      company_name varchar(255) NOT NULL,
      company_no varchar(255) NOT NULL,
      tel_no varchar(255) NOT NULL,
      mob_no varchar(255) NOT NULL,
      website varchar(255) NOT NULL,
      isSeller binary(1) NOT NULL,
      PRIMARY KEY (id)
    
    );
    
    CREATE TABLE markets (
      id int NOT NULL AUTO_INCREMENT,
      name varchar(255) NOT NULL,
      email varchar(255) NOT NULL,
      address1 varchar(255) NOT NULL,
      postcode varchar(255) NOT NULL,
      city varchar(255) NOT NULL,
      location varchar(255) NOT NULL,
      company_name varchar(255) NOT NULL,
      company_no varchar(255) NOT NULL,
      tel_no varchar(255) NOT NULL,
      mob_no varchar(255) NOT NULL,
      day varchar(10) NOT NULL,
      start_time time NOT NULL,
      end_time time NOT NULL,
      webite varchar(255) NOT NULL,
      PRIMARY KEY (id)
    
    );
    
    CREATE TABLE users_markets (
      id int NOT NULL AUTO_INCREMENT,
      market_id int NOT NULL,
      user_id int NOT NULL,
      PRIMARY KEY (id)
    
    );`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `users, markets and products` was successful!");

    console.log("Closing...");
  });

  con.end();
});
