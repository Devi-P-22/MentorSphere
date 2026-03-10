const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const authMiddleware = require("../middleware/authMiddleware");

// Create student (Parent only)
router.post("/", authMiddleware, async (req, res) => {
  if (req.user.role !== "parent") return res.status(403).json({ message: "Access denied" });
  const { name } = req.body;
  const student = await Student.create({ name, parent: req.user._id });
  res.json({ message: "Student created", student });
});

// Get parent students
router.get("/my-students", authMiddleware, async (req, res) => {
  if (req.user.role !== "parent") return res.status(403).json({ message: "Access denied" });
  const students = await Student.find({ parent: req.user._id });
  res.json({ students });
});

module.exports = router;