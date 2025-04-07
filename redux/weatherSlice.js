import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const celsiusToFahrenheit = (celsius) => {
  if (typeof celsius !== "number") {
    return NaN; // Return NaN (Not a Number) for invalid input
  }

  return (celsius * 9) / 5 + 32;
};

const getMinAndMaxTemp = (dailyData) => {
  const processedData = {};

  Object.entries(dailyData).map(([day, hours]) => {
    const temperatures = {
      minTemp: [],
      maxTemp: [],
    };

    Object.entries(hours).map(([hour, { minTemp, maxTemp, icon }]) => {
      temperatures.minTemp.push({ value: Math.round(minTemp), icon });
      temperatures.maxTemp.push({ value: Math.round(maxTemp), icon });
    });

    processedData[day] = {
      minTemp: temperatures.minTemp.sort((a, b) => a.value - b.value)[0],
      maxTemp: temperatures.maxTemp.sort((a, b) => a.value + b.value)[0],
    };
  });

  return processedData;
};

const splitByDays = (list) => {
  const dailyData = {};

  list.forEach((item) => {
    const date = new Date(item.dt * 1000); // API time is in seconds
    const day = `${date.toLocaleDateString("en-US", { weekday: "long" })} ${
      date.toISOString().split("T")[0]
    }`;
    const hour = date
      .toLocaleDateString("en-US", {
        hour: "numeric",
        hour12: true,
      })
      .split(" ")
      .slice(1)
      .join("");

    // Precipitation handling (assuming rain and snow are in mm)
    const rain = item.rain && item.rain["3h"] ? item.rain["3h"] : 0;
    const snow = item.snow && item.snow["3h"] ? item.snow["3h"] : 0;

    dailyData[day] = {
      ...dailyData[day],
      [hour]: {
        icon: `${item.weather[0].icon}.svg`,
        minTemp: item.main["temp_min"],
        mainTemp: item.main.temp,
        maxTemp: item.main["temp_max"],
        humidity: item.main.humidity,
        windSpeed: item.wind.speed,
        windDeg: item.wind.deg,
        visibility: item.visibility,
        pressure: item.main.pressure,
        precipitation: snow + rain,
      },
    };
  });

  return dailyData;
};

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async ({ lat, lon }, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams({
        lat,
        lon,
      });
      const response = await fetch(
        `http://localhost:3000/api/weather?${params.toString()}`,
      );

      if (!response.ok) {
        throw new Error("Nie udało się pobrać danych pogodowych");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  days: {},
  daysMinMaxTemp: {},
  selectedDayData: {},
  selectedHourData: {},

  temperatureUnit: "C",
  city: "Gliwice",
  weatherData: null,
  loading: false,
  error: null,
  selectedDay: 0,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    changeTemperatureUnit: (state) => {
      state.temperatureUnit = state.temperatureUnit === "F" ? "C" : "F";
    },
    setWeather: (state, action) => {
      // const days = splitByDays(action.payload.list);
      // state.weather = action.payload;
      // state.days = days;
      // state.daysAverage = getAverageProperties(days);
    },
    setSelectedDayData: (state, action) => {
      state.selectedDayData = {
        date: action.payload,
        ...state.days[action.payload],
      };
      state.selectedHourData = {
        hour: Object.keys(state.days[action.payload])[0],
        ...state.days[action.payload][
          Object.keys(state.days[action.payload])[0]
        ],
      };
    },
    setSelectedHourData: (state, action) => {
      state.selectedHourData = {
        hour: action.payload,
        ...state.selectedDayData[action.payload],
      };
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
        state.city =
          action.payload.city && action.payload.city.name
            ? action.payload.city.name
            : action.payload.city || "Gliwice"; // Ustaw domyślną nazwę miasta na 'Gliwice'

        const days = splitByDays(action.payload.list);
        const minMaxTemp = getMinAndMaxTemp(days);

        state.days = days;
        state.daysMinMaxTemp = minMaxTemp;
        state.selectedDayData = {
          date: Object.keys(days)[0],
          ...days[Object.keys(days)[0]],
        };
        state.selectedHourData = {
          hour: Object.keys(days[Object.keys(days)[0]])[0],
          ...Object.values(days[Object.keys(days)[0]])[0],
        };
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setWeather,
  setSelectedHourData,
  changeTemperatureUnit,
  setSelectedDayData,
} = weatherSlice.actions;

export default weatherSlice.reducer;
