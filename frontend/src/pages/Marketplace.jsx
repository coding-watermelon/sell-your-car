// @flow
import React, { Component } from 'react';

import Container from '../components/Styled/Container';
import TopBar from '../components/TopBar';
import CarList from '../container/CarList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import type { CarType } from '../api';
type PropsType = {
  setFilter: string => void,
  filter: string,
};

class Marketplace extends Component<PropsType> {
  render() {
    return (
      <MuiThemeProvider>
        <Container position={'absolute'} top={'0'}>
          <TopBar onChange={this.props.setFilter} value={this.props.filter} />
          <CarList />
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default Marketplace;
