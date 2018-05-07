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

type StateItemType<ValueType> = {
  value: ValueType,
  showError: boolean,
};
type StateType = {
  Headline: StateItemType<string>,
  Type: StateItemType<string>,
  Price: StateItemType<number>,
  Description: StateItemType<string>,
};

export default class CarInformation extends React.Component<
  PropsType,
  StateType
> {
  state = {
    Headline: { value: '', showError: false },
    Type: { value: '', showError: false },
    Price: { value: null, showError: false },
    Description: { value: '', showError: false },
  };

  createCar = () => {
    const isFormValid = Object.keys(this.state).reduce(
      // $FlowFixMe
      (previousValue: string, currentKey: string) => {
        const isCurrentKeyValid = this.state[currentKey].value;
        if (!isCurrentKeyValid) {
          this.setState({
            [currentKey]: {
              ...this.state[currentKey],
              showError: true,
            },
          });
        }
        return previousValue && isCurrentKeyValid;
      },
      true
    );
    if (!isFormValid) {
      return;
    }
    this.props.add({
      headline: this.state.Headline.value,
      type: this.state.Type.value,
      price: this.state.Price.value,
      description: this.state.Description.value,
    });
    this.setState({
      Headline: { value: '', showError: false },
      Type: { value: '', showError: false },
      Price: { value: 0, showError: false },
      Description: { value: '', showError: false },
    });
  };

  setValue = (key: string, value: string) => {
    this.setState({
      [key]: {
        ...this.state[key],
        value,
      },
    });
  };

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
            {Object.keys(this.state).map((key: string) => {
              return (
                <TextField
                  key={key}
                  hintText={key}
                  errorText={
                    this.state[key].showError ? 'This field is required' : null
                  }
                  fullWidth
                  type={key === 'price' ? 'number' : 'text'}
                  value={this.state[key].value || ''}
                  onChange={(_, newValue) => this.setValue(key, newValue)}
                />
              );
            })}
          </CardText>
          <CardActions expandable={true}>
            <FlatButton label="Add" onClick={() => this.createCar()} />
          </CardActions>
        </Card>
      </CardContainer>
    );
  }
}
