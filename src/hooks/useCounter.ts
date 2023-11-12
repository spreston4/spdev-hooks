import { useState } from "react";

interface UseCounterState {
  count: number;
  increment: (value?: number) => void;
  decrement: (value?: number) => void;
  reset: () => void;
}

const useCounter = (initialValue: number = 0): UseCounterState => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = (value: number = 1) =>
    setCount((current) => current + value);

  const decrement = (value: number = 1) =>
    setCount((current) => current - value);

  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

export default useCounter;
