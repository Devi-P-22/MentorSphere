const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  },
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson"
  },
  score: Number,
  feedback: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Progress", progressSchema);