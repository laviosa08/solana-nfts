// Environment variables
require("dotenv").config();

require("./config/database.js");
const app = require("express")();
const bodyParser = require("body-parser");

// CORS-Handeling
app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Headers", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Headers, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH");
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  } else {
    next();
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Express Settings
app.set("port", process.env.SERVER_PORT);

// Start server
app.listen(process.env.PORT || process.env.SERVER_PORT, "0.0.0.0", () => {
  console.log(
    `Express server listening on port ${process.env.SERVER_PORT} CONNECTED TO ${process.env.ENV}`
  );
});
