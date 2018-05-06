const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const carSchema = Schema({
  id: ObjectId,
  headline: String,
  type: String,
  description: String,
  price: Number
});
const Car = mongoose.model("Car", carSchema);

module.exports = {
  get,
  create,
  removeAll
};

function get(carId) {
  if (carId) {
    return getCarById(id);
  } else {
    return getAllCars();
  }
}

function getCarById(carId) {
  return new Promise((resolve, reject) => {
    Car.findById(carId, (err, foundCar) => {
      if (err) return reject(err);
      resolve(foundCar);
    });
  });
}

function getAllCars() {
  return new Promise((resolve, reject) => {
    Car.find(carId, (err, cars) => {
      if (err) return reject(err);
      resolve(cars);
    });
  });
}

function removeAll() {
  return new Promise((resolve, reject) => {
    Car.deleteMany({}, (err, cars) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

function create(carModel) {
  const newCar = new Car(carModel);
  return saveNewModel(newCar);
}

function saveNewModel(collectionObject) {
  return new Promise((resolve, reject) => {
    collectionObject.save((err, createdCollectionObject) => {
      if (err) return reject(err);
      resolve(createdCollectionObject);
    });
  });
}
