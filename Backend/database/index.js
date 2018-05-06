const mongoose = require("mongoose");
const cars = require("./cars");

let dbConnection = null;

module.exports = {
  connect: connectToDatabase,
  resources: {
    cars
  }
};

function connectToDatabase() {
  return new Promise((resolve, reject) => {
    mongoose.connect("mongodb://localhost/car_marketplace");
    dbConnection = mongoose.connection;
    dbConnection.on("error", reject);
    dbConnection.once("open", resolve);
  });
}
