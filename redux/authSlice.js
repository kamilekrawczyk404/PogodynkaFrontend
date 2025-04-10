import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: {
    id: null,
    name: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, user } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
    setUserSearchHistory: (state, action) => {
      state.user = { ...state.user, searchHistory: action.payload };
    },
    setUserHomeLocation: (state, action) => {
      state.user = { ...state.user, homeLocation: action.payload };
    },
  },
});

export const {
  setUserHomeLocation,
  setUser,
  setUserSearchHistory,
  login,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
