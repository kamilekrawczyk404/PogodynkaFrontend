"use client";
import React from "react";
import UserLocation from "@/components/UserLocation";
import { styles } from "@/styles";
import Image from "next/image";
import StaggerList from "@/components/StaggerList";
import CityPreview from "@/components/CityPreview";
import PopUpContainer from "@/components/PopUpContainer";
import WeatherSecondaryFeature from "@/components/WeatherSecondaryFeature";
import RolledNumber from "@/components/RolledNumber";

const SideBar = ({ className = "" }) => {
  const sideBarWeatherInfo = [
    {
      image: { src: "/weather/04d.svg", alt: "Cloudiness" },
      value: "Mostly Cloud",
    },
    { image: { src: "/weather/humidity.svg", alt: "Humidity" }, value: "30%" },
  ];

  return (
    <div className={`flex flex-col ${styles.gaps} ${className}`}>
      <PopUpContainer>
        <UserLocation />
      </PopUpContainer>
      <PopUpContainer
        className={`flex flex-col ${styles.gaps} border-[1px] ${styles.borderColor} p-4 rounded-xl`}
      >
        <div
          className={
            "relative flex items-center justify-between gap-2 w-full rounded-xl"
          }
        >
          <div
            className={`flex flex-col gap-2 border-[1px] rounded-xl ${styles.borderColor} ${styles.paddings}`}
          >
            <div className={"text-6xl flex gap-1"}>
              <RolledNumber
                number={12}
                rolling={10}
                width={32}
                height={56}
                duration={2}
                delay={0.1}
              />
              <span>°C</span>
            </div>
            <span>
              <span className={"font-semibold"}>Monday</span>,{" "}
              <span className={"text-neutral-400"}>16:00</span>
            </span>
          </div>
          <div className={"relative min-h-[8rem] aspect-square mx-auto"}>
            <Image src={"/weather/01d.svg"} alt={"Weather icon"} fill />
          </div>
        </div>

        <StaggerList
          className={"flex flex-col gap-2"}
          items={sideBarWeatherInfo}
          delay={0.5}
          render={(item) => (
            <WeatherSecondaryFeature
              icon={<Image {...item.image} fill />}
              content={item.value}
            />
          )}
        />
      </PopUpContainer>

      <CityPreview cityName={"New york"} />
    </div>
  );
};

export default SideBar;
