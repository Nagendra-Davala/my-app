import { useDispatch } from "react-redux";
// import { store } from "../store";
import { setCurrency } from "../store/slices/currencySlice";

export default function Currency() {
  const codes = ["INR", "USD", "EUR", "GBP", "JPY"];
  const dispatch = useDispatch();
  return (
    <select onChange={(e) => dispatch(setCurrency(e.target.value))}>
      {codes.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}
