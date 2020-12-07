const express = require("express");
const app = express();
const { Color } = require("./lib/models/Color");

app.post("/colors", async (req, res) => {
  const color = await Color.insert(req.body);
  res.send(color);
  // Color
  //   .insert(req.body)
  //   .then(color => res.send(color));
});

app.get("/colors", (req, res) => {
  Color.find().then((color) => res.send(color));
});

app.put("/colors", (req, res) => {
  Color.find().then((color) => res.send(color));
});

app.delete("/colors", (req, res) => {
  Color.find().then((color) => res.send(color));
});

module.exports = app;
