import React from 'react';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import UseAnimations from 'react-useanimations';
// import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Drawer from './components/Drawer';
import Button from './components/Button';
import Nav from './components/Nav';

const H1 = styled.h1`
  color: orangered;
  mark {
    font-size: 0.5em;
    padding: 0 0.3em;
  }
`;

// const OpenClose = styled.div`
//   position: absolute;
//   top: 8px;
//   right: 8px;
//   width: 16px;
//   height: 16px;
//   background: orangered;
//   cursor: pointer;
//   &:hover {
//     background: yellow;
//   }
// `;

function App() {
  const counter = useSelector(state => state.counter);
  const navopen = useSelector(state => state.navopen);
  const dispatch = useDispatch();
  function toggleMenu(e) {
    console.log(e.target);
    dispatch({ type: 'TOGGLE_MENU' });
  }
  function detectClick(e) {
    console.log('outside:', e, e.target.closest('nav'));
  }
  return (
    <div className='App' onClick={detectClick}>
      <header className='App-header'>
        <UseAnimations animationKey='menu' size={50} />
        <H1>
          Counter: {counter < 0 ? counter * -1 : counter}{' '}
          <mark>from redux</mark>
        </H1>
        <Button primary onClick={() => dispatch({ type: 'INCREMENT' })}>
          INCREMENT
        </Button>
        <Button onClick={() => dispatch({ type: 'DECREMENT' })}>
          DECREMENT
        </Button>
      </header>
      <Nav navopen={navopen}>
        <div onClick={toggleMenu}>
          <UseAnimations animationKey='menu' className='hamburgericon' />
        </div>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </Nav>
      <Drawer>Some text...</Drawer>
    </div>
  );
}

export default App;
