// @flow
import type { ReduxActionType } from './';
import type { CarType } from '../api';

export const ADD_CAR = 'ADD_CAR';
export const addCar = (car: CarType) => ({
  type: ADD_CAR,
  payload: car,
});

type CarActionType = { type: 'ADD_CAR', payload: CarType };
type CarStateType = CarType[];

const cars = (
  state: CarStateType = [],
  action: CarActionType | ReduxActionType
) => {
  switch (action.type) {
    case ADD_CAR:
      return [...state, action.payload];
    default:
      return [...state];
  }
};

export default cars;
