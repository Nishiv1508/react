import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./store/counterSlice";
import type { RootState, AppDispatch } from "./store/store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
    </div>
  );
}

export default App;
