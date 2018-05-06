// @no-flow

import { css } from 'styled-components';

const deviceSizes = {
  desktop: 992,
  tablet: 768,
  phone: 376,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(deviceSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${deviceSizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
