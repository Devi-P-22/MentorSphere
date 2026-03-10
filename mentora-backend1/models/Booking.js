const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson", required: true },
  bookedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);