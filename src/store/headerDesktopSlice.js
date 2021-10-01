import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requestSearchFunction: false,
};

export const headerDesktopSlice = createSlice({
  name: "headerDesktop",
  initialState,
  reducers: {
    activeRequestSearchFunction: (state) => {
      state.requestSearchFunction = true;
    },
    deactiveRequestSearchFunction: (state) => {
      state.requestSearchFunction = false;
    },
  },
});

export const { activeRequestSearchFunction, deactiveRequestSearchFunction } =
  headerDesktopSlice.actions;
export default headerDesktopSlice.reducer;
