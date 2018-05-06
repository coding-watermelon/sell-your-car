const express = require("express");
const app = express();
const database = require("./database");

// Return all existing cars
app.get("/cars", (req, res) => {
  database.resources.cars
    .get()
    .then(cars => res.send(cars))
    .catch(err => {
      console.error(err);
      res.sendStatus(505);
    });
});

// Return one specific car
app.get("/cars/:id", (req, res) => {
  res.send({});
});

// Create a new car
app.post("/cars", (req, res) => {
  res.send({});
});

module.exports = database
  .connect()
  .then(() => {
    console.info("Connected to Database");
    const server = app.listen(3000, () =>
      console.info("Sell your car backend listening on port 3000!")
    );
    return server;
  })
  .catch(console.error);
