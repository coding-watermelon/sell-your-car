const HEADLINES = [
  "Look at this cheap car",
  "Good looking, loved car",
  "Car searches for new owner",
  "Wanna drive a fast car?"
];

const TYPES = ["Porsche", "VW", "Fiat", "Audi"];

const DESCRIPTIONS = [
  "I always loved my car and treated it like my own child.",
  "This car has already experienced lots of intense races. Clutch has just been exchanged.",
  "I got this car when I joined university, now that I am settled with my wife, I do not need it any longer"
];

module.exports = {
  cars
};

function cars(amount) {
  const cars = [];
  for (var i = 0; i < amount; i++) {
    cars.push(createRandomCar());
  }
  if (amount === 1) return cars[0];
  return cars;
}

function createRandomCar() {
  return {
    headline: chooseRandomItem(HEADLINES),
    type: chooseRandomItem(TYPES),
    description: chooseRandomItem(DESCRIPTIONS),
    price: Math.round(Math.random() * 20000 + 5000)
  };
}

function chooseRandomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
