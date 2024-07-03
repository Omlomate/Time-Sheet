const db = require("../db/database");
const moment = require("moment");

const calculateTotalHours = (start_time, end_time) => {
  const start = moment(start_time, "HH:mm A");
  const end = moment(end_time, "HH:mm A");
  const duration = moment.duration(end.diff(start));
  return duration.asHours();
};

const submitWorkSummary = (
  employee_id,
  date,
  start_time,
  end_time,
  summary,
  callback
) => {
  const total_hours = calculateTotalHours(start_time, end_time);
  const query = `INSERT INTO work_summaries (employee_id, date, start_time, end_time, summary, total_hours) VALUES (?, ?, ?, ?, ?, ?)`;
  db.run(
    query,
    [employee_id, date, start_time, end_time, summary, total_hours],
    function (err) {
      if (err) {
        console.error("Error inserting work summary:", err);
        callback(err);
        return;
      }
      console.log("Work summary inserted successfully");
      callback(null);
    }
  );
};

const getWorkSummaryByDate = (employee_id, date, callback) => {
  const query = `SELECT start_time, end_time, summary, total_hours FROM work_summaries WHERE employee_id = ? AND date = ?`;
  db.get(query, [employee_id, date], (err, row) => {
    callback(err, row);
  });
};

module.exports = {
  submitWorkSummary,
  getWorkSummaryByDate,
};
