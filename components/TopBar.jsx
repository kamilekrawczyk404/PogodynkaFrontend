import React from "react";
import { styles } from "@/styles";
import DayForecast from "@/components/DayForecast";

const TopBar = ({ className = "" }) => {
  const days = [{}, {}, {}, {}, {}];
  return (
    <div className={`flex flex-col ${styles.gaps} ${className}`}>
      <h2 className={"text-2xl h-[34px]"}>Forecast for the next 5 days</h2>
      <div className={`flex w-full justify-between gap-2`}>
        {days.map((weather, index) => (
          <DayForecast active={!index} key={index} weather={weather} />
        ))}
      </div>
    </div>
  );
};

export default TopBar;
