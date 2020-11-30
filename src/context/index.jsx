import React from "react";
import { ContextProvider, useGlobalState } from "./contextProvider";

const CounterView = () => {
  const { count, increment, decrement, reset } = useGlobalState();

  return (
    <div className="example">
      <h2>Context Example</h2>
      <h2>{count}</h2>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => reset()}>Reset</button>
      <br />
    </div>
  );
};

const Wrapper = () => (
  <ContextProvider>
    <CounterView />
  </ContextProvider>
);

export default Wrapper;
