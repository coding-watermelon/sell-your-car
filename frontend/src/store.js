import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

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

export default makeStore({}, [thunk]);
