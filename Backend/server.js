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
app.get("/cars/:carId", (req, res) => {
  database.resources.cars
    .get(req.params.carId)
    .then(car => {
      if (car) {
        res.send(car);
      } else {
        res.sendStatus(418);
      }
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(505);
    });
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
