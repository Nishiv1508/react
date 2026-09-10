import { addToCart, removeFromCart } from "./slice";
import { useAppDispatch, useAppSelector } from "./hooks";
// import { useSelector, useDispatch } from "react-redux";

function App() {
  const cartItem = useAppSelector((state) => state.item);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>Cart: {cartItem}</p>
      <button onClick={() => dispatch(addToCart())}>Add</button>
      <button onClick={() => dispatch(removeFromCart())}>Remove</button>
    </div>
  );
}

export default App;
