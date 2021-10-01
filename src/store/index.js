import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import headerReducer from "./headerDesktopSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    headerDesktop: headerReducer,
  },
});
