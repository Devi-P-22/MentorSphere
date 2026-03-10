const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");
const Student = require("../models/Student");
const Lesson = require("../models/Lesson");
const authMiddleware = require("../middleware/authMiddleware");


// CREATE BOOKING (Parent books lesson for student)
router.post("/", authMiddleware, async (req, res) => {
  try {

    if (req.user.role !== "parent") {
      return res.status(403).json({ message: "Only parents can book lessons" });
    }

    const { studentId, lessonId } = req.body;

    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const lesson = await Lesson.findById(lessonId);
    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    const booking = await Booking.create({
      student: studentId,
      lesson: lessonId
    });

    res.json({
      message: "Lesson booked successfully",
      booking
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET ALL BOOKINGS
router.get("/", authMiddleware, async (req, res) => {
  try {

    const bookings = await Booking.find()
      .populate("student")
      .populate("lesson");

    res.json({
      total: bookings.length,
      bookings
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// DELETE BOOKING
router.delete("/:id", authMiddleware, async (req, res) => {
  try {

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    await booking.deleteOne();

    res.json({
      message: "Booking cancelled"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;