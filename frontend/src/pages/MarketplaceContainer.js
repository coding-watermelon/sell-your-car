//@flow
import { connect } from 'react-redux';
import Marketplace from './Marketplace';

// actions
import { addCar } from '../reducers/cars';
import { postCar } from '../api';

const addNewCar = car => {
  return dispatch => {
    postCar(car).then(newCar => dispatch(addCar(newCar)));
  };
};

const mapStateToProps = (state, _ownProps) => ({
  cars: state.cars,
});

const mapDispatchToProps = (dispatch, _ownProps) => ({
  onAddCar: car => {
    dispatch(addNewCar(car));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);
