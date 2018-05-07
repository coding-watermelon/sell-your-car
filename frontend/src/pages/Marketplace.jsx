// @flow
import React, { Component } from 'react';

import Container from '../components/Styled/Container';
import TopBar from '../components/TopBar';
import CarInformation from '../components/CarInformation';
import CarCreation from '../components/CarCreationCard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import type { CarType } from '../api';
type PropsType = {
  setFilter: string => void,
  filter: string,
  cars: CarType[],
  onAddCar: CarType => void,
};

class Marketplace extends Component<PropsType> {
  render() {
    return (
      <MuiThemeProvider>
        <Container position={'absolute'} top={'0'}>
          <TopBar onChange={this.props.setFilter} value={this.props.filter} />
          <Container>
            <CarCreation add={this.props.onAddCar} />
            {this.props.cars.map((car: CarType, index: number) => (
              <CarInformation key={index} {...car} />
            ))}
          </Container>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default Marketplace;
