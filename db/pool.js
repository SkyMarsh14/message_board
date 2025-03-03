const { Pool } = require("pg");
const { HOST, USER, DATABASE, PASSWORD, PORT } = process.env;
module.exports = new Pool({
  host: HOST,
  database: DATABASE,
  user: USER,
  password: PASSWORD,
  port: PORT,
});
