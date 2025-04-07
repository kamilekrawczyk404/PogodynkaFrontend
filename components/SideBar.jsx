"use client";
import React, { useEffect, useState } from "react";
import { styles } from "@/styles";
import Image from "next/image";
import RolledNumber from "@/components/RolledNumber";
import { useSelector } from "react-redux";
import { celsiusToFahrenheit } from "@/redux/weatherSlice";
import WeatherSecondaryFeature from "@/components/WeatherSecondaryFeature";
import StaggerList from "@/components/StaggerList";

const SideBar = ({ className = "" }) => {
  const {
    selectedDayData,
    selectedHourData,
    temperatureUnit,
    weatherData: { city },
  } = useSelector((state) => state.weather);

  const [cityListItems, setCityListItems] = useState([]);

  useEffect(() => {
    setCityListItems([
      { title: "Population", value: city.population },
      { title: "Lat", value: city.coord.lat },
      { title: "Lon", value: city.coord.lon },
      { title: "Country", value: city.country },
    ]);
  }, [city]);

  console.log(city);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div
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
                number={Math.round(
                  temperatureUnit === "F"
                    ? celsiusToFahrenheit(selectedHourData.mainTemp)
                    : selectedHourData.mainTemp,
                )}
                rolling={10}
                width={34}
                height={56}
                duration={2}
              />
              <span>°{temperatureUnit}</span>
            </div>
            <span>
              <span className={"font-semibold"}>
                {selectedDayData.date.substring(
                  0,
                  selectedDayData.date.indexOf(" "),
                )}
              </span>

              <span className={"text-neutral-400"}>
                {`, ${selectedHourData.hour}`}
              </span>
            </span>
          </div>
          <div className={"relative min-h-[8rem] aspect-square mx-auto"}>
            <Image
              src={`/weather/${selectedHourData.icon}`}
              alt={"Weather icon"}
              fill
            />
          </div>
        </div>

        <StaggerList
          className={"flex flex-col gap-2"}
          items={cityListItems}
          delay={0.25}
          render={(item) => (
            <WeatherSecondaryFeature
              // icon={<Image {...item.image} fill />}
              content={`${item.title}: ${item.value}`}
            />
          )}
        />
      </div>

      {/*<CityPreview cityName={city} />*/}
    </div>
  );
};

export default SideBar;
