const express = require("express");
const router = express.Router();

const Session = require("../models/Session");
const Lesson = require("../models/Lesson");
const authMiddleware = require("../middleware/authMiddleware");


// CREATE SESSION (Mentor only)
router.post("/", authMiddleware, async (req, res) => {
  try {

    if (req.user.role !== "mentor") {
      return res.status(403).json({ message: "Only mentors can create sessions" });
    }

    const { lessonId, date, topic, summary } = req.body;

    const lesson = await Lesson.findById(lessonId);

    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    const session = await Session.create({
      lesson: lessonId,
      date,
      topic,
      summary
    });

    res.json({
      message: "Session created successfully",
      session
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET ALL SESSIONS
router.get("/", async (req, res) => {
  try {

    const sessions = await Session.find()
      .populate("lesson");

    res.json({
      total: sessions.length,
      sessions
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET SESSIONS BY LESSON
router.get("/lesson/:lessonId", async (req, res) => {
  try {

    const sessions = await Session.find({
      lesson: req.params.lessonId
    });

    res.json(sessions);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;