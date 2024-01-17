const express = require("express");
const cors = require("cors");

const postsRouter = require("./routers/posts.router");
const authRouter = require("./routers/auth.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/posts", postsRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Example API v1",
    success: true,
  });
});

module.exports = app;
