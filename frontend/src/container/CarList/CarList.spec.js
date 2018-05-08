// @flow
import React from 'react';
import { cars } from '../../test/carFactory';
import CarList from './CarList';
import CarCreation from '../../components/CarCreationCard';
import CarInformation from '../../components/CarInformation';
import { shallow, type ShallowWrapper } from 'enzyme';

describe('CarList', () => {
  it('should render correctly', () => {
    const component = shallow(<CarList cars={[]} />);

    expect(component.find(CarCreation)).toHaveLength(1);
    expect(component.find(CarInformation)).toHaveLength(0);
  });

  it('should render a list of cars', () => {
    const carItems = cars(3);
    const component = shallow(<CarList cars={carItems} />);

    expect(component.find(CarInformation)).toHaveLength(3);

    // Check whether props are correctly passed through
    component
      .find(CarInformation)
      .forEach((CarListItem: ShallowWrapper, index: number) => {
        expect(CarListItem.props()).toEqual(carItems[index]);
      });
  });
});
