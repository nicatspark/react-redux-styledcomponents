import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
  background-color: red;
  border-radius: 2px;
  color: white;
`;
const H1 = styled.h1`
  color: orangered;
  mark {
    font-size: 0.5em;
    padding: 0 0.3em;
  }
`;
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: ${props => (props.navopen ? '0' : '-130px')};
  width: 200px;
  height: 100vh;
  background: #333;
  color: white;
  padding: 1rem;
  text-align: left;
  ul {
    padding: 0;
    li {
      list-style: none;
      margin: 0.5rem;
    }
  }
`;

const OpenClose = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  background: orangered;
  &:hover {
    background: yellow;
  }
`;

function App() {
  const counter = useSelector(state => state.counter);
  const navopen = useSelector(state => state.navopen);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <H1>
          Counter: {counter < 0 ? counter * -1 : counter}{' '}
          <mark>from redux</mark>
        </H1>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
          INCREMENT
        </button>
        <Button onClick={() => dispatch({ type: 'DECREMENT' })}>
          DECREMENT
        </Button>
      </header>
      <Nav navopen={navopen}>
        <OpenClose />
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </Nav>
    </div>
  );
}

export default App;
