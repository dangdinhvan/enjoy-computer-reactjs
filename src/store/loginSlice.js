import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginStatus: false,
  acountImg: "",
  acountName: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.loginStatus = true;
      state.acountImg = action.payload.avatarImg;
      state.acountName = action.payload.username;
    },
  },
});

export const { loginSuccess } = loginSlice.actions;

export default loginSlice.reducer;
