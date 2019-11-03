import styled from 'styled-components';

export default styled.nav`
  position: fixed;
  top: 0;
  left: ${props => (props.navopen ? '0' : '-130px')};
  width: 200px;
  height: 100vh;
  background: #333;
  color: white;
  padding: 1rem;
  text-align: left;
  transition: all 200ms ease-out;
  &:hover .togglemenu {
    background: white;
  }
  ul {
    padding: 0;
    li {
      list-style: none;
      margin: 0.5rem;
    }
  }
`;
