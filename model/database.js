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
      location varchar(255),
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
      location varchar(255),
      company_name varchar(255) NOT NULL,
      company_no varchar(255) NOT NULL,
      tel_no varchar(255) NOT NULL,
      mob_no varchar(255) NOT NULL,
      day varchar(10) NOT NULL,
      start_time time NOT NULL,
      end_time time NOT NULL,
      website varchar(255) NOT NULL,
      PRIMARY KEY (id)
    
    );
    
    CREATE TABLE users_markets (
      id int NOT NULL AUTO_INCREMENT,
      market_id int NOT NULL,
      user_id int NOT NULL,
      PRIMARY KEY (id)
    
    );
    
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Balham Farmers' Market", "info@lfm.org.uk", "Hydethorpe Rd", "SW12 OJA", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Blackheath Farmers' Market", "info@lfm.org.uk", "Blackheath Station Car Park", "SE3 9LA", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Bloomsbury Farmers' Market", "info@lfm.org.uk", "Torrington Square", "WC1E 7HY", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Ealing Farmers' Market", "info@lfm.org.uk", "Leeland Rd", "W13 9HH", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Islington Farmers' Market", "info@lfm.org.uk", "Chapel Market", "N1 9PZ", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Ladbroke Grove Farmers' Market", "info@lfm.org.uk", "Portobello Rd", "W10 5SZ", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("London Bridge Farmers' Market", "info@lfm.org.uk", "Kings College, Guys Campus, Guys & St. Thomas Hospital", "SE1 1UL", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Marylebone Farmers' Market", "info@lfm.org.uk", "Aybrook St", "W1U 4DF", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Notting Hill Farmers' Market", "info@lfm.org.uk", "Kensington Church St", "W11 3LQ", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Parliament Hill Farmers' Market", "info@lfm.org.uk", "Highgate Rd", "NW5 1RN", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Pimlico Road Farmers' Market", "info@lfm.org.uk", "Pimlico Rd", "SW1W 8UT", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Queens Park Farmers' Market", "info@lfm.org.uk", "Salusbury Rd", "NW6 6RG", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("South Kensington Farmers' Market", "info@lfm.org.uk", "Bute St", "SW7 3EX", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Swiss Cottage Farmers' Market", "info@lfm.org.uk", "Eton Ave", "NW3 3EU", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Twickenham Farmers' Market", "info@lfm.org.uk", "Holly Rd", "TW1 4HF", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Walthamstow Farmers' Market", "info@lfm.org.uk", "High Street", "E17 7JN", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("West Hampstead Farmers' Market", "info@lfm.org.uk", "Iverson Rd", "NW6 1PF", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Westminster Bridge Farmers' Market", "info@lfm.org.uk", "Westminster Bridge Rd", "SE1 7EP", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website) 
    VALUES ("Wimbledon Farmers' Market", "info@lfm.org.uk", "Havana Rd", "SW19 8EG", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk");
   
    `;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `users, markets and products` was successful!");

    console.log("Closing...");
  });

  con.end();
});
