/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function Child({ data, state }) { // Receive state as a prop
  const handlee = () => {
    data(); // Call the function received from the parent
  };

  return (
    <div>
      <button onClick={handlee}>Increment Parent State</button>
      <p>Current State: {state}</p> {/* Display the state value */}
    </div>
  );
}

export default Child;
