# Sell-Your-Car &middot; [![Build Status](https://travis-ci.org/PetrykowskiM/sell-your-car.svg?branch=master)](https://travis-ci.org/PetrykowskiM/sell-your-car)

A demo application to add cars online.

## Backend

### Technology-Stack

* MongoDB
* Express-Server

### Routes

Providing a REST-Interface to insert car, get all existing cars as well as the details for one car

**GET** _/cars_ : Array of cars

**GET** _/cars/:carId_ : Details of one car

**POST** _/cars_ : Create new Car

### Tests

To run the test perform the following steps:

1.  Start the database from the root directory with `docker-compose up database`
2.  Run the script in _Backend/package.json_ by changing to Backend dir and run the script with

```
cd Backend
yarn test
```

or if you prefer npm

```
cd Backend
npm run test
```
