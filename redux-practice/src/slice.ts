import { createSlice } from "@reduxjs/toolkit";

interface sampleState {
  item: number;
}

const initialState: sampleState = {
  item: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      return { ...state, item: state.item + 1 };
    },
    removeFromCart: (state) => {
      return { ...state, item: state.item - 1 };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
