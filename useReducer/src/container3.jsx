/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { UserContext } from "./container1";

function C() {
  const { name } = useContext(UserContext);

  return (
    <div className="box">
      <h3>yoyo3</h3>
      <h2>{`child${name}`}</h2>
    </div>
  );
}

export default C;
