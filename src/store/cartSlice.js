import { createSlice } from "@reduxjs/toolkit";

let itemsNumberDefault = 0;
let productsDefault = [];
const getData = () => {
  for (let i = 0; i < localStorage.length; i++) {
    let data = JSON.parse(localStorage.getItem(localStorage.key(i)));
    itemsNumberDefault += data.currentQuantity;
    productsDefault.push(data);
  }
};
getData();

const initialState = {
  itemsNumber: itemsNumberDefault,
  products: productsDefault,
  outOfStock: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      if (state.products.length > 0) {
        let newProducts = state.products.filter(
          (product) => product.id === action.payload.id
        );
        if (newProducts.length > 0) {
          for (let i = 0; i < state.products.length; i++) {
            if (state.products[i].id === newProducts[0].id) {
              if (
                state.products[i].currentQuantity <
                state.products[i].storageQuantity
              ) {
                state.products[i].currentQuantity += 1;
                state.itemsNumber += 1;
              } else {
                state.outOfStock = true;
              }
              break;
            }
          }
        } else {
          state.products.push(action.payload);
          state.itemsNumber += 1;
        }
      } else {
        state.products.push(action.payload);
        state.itemsNumber += 1;
      }

      localStorage.clear();
      state.products.forEach((product) => {
        localStorage.setItem(`product${product.id}`, JSON.stringify(product));
      });
    },

    backOutOfStockDefault: (state) => {
      state.outOfStock = false;
    },

    removeProduct: (state, action) => {
      state.itemsNumber -= JSON.parse(
        localStorage.getItem(`product${action.payload}`)
      ).currentQuantity;
      localStorage.removeItem(`product${action.payload}`);

      let indexToDelete = state.products.findIndex(
        (product) => product.id === action.payload
      );

      state.products.splice(indexToDelete, 1);
    },
    removeAllProducts: (state) => {
      state.itemsNumber = 0;
      localStorage.clear();
      state.products = [];
    },
    minusProductQuantity: (state, action) => {
      state.products.forEach((product) => {
        if (product.id === action.payload) {
          if (product.currentQuantity > 1) {
            product.currentQuantity -= 1;
            state.itemsNumber -= 1;
          } else {
            product.currentQuantity = 1;
          }
        }
      });

      localStorage.clear();
      state.products.forEach((product) => {
        localStorage.setItem(`product${product.id}`, JSON.stringify(product));
      });
    },
    plusProductQuantity: (state, action) => {
      state.products.forEach((product) => {
        if (product.id === action.payload) {
          if (product.currentQuantity === product.storageQuantity) {
            product.currentQuantity = product.storageQuantity;
          } else {
            product.currentQuantity += 1;
            state.itemsNumber += 1;
          }
        }
      });
      localStorage.clear();
      state.products.forEach((product) => {
        localStorage.setItem(`product${product.id}`, JSON.stringify(product));
      });
    },
  },
});

export const {
  addProduct,
  removeProduct,
  removeAllProducts,
  minusProductQuantity,
  plusProductQuantity,
  backOutOfStockDefault,
} = cartSlice.actions;

export default cartSlice.reducer;
