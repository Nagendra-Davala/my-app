import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { removeFromCart } from "../store/slices/cartSlice";

export default function Cart() {
  const cartITems = useSelector((state: RootState) => state.cart);
  const code = useSelector((state: RootState) => state.currency);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Cart</h1>
      {cartITems.map((item) => (
        <div key={item.productId}>
          <h5>{item.productName}</h5>
          <p>
            {code}
            {item.productPrice}
          </p>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(removeFromCart(item.productId))}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
}
