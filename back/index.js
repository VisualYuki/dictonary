const express = require("express");
const app = express();
const port = 3000;
//require("./bd");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/add", (req, res) => {
  res.send("add");
});

app.post("/post", (req, res) => {
  res.send("add");
});

app.get("/delete", (req, res) => {
  res.send("delete");
});

app.get("/delete", (req, res) => {
  res.send("Hello World12!");
});

app.get("/getAll", (req, res) => {
  res.send("Hello World12!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
