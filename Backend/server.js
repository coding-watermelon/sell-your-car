const express = require("express");
const app = express();

// Return all existing cars
app.get("/cars", (req, res) => {
  res.send({});
});

// Return one specific car
app.get("/cars/:id", (req, res) => {
  res.send({});
});

// Create a new car
app.post("/cars", (req, res) => {
  res.send({});
});

app.listen(3000, () =>
  console.log("Sell your car backend listening on port 3000!")
);
