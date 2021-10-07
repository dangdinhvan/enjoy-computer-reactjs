import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import headerReducer from "./headerDesktopSlice";
import loginReducer from "./loginSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    headerDesktop: headerReducer,
    login: loginReducer,
  },
});
