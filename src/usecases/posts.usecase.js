const Post = require("../models/post.model");

function getAll() {
  return Post.find();
}

function getById(id) {
  return Post.findById(id);
}

function create(post) {
  return Post.create(post);
}

function deleteById(id) {
  return Post.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
};
