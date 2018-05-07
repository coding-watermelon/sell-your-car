// @flow
import type { ReduxActionType } from './';

export const SET_FILTER = 'SET_FILTER';
export const setFilter = (filter: string) => ({
  type: SET_FILTER,
  payload: filter,
});

type FilterActionType = { type: 'SET_FILTER', payload: string };

const filter = (
  state: string = '',
  action: ReduxActionType | FilterActionType
) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filter;
