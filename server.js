const express = require("express");
const path = require("path");

PORT = 8080;

const app = express();

app.listen(PORT, () => {
  console.log("listening~");
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});
