const pool = require("./pool");

async function addUser(user, text, added) {
  return await pool.query(
    "INSERT INTO users (username, text, added) VALUES ($1, $2, $3)",
    [user, text, added]
  );
}
async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM users");
  return rows;
}
module.exports = { addUser, getAllMessages };
