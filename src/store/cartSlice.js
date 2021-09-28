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
      if (action.payload.currentQuantity >= action.payload.storageQuantity) {
        state.itemsNumber = state.itemsNumber;
      } else {
        state.itemsNumber += 1;
        if (state.products.length > 0) {
          for (let i = 0; i < state.products.length; i++) {
            if (state.products[i].id === action.payload.id) {
              state.products[i].currentQuantity += 1;
            } else {
              state.products.push(action.payload);
            }
          }
        } else {
          state.products.push(action.payload);
        }
      }
    },
    removeProduct: (state, action) => {
      state.itemsNumber -= 1;
      let productToDeleteIndex = state.products.findIndex(
        (productToDelete) => productToDelete.id === action.payload
      );
      state.products.splice(productToDeleteIndex, 1);
    },
    removeAllProducts: (state) => {
      state.itemsNumber = 0;
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, removeAllProducts } =
  cartSlice.actions;

export default cartSlice.reducer;
