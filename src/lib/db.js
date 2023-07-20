const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const CONN_STR = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority `;

module.exports = function connect() {
  return mongoose.connect(CONN_STR);
};
