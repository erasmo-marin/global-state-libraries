import React from "react";
import CounterStore from "./store";
import { observer } from "mobx-react";

const CounterView = observer(() => {
  const { count } = CounterStore;

  return (
    <div className="example">
      <h2>Mobx Example</h2>
      <h2>{count}</h2>
      <button onClick={() => CounterStore.decrement()}>-</button>
      <button onClick={() => CounterStore.increment()}>+</button>
      <button onClick={() => CounterStore.reset()}>Reset</button>
      <br />
    </div>
  );
});

export default CounterView;
