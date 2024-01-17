const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Example API v1",
    success: true,
  });
});

module.exports = app;
