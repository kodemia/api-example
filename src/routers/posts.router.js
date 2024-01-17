const express = require("express");
const posts = require("../usecases/posts.usecase");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allPosts = await posts.getAll();

    res.json({
      success: true,
      message: "all posts",
      data: { posts: allPosts },
    });
  } catch (error) {
    res.status(error.status || 500).json({
      success: false,
      error: error.message,
    });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const newPostData = req.body;

    const newPost = await posts.create(newPostData);

    res.json({
      success: true,
      message: "post created",
      data: { post: newPost },
    });
  } catch (error) {
    res.status(error.status || 500).json({
      success: false,
      error: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const post = await posts.getById(id);

    res.json({
      success: true,
      message: `post ${id}`,
      data: { post },
    });
  } catch (error) {
    res.status(error.status || 500).json({
      success: false,
      error: error.message,
    });
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;

    const postUpdated = await posts.updateById(id, newData);

    res.json({
      success: true,
      message: `post ${id} updated`,
      data: { post: postUpdated },
    });
  } catch (error) {
    res.status(error.status || 500).json({
      success: false,
      error: error.message,
    });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;

    await posts.deleteById(id);

    res.json({
      success: true,
      message: `post ${id} deleted`,
    });
  } catch (error) {
    res.status(error.status || 500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
