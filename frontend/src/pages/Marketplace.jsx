// @flow
import React, { Component } from 'react';

import Container from '../components/Styled/Container';
import TopBar from '../components/TopBar';
import CarInformation from '../components/CarInformation';
import CarCreation from '../components/CarCreationCard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Marketplace extends Component<{}> {
  render() {
    return (
      <MuiThemeProvider>
        <Container position={'absolute'} top={'0'}>
          <TopBar />
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
