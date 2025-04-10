"use client";
import React, { createElement } from "react";
import DayForecast from "@/components/DayForecast";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTemperatureUnit,
  setSelectedDayData,
} from "@/redux/weatherSlice";
import LinedButtons from "@/components/LinedButtons";
import ActiveIndicator from "@/components/ActiveIndicator";
import DayHour from "@/components/DayHour";
import { Icons } from "@/components/Icons";
import ActionButton from "@/components/ActionButton";
import { postFetcher } from "@/app/helpers";
import { setUserHomeLocation } from "@/redux/authSlice";
import { styles } from "@/styles";

const TopBar = ({ className = "" }) => {
  const dispatch = useDispatch();
  const {
    selectedDayData,
    temperatureUnit,
    days,
    selectedHourData,
    daysMinMaxTemp,
    weatherData,
    loading,
  } = useSelector((state) => state.weather);

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const isHomeLocation =
    user?.homeLocation?.coord?.lat === weatherData.city.coord.lat &&
    user?.homeLocation?.coord?.lon === weatherData.city.coord.lon;

  const temperatureUnits = [{ name: "Fahrenheit" }, { name: "Celsius" }];

  const handleUserHomeLocation = async () => {
    if (isHomeLocation) {
      // remove user home location
      await postFetcher("http://localhost:3000/api/user/home/remove", {
        user,
      })
        .then(() => dispatch(setUserHomeLocation(null)))
        .catch((err) => console.warn(err));
      return;
    }

    // add user home location
    await postFetcher("http://localhost:3000/api/user/home/set", {
      user,
      city: weatherData.city,
    })
      .then((data) =>
        dispatch(setUserHomeLocation(data.updatedUser.homeLocation)),
      )
      .catch((err) => console.warn(err));
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className={"flex justify-between items-center"}>
        <h2 className={"text-2xl"}>Forecast for the next 5 days</h2>
        <div className={"flex items-center gap-2"}>
          {/*setting*/}
          {/*user favourite location*/}
          {/*user home location*/}

          {isAuthenticated && (
            <div className={"flex gap-3 items-center"}>
              <ActionButton onClick={handleUserHomeLocation}>
                <Icons.Home
                  className={`${
                    isHomeLocation
                      ? `text-amber-400 border-amber-400 `
                      : `${styles.borderColor}`
                  } border-[1px] rounded-xl p-2 transition-colors`}
                />
              </ActionButton>
            </div>
          )}
          <LinedButtons
            items={temperatureUnits}
            render={(item) => (
              <ActiveIndicator
                key={item.name}
                active={item.name.substring(0, 1) === temperatureUnit}
                onClick={() => dispatch(changeTemperatureUnit())}
                layoutId={"temperatureUnit"}
              >
                {item.name}
              </ActiveIndicator>
            )}
          />
        </div>
      </div>
      <div className={`flex w-full justify-between gap-2`}>
        {Object.entries(daysMinMaxTemp).map(([day, values], index) => (
          <DayForecast
            active={selectedDayData.date === day}
            key={index}
            day={{ date: day, ...values }}
            onClick={() => dispatch(setSelectedDayData(day))}
          />
        ))}
      </div>
      <div className={"flex gap-1 items-center"}>
        {Object.entries(days[selectedDayData.date]).map(([hour, _], index) => (
          <DayHour key={index} hour={hour} />
        ))}
      </div>
    </div>
  );
};

export default TopBar;
