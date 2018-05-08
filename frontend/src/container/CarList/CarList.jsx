// @flow
import React from 'react';
import Container from '../../components/Styled/Container';
import CarInformation from '../../components/CarInformation';
import CarCreation from '../../components/CarCreationCard';

import type { CarType } from '../../api';
type PropsType = {
  cars: CarType[],
  onAddCar: CarType => void,
};

export default class CarList extends React.Component<PropsType> {
  render() {
    return (
      <Container>
        <CarCreation add={this.props.onAddCar} />
        {this.props.cars.map((car: CarType, index: number) => (
          <CarInformation key={index} {...car} />
        ))}
      </Container>
    );
  }
}
