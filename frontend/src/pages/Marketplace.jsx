// @flow
import React, { Component } from 'react';

import Container from '../components/Styled/Container';
import TopBar from '../components/TopBar';
import CarInformation from '../components/CarInformation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Marketplace extends Component<{}> {
  render() {
    return (
      <MuiThemeProvider>
        <Container fillColor={'#3f3f3f9c'} position={'absolute'} top={'0'}>
          <TopBar />
          <CarInformation
            type={'Audi'}
            description="Lorem Ipsum dolor sit amet, asdfkhasdjfh,d adfjh dhjsakh djasdjhf hdkjh djs dh hasjdoue dhjsk.!"
            headline="Great Headline!"
            price={200000}
          />
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default Marketplace;
