require("dotenv").config();
const mysql = require("mysql");

const fs = require("fs");// This is new, what does it do>? 
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "recipesandingredients",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = fs.readFileSync(__dirname+"/init_db.sql").toString();// This is new? Do I need it ?

  //let sql = "DROP TABLE if exists recipes; CREATE TABLE recipes(id INT NOT NULL AUTO_INCREMENT, text VARCHAR(40) not null, complete BOOLEAN, PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `recipes` was successful!");

    console.log("Closing...");
  });

  con.end();
});


