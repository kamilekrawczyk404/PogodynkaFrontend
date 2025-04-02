import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: {},
  selectedDay: 0,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },
  },
});

export const { setWeather, setSelectedDay } = weatherSlice.actions;

export default weatherSlice.reducer;
