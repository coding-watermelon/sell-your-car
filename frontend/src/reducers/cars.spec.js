// @flow
import { cars as createCars } from '../test/carFactory.js';
import cars, { addCar, ADD_CAR } from './cars.js';

describe('actions', () => {
  it('should create an action to add a car', () => {
    const car = createCars(1);
    const expectedAction = {
      type: ADD_CAR,
      payload: car,
    };
    expect(addCar(car)).toEqual(expectedAction);
  });
});

describe('reducer cars', () => {
  it('should return the initial state', () => {
    expect(cars(undefined, {})).toEqual([]);
  });

  it('should handle ADD_CAR', () => {
    const car1 = createCars(1);
    const car2 = createCars(1);

    expect(cars([], addCar(car1))).toEqual([car1]);
    expect(cars([car1], addCar(car2))).toEqual([car1, car2]);
  });
});
