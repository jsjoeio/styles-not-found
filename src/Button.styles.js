import styled from 'styled-components';

export default styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  margin: 0 10px;
  padding: 8px 18px;
  color: ${props => {
    if (
      props.variant === 'main' &&
      props.color !== 'white'
    ) {
      return props.theme.white.main;
    } else if (props.color !== 'white') {
      return props.theme[props.color].main;
    } else {
      return props.theme.dark.main;
    }
  }};
  background-color: ${props =>
    props.theme[props.color][props.variant]};
`;
