"use client";
import React from "react";
import { styles } from "@/styles";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import DayHighlights from "@/components/DayHighlights";
import { Provider, useSelector } from "react-redux";
import store from "@/redux/store";
import UserLocation from "@/components/UserLocation";
import PopUpContainer from "@/components/PopUpContainer";

const WeatherForecast = ({ className }) => {
  return (
    <Provider store={store}>
      <WeatherContent />
    </Provider>
  );
};

const WeatherContent = () => {
  const { loading, weatherData } = useSelector((state) => state.weather);

  const isLoading = weatherData === null || loading;
  return (
    <div className={`flex relative ${styles.gaps} h-full`}>
      <div className={`flex basis-2/5 h-full flex-col gap-2`}>
        <PopUpContainer>
          <UserLocation />
        </PopUpContainer>

        {!isLoading && <SideBar className={"basis-2/5 h-full"} />}
      </div>

      <div className={`flex flex-col w-full ${styles.gaps}`}>
        {!isLoading && (
          <>
            <TopBar />
            <DayHighlights className={"flex-1"} />
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherForecast;
