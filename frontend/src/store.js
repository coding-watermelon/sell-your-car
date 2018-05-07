import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// API Data
import * as api from './api';
import { addCar } from './reducers/cars';

function makeStore(initialState, middlewares) {
  let enhancer = null;
  if (!(process.env.NODE_ENV === 'production')) {
    enhancer = compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
  } else {
    enhancer = compose(applyMiddleware(...middlewares));
  }

  return createStore(reducers, initialState, enhancer);
}
const store = makeStore({}, [thunk]);

api.fetchCars().then(cars => {
  cars.forEach(car => {
    store.dispatch(addCar(car));
  });
});

export default store;
