// @flow
import { media } from '../mediaStyles';
import Container from './';

const CenteredContent = Container.extend`
  width: auto;
  height: auto;
  margin: 0 1em;
  margin-top: 5rem;

  ${media.desktop`
    margin-left: 3rem;
    margin: 0 30%;
    margin-top: 5rem;
  `};
`;

export default CenteredContent;
