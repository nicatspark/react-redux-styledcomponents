import styled from 'styled-components';

export default styled.button`
  background-color: ${props => (props.primary ? 'red' : 'white')};
  border-radius: 2px;
  color: ${props => (props.primary ? 'white' : '#333')};
  padding: 0.5em 1em;
  min-width: 200px;
  height: 50px;
  font-size: 1rem;
  margin 0.3em;
`;
