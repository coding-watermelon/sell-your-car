// @flow
import React from 'react';
import TopBar from '.';
import { shallow } from 'enzyme';
import TextField from 'material-ui/TextField';

describe('TopBar Component', () => {
  it('should render correctly', () => {
    const component = shallow(<TopBar />);

    expect(component.find(TextField)).toHaveLength(1);
  });
});
