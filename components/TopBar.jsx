"use client";
import React, { createElement } from "react";
import DayForecast from "@/components/DayForecast";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTemperatureUnit,
  setSelectedDay,
  setSelectedHour,
} from "@/redux/weatherSlice";
import LinedButtons from "@/components/LinedButtons";
import ActiveIndicator from "@/components/ActiveIndicator";
import Card from "@/components/Card";

const TopBar = ({ className = "" }) => {
  const dispatch = useDispatch();
  const { selectedDay, daysAverage, temperatureUnit, days, selectedHour } =
    useSelector((state) => state.weather);

  const temperatureUnits = [{ name: "Fahrenheit" }, { name: "Celsius" }];

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className={"flex justify-between items-center"}>
        <h2 className={"text-2xl"}>Forecast for the next 5 days</h2>
        <LinedButtons
          items={temperatureUnits}
          render={(item) => (
            <ActiveIndicator
              key={item.name}
              active={item.name.toLowerCase() === temperatureUnit}
              onClick={() => dispatch(changeTemperatureUnit())}
              layoutId={"temperatureUnit"}
            >
              {item.name}
            </ActiveIndicator>
          )}
        />
      </div>
      <div className={`flex w-full justify-between gap-2`}>
        {Object.entries(daysAverage).map(([day, values], index) => (
          <DayForecast
            active={selectedDay === day}
            key={index}
            day={{ date: day, ...values }}
            onClick={() => dispatch(setSelectedDay(day))}
          />
        ))}
      </div>
      <div className={"flex gap-1 items-center"}>
        <DayHour hour={"all"} />
        {Object.entries(days[selectedDay]).map(([hour, _], index) => (
          <DayHour key={index} hour={hour} />
        ))}
      </div>
    </div>
  );
};

const DayHour = ({ hour }) => {
  const dispatch = useDispatch();
  const { selectedHour } = useSelector((state) => state.weather);

  return (
    <Card
      className={"px-3 py-1"}
      active={selectedHour === hour}
      onClick={() => dispatch(setSelectedHour(hour))}
    >
      {hour === "all" ? "Average" : hour}
    </Card>
  );
};

export default TopBar;
