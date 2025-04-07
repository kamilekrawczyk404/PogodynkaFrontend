"use client";
import React from "react";
import Image from "next/image";
import Card from "@/components/Card";
import { useSelector } from "react-redux";
import { celsiusToFahrenheit } from "@/redux/weatherSlice";

const DayForecast = ({ day, active, ...props }) => {
  const { temperatureUnit } = useSelector((state) => state.weather);

  return (
    <Card className={"w-full p-4"} active={active} {...props}>
      <span>{day.date.substring(0, 3)}</span>
      <div className={"relative min-h-[5rem] aspect-ratio"}>
        <Image src={`/weather/${day.maxTemp.icon}`} alt={"Weather icon"} fill />
      </div>
      <div className={"flex gap-2 text-sm"}>
        <span>
          {Math.round(
            temperatureUnit !== "F"
              ? day.maxTemp.value
              : celsiusToFahrenheit(day.maxTemp.value),
          )}
          °{temperatureUnit}
        </span>
        <span className={"text-neutral-400"}>
          {Math.round(
            temperatureUnit !== "F"
              ? day.minTemp.value
              : celsiusToFahrenheit(day.minTemp.value),
          )}
          °{temperatureUnit}
        </span>
      </div>
    </Card>
  );
};

export default DayForecast;
