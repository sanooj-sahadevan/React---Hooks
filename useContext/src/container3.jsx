/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { UserContext } from "./container1";

function C() {
  const { name } = useContext(UserContext);

  return (
    <>
      <style>
        {`
          .box {
            border: solid 5px white;
            padding: 10px;
          }
        `}
      </style>
      <div className="box">
        <h3>Container 3</h3>
        <h2>{`child: ${name}`}</h2>
      </div>
    </>
  );
}

export default C;
