const WorkSummary = require("../models/workSummaryModel");

const submitWorkSummary = (req, res) => {
  const { employee_id, date, start_time, end_time, summary } = req.body;
  WorkSummary.submitWorkSummary(
    employee_id,
    date,
    start_time,
    end_time,
    summary,
    (err) => {
      if (err) {
        res.status(500).send({ message: "Error submitting work summary" });
      } else {
        res
          .status(200)
          .send({ message: "Work summary submitted successfully" });
      }
    }
  );
};

module.exports = {
  submitWorkSummary,
};
