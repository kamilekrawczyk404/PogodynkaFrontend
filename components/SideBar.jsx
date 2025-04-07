"use client";
import React, { useEffect, useState } from "react";
import UserLocation from "@/components/UserLocation";
import { styles } from "@/styles";
import Image from "next/image";
import StaggerList from "@/components/StaggerList";
import CityPreview from "@/components/CityPreview";
import PopUpContainer from "@/components/PopUpContainer";
import WeatherSecondaryFeature from "@/components/WeatherSecondaryFeature";
import RolledNumber from "@/components/RolledNumber";
import { useSelector } from "react-redux";
import { celsiusToFahrenheit } from "@/redux/weatherSlice";

const SideBar = ({ className = "" }) => {
  const {
    days,
    selectedDayData,
    selectedHourData,
    temperatureUnit,
    city,
    weatherData,
    loading,
    error,
  } = useSelector((state) => state.weather);

  const [temperature, setTemperature] = useState(0);

  // useEffect(() => {
  //   setTemperature(
  //     temperatureUnit === "F"
  //       ? celsiusToFahrenheit(selectedHourData.mainTemp)
  //       : selectedHourData.mainTemp,
  //   );
  // }, [selectedHourData, selectedDayData, temperatureUnit]);

  // Funkcja pomocnicza, która wyciąga dane tylko jeśli są dostępne
  const getWeatherInfo = () => {
    if (!weatherData || !weatherData.list || !weatherData.list.length) {
      return null;
    }

    const temp = Math.round(weatherData.list[0].main.temp - 273.15);
    const currTime = new Date(weatherData.list[0].dt * 1000);

    const dayOfWeek = currTime.toLocaleDateString("en-US", { weekday: "long" });
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // 24-godzinny format
    });

    const weatherIcon = weatherData.list[0].weather[0].icon;
    const weatherDescription = weatherData.list[0].weather[0].main;
    const humidity = weatherData.list[0].main.humidity;

    const sideBarWeatherInfo = [
      {
        image: { src: `/weather/${weatherIcon}.svg`, alt: "Weather Condition" },
        value: weatherDescription,
      },
      {
        image: { src: "/weather/humidity.svg", alt: "Humidity" },
        value: `${humidity}%`,
      },
    ];

    return {
      cityName: weatherData.city.name,
      temp,
      dayOfWeek,
      formattedTime,
      weatherIcon,
      sideBarWeatherInfo,
    };
  };

  const weatherInfo = getWeatherInfo();

  // console.log(temperature);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <PopUpContainer>
        <UserLocation />
      </PopUpContainer>
      {weatherData !== null && !loading && (
        <>
          <div
            className={`flex flex-col ${styles.gaps} border-[1px] ${styles.borderColor} p-4 rounded-xl`}
          >
            <div
              className={
                "relative flex items-center justify-between gap-2 w-full rounded-xl"
              }
            >
              <div
                className={`flex flex-col gap-2 border-[1px] rounded-xl ${styles.borderColor} ${styles.paddings}`}
              >
                <div className={"text-6xl flex gap-1"}>
                  <RolledNumber
                    number={selectedHourData.mainTemp}
                    rolling={10}
                    width={34}
                    height={56}
                    duration={2}
                  />
                  <span>°{temperatureUnit}</span>
                </div>
                <span>
                  <span className={"font-semibold"}>
                    {selectedDayData.date.substring(
                      0,
                      selectedDayData.date.indexOf(" "),
                    )}
                  </span>

                  <span className={"text-neutral-400"}>
                    {`, ${selectedHourData.hour}`}
                  </span>
                </span>
              </div>
              <div className={"relative min-h-[8rem] aspect-square mx-auto"}>
                <Image
                  src={`/weather/${selectedHourData.icon}`}
                  alt={"Weather icon"}
                  fill
                />
              </div>
            </div>

            {/*<StaggerList*/}
            {/*  className={"flex flex-col gap-2"}*/}
            {/*  items={sideBarWeatherInfo}*/}
            {/*  delay={0.5}*/}
            {/*  render={(item) => (*/}
            {/*    <WeatherSecondaryFeature*/}
            {/*      icon={<Image {...item.image} fill />}*/}
            {/*      content={item.value}*/}
            {/*    />*/}
            {/*  )}*/}
            {/*/>*/}
          </div>

          <CityPreview cityName={city} />
        </>
      )}
    </div>
  );
};

export default SideBar;
