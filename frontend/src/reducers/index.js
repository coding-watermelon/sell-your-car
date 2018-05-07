import { combineReducers } from 'redux';
import cars from './cars';
import filter from './filter';

export type ReduxActionType = { type: string, payload?: {} };

export default combineReducers({ cars, filter });
