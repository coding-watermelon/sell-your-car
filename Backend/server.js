const express = require('express');
const validate = require('express-validation');
const Joi = require('joi');
const bodyParser = require('body-parser');
const database = require('./database');

const app = express();
app.use(bodyParser.json());
// Return all existing cars
app.get('/cars', (req, res) => {
  database.resources.cars
    .get()
    .then(cars => res.send(cars))
    .catch(err => {
      console.error(err);
      res.sendStatus(505);
    });
});

// Return one specific car
app.get('/cars/:carId', (req, res) => {
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
app.post(
  '/cars',
  validate({
    body: {
      headline: Joi.string().required(),
      type: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required(),
    },
  }),
  (req, res) => {
    database.resources.cars
      .create(req.body)
      .then(car => {
        res.send(car);
      })
      .catch(err => {
        console.error(err);
        res.sendStatus(505);
      });
  }
);

module.exports = database
  .connect()
  .then(() => {
    console.info('Connected to Database');
    const server = app.listen(3000, () =>
      console.info('Sell your car backend listening on port 3000!')
    );
    return server;
  })
  .catch(console.error);
