import React, { useEffect, useState } from "react";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import CardValue from "@/components/MainCards/CardValue";
import { useSelector } from "react-redux";
import AnimatedText from "@/components/AnimatedText";

const getPrecipitationFeedback = (precipitationPercent) => {
  if (
    typeof precipitationPercent !== "number" ||
    isNaN(precipitationPercent) ||
    precipitationPercent < 0 ||
    precipitationPercent > 100
  ) {
    return "Invalid precipitation. Please provide a number between 0 and 100.";
  }

  if (precipitationPercent === 0) {
    return "No Precipitation ☀️";
  } else if (precipitationPercent > 0 && precipitationPercent <= 20) {
    return "Slight Chance of Precipitation 🌦️";
  } else if (precipitationPercent > 20 && precipitationPercent <= 50) {
    return "Possible Precipitation 🌧️";
  } else if (precipitationPercent > 50 && precipitationPercent <= 80) {
    return "Likely Precipitation ☔";
  } else {
    return "Heavy Precipitation ⛈️";
  }
};

const Precipitation = () => {
  const {
    selectedHourData: { precipitation },
  } = useSelector((state) => state.weather);

  return (
    <WeatherMainFeature title={"Precipitation"}>
      <CardValue value={precipitation} unit={"%"} />
      <AnimatedText text={getPrecipitationFeedback(precipitation)} />
    </WeatherMainFeature>
  );
};

export default Precipitation;
