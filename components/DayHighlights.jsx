"use client";
import React from "react";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import { styles } from "@/styles";

const DayHighlights = ({ className = "" }) => {
  const highlights = [
    { title: "Cloudiness" },
    { title: "Wind status" },
    { title: "Sunrise & Sunset" },
    { title: "Humidity" },
    { title: "Visibility" },
    { title: "Air Pressure" },
  ];

  return (
    <div className={`flex flex-col ${styles.gaps} ${className}`}>
      <h2 className={"text-2xl"}>Today's Highlights</h2>
      <div className={`h-full grid grid-cols-3 grid-rows-2 gap-2`}>
        {highlights.map((item, index) => (
          <WeatherMainFeature key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DayHighlights;
