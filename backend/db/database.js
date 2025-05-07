require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, process.env.DB_PATH || 'nonprofit.db');
console.log('Using DB at:', dbPath); 

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Could not connect to SQLite database', err);
  } else {
    console.log('Connected to SQLite database.');
  }
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
          user_id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL,
          role TEXT CHECK(role IN ('admin', 'volunteer', 'visitor')) NOT NULL DEFAULT 'visitor',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) {
          console.error("Failed to create 'users' table:", err);
        } else {
          console.log("Ensured 'users' table exists.");
        }
      });
      
});

module.exports = db;
