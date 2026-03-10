const express = require("express");
const router = express.Router();
const Lesson = require("../models/Lesson");
const authMiddleware = require("../middleware/authMiddleware");


// CREATE LESSON (Mentor only)
router.post("/", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "mentor") {
      return res.status(403).json({ message: "Only mentors can create lessons" });
    }

    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const lesson = await Lesson.create({
      title,
      description,
      mentor: req.user._id
    });

    res.json({
      message: "Lesson created successfully",
      lesson
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET ALL LESSONS
router.get("/", async (req, res) => {
  try {

    const lessons = await Lesson.find()
      .populate("mentor", "name email");

    res.json({
      total: lessons.length,
      lessons
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET SINGLE LESSON
router.get("/:id", async (req, res) => {
  try {

    const lesson = await Lesson.findById(req.params.id)
      .populate("mentor", "name email");

    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    res.json(lesson);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// UPDATE LESSON (Mentor only)
router.put("/:id", authMiddleware, async (req, res) => {
  try {

    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    if (lesson.mentor.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "You can update only your lessons" });
    }

    const { title, description } = req.body;

    lesson.title = title || lesson.title;
    lesson.description = description || lesson.description;

    await lesson.save();

    res.json({
      message: "Lesson updated successfully",
      lesson
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// DELETE LESSON (Mentor only)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {

    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    if (lesson.mentor.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "You can delete only your lessons" });
    }

    await lesson.deleteOne();

    res.json({
      message: "Lesson deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;