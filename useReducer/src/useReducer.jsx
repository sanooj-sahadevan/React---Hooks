/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function xyz() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        ++
      </button>
      <h2>{count}</h2>
      <button onClick={() => dispatch("decrement")}>--</button>
    </div>
  );
}

export default xyz;
