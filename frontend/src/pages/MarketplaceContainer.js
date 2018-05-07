//@flow
import { connect } from 'react-redux';
import Marketplace from './Marketplace';

// actions
import { addCar } from '../reducers/cars';
import { setFilter } from '../reducers/filter';
import { postCar } from '../api';

const addNewCar = car => {
  return dispatch => {
    postCar(car).then(newCar => dispatch(addCar(newCar)));
  };
};

const mapStateToProps = (state, _ownProps) => ({
  cars: state.cars,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onAddCar: car => {
    dispatch(addNewCar(car));
  },
  setFilter: (filter: string) => {
    dispatch(setFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);
