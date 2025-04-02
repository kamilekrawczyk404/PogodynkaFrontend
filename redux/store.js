import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "@/redux/weatherSlice";
import { logger } from "redux-logger/src";

const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
