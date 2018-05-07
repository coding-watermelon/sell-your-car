import { combineReducers } from 'redux';
import cars, { type CarStateType } from './cars';
import filter, { type FilterStateType } from './filter';

export type ReduxActionType = { type: string, payload?: {} };
export type StateType = {
  filter: FilterStateType,
  cars: CarStateType,
};

export default combineReducers({ cars, filter });
