"use client";
import React, { useEffect, useState } from "react";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import BarChart from "@/components/BarChart";
import CardValue from "@/components/MainCards/CardValue";
import { useSelector } from "react-redux";
import AnimatedText from "@/components/AnimatedText";

const getHumidityFeedback = (humidityLevel) => {
  if (typeof humidityLevel !== "number" || isNaN(humidityLevel)) {
    return "Invalid humidity level. Please provide a number.";
  }

  if (humidityLevel < 30) {
    return "Dry 🌵";
  } else if (humidityLevel >= 30 && humidityLevel < 60) {
    return "Normal 👍";
  } else if (humidityLevel >= 60 && humidityLevel < 80) {
    return "Humid 💧";
  } else {
    return "Very Humid 💦";
  }
};

const HumidityLevel = () => {
  const {
    selectedHourData: { humidity },
  } = useSelector((state) => state.weather);

  return (
    <WeatherMainFeature title={"Humidity"}>
      <div className={"flex justify-between flex-1 items-center"}>
        <CardValue value={humidity} unit={"%"} />
      </div>
      <AnimatedText text={getHumidityFeedback(humidity)} />
      <div className={"absolute right-4 top-4 w-fit h-[calc(100%-2rem)]"}>
        <BarChart min={0} max={100} value={humidity} bgColor={`bg-blue-600`} />
      </div>
    </WeatherMainFeature>
  );
};

export default HumidityLevel;
