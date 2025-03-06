#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  text VARCHAR(255),
  added_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text) 
VALUES
  ('Bryan', 'How\\'s it going?'),
  ('Odin', 'Hello, world!'),
  ('Damon', 'Another day, another message.'),
`;

async function main() {
  console.log("Seeding database...");

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Seeding complete.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.end();
  }
}

main();
