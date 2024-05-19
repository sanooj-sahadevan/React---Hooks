/* eslint-disable no-unused-vars */
import React, { useState, createContext } from "react";
import Com2 from "./cointainer2";

export const UserContext = createContext();

function A() {
  const [name, setName] = useState(""); // Initialize with an empty string

  const handleFun = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="container">
      <input type="text" placeholder="Enter your data" onChange={handleFun} />
      <div className="box">
        <h3>Container 1</h3>
        <h4>{`Parent: ${name}`}</h4>

        <UserContext.Provider value={{ name, setName }}>
          <Com2 />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default A;
