const express = require("express");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();

// app.use(express.static(path.join(__dirname + "/../client/dist/")));
app.use(express.json());
app.use(cors());

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
