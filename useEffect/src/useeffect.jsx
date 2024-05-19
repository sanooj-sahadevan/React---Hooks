/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

function ABC() {
  const [name, SetName] = useState(0);
 

  useEffect(() => {
    document.title = `click ${name}`;
  });


  const plus = () => {
    SetName((e)=>e+1);
 
  };

  

 
  const minus = () => {
    SetName((e)=>e-1);
 
  };

  return (
    <div >
     

      <button className="btn" onClick={plus}>
        ouch++
      </button>
      <p>{name}</p>
      <button className="btn" onClick={minus}>
        ouch--
      </button>
     
    </div>
  );
}


export default ABC;
