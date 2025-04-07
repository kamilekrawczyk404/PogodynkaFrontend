"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import CardValue from "@/components/MainCards/CardValue";

const getVisibilityFeedback = (visibilityMeters) => {
  if (typeof visibilityMeters !== "number" || isNaN(visibilityMeters)) {
    return "Invalid visibility. Please provide a number (in meters).";
  }

  if (visibilityMeters < 100) {
    return "Very Poor Visibility 🌫️";
  } else if (visibilityMeters >= 100 && visibilityMeters < 1000) {
    return "Poor Visibility ☁️";
  } else if (visibilityMeters >= 1000 && visibilityMeters < 5000) {
    return "Moderate Visibility 🌤️";
  } else if (visibilityMeters >= 5000 && visibilityMeters < 10000) {
    return "Good Visibility ☀️";
  } else if (visibilityMeters === 10000) {
    return "Excellent Visibility 💯";
  } else {
    return "Visibility Exceeds Maximum Range";
  }
};

const VisibilityDistance = () => {
  const {
    selectedHourData: { visibility },
  } = useSelector((state) => state.weather);

  return (
    <WeatherMainFeature title={"Visibility"}>
      <CardValue
        value={Math.round(Math.round(visibility * 100) / 1000) / 100}
        unit={"km"}
      />
      <p>{getVisibilityFeedback(visibility)}</p>
    </WeatherMainFeature>
  );
};

export default VisibilityDistance;
