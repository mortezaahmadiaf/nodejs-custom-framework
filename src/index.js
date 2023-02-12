const express = require("express");
const app = express();
app.get("/", (re, res) => {
  res.send("hello world");
});
app.listen(3000, () => {
  console.log("express server start");
});
