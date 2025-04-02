import React from "react";
import Card from "@/components/Card";

const WeatherMainFeature = ({ item }) => {
  return (
    <Card className={"h-full w-full p-4"}>
      <span>{item.title}</span>
    </Card>
  );
};

export default WeatherMainFeature;
