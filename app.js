"use strick"
var express = require("express");
var routes = require("./routes/index");
var bodyParser = require("body-parser");
var app = express();

app.listen(3000, ()=> {
  console.log("server start on port 3000");
});

app.use(bodyParser.urlencoded({ extened: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.use((req, res) => {
  var err = new Error('not found');
  err.status = 404;
  console.log(err.message);
  res.status(err.status || 500);
  res.json(err.message);
});

module.exports = app;