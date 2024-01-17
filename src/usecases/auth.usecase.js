const User = require("../models/user.model");
const encription = require("../lib/encription");
const jwt = require("../lib/jwt");

function login(email, password) {
  const user = User.findOne({ email });

  if (!user) {
    throw new Error("Invalid data");
  }

  const isPasswordValid = encription.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid data");
  }

  return jwt.sign({ id: user._id });
}

module.exports = {
  login,
};
