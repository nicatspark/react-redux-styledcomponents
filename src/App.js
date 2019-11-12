import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// Components
import Notifications from './components/Notifications';
import Header from './components/scds-header';
// CSS
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
// Utils
import { BreakpointProvider } from './utils/breakpoint';

// import { useSelector, useDispatch } from 'react-redux';
// import { Button } from 'semantic-ui-react';

const queries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 720px)',
  md: '(max-width: 1024px)',
  or: '(orientation: portrait)'
};

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #ccc;
  display: grid;
  grid-template-rows: 85px 1fr;
  grid-template-columns: 1fr;
  header {
    background: white;
  }
  section {
    background: url('/background.jpg') center center no-repeat;
    background-size: cover;
  }
`;

function App() {
  // const counter = useSelector(state => state.counter);
  // const dispatch = useDispatch();
  const node = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  function handleOutsideClick(e) {
    if (!node || !node.current) return;
    if (node.current.contains(e.target)) {
      // click detected inside cmpt having ref={node}
      return;
    }
    // outside click
    console.log(e.target);
  }

  return (
    <BreakpointProvider queries={queries}>
      <AppContainer>
        <Header />
        <section></section>
      </AppContainer>
      <Notifications>Some text...</Notifications>
    </BreakpointProvider>
  );
}

export default App;
