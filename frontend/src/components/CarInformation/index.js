// @flow
import React from 'react';
import Container from '../Styled/Container';
import { media } from '../Styled/mediaStyles';
import { Card, CardHeader, CardText } from 'material-ui/Card';

// Assets
import carIcon from '../../assets/car.png';

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
  headline: string,
  type: string,
  description: string,
  price: number,
};

export default class CarInformation extends React.Component<PropsType> {
  render() {
    return (
      <CardContainer>
        <Card>
          <CardHeader
            title={this.props.headline}
            avatar={carIcon}
            subtitle={this.props.type}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText>{this.props.price} €</CardText>
          <CardText expandable={true}>{this.props.description}</CardText>
        </Card>
      </CardContainer>
    );
  }
}
