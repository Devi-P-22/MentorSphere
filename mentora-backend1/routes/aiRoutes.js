const express = require("express");
const router = express.Router();

router.post("/homework", async (req, res) => {
  try {

    const { subject, grade, topic } = req.body;

    const homework = `
Homework for Grade ${grade}

Subject: ${subject}
Topic: ${topic}

1. Explain the concept of ${topic}.
2. Solve 5 problems related to ${topic}.
3. Write a short summary of what you learned.
`;

    res.json({
      message: "Homework generated",
      homework
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;