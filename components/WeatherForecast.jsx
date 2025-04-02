import React from "react";
import { styles } from "@/styles";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import DayHighlights from "@/components/DayHighlights";

const WeatherForecast = ({ className }) => {
  return (
    <div className={`flex relative ${styles.gaps} h-full`}>
      <SideBar className={"basis-2/5 h-full"} />
      <div className={`flex flex-col w-full ${styles.gaps}`}>
        <TopBar className={""} />
        <DayHighlights className={"flex-1"} />
      </div>
    </div>
  );
};

export default WeatherForecast;
