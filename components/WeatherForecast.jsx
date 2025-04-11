"use client";
import React, { useEffect } from "react";
import { styles } from "@/styles";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import DayHighlights from "@/components/DayHighlights";
import { Provider, useDispatch, useSelector } from "react-redux";
import UserLocation from "@/components/UserLocation";
import AnimatedContainer from "@/components/AnimatedContainer";
import { login } from "@/redux/authSlice";
import jwt from "jsonwebtoken";

const WeatherForecast = ({ className }) => {
  const { loading, weatherData } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = jwt.decode(token, process.env.AUTH_SECRET_KEY);

    if (token && token.length && data?.userId) {
      dispatch(login(token));
      dispatch(setUser({ id: data.userId }));
    }
  }, []);

  const isLoading = weatherData === null || loading;
  return (
    <div className={`flex relative ${styles.gaps} h-full`}>
      <div className={`flex basis-2/5 h-full flex-col gap-2`}>
        <AnimatedContainer>
          <UserLocation />
        </AnimatedContainer>

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
