import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StoreProvider from "./storeProvider";
import { increment, decrement, reset } from "./actions";

const CounterView = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="example">
      <h2>Redux Example</h2>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

const Wrapper = () => (
  <StoreProvider>
    <CounterView />
  </StoreProvider>
);

export default Wrapper;
