"use client";
import React, { createElement } from "react";
import DayForecast from "@/components/DayForecast";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTemperatureUnit,
  setSelectedDay,
  setSelectedDayData,
  setSelectedHour,
  setSelectedHourData,
} from "@/redux/weatherSlice";
import LinedButtons from "@/components/LinedButtons";
import ActiveIndicator from "@/components/ActiveIndicator";
import Card from "@/components/Card";
import DayHour from "@/components/DayHour";

const TopBar = ({ className = "" }) => {
  const dispatch = useDispatch();
  const {
    selectedDayData,
    temperatureUnit,
    days,
    selectedHourData,
    daysMinMaxTemp,
    weatherData,
    loading,
  } = useSelector((state) => state.weather);

  const temperatureUnits = [{ name: "Fahrenheit" }, { name: "Celsius" }];

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {!loading && weatherData !== null && (
        <>
          <div className={"flex justify-between items-center"}>
            <h2 className={"text-2xl"}>Forecast for the next 5 days</h2>
            <LinedButtons
              items={temperatureUnits}
              render={(item) => (
                <ActiveIndicator
                  key={item.name}
                  active={item.name.substring(0, 1) === temperatureUnit}
                  onClick={() => dispatch(changeTemperatureUnit())}
                  layoutId={"temperatureUnit"}
                >
                  {item.name}
                </ActiveIndicator>
              )}
            />
          </div>
          <div className={`flex w-full justify-between gap-2`}>
            {Object.entries(daysMinMaxTemp).map(([day, values], index) => (
              <DayForecast
                active={selectedDayData.date === day}
                key={index}
                day={{ date: day, ...values }}
                onClick={() => dispatch(setSelectedDayData(day))}
              />
            ))}
          </div>
          <div className={"flex gap-1 items-center"}>
            {Object.entries(days[selectedDayData.date]).map(
              ([hour, _], index) => (
                <DayHour key={index} hour={hour} />
              ),
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TopBar;
