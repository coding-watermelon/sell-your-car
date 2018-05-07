// @flow
const apiHost = `http://${process.env.REACT_APP_BACKEND_HOST}`;

export const fetchCars = () => {
  return fetch(`${apiHost}/cars`).then(res => res.json());
};

export const postCar = car => {
  return fetch(`${apiHost}/cars`).then(res => res.json());
};
