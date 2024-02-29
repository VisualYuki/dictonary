const express = require("express");
const app = express();
const port = 3000;
const Pool = require("pg").Pool;

const pool = new Pool({
  password: "root",
  user: "postgres",
  database: "dictonary",
  host: "localhost",
  port: 5432,
});

pool.connect();

//pool.query("Select * from words", (err, res) => {
//  debugger;
//});

app.use(bodyParser.json({ limit: "50mb" }));

app.use(function (req, res, next) {
  debugger;
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/add", (req, res) => {
  //res.send("add");

  debugger;

  pool.query("Select * from words", (err, res) => {
    debugger;
  });
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
