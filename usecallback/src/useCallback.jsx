/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onButtonClick }) => {
  console.log('Child component rendered');
  return (
    <button onClick={onButtonClick}>
      Click me
    </button>
  );
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>Count: {count}</p>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
