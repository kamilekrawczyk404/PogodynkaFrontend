"use client";
import React, { useEffect, useState } from "react";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import { useSelector } from "react-redux";
import { styles } from "@/styles";
import { Icons } from "@/components/Icons";
import { motion } from "framer-motion";
import CardValue from "@/components/MainCards/CardValue";

const getWindDirection = (deg) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(deg / 45) % 8;

  return directions[index >= 0 ? index : 0];
};

const getKilometersPerHour = (metersPerSeconds) => {
  return (metersPerSeconds * 3.6).toFixed(1);
};

const WindStatus = () => {
  const {
    selectedHourData: { windSpeed, windDeg },
  } = useSelector((state) => state.weather);

  return (
    <WeatherMainFeature title={"Wind Status"}>
      <CardValue value={getKilometersPerHour(windSpeed)} unit={"km/h"} />
      <div className={"flex gap-2 items-center"}>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: windDeg - 45 }}
          transition={{ type: "spring", delay: 0.25 }}
          className={`flex relative aspect-square w-8 rounded-full border-[1px] ${styles.borderColor}`}
        >
          <Icons.WindDirection
            className={
              "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-[calc(50%+1px)]"
            }
          />
        </motion.div>
        <span>{getWindDirection(windDeg)}</span>
      </div>
    </WeatherMainFeature>
  );
};

export default WindStatus;
