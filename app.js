const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(PORT, () => {
  console.log("Server is listening to port 8080");
});

module.exports = app;
