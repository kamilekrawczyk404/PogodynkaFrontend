import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "@/redux/weatherSlice";
import authReducer from "@/redux/authSlice";
import { logger } from "redux-logger/src";

const store = configureStore({
  reducer: {
    weather: weatherSlice,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
