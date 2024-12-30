import React, { FunctionComponent, useState, useEffect } from "react";
import { CounterProps } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store.tsx";
import { increment, decrement, reset } from "../store/counterSlice.tsx";

const MAX_COUNT = 10;
const MIN_COUNT = 0;

const Counter: FunctionComponent<CounterProps> = ({
    index,
  initialCount = 0,
  maxCount = 10,
  minCount = 0,
}) => {
  const [localCount, setLocalCount] = useState<number>(initialCount);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localCount > maxCount) {
      setLocalCount(maxCount);
    } else if (localCount < minCount) {
      setLocalCount(minCount);
    }
  }, [localCount, maxCount, minCount]);

  const incrementLocal = () => {
    if (localCount < maxCount) {
      setLocalCount(localCount + 1);
    }
  };

  const decrementLocal = () => {
    if (localCount > minCount) {
      setLocalCount(localCount - 1);
    }
  };

  const resetLocal = () => {
    setLocalCount(initialCount);
  };
  return (
    <div>
      <h2>Counter {index}</h2>
      <p>Local Count: {localCount}</p>
      <button onClick={incrementLocal} disabled={localCount >= maxCount}>
        Increment Local
      </button>
      <button onClick={decrementLocal} disabled={localCount <= minCount}>
        Decrement Local
      </button>
      <button onClick={resetLocal}>Reset Local</button>

      <p>Global Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment Global</button>
      <button onClick={() => dispatch(decrement())}>Decrement Global</button>
      <button onClick={() => dispatch(reset())}>Reset Global</button>
    </div>
  );
};

export default Counter;
