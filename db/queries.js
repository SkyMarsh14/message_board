const pool = require("./pool");

async function addUser(user, text, added) {
  return await pool.query(
    "INSERT INTO users (username, text, added) VALUES ($1, $2, $3)",
    [text, user, added]
  );
}

module.exports = { addUser };
