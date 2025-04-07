import React, { useEffect, useState } from "react";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import CardValue from "@/components/MainCards/CardValue";
import { useSelector } from "react-redux";

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
  const custom = 34;
  const { selectedDay, selectedHour, days, daysAverage } = useSelector(
    (state) => state.weather,
  );

  const [precipitation, setPrecipitation] = useState(0);

  useEffect(() => {
    setPrecipitation(
      selectedHour === "all"
        ? daysAverage[selectedDay].precipitation
        : days[selectedDay][selectedHour].precipitation,
    );
  }, [selectedDay, selectedHour]);
  return (
    <WeatherMainFeature title={"Precipitation"}>
      <CardValue value={precipitation} unit={"%"} />
      <p>{getPrecipitationFeedback(precipitation)}</p>
    </WeatherMainFeature>
  );
};

export default Precipitation;
