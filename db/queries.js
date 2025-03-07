const pool = require("./pool");

async function addUser(user, text) {
  return await pool.query(
    "INSERT INTO messages (username, text) VALUES ($1, $2)",
    [user, text]
  );
}
async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}
module.exports = { addUser, getAllMessages };
