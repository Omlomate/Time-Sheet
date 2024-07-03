const Leave = require("../models/leaveModel");

const applyLeave = (req, res) => {
  const { employee_id, date } = req.body;
  Leave.applyLeave(employee_id, date, (err) => {
    if (err) {
      res.status(500).send({ message: "Error applying leave" });
    } else {
      res.status(200).send({ message: "Leave applied successfully" });
    }
  });
};

module.exports = {
  applyLeave,
};
