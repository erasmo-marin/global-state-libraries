import React, { useState } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return { increment, decrement, reset, count };
};

const CounterView = () => {
  const { increment, decrement, reset, count } = useCounter(0);

  return (
    <div className="example">
      <h2>LocalState Example</h2>
      <h2>{count}</h2>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => reset()}>Reset</button>
      <br />
    </div>
  );
};

export default CounterView;
