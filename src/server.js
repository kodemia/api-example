const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "API hola desde express",
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
