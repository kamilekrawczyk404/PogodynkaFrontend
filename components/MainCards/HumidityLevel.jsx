"use client";
import React, { useEffect, useState } from "react";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import BarChart from "@/components/BarChart";
import CardValue from "@/components/MainCards/CardValue";
import { useSelector } from "react-redux";

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
  const { days, daysAverage, selectedHour, selectedDay } = useSelector(
    (state) => state.weather,
  );

  const [humidityLevel, setHumidityLevel] = useState(0);

  useEffect(() => {
    setHumidityLevel(
      selectedHour === "all"
        ? daysAverage[selectedDay].humidity
        : days[selectedDay][selectedHour].humidity,
    );
  }, [selectedHour, selectedDay]);

  return (
    <WeatherMainFeature title={"Humidity"}>
      <div className={"flex justify-between flex-1 items-center"}>
        <CardValue value={humidityLevel} unit={"%"} />
        <BarChart
          min={0}
          max={100}
          value={humidityLevel}
          bgColor={`bg-blue-600`}
        />
      </div>
      <p>{getHumidityFeedback(humidityLevel)}</p>
    </WeatherMainFeature>
  );
};

export default HumidityLevel;
