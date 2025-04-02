import React from "react";
import Image from "next/image";
import Card from "@/components/Card";

const DayForecast = ({ weather, active }) => {
  return (
    <Card className={"w-full p-4"} active={active}>
      <span>Sun</span>
      <div className={"relative min-h-[5rem] aspect-ratio"}>
        <Image src={"/weather/02d.svg"} alt={"Weather icon"} fill />
      </div>
      <div className={"flex gap-2 text-sm"}>
        <span>15°C</span>
        <span className={"text-neutral-400"}>8°C</span>
      </div>
    </Card>
  );
};

export default DayForecast;
