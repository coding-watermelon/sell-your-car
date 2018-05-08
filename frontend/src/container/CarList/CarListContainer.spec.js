// @flow
import React from 'react';
import { cars } from '../../test/carFactory';
import CarList from './index.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { mount } from 'enzyme';

// Redux
import { Provider } from 'react-redux';
import store from '../../store';

describe('CarListContainer', () => {
  it('should render correctly', () => {
    const carsState = cars(5);
    store.getState().cars = carsState;
    const component = mount(
      <MuiThemeProvider>
        <Provider store={store}>
          <CarList />
        </Provider>
      </MuiThemeProvider>
    );
    const CarListComponent = component
      .childAt(0)
      .childAt(0)
      .childAt(0);

    expect(CarListComponent.props().cars).toEqual(carsState);
  });

  it('should filter the carList correctly', () => {
    const carsState = cars(5);
    const uniqueHeadline = 'That is definitively a unique headline';
    carsState[0].headline = uniqueHeadline;

    // Set state appropriatly
    store.getState().cars = carsState;
    store.getState().filter = uniqueHeadline;
    const component = mount(
      <MuiThemeProvider>
        <Provider store={store}>
          <CarList />
        </Provider>
      </MuiThemeProvider>
    );
    const CarListComponent = component
      .childAt(0)
      .childAt(0)
      .childAt(0);

    expect(CarListComponent.props().cars).toHaveLength(1);
    expect(CarListComponent.props().cars).toEqual([carsState[0]]);
  });
});
