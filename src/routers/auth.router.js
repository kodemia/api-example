const express = require("express");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await auth.login(email, password);

    res.json({
      success: true,
      message: "logged in",
      data: { token },
    });
  } catch (error) {
    res.status(error.status || 500).json({
      success: false,
      error: error.message,
    });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const userData = req.body;

    const newUser = await auth.signup(userData);

    res.json({
      success: true,
      message: "user created",
      data: { user: newUser },
    });
  } catch (error) {
    res.status(error.status || 500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
