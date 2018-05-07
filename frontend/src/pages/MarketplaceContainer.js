//@flow
import { connect } from 'react-redux';
import Marketplace from './Marketplace';

// actions
import { setFilter } from '../reducers/filter';

import type { Dispatch } from 'redux';
import type { StateType } from '../reducers';

const mapStateToProps = (state: StateType) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFilter: (filter: string) => {
    dispatch(setFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);
