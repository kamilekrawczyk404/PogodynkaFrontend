"use client";
import React from "react";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import { styles } from "@/styles";
import WindStatus from "@/components/MainCards/WindStatus";
import { useSelector } from "react-redux";
import SunriseSunset from "@/components/MainCards/SunriseSunset";
import HumidityLevel from "@/components/MainCards/HumidityLevel";
import VisibilityDistance from "@/components/MainCards/VisibilityDistance";
import Precipitation from "@/components/MainCards/Precipitation";
import Pressure from "@/components/MainCards/Pressure";

const DayHighlights = ({ className = "" }) => {
  const { weather } = useSelector((state) => state.weather);

  // const highlights = [
  //   { title: "Cloudiness", component: },
  //   { title: "Wind status" },
  //   { title: "Sunrise & Sunset" },
  //   { title: "Humidity" },
  //   { title: "Visibility" },
  //   { title: "Air Pressure" },
  // ];

  const highlights = [
    WindStatus,
    SunriseSunset,
    HumidityLevel,
    VisibilityDistance,
    Precipitation,
    Pressure,
  ];

  return (
    <div className={`flex flex-col ${styles.gaps} ${className}`}>
      <h2 className={"text-2xl"}>Today's Highlights</h2>
      <div className={`h-full grid grid-cols-3 grid-rows-2 gap-2`}>
        {highlights.map((item, index) => (
          <div key={index}>{item()}</div>
        ))}
      </div>
    </div>
  );
};

export default DayHighlights;
