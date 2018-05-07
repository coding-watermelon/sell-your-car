//@flow
import { connect } from 'react-redux';
import CarList from './CarList';

// actions
import { addCar } from '../../reducers/cars';
import { postCar, type CarType } from '../../api';

import type { Dispatch } from 'redux';
import type { StateType } from '../../reducers';

const addNewCar = (car: CarType) => {
  return (dispatch: Dispatch) => {
    postCar(car).then(newCar => dispatch(addCar(newCar)));
  };
};

const mapStateToProps = (state: StateType) => ({
  cars: state.cars.filter((car: CarType) => {
    return (
      car.headline.toUpperCase().includes(state.filter.toUpperCase()) ||
      car.type.toUpperCase().includes(state.filter.toUpperCase()) ||
      car.description.toUpperCase().includes(state.filter.toUpperCase()) ||
      (car.price + '').toUpperCase().includes(state.filter.toUpperCase())
    );
  }),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddCar: (car: CarType) => {
    dispatch(addNewCar(car));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
