// @flow
const apiHost = `http://${process.env.REACT_APP_BACKEND_HOST || ''}`;

export type CarType = {
  headline: string,
  type: string,
  description: string,
  price: number,
};

export const fetchCars = () => {
  return fetch(`${apiHost}/cars`).then(res => res.json());
};

export const postCar = (car: CarType) => {
  return fetch(`${apiHost}/cars`).then(res => res.json());
};
