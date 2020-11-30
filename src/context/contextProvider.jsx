import React, { createContext, useState, useContext } from "react";

const CounterContext = createContext(0);

const ContextProvider = ({ children }) => {
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

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

const useGlobalState = () => useContext(CounterContext);

export { ContextProvider, useGlobalState };
