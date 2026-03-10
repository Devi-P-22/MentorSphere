const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");
const auth = require("../middleware/auth");

// Create progress
router.post("/", auth, async (req, res) => {
  try {
    const { student, lesson, score, feedback } = req.body;

    const progress = new Progress({
      student,
      lesson,
      score,
      feedback
    });

    await progress.save();

    res.json({
      message: "Progress recorded",
      progress
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get student progress
router.get("/student/:id", auth, async (req, res) => {
  try {
    const progress = await Progress.find({ student: req.params.id })
      .populate("lesson", "title");

    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;