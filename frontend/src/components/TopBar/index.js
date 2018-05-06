// @flow
import React from 'react';
import Container from '../Styled/Container';
import TextField from 'material-ui/TextField';
import { media } from '../Styled/mediaStyles';
import { orange500, orange200, green500 } from 'material-ui/styles/colors';

type PropsType = {
  dark?: boolean,
};

const TopContainer = Container.extend`
  position: relative;
  text-align: center;
  top: 0;
  height: auto;
  z-index: 10;
  width: 100%;
  background: ${(props: PropsType) => (props.dark ? '#4079d6e0' : 'none')};

  ${media.desktop`
    width: initial;
  `};
`;

const SearchWrapper = Container.extend`
  padding: 1rem;
  width: calc(100% - 2rem);

  ${media.desktop`
    width: 33%;
    display: inline-table;
  `};
`;

const textFieldStyles = {
  borderColor: green500,
  color: 'white',
  fontSize: '24px',
  fontWeight: 100,
};

export default class TopBar extends React.Component<{}> {
  render() {
    return (
      <TopContainer>
        <SearchWrapper>
          <TextField
            hintText="Search"
            underlineStyle={textFieldStyles}
            underlineFocusStyle={textFieldStyles}
            underlineDisabledStyle={textFieldStyles}
            hintStyle={textFieldStyles}
            inputStyle={textFieldStyles}
            underlineShow={true}
            fullWidth={true}
          />
        </SearchWrapper>
      </TopContainer>
    );
  }
}
