// @flow
import React from 'react';
import Container from '../Styled/Container';
import { media } from '../Styled/mediaStyles';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import type { CarType } from '../../api';

// Assets
import addIcon from '../../assets/add.png';

const CardContainer = Container.extend`
  height: initial;
  width: calc(100% - 2rem);
  padding: 1rem;
  display: inline-table;

  ${media.desktop`
    width: calc( 25% - 2rem );
  `};
`;

type PropsType = {
  add: CarType => void,
};

export default class CarInformation extends React.Component<PropsType> {
  render() {
    return (
      <CardContainer>
        <Card>
          <CardHeader
            title="Add new car"
            subtitle="Enter information here"
            avatar={addIcon}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <TextField hintText="Headline" fullWidth />
            <TextField hintText="Type" fullWidth />
            <TextField hintText="Price" type="number" fullWidth />
            <TextField hintText="Description" fullWidth />
          </CardText>
          <CardActions expandable={true}>
            <FlatButton label="Add" onClick={this.props.add} />
          </CardActions>
        </Card>
      </CardContainer>
    );
  }
}
