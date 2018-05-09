import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Application
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// API Data
import * as api from './api';
import { addCar } from './reducers/cars';

// fetch initial data
api.fetchCars().then(cars => {
  cars.forEach(car => {
    store.dispatch(addCar(car));
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
