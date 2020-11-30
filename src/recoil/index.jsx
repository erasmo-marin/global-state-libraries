import React from "react";
import { RecoilRoot } from "recoil";
import useCounter from "./useCounter";

const CounterView = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="example">
      <h2>Recoil Example</h2>
      <h2>{count}</h2>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => reset()}>Reset</button>
      <br />
    </div>
  );
};

const Wrapper = () => (
  <RecoilRoot>
    <CounterView />
  </RecoilRoot>
);

export default Wrapper;
