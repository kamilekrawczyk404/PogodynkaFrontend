"use client";
import React from "react";
import { useSelector } from "react-redux";
import WeatherMainFeature from "@/components/WeatherMainFeature";
import { Icons } from "@/components/Icons";
import { motion } from "framer-motion";
import { styles } from "@/styles";

const formatDate = (time, timezone) => {
  const date = new Date((time + timezone) * 1000);

  // Get the hours (24-hour format)
  const hours = String(date.getUTCHours()).padStart(2, "0");

  // Get the minutes
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  // Return the formatted time string
  return `${hours}:${minutes}`;
};

const SunsetSunrise = () => {
  const {
    weatherData: {
      city: { sunrise, sunset, timezone },
    },
  } = useSelector((state) => state.weather);

  return (
    <WeatherMainFeature title={"Sunrire & Sunset"}>
      <div className={"flex gap-4 items-center"}>
        <SunIcon type={"sunrise"} />
        <h3 className={"font-semibold"}>{formatDate(sunrise, timezone)}</h3>
      </div>
      <div className={"flex gap-4 items-center"}>
        <SunIcon type={"sunset"} />
        <h3 className={"font-semibold"}>{formatDate(sunset, timezone)}</h3>
      </div>
    </WeatherMainFeature>
  );
};

const SunIcon = ({ type = "sunrise" }) => (
  <div
    className={`text-lg overflow-hidden z-0 aspect-square w-10 rounded-full bg-amber-500 relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-amber-300 before:w-8 before:aspect-square before:rounded-full`}
  >
    <AnimatedArrow direction={type === "sunrise" ? "bt" : "tb"} />
  </div>
);

const AnimatedArrow = ({ direction = "bt" }) => {
  const translations = {
    first: {
      initial: "100%",
      animate: "-175%",
    },
    second: {
      initial: "100%",
      animate: "-50%",
    },
  };
  return (
    <>
      <motion.span
        className={`absolute left-1/2 top-1/2 origin-top-left ${
          styles.textAccent
        } ${direction !== "bt" ? "rotate-180" : ""}`}
        initial={{ translateY: translations.first.initial, translateX: "-50%" }}
        animate={{ translateY: translations.first.animate }}
        transition={{ type: "spring", delay: 0.25, duration: 1.5 }}
      >
        <Icons.Arrow />
      </motion.span>
      <motion.span
        className={`absolute left-1/2 top-1/2 origin-top-left ${
          styles.textAccent
        } ${direction !== "bt" ? "rotate-180" : ""}`}
        initial={{
          translateY: translations.second.initial,
          translateX: "-50%",
        }}
        animate={{ translateY: translations.second.animate }}
        transition={{ type: "spring", delay: 1, duration: 1 }}
      >
        <Icons.Arrow />
      </motion.span>
    </>
  );
};

export default SunsetSunrise;
