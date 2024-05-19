/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {firstCounter:state.firstCounter + action.value}
    case "decrement":
      return {firstCounter:state.firstCounter - action.value}
    default:
      return state;
  }
};

function xyz2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>

<button onClick={() => dispatch({ type: "increment", value: 1 })}>
        --
      </button>
    
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        -5-
      </button>

      <h2>{count.firstCounter}</h2>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        --
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        -5-
      </button>
    </div>
  );
}

export default xyz2;
