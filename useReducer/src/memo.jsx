/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

//   // Expensive calculation function
//   const calculateExpensiveValue = (num) => {
//     console.log('Calculating expensive value...');
//     let result = 0;
//     for (let i = 0; i < num; i++) {
//       result += i;
//     }
//     return result;
//   };


const handle = (()=>{
    setCount((c)=>c+1)
})
//   // Memoized result using useMemo
// //   const memoizedValue = useMemo(() => calculateExpensiveValue(count), [count]);

const x = useMemo(()=>{
    for(let i=0;i<100;i++){
        console.log('memo');
    }
},[])

  return (

    <div>
        <button onClick={handle}></button>
        <h2>{count}</h2>
    </div>
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <h3>Memoized Value: {calculateExpensiveValue}</h3>
//     </div>
  );
};

export default MyComponent;
