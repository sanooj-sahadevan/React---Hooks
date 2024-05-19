/* eslint-disable no-unused-vars */
import React, { useState, createContext } from "react";
import Com2 from "./cointainer2";

export const UserContext = createContext();

function A() {
  const [name, setName] = useState('wedfrgb');

  return (
    <div className="box">
      <h3>yoy2</h3>
      <h4>{`lala${name}`}</h4>

      <UserContext.Provider value={{ name, setName }}>
        <Com2 />
      </UserContext.Provider>
    </div>
  );
}

export default A;
