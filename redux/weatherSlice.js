import { createSlice } from "@reduxjs/toolkit";

const staticData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1743962400,
      main: {
        temp: 10.13,
        feels_like: 9.24,
        temp_min: 10.13,
        temp_max: 12.07,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 78,
        temp_kf: -1.94,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.84,
        deg: 318,
        gust: 6.75,
      },
      visibility: 10000,
      pop: 0.37,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-06 18:00:00",
    },
    {
      dt: 1743973200,
      main: {
        temp: 10.51,
        feels_like: 9.1,
        temp_min: 10.51,
        temp_max: 11.19,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 57,
        temp_kf: -0.68,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.77,
        deg: 323,
        gust: 7.23,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-06 21:00:00",
    },
    {
      dt: 1743984000,
      main: {
        temp: 8.9,
        feels_like: 5.99,
        temp_min: 8.9,
        temp_max: 8.9,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 42,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.6,
        deg: 339,
        gust: 8.28,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-07 00:00:00",
    },
    {
      dt: 1743994800,
      main: {
        temp: 7.39,
        feels_like: 5.05,
        temp_min: 7.39,
        temp_max: 7.39,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.54,
        deg: 332,
        gust: 4.23,
      },
      visibility: 10000,
      pop: 0.27,
      rain: {
        "3h": 0.22,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-07 03:00:00",
    },
    {
      dt: 1744005600,
      main: {
        temp: 7.01,
        feels_like: 5.62,
        temp_min: 7.01,
        temp_max: 7.01,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.1,
        deg: 15,
        gust: 2.53,
      },
      visibility: 10000,
      pop: 0.6,
      rain: {
        "3h": 0.49,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-07 06:00:00",
    },
    {
      dt: 1744016400,
      main: {
        temp: 5.68,
        feels_like: 2.21,
        temp_min: 5.68,
        temp_max: 5.68,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.96,
        deg: 56,
        gust: 5.82,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.93,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-07 09:00:00",
    },
    {
      dt: 1744027200,
      main: {
        temp: 4.39,
        feels_like: 0.59,
        temp_min: 4.39,
        temp_max: 4.39,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1008,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.97,
        deg: 45,
        gust: 6.64,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.88,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-07 12:00:00",
    },
    {
      dt: 1744038000,
      main: {
        temp: 5.45,
        feels_like: 2.77,
        temp_min: 5.45,
        temp_max: 5.45,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.4,
        deg: 52,
        gust: 4.68,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.9,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-07 15:00:00",
    },
    {
      dt: 1744048800,
      main: {
        temp: 5.35,
        feels_like: 2.76,
        temp_min: 5.35,
        temp_max: 5.35,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1004,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.24,
        deg: 76,
        gust: 3.96,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.16,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-07 18:00:00",
    },
    {
      dt: 1744059600,
      main: {
        temp: 5.44,
        feels_like: 3.71,
        temp_min: 5.44,
        temp_max: 5.44,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.17,
        deg: 45,
        gust: 2.15,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.68,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-07 21:00:00",
    },
    {
      dt: 1744070400,
      main: {
        temp: 5.56,
        feels_like: 5.56,
        temp_min: 5.56,
        temp_max: 5.56,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1003,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.31,
        deg: 97,
        gust: 1.3,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.53,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-08 00:00:00",
    },
    {
      dt: 1744081200,
      main: {
        temp: 6.13,
        feels_like: 4.31,
        temp_min: 6.13,
        temp_max: 6.13,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1002,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.41,
        deg: 243,
        gust: 4.49,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.21,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-08 03:00:00",
    },
    {
      dt: 1744092000,
      main: {
        temp: 5.52,
        feels_like: 2.59,
        temp_min: 5.52,
        temp_max: 5.52,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 1001,
        humidity: 82,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.84,
        deg: 251,
        gust: 9.48,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-08 06:00:00",
    },
    {
      dt: 1744102800,
      main: {
        temp: 4.11,
        feels_like: -0.93,
        temp_min: 4.11,
        temp_max: 4.11,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1002,
        humidity: 70,
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
      clouds: {
        all: 98,
      },
      wind: {
        speed: 7.84,
        deg: 313,
        gust: 10.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-08 09:00:00",
    },
    {
      dt: 1744113600,
      main: {
        temp: 0.39,
        feels_like: -5.74,
        temp_min: 0.39,
        temp_max: 0.39,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 56,
      },
      wind: {
        speed: 7.81,
        deg: 307,
        gust: 13.76,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-08 12:00:00",
    },
    {
      dt: 1744124400,
      main: {
        temp: 3.5,
        feels_like: -2.17,
        temp_min: 3.5,
        temp_max: 3.5,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 32,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 9.22,
        deg: 296,
        gust: 13.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-08 15:00:00",
    },
    {
      dt: 1744135200,
      main: {
        temp: 6.13,
        feels_like: 1.21,
        temp_min: 6.13,
        temp_max: 6.13,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 27,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 9.53,
        deg: 296,
        gust: 13.77,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-08 18:00:00",
    },
    {
      dt: 1744146000,
      main: {
        temp: 6.39,
        feels_like: 1.45,
        temp_min: 6.39,
        temp_max: 6.39,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 28,
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
      clouds: {
        all: 87,
      },
      wind: {
        speed: 9.94,
        deg: 297,
        gust: 14.02,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-08 21:00:00",
    },
    {
      dt: 1744156800,
      main: {
        temp: 4.48,
        feels_like: -0.19,
        temp_min: 4.48,
        temp_max: 4.48,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1013,
        humidity: 37,
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
      clouds: {
        all: 60,
      },
      wind: {
        speed: 7.08,
        deg: 299,
        gust: 13.58,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-09 00:00:00",
    },
    {
      dt: 1744167600,
      main: {
        temp: 2.47,
        feels_like: -2.28,
        temp_min: 2.47,
        temp_max: 2.47,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1016,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 5.92,
        deg: 302,
        gust: 12.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-09 03:00:00",
    },
    {
      dt: 1744178400,
      main: {
        temp: 1.21,
        feels_like: -3.47,
        temp_min: 1.21,
        temp_max: 1.21,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1019,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 5.13,
        deg: 300,
        gust: 10.79,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-09 06:00:00",
    },
    {
      dt: 1744189200,
      main: {
        temp: 0.51,
        feels_like: -4.05,
        temp_min: 0.51,
        temp_max: 0.51,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1021,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 4.61,
        deg: 293,
        gust: 9.8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-09 09:00:00",
    },
    {
      dt: 1744200000,
      main: {
        temp: 0.71,
        feels_like: -4.01,
        temp_min: 0.71,
        temp_max: 0.71,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1023,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 4.96,
        deg: 299,
        gust: 7.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-09 12:00:00",
    },
    {
      dt: 1744210800,
      main: {
        temp: 4.69,
        feels_like: 1.02,
        temp_min: 4.69,
        temp_max: 4.69,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1023,
        humidity: 26,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.85,
        deg: 298,
        gust: 7.58,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-09 15:00:00",
    },
    {
      dt: 1744221600,
      main: {
        temp: 8.42,
        feels_like: 5.72,
        temp_min: 8.42,
        temp_max: 8.42,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1022,
        humidity: 22,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 4.75,
        deg: 293,
        gust: 7.74,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-09 18:00:00",
    },
    {
      dt: 1744232400,
      main: {
        temp: 10.42,
        feels_like: 8.12,
        temp_min: 10.42,
        temp_max: 10.42,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1021,
        humidity: 23,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 54,
      },
      wind: {
        speed: 5.63,
        deg: 275,
        gust: 7.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-09 21:00:00",
    },
    {
      dt: 1744243200,
      main: {
        temp: 9.74,
        feels_like: 8.08,
        temp_min: 9.74,
        temp_max: 9.74,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1023,
        humidity: 30,
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
      clouds: {
        all: 77,
      },
      wind: {
        speed: 3.21,
        deg: 247,
        gust: 6.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-10 00:00:00",
    },
    {
      dt: 1744254000,
      main: {
        temp: 8.18,
        feels_like: 7.14,
        temp_min: 8.18,
        temp_max: 8.18,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1023,
        humidity: 39,
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
      clouds: {
        all: 49,
      },
      wind: {
        speed: 1.92,
        deg: 233,
        gust: 3.65,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-10 03:00:00",
    },
    {
      dt: 1744264800,
      main: {
        temp: 6.27,
        feels_like: 4.24,
        temp_min: 6.27,
        temp_max: 6.27,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1025,
        humidity: 51,
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
      clouds: {
        all: 29,
      },
      wind: {
        speed: 2.71,
        deg: 241,
        gust: 5.56,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-10 06:00:00",
    },
    {
      dt: 1744275600,
      main: {
        temp: 5.73,
        feels_like: 4.74,
        temp_min: 5.73,
        temp_max: 5.73,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1024,
        humidity: 57,
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
      clouds: {
        all: 80,
      },
      wind: {
        speed: 1.53,
        deg: 177,
        gust: 2.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-10 09:00:00",
    },
    {
      dt: 1744286400,
      main: {
        temp: 7.15,
        feels_like: 4.72,
        temp_min: 7.15,
        temp_max: 7.15,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1024,
        humidity: 65,
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
      clouds: {
        all: 89,
      },
      wind: {
        speed: 3.6,
        deg: 179,
        gust: 7.29,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-10 12:00:00",
    },
    {
      dt: 1744297200,
      main: {
        temp: 9.77,
        feels_like: 6.49,
        temp_min: 9.77,
        temp_max: 9.77,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1023,
        humidity: 52,
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
      clouds: {
        all: 98,
      },
      wind: {
        speed: 7.57,
        deg: 173,
        gust: 10.76,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-10 15:00:00",
    },
    {
      dt: 1744308000,
      main: {
        temp: 10.36,
        feels_like: 8.84,
        temp_min: 10.36,
        temp_max: 10.36,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1021,
        humidity: 53,
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
      clouds: {
        all: 97,
      },
      wind: {
        speed: 9.88,
        deg: 161,
        gust: 12.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-10 18:00:00",
    },
    {
      dt: 1744318800,
      main: {
        temp: 9.96,
        feels_like: 6.55,
        temp_min: 9.96,
        temp_max: 9.96,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1019,
        humidity: 64,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.27,
        deg: 164,
        gust: 12.87,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-10 21:00:00",
    },
    {
      dt: 1744329600,
      main: {
        temp: 9.76,
        feels_like: 6.31,
        temp_min: 9.76,
        temp_max: 9.76,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1018,
        humidity: 71,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.18,
        deg: 171,
        gust: 15.83,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-11 00:00:00",
    },
    {
      dt: 1744340400,
      main: {
        temp: 10.31,
        feels_like: 9.46,
        temp_min: 10.31,
        temp_max: 10.31,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1016,
        humidity: 79,
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
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.62,
        deg: 175,
        gust: 15.43,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-11 03:00:00",
    },
    {
      dt: 1744351200,
      main: {
        temp: 10.45,
        feels_like: 9.74,
        temp_min: 10.45,
        temp_max: 10.45,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.51,
        deg: 175,
        gust: 10.11,
      },
      visibility: 10000,
      pop: 0.89,
      rain: {
        "3h": 1.19,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-11 06:00:00",
    },
    {
      dt: 1744362000,
      main: {
        temp: 9.87,
        feels_like: 7.94,
        temp_min: 9.87,
        temp_max: 9.87,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1012,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.78,
        deg: 143,
        gust: 8.86,
      },
      visibility: 4531,
      pop: 1,
      rain: {
        "3h": 4.77,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2025-04-11 09:00:00",
    },
    {
      dt: 1744372800,
      main: {
        temp: 10.55,
        feels_like: 10.17,
        temp_min: 10.55,
        temp_max: 10.55,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.42,
        deg: 182,
        gust: 11.69,
      },
      visibility: 5956,
      pop: 1,
      rain: {
        "3h": 7.26,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-11 12:00:00",
    },
    {
      dt: 1744383600,
      main: {
        temp: 12.05,
        feels_like: 11.61,
        temp_min: 12.05,
        temp_max: 12.05,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.18,
        deg: 181,
        gust: 5.89,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.14,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2025-04-11 15:00:00",
    },
  ],
  city: {
    id: 5128581,
    name: "New York",
    coord: {
      lat: 40.7419,
      lon: -73.9893,
    },
    country: "US",
    population: 8175133,
    timezone: -14400,
    sunrise: 1743935446,
    sunset: 1743981924,
  },
};

export const celsiusToFahrenheit = (celsius) => {
  if (typeof celsius !== "number") {
    return NaN; // Return NaN (Not a Number) for invalid input
  }

  return (celsius * 9) / 5 + 32;
};

// const formatDate = (date) => {
//   date.setDate(date.getDate());
//
//   const options = {
//     weekday: "long",
//     hour: "numeric",
//     hour12: true,
//   };
//
//   return date.toLocaleDateString("en-US", options);
// };

const calculateTotal = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  return Number(arr.reduce((a, b) => a + b, 0).toFixed(1));
};

const calculateAverage = (arr) => {
  return Number((calculateTotal(arr) / arr.length).toFixed(1));
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
      minTemp: Number(Math.min(...inArray.minTemp).toFixed(1)),
      maxTemp: Number(Math.max(...inArray.maxTemp).toFixed(1)),
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
        minTemp: Number(item.main["temp_min"].toFixed(1)),
        mainTemp: Number(item.main.temp.toFixed(1)),
        maxTemp: Number(item.main["temp_max"].toFixed(1)),
        humidity: Number(item.main.humidity.toFixed(1)),
        windSpeed: Number(item.wind.speed.toFixed(1)),
        windDeg: Number(item.wind.deg.toFixed(1)),
        visibility: Number(item.visibility.toFixed(1)),
        pressure: Number(item.main.pressure.toFixed(1)),
        precipitation: Number((snow + rain).toFixed(1)),
      },
    };
  });

  return dailyData;
};

const initialState = {
  weather: staticData,
  days: splitByDays(staticData.list),
  daysAverage: getAverageProperties(splitByDays(staticData.list)),
  temperatureUnit: "celsius",
  selectedDayData: {},
  selectedHourData: {},
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
      const days = splitByDays(action.payload.list);
      state.weather = action.payload;
      state.days = days;
      state.daysAverage = getAverageProperties(days);
    },
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
      state.selectedHour = "all";
    },
    setSelectedHour: (state, action) => {
      state.selectedHour = action.payload;
    },
  },
});

export const {
  setWeather,
  setSelectedHour,
  changeTemperatureUnit,
  setSelectedDay,
} = weatherSlice.actions;

export default weatherSlice.reducer;
