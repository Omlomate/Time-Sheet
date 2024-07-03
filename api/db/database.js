const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:"); 

db.serialize(() => {
  // Create employees table
  db.run(`
    CREATE TABLE IF NOT EXISTS employees (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    )
  `);

  

  // Create leaves table
  db.run(`
    CREATE TABLE IF NOT EXISTS leaves (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      employee_id INTEGER,
      date TEXT
    )
  `);

  // Create work_summaries table
  db.run(`
    CREATE TABLE IF NOT EXISTS work_summaries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      employee_id INTEGER,
      date TEXT,
      start_time TEXT,
      end_time TEXT,
      summary TEXT,
      total_hours REAL
    )
  `);

  console.log("SQLite database connected and tables initialized.");
});

module.exports = db;
