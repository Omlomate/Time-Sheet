const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const db = require("./db/database");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/api", routes);

db.on("open", () => {
  console.log("SQLite database connection established.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
