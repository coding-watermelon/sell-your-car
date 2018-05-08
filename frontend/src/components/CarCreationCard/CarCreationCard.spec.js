// @flow
import React from 'react';
import { cars } from '../../test/carFactory';
import CarCreation from '.';
import { shallow } from 'enzyme';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

describe('CarList', () => {
  it('should render correctly', () => {
    const addCar = jest.fn();
    const component = shallow(<CarCreation add={addCar} />);

    expect(component.find(TextField)).toHaveLength(4);
    expect(component.find(FlatButton)).toHaveLength(1);
  });

  it('should not trigger addCar for invalid form', () => {
    const addCar = jest.fn();
    const component = shallow(<CarCreation add={addCar} />);
    component.find(FlatButton).simulate('click');
    expect(addCar.mock.calls).toHaveLength(0);
  });

  it('should trigger addCar for valid form', () => {
    const addCar = jest.fn();
    const component = shallow(<CarCreation add={addCar} />);
    const carInfo = cars(1);

    component.setState({
      Headline: { value: carInfo.headline },
      Description: { value: carInfo.description },
      Price: { value: carInfo.price },
      Type: { value: carInfo.type },
    });

    component.find(FlatButton).simulate('click');
    expect(addCar.mock.calls).toHaveLength(1);
  });

  it('should show Error for invalid form', () => {
    const addCar = jest.fn();
    const component = shallow(<CarCreation add={addCar} />);
    const carInfo = cars(1);

    expect(component.state().Description.showError).toBe(false);
    component.setState({
      Headline: { value: carInfo.headline },
      Description: { value: '' },
      Price: { value: carInfo.price },
      Type: { value: carInfo.type },
    });

    component.find(FlatButton).simulate('click');
    expect(component.state().Description.showError).toBe(true);
    expect(addCar.mock.calls).toHaveLength(0);
  });
});
