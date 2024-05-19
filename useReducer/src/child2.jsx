/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Parent from './App'

function xyz() {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState(0);

  const childhandle = () => {
    setState((e) => e + 1);
  };

  return (
    <div>
<h2>{state}</h2>
    <Parent  data = {childhandle} state = {state} />
    </div>
  );
}

export default xyz;
