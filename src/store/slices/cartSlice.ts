import { createSlice } from "@reduxjs/toolkit";
import type { ProductType } from "../../Types";

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as ProductType[],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.productId !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
