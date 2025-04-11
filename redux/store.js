import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "@/redux/weatherSlice";
import authReducer from "@/redux/authSlice";
import { logger } from "redux-logger/src";
import popUpSlice from "@/redux/popUpSlice";

const store = configureStore({
  reducer: {
    weather: weatherSlice,
    auth: authReducer,
    popUp: popUpSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
