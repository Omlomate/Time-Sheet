const db = require("../db/database");

const applyLeave = (employee_id, date, callback) => {
  const query = `INSERT INTO leaves (employee_id, date) VALUES (?, ?)`;
  db.run(query, [employee_id, date], function (err) {
    if (err) {
      console.error("Error applying leave:", err);
      callback(err);
      return;
    }
    console.log("Leave applied successfully");
    callback(null);
  });
};

const getLeaveByDate = (employee_id, date, callback) => {
  const query = `SELECT * FROM leaves WHERE employee_id = ? AND date = ?`;
  db.get(query, [employee_id, date], (err, row) => {
    callback(err, row);
  });
};

module.exports = {
  applyLeave,
  getLeaveByDate,
};
