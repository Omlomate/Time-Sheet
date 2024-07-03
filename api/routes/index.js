const express = require("express");
const router = express.Router();
const leaveController = require("../controllers/leaveController");
const workSummaryController = require("../controllers/workSummaryController");
const authenticateToken = require("../middleware/authMiddleware");

router.post("/apply-leave", authenticateToken, leaveController.applyLeave);
router.post(
  "/submit-work-summary",
  authenticateToken,
  workSummaryController.submitWorkSummary
);

module.exports = router;
