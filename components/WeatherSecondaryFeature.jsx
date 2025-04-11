import React from "react";
import { styles } from "@/styles";
import BorderContainer from "@/components/BorderContainer";

const WeatherSecondaryFeature = ({ icon, content, className = "" }) => (
  <BorderContainer
    className={`flex flex-row items-center gap-2 px-3 py-1 rounded-xl ${className}`}
  >
    {/*<span className={"w-6 aspect-square relative"}>{icon}</span>*/}
    <span className={"text-nowrap"}>{content}</span>
  </BorderContainer>
);

export default WeatherSecondaryFeature;
