import React, { useEffect, useState } from "react";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import CardValue from "@/components/MainCards/CardValue";
import { useSelector } from "react-redux";
import AnimatedText from "@/components/AnimatedText";

const getPressureFeedback = (pressureHPa) => {
  if (typeof pressureHPa !== "number" || isNaN(pressureHPa)) {
    return "Invalid pressure. Please provide a number (in hPa).";
  }

  if (pressureHPa < 980) {
    return "Very Low Pressure ⛈️ (Stormy)";
  } else if (pressureHPa >= 980 && pressureHPa < 1005) {
    return "Low Pressure 🌧️ (Unsettled)";
  } else if (pressureHPa >= 1005 && pressureHPa <= 1025) {
    return "Normal Pressure 🌤️ (Fair)";
  } else {
    return "High Pressure ☀️ (Stable)";
  }
};

const Pressure = ({}) => {
  const {
    selectedHourData: { pressure },
  } = useSelector((state) => state.weather);

  return (
    <WeatherMainFeature title={"Pressure"}>
      <CardValue value={pressure} unit={"hPa"} />
      <AnimatedText text={getPressureFeedback(pressure)} />
    </WeatherMainFeature>
  );
};

export default Pressure;
