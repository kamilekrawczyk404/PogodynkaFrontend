import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seen: false,
  message: "",
  // error, info, success
  type: "",
};

const popUpSlice = createSlice({
  name: "popUp",
  initialState,
  reducers: {
    showPopUp: (state, action) => {
      const { message, type } = action.payload;
      state.seen = true;
      state.message = message;
      state.type = type;
    },
    hidePopUp: (state) => {
      state.seen = false;
    },
  },
});

export const { hidePopUp, showPopUp } = popUpSlice.actions;

export default popUpSlice.reducer;
