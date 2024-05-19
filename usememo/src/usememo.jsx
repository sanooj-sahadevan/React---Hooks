/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ num }) {
  const calculateFactorial = (n) => {
    console.log('Calculating factorial...');
    return n <= 1 ? 1 : n * calculateFactorial(n - 1);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const factorial = useMemo(() => calculateFactorial(num), [num]);

  return (
    <div>
      <h2>Factorial of {num} is {factorial}</h2>
    </div>
  );
}

function App() {
  const [num, setNum] = useState(1);

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>Increment Num</button>
      <ExpensiveComponent num={num} />
    </div>
  );
}

export default App;
