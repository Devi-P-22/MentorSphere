const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Student = require("../models/Student");
const Lesson = require("../models/Lesson");
const Progress = require("../models/Progress");

const auth = require("../middleware/auth");

// Admin Dashboard
router.get("/dashboard", auth, async (req, res) => {
  try {

    const totalUsers = await User.countDocuments();
    const totalStudents = await Student.countDocuments();
    const totalLessons = await Lesson.countDocuments();
    const totalProgress = await Progress.countDocuments();

    res.json({
      totalUsers,
      totalStudents,
      totalLessons,
      totalProgress
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;