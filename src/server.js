const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Express API",
    success: true,
  });
});

app.get("/test", (req, res) => {
  res.json({
    message: "test route working",
    success: true,
  });
});

module.exports = app;
