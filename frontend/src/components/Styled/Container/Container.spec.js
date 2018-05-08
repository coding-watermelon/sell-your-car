// @flow
import React from 'react';
import CenteredContainer from './CenteredContent';
import Container from '.';
import { mount } from 'enzyme';

describe('Container Component', () => {
  it('should render correctly', () => {
    mount(<Container />);
  });
});
describe('CenteredContainer Component', () => {
  it('should render correctly', () => {
    mount(<CenteredContainer />);
  });
});
