// @flow
import filter, { setFilter, SET_FILTER } from './filter.js';

describe('actions', () => {
  it('should create an action to set the filter', () => {
    const filterString = 'Carname';
    const expectedAction = {
      type: SET_FILTER,
      payload: filterString,
    };
    expect(setFilter(filterString)).toEqual(expectedAction);
  });
});

describe('reducer filter', () => {
  it('should return the initial state', () => {
    expect(filter(undefined, { type: 'UNRELATED_ACTION' })).toEqual('');
  });

  it('should handle ADD_CAR', () => {
    const filterString = 'Carname';

    expect(filter('', setFilter(filterString))).toEqual(filterString);
    expect(filter('Some Other Filter', setFilter(filterString))).toEqual(
      filterString
    );
    expect(filter(filterString, { type: 'UNRELATED_ACTION' })).toEqual(
      filterString
    );
  });
});
