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

const getTemperature = (selectedDay, lists) => {
  // if it's selected current day, return the first record located in the list
  // otherwise, find the max temperature during the day

  if (selectedDay === 0) {
    return lists[0];
  }
};
const SideBar = ({ className = "" }) => {
  const { days, daysAverage, selectedDay, selectedHour, temperatureUnit } =
    useSelector((state) => state.weather);

  const [temperature, setTemperature] = useState(0);

  const unit = temperatureUnit === "fahrenheit" ? "F" : "C";

  useEffect(() => {
    setTemperature(
      selectedHour === "all"
        ? temperatureUnit === "fahrenheit"
          ? celsiusToFahrenheit(daysAverage[selectedDay].maxTemp)
          : daysAverage[selectedDay].maxTemp
        : temperatureUnit === "fahrenheit"
          ? celsiusToFahrenheit(days[selectedDay][selectedHour].mainTemp)
          : days[selectedDay][selectedHour].mainTemp,
    );
  }, [selectedHour, selectedDay, temperatureUnit]);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <PopUpContainer>
        <UserLocation />
      </PopUpContainer>
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
                number={Math.round(temperature)}
                rolling={10}
                width={34}
                height={56}
                duration={2}
              />
              <span>°{unit}</span>
            </div>
            <span>
              <span className={"font-semibold"}>
                {selectedDay.substring(0, selectedDay.indexOf(" "))}
              </span>

              <span className={"text-neutral-400"}>
                {selectedHour !== "all" && `, ${selectedHour}`}
              </span>
            </span>
          </div>
          <div className={"relative min-h-[8rem] aspect-square mx-auto"}>
            <Image src={"/weather/01d.svg"} alt={"Weather icon"} fill />
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

      <CityPreview cityName={"New york"} />
    </div>
  );
};

export default SideBar;
