import React from "react";
import BorderContainer from "@/components/BorderContainer";

const WeatherMainFeature = ({ title, children }) => {
  return (
    <BorderContainer
      className={
        "relative h-full gap-2 w-full p-4 flex flex-col justify-between"
      }
    >
      <span>{title}</span>
      {children}
    </BorderContainer>
  );
};

export default WeatherMainFeature;
