const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson", required: true },
  date: { type: Date, required: true },
  topic: String,
  summary: String,
}, { timestamps: true });

module.exports = mongoose.model("Session", sessionSchema);