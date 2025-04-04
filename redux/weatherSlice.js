import { createSlice } from "@reduxjs/toolkit";

const staticData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1743768000,
      main: {
        temp: 290.29,
        feels_like: 289.81,
        temp_min: 289.38,
        temp_max: 290.29,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1020,
        humidity: 67,
        temp_kf: 0.91,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.58, deg: 297, gust: 7.98 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 0.31 },
      sys: { pod: "d" },
      dt_txt: "2025-04-04 12:00:00",
    },
    {
      dt: 1743778800,
      main: {
        temp: 288.87,
        feels_like: 288.09,
        temp_min: 287.93,
        temp_max: 288.87,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1022,
        humidity: 61,
        temp_kf: 0.94,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.02, deg: 318, gust: 10 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-04-04 15:00:00",
    },
    {
      dt: 1743789600,
      main: {
        temp: 290.15,
        feels_like: 289.19,
        temp_min: 290.15,
        temp_max: 290.15,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1022,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.58, deg: 324, gust: 7.36 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-04-04 18:00:00",
    },
    {
      dt: 1743800400,
      main: {
        temp: 291.39,
        feels_like: 290.24,
        temp_min: 291.39,
        temp_max: 291.39,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1021,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.27, deg: 329, gust: 6.72 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-04-04 21:00:00",
    },
    {
      dt: 1743811200,
      main: {
        temp: 287.78,
        feels_like: 286.45,
        temp_min: 287.78,
        temp_max: 287.78,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1024,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.62, deg: 305, gust: 5.17 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-04-05 00:00:00",
    },
    {
      dt: 1743822000,
      main: {
        temp: 286.47,
        feels_like: 285.08,
        temp_min: 286.47,
        temp_max: 286.47,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1025,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.54, deg: 58, gust: 7.17 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-04-05 03:00:00",
    },
    {
      dt: 1743832800,
      main: {
        temp: 285.25,
        feels_like: 283.74,
        temp_min: 285.25,
        temp_max: 285.25,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1024,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.95, deg: 43, gust: 6.8 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-04-05 06:00:00",
    },
    {
      dt: 1743843600,
      main: {
        temp: 284.3,
        feels_like: 282.85,
        temp_min: 284.3,
        temp_max: 284.3,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1024,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.14, deg: 84, gust: 7.95 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-04-05 09:00:00",
    },
    {
      dt: 1743854400,
      main: {
        temp: 283.7,
        feels_like: 282.33,
        temp_min: 283.7,
        temp_max: 283.7,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1024,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 96 },
      wind: { speed: 5.82, deg: 104, gust: 11.22 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-04-05 12:00:00",
    },
    {
      dt: 1743865200,
      main: {
        temp: 282.41,
        feels_like: 279.21,
        temp_min: 282.41,
        temp_max: 282.41,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1024,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.75, deg: 113, gust: 10.25 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 1.44 },
      sys: { pod: "d" },
      dt_txt: "2025-04-05 15:00:00",
    },
    {
      dt: 1743876000,
      main: {
        temp: 281.91,
        feels_like: 278.58,
        temp_min: 281.91,
        temp_max: 281.91,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1021,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.74, deg: 112, gust: 11.41 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 0.74 },
      sys: { pod: "d" },
      dt_txt: "2025-04-05 18:00:00",
    },
    {
      dt: 1743886800,
      main: {
        temp: 281.49,
        feels_like: 278.33,
        temp_min: 281.49,
        temp_max: 281.49,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1018,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.86, deg: 114, gust: 11.29 },
      visibility: 10000,
      pop: 0.76,
      rain: { "3h": 0.44 },
      sys: { pod: "d" },
      dt_txt: "2025-04-05 21:00:00",
    },
    {
      dt: 1743897600,
      main: {
        temp: 281.49,
        feels_like: 278.86,
        temp_min: 281.49,
        temp_max: 281.49,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1017,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.53, deg: 83, gust: 6.85 },
      visibility: 10000,
      pop: 0.49,
      rain: { "3h": 0.23 },
      sys: { pod: "n" },
      dt_txt: "2025-04-06 00:00:00",
    },
    {
      dt: 1743908400,
      main: {
        temp: 281.42,
        feels_like: 279.21,
        temp_min: 281.42,
        temp_max: 281.42,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.65, deg: 67, gust: 4.59 },
      visibility: 10000,
      pop: 0.2,
      rain: { "3h": 0.15 },
      sys: { pod: "n" },
      dt_txt: "2025-04-06 03:00:00",
    },
    {
      dt: 1743919200,
      main: {
        temp: 281.66,
        feels_like: 280.73,
        temp_min: 281.66,
        temp_max: 281.66,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.86, deg: 74, gust: 2.07 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-04-06 06:00:00",
    },
    {
      dt: 1743930000,
      main: {
        temp: 282.16,
        feels_like: 281.68,
        temp_min: 282.16,
        temp_max: 282.16,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.49, deg: 113, gust: 2.06 },
      visibility: 10000,
      pop: 0.2,
      rain: { "3h": 0.2 },
      sys: { pod: "n" },
      dt_txt: "2025-04-06 09:00:00",
    },
    {
      dt: 1743940800,
      main: {
        temp: 283.14,
        feels_like: 282.54,
        temp_min: 283.14,
        temp_max: 283.14,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.76, deg: 170, gust: 3.49 },
      visibility: 7271,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-04-06 12:00:00",
    },
    {
      dt: 1743951600,
      main: {
        temp: 284.27,
        feels_like: 283.6,
        temp_min: 284.27,
        temp_max: 284.27,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.64, deg: 323, gust: 12.2 },
      visibility: 10000,
      pop: 0.94,
      rain: { "3h": 0.49 },
      sys: { pod: "d" },
      dt_txt: "2025-04-06 15:00:00",
    },
    {
      dt: 1743962400,
      main: {
        temp: 285.21,
        feels_like: 284.27,
        temp_min: 285.21,
        temp_max: 285.21,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.04, deg: 339, gust: 6.38 },
      visibility: 10000,
      pop: 0.76,
      rain: { "3h": 0.66 },
      sys: { pod: "d" },
      dt_txt: "2025-04-06 18:00:00",
    },
    {
      dt: 1743973200,
      main: {
        temp: 284.03,
        feels_like: 282.64,
        temp_min: 284.03,
        temp_max: 284.03,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.85, deg: 312, gust: 8.9 },
      visibility: 10000,
      pop: 0.43,
      rain: { "3h": 0.29 },
      sys: { pod: "d" },
      dt_txt: "2025-04-06 21:00:00",
    },
    {
      dt: 1743984000,
      main: {
        temp: 282.95,
        feels_like: 281.34,
        temp_min: 282.95,
        temp_max: 282.95,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.14, deg: 349, gust: 5.57 },
      visibility: 10000,
      pop: 0.48,
      rain: { "3h": 0.44 },
      sys: { pod: "n" },
      dt_txt: "2025-04-07 00:00:00",
    },
    {
      dt: 1743994800,
      main: {
        temp: 281.8,
        feels_like: 280.29,
        temp_min: 281.8,
        temp_max: 281.8,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 2.62, deg: 7, gust: 3.37 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 0.53 },
      sys: { pod: "n" },
      dt_txt: "2025-04-07 03:00:00",
    },
    {
      dt: 1744005600,
      main: {
        temp: 279.95,
        feels_like: 277.06,
        temp_min: 279.95,
        temp_max: 279.95,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.32, deg: 50, gust: 4.98 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 3.13 },
      sys: { pod: "n" },
      dt_txt: "2025-04-07 06:00:00",
    },
    {
      dt: 1744016400,
      main: {
        temp: 278.79,
        feels_like: 276.23,
        temp_min: 278.79,
        temp_max: 278.79,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.29, deg: 29, gust: 4.65 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 4.28 },
      sys: { pod: "n" },
      dt_txt: "2025-04-07 09:00:00",
    },
    {
      dt: 1744027200,
      main: {
        temp: 279.14,
        feels_like: 276.57,
        temp_min: 279.14,
        temp_max: 279.14,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.41, deg: 24, gust: 4.53 },
      visibility: 10000,
      pop: 1,
      rain: { "3h": 2.05 },
      sys: { pod: "d" },
      dt_txt: "2025-04-07 12:00:00",
    },
    {
      dt: 1744038000,
      main: {
        temp: 279.44,
        feels_like: 276.65,
        temp_min: 279.44,
        temp_max: 279.44,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1005,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.89, deg: 24, gust: 4.57 },
      visibility: 10000,
      pop: 0.7,
      rain: { "3h": 0.43 },
      sys: { pod: "d" },
      dt_txt: "2025-04-07 15:00:00",
    },
    {
      dt: 1744048800,
      main: {
        temp: 279.59,
        feels_like: 276.96,
        temp_min: 279.59,
        temp_max: 279.59,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 3.68, deg: 24, gust: 3.8 },
      visibility: 10000,
      pop: 0.46,
      rain: { "3h": 0.23 },
      sys: { pod: "d" },
      dt_txt: "2025-04-07 18:00:00",
    },
    {
      dt: 1744059600,
      main: {
        temp: 279.94,
        feels_like: 279.28,
        temp_min: 279.94,
        temp_max: 279.94,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1003,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 1.39, deg: 29, gust: 1.31 },
      visibility: 10000,
      pop: 0.34,
      rain: { "3h": 0.16 },
      sys: { pod: "d" },
      dt_txt: "2025-04-07 21:00:00",
    },
    {
      dt: 1744070400,
      main: {
        temp: 280.13,
        feels_like: 280.13,
        temp_min: 280.13,
        temp_max: 280.13,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 100 },
      wind: { speed: 0.6, deg: 268, gust: 1.98 },
      visibility: 10000,
      pop: 0.01,
      sys: { pod: "n" },
      dt_txt: "2025-04-08 00:00:00",
    },
    {
      dt: 1744081200,
      main: {
        temp: 279.89,
        feels_like: 277.33,
        temp_min: 279.89,
        temp_max: 279.89,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1003,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 70 },
      wind: { speed: 3.67, deg: 212, gust: 5.84 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-04-08 03:00:00",
    },
    {
      dt: 1744092000,
      main: {
        temp: 279.56,
        feels_like: 275.22,
        temp_min: 279.56,
        temp_max: 279.56,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1003,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: { all: 39 },
      wind: { speed: 7.78, deg: 271, gust: 12.42 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-04-08 06:00:00",
    },
    {
      dt: 1744102800,
      main: {
        temp: 274.92,
        feels_like: 269.11,
        temp_min: 274.92,
        temp_max: 274.92,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: { all: 38 },
      wind: { speed: 8.04, deg: 305, gust: 14.71 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-04-08 09:00:00",
    },
    {
      dt: 1744113600,
      main: {
        temp: 274.35,
        feels_like: 268.61,
        temp_min: 274.35,
        temp_max: 274.35,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1012,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
      ],
      clouds: { all: 21 },
      wind: { speed: 7.42, deg: 308, gust: 13.63 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-04-08 12:00:00",
    },
    {
      dt: 1744124400,
      main: {
        temp: 277.17,
        feels_like: 271.63,
        temp_min: 277.17,
        temp_max: 277.17,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 32,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      clouds: { all: 5 },
      wind: { speed: 9.35, deg: 306, gust: 13 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-04-08 15:00:00",
    },
    {
      dt: 1744135200,
      main: {
        temp: 280.3,
        feels_like: 275.98,
        temp_min: 280.3,
        temp_max: 280.3,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 25,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: { all: 25 },
      wind: { speed: 8.47, deg: 300, gust: 11.85 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-04-08 18:00:00",
    },
    {
      dt: 1744146000,
      main: {
        temp: 281.05,
        feels_like: 276.96,
        temp_min: 281.05,
        temp_max: 281.05,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 26,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: { all: 98 },
      wind: { speed: 8.47, deg: 305, gust: 11.92 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2025-04-08 21:00:00",
    },
    {
      dt: 1744156800,
      main: {
        temp: 278.54,
        feels_like: 274.47,
        temp_min: 278.54,
        temp_max: 278.54,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1020,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: { all: 74 },
      wind: { speed: 6.17, deg: 316, gust: 11.92 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-04-09 00:00:00",
    },
    {
      dt: 1744167600,
      main: {
        temp: 276.52,
        feels_like: 272.35,
        temp_min: 276.52,
        temp_max: 276.52,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1023,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 5.2, deg: 325, gust: 9.74 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-04-09 03:00:00",
    },
    {
      dt: 1744178400,
      main: {
        temp: 275.22,
        feels_like: 271.11,
        temp_min: 275.22,
        temp_max: 275.22,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1025,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 1 },
      wind: { speed: 4.48, deg: 320, gust: 8.74 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-04-09 06:00:00",
    },
    {
      dt: 1744189200,
      main: {
        temp: 274.72,
        feels_like: 271.33,
        temp_min: 274.72,
        temp_max: 274.72,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1026,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
      ],
      clouds: { all: 0 },
      wind: { speed: 3.26, deg: 307, gust: 6.74 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2025-04-09 09:00:00",
    },
  ],
  city: {
    id: 5099133,
    name: "Hoboken",
    coord: { lat: 40.7419, lon: -73.9893 },
    country: "US",
    population: 50005,
    timezone: -14400,
    sunrise: 1743762841,
    sunset: 1743808999,
  },
};

const fahrenheitToCelsius = (fahrenheit) => {
  if (typeof fahrenheit !== "number") {
    return NaN; // Return NaN (Not a Number) for invalid input
  }
  return ((fahrenheit - 32) * 5) / 9;
};

const formatDate = (date) => {
  date.setDate(date.getDate());

  const options = {
    weekday: "long",
    hour: "numeric",
    hour12: true,
  };

  return date.toLocaleDateString("en-US", options);
};

const calculateTotal = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((a, b) => a + b, 0);
};

const calculateAverage = (arr) => {
  return calculateTotal(arr) / arr.length;
};

const calculateAverageWindDirection = (degrees) => {
  if (degrees.length === 0) return 0;

  const rad = degrees.map((deg) => (deg * Math.PI) / 180);
  const sinSum = rad.reduce((sum, angle) => sum + Math.sin(angle), 0);
  const cosSum = rad.reduce((sum, angle) => sum + Math.cos(angle), 0);

  let averageRad = Math.atan2(sinSum / degrees.length, cosSum / degrees.length);
  if (averageRad < 0) {
    averageRad += 2 * Math.PI;
  }

  return (averageRad * 180) / Math.PI;
};

const getAverageProperties = (dailyData) => {
  const processedData = {};

  Object.entries(dailyData).map(([day, hours]) => {
    // every property has values stored in an array
    const inArray = {
      minTemp: [],
      maxTemp: [],
      visibility: [],
      windSpeed: [],
      windDeg: [],
      precipitation: [],
      humidity: [],
      pressure: [],
    };

    Object.entries(hours).map(([hour, properties]) => {
      Object.entries(properties).map(([property, value]) => {
        if (inArray[property] !== undefined) {
          inArray[property].push(value);
        }
      });
    });

    processedData[day] = {
      humidity: calculateAverage(inArray.humidity),
      windSpeed: calculateAverage(inArray.windSpeed),
      windDeg: calculateAverageWindDirection(inArray.windDeg),
      visibility: calculateAverage(inArray.visibility),
      pressure: calculateAverage(inArray.pressure),
      precipitation: calculateTotal(inArray.precipitation),
      minTemp: Math.min(...inArray.minTemp),
      maxTemp: Math.max(...inArray.maxTemp),
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

const initialState = {
  temperatureUnit: "fahrenheit",
  weather: {},
  selectedDay: 0,
  days: splitByDays(staticData.list),
  daysAverage: getAverageProperties(splitByDays(staticData.list)),
  selectedHour: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    changeTemperatureUnit: (state) => {
      state.temperatureUnit =
        state.temperatureUnit === "fahrenheit" ? "celsius" : "fahrenheit";
    },
    setWeather: (state, action) => {
      state.weather = action.payload;
      state.days = splitByDays(action.payload.list);
    },
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },
  },
});

export const { setWeather, setSelectedDay } = weatherSlice.actions;

export default weatherSlice.reducer;
