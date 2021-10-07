import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requestSearchFunction: false,
  logInStatus: false,
  modalPhoneCallStatus: "",
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
    showModalPhoneCall: (state) => {
      state.modalPhoneCallStatus = "show";
    },
    hideModalPhoneCall: (state) => {
      state.modalPhoneCallStatus = "";
    },
  },
});

export const {
  activeRequestSearchFunction,
  deactiveRequestSearchFunction,
  showModalPhoneCall,
  hideModalPhoneCall
} = headerDesktopSlice.actions;
export default headerDesktopSlice.reducer;
