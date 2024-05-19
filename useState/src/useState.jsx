/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

function comonents() {
  const [name, SetName] = useState(0);
  const [messgae, SetMessage] = useState("");
  const [color, setColor] = useState("");



  const plus = () => {
    SetName((e)=>e+1);
    SetMessage("count increment");
    document.body.style.backgroundColor = "green";
    setColor("red");
  };

  const five = () => {
    SetName((e)=>e+5);
    SetMessage("count increment five");
    setColor("violet");
    document.body.style.backgroundColor = "yellow";
  };

  const reset = () => {
    SetName(0);
    SetMessage("count reset");
    setColor("black");
    document.body.style.backgroundColor = "black";
  };
  const minus = () => {
    SetName((e)=>e-1);
    SetMessage("count deccrement");
    setColor("blue");
    document.body.style.backgroundColor = "red";
  };

  return (
    <div style={{ background: color }}>
      <button className="btn" onClick={reset}>
        reset
      </button>

      <button className="btn" onClick={plus}>
        ouch++
      </button>
      <p>{name}</p>
      <button className="btn" onClick={minus}>
        ouch--
      </button>
      <button className="btn" onClick={five}>
        five++
      </button>

      <p>{messgae}</p>
    </div>
  );
}

export default comonents;
