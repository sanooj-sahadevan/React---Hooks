/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import Counter from "./useReducer";
import CounterTwo from "./useReducer2";
import Con1 from "./container1";
import Memo from "./memo";
import React, { useState } from "react";
import Child from "./child";
import "./App.css";
import Child2 from "./child2";
import Trail from "./trail";

function App({ data, state }) {
  // const [state,setstate] = useState(0)
  //   const handle = ()=>{
  // data()
  //   }
  // const handle = ()=>{
  //   setstate(state+1)
  // }
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CounterTwo /> */}
      {/* <Con1 /> */}
      {/* <Memo/> */}
      {/* <Child data=  {handle} state = {state}     /> */}
      {/* <div className="App">
      <p>Parent State: {state}</p>
      <button onClick={data}>Increment Parent State</button>
    </div> */}

     
      <Trail />
    </div>
  );
}

export default App;
