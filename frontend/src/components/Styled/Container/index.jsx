// @flow
import styled from 'styled-components';

type PropsType = {
  width: ?string,
  height: ?string,
  fillColor: ?string,
  position: ?string,
  top: ?string,
};

const Container = styled.div`
  height: ${(props: PropsType) => props.height || '100%'};
  width: ${(props: PropsType) => props.height || '100%'};
  ${(props: PropsType) =>
    props.fillColor ? `background: ${props.fillColor};` : ''};
  ${(props: PropsType) =>
    props.position ? `position: ${props.position};` : ''};
  ${(props: PropsType) => (props.top ? `top: ${props.top};` : '')};
`;

export default Container;
