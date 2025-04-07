"use client";
import React from "react";
import { styles } from "@/styles";
import WindStatus from "@/components/MainCards/WindStatus";
import SunriseSunset from "@/components/MainCards/SunriseSunset";
import HumidityLevel from "@/components/MainCards/HumidityLevel";
import VisibilityDistance from "@/components/MainCards/VisibilityDistance";
import Precipitation from "@/components/MainCards/Precipitation";
import Pressure from "@/components/MainCards/Pressure";

const DayHighlights = ({ className = "" }) => {
  return (
    <div className={`flex flex-col ${styles.gaps} ${className}`}>
      <h2 className={"text-2xl"}>Today's Highlights</h2>
      <div className={`h-full grid grid-cols-3 grid-rows-2 gap-2`}>
        <WindStatus />
        <SunriseSunset />
        <HumidityLevel />
        <VisibilityDistance />
        <Precipitation />
        <Pressure />
      </div>
    </div>
  );
};

export default DayHighlights;
