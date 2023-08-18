const express = require("express");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 3000;
const html = require("../client/dist/index.html");

const app = express();

// app.use(express.static(path.join(__dirname + "/../client/dist/")));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  // res.send("Welcome to your Express-React app!");
  res.send(html);
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
