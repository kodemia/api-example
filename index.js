require("dotenv").config();
const db = require("./src/lib/db");
const server = require("./src/server");

const port = process.env.PORT || 8080;

db.connect()
  .then(() => {
    console.info("[DB] CONNECTED");
    server.listen(port, () => {
      console.log("Server listening on port:", port);
    });
  })
  .catch((error) => {
    console.error("[DB] CONNECTION ERROR:", error);
  });
