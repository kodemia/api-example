const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

function hash(password) {
  return bcrypt.hashSync(password, SALT_ROUNDS);
}

function compare(plainText, hash) {
  return bcrypt.compareSync(plainText, hash);
}

module.exports = {
  hash,
  compare,
};
