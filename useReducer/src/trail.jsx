// eslint-disable-next-line no-unused-vars
import React, { useReducer } from "react";
const inzilation = 0;

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

function XYZ() {
  const [count, dispatch] = useReducer(reducer, inzilation);

  return (
    <div>
      <button onClick={() => dispatch("increment")}> ++ </button>
      <p> {count} </p>
      <button onClick={() => dispatch("decrement")}> -- </button>
    </div>
  );
}

export default XYZ;
