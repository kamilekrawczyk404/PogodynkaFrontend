"use client";
import React, from "react";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import { useSelector } from "react-redux";
import { styles } from "@/styles";
import { Icons } from "@/components/Icons";
import { motion} from "framer-motion";
import RolledNumber from "@/components/RolledNumber";
import CardValue from "@/components/MainCards/CardValue";

const getWindDirection = (deg) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(deg / 45) % 8;

  return directions[index >= 0 ? index : 0];
};

const getKilometersPerHour = (metersPerSeconds) => {
  return (metersPerSeconds * 3.6).toFixed(2);
};

const WindStatus = () => {
  const degExample = 120;

  const weather = useSelector((state) => state.weather);
  const { windDirection, windSpeed, windGust } = weather;

  return (
    <WeatherMainFeature title={"Wind Status"}>
      <CardValue value={getKilometersPerHour(2.43)} unit={'km/h'}/>
      <div className={"flex gap-2 items-center"}>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: degExample - 45 }}
          transition={{ type: "spring", delay: 0.25 }}
          className={`flex relative aspect-square w-8 rounded-full border-[1px] ${styles.borderColor}`}
        >
          <Icons.WindDirection
            className={
              "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-[calc(50%+1px)]"
            }
          />
        </motion.div>
        <span>{getWindDirection(degExample)}</span>
      </div>
    </WeatherMainFeature>
  );
};


export default WindStatus;
