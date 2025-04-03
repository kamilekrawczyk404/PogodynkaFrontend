import React from "react";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import CardValue from "@/components/MainCards/CardValue";

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

const Pressure = () => {
  const custom = 1024;
  return (
    <WeatherMainFeature title={"Pressure"}>
      <CardValue value={custom} unit={"hPa"} />
      <p>{getPressureFeedback(custom)}</p>
    </WeatherMainFeature>
  );
};

export default Pressure;
