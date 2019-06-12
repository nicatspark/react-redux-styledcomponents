import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

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

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <H1>
          Counter: {counter < 0 ? counter * -1 : counter}{" "}
          <mark>from redux</mark>
        </H1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREMENT
        </button>
        <Button onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREMENT
        </Button>
      </header>
    </div>
  );
}

export default App;
