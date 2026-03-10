// routes/studyPlan.js
const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

// Initialize OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Helper: mock response if API fails
function getMockStudyPlan(grade, subjects) {
  const subArr = subjects.split(",").map(s => s.trim()); // clean split
  return `
  Mock Study Plan for Grade ${grade}:
  Monday: ${subArr[0] || "Reading"} exercises
  Tuesday: ${subArr[1] || "Writing"}
  Wednesday: ${subArr[2] || "Grammar"}
  Thursday: ${subArr[0] || "Practice"}
  Friday: ${subArr[1] || "Experiments"}
  `;
}

// POST route
router.post("/study-plan", async (req, res) => {
  const { grade, subjects } = req.body;

  if (!grade || !subjects)
    return res.status(400).json({ message: "Missing grade or subjects" });

  try {
    // New OpenAI v4 method
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Create a weekly study plan for grade ${grade} with subjects: ${subjects}`,
        },
      ],
    });

    res.json({ studyPlan: response.choices[0].message.content });
  } catch (err) {
    console.warn("OpenAI API failed. Full error:", err.response?.data || err.message);

    // fallback to mock plan
    const mockPlan = getMockStudyPlan(grade, subjects);
    res.json({ studyPlan: mockPlan, note: "This is a mock response" });
  }
});

module.exports = router;