require("dotenv").config();
const dbConnect = require("./src/lib/db");
const server = require("./src/server");

const port = process.env.PORT || 8080;

dbConnect().then(() => {
  console.info("DB CONNECTED");
  server.listen(port, () => {
    console.log("Server listening on port:", port);
  });
});
