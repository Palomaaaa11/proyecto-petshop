const mysql = require('mysql2/promise');

const { connect } = require('./api/mainapi');

const { DBNAME, DBUSER, DBPASS, DBHOST } = process.env;

const db = mysql.createPool({
  host: DBHOST,
  user: DBUSER,
  password: DBPASS,
  database: DBNAME,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;