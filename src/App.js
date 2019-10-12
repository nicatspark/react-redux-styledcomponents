import React from 'react';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import UseAnimations from 'react-useanimations';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const ButtonSC = styled.button`
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

const OpenClose = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  background: orangered;
  cursor: pointer;
  &:hover {
    background: yellow;
  }
`;

function App() {
  const counter = useSelector(state => state.counter);
  const navopen = useSelector(state => state.navopen);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <header className='App-header'>
        <UseAnimations animationKey='activity' size={50} />
        <H1>
          Counter: {counter < 0 ? counter * -1 : counter}{' '}
          <mark>from redux</mark>
        </H1>
        <Button onClick={() => dispatch({ type: 'INCREMENT' })}>
          INCREMENT
        </Button>
        <ButtonSC onClick={() => dispatch({ type: 'DECREMENT' })}>
          DECREMENT
        </ButtonSC>
      </header>
      <Nav navopen={navopen} onClick={() => dispatch({ type: 'TOGGLE_MENU' })}>
        {/* <OpenClose className='togglemenu' /> */}
        <UseAnimations animationKey='menu2' className='hamburgericon' />
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
