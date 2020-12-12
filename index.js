const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config();

const Color = require("./lib/models/Color");

app.post("/colors", (req, res) => {
  Color.insert(req.body).then((color) => res.send(color));
});

app.get("/colors", (req, res) => {
  Color.find().then((color) => res.send(color));
});

app.get("/colors/:id", (req, res) => {
  Color.findByID(req.params.id).then((color) => res.send(color));
});

app.put("/colors/:id", (req, res) => {
  Color.update(req.params.id, req.body).then((color) => res.send(color));
});

app.delete("/colors/:id", (req, res) => {
  Color.delete(req.params.id).then((color) => res.send(color));
});

app.listen(7890, () => {
  console.log("Listening on port 7890");
});

module.exports = app;
