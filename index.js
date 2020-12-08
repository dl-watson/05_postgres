const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config();

const Color = require("./lib/models/Color");

// test route
const Artist = require("./lib/models/Artist");

app.post("/artist", (req, res) => {
  Artist.insert(req.body).then((artist) => res.send(artist));
});

app.get("/artist", (req, res) => {
  Artist.find().then((artist) => res.send(artist));
});
/*
A POST req containing this raw JSON to localhost:7890/colors successfully adds to the database
{
    "colorCode": "FFFFFF",
    "colorUrl": "https://www.test.com"
}
*/
app.post("/colors", (req, res) => {
  Color.insert(req.body).then((color) => res.send(color));
});

// GET validated in Postman
app.get("/colors", (req, res) => {
  Color.find().then((color) => res.send(color));
});

app.get("/colors/:id", (req, res) => {
  Color.findByID(req.params.id).then((color) => res.send(color));
});

// PUT validated in Postman
app.put("/colors/:id", (req, res) => {
  Color.update(req.params.id, req.body).then((color) => res.send(color));
});

// DELETE validated in Postman
app.delete("/colors/:id", (req, res) => {
  Color.delete(req.params.id).then((color) => res.send(color));
});

app.listen(7890, () => {
  console.log("Listening on port 7890");
});

module.exports = app;
