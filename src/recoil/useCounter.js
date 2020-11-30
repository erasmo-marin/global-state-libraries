import { useRecoilState } from "recoil";
import { counterState } from "./atoms";

const useCounter = () => {
  const [count, setCount] = useRecoilState(counterState);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;
