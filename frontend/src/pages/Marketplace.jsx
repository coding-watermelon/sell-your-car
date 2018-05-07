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
};

class Marketplace extends Component<PropsType> {
  render() {
    return (
      <MuiThemeProvider>
        <Container position={'absolute'} top={'0'}>
          <TopBar onChange={this.props.setFilter} value={this.props.filter} />
          <Container>
            <CarCreation add={() => {}} />
            {this.props.cars.map(car => <CarInformation {...car} />)}
          </Container>
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default Marketplace;
