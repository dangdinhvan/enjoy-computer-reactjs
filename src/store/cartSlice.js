import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsNumber: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.itemsNumber += 1;
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
