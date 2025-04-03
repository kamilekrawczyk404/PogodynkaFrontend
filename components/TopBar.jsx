"use client";
import React from "react";
import { styles } from "@/styles";
import DayForecast from "@/components/DayForecast";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDay } from "@/redux/weatherSlice";

const TopBar = ({ className = "" }) => {
  const dispatch = useDispatch();
  const { selectedDay } = useSelector((state) => state.weather);

  const days = [{}, {}, {}, {}, {}];

  return (
    <div className={`flex flex-col ${styles.gaps} ${className}`}>
      <h2 className={"text-2xl h-[34px]"}>Forecast for the next 5 days</h2>
      <div className={`flex w-full justify-between gap-2`}>
        {days.map((weather, index) => (
          <DayForecast
            active={selectedDay === index}
            key={index}
            weather={weather}
            onClick={() => dispatch(setSelectedDay(index))}
          />
        ))}
      </div>
    </div>
  );
};

export default TopBar;
