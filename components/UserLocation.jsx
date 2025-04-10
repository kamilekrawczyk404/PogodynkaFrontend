"use client";
import React from "react";
import SearchInput from "@/components/SearchInput";
import CurrentGeolocation from "@/components/CurrentGeolocation";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "@/redux/weatherSlice";
import { postFetcher } from "@/app/helpers";
import { setUserSearchHistory } from "@/redux/authSlice";

const UserLocation = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { weatherData } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  const onLocationSubmit = async (city) => {
    await fetch(
      `http://localhost:3000/api/geo?city=${encodeURIComponent(city)}`,
    )
      .then((response) => response.json())
      .then((coords) => dispatch(fetchWeatherData(coords)));

    if (isAuthenticated) {
      try {
        // update user's search history
        const updatedSearchHistory = await postFetcher(
          "http://localhost:3000/api/user/history/add",
          { weatherData, user },
        ).then((data) => dispatch(setUserSearchHistory(data.searchHistory)));
      } catch (error) {
        console.warn("Cannot add weather to search history");
      }
    }
  };

  const onGetGeolocation = async (geolocation) => {
    dispatch(fetchWeatherData(geolocation));
  };

  return (
    <div className={"flex gap-2 items-center  w-full relative "}>
      <SearchInput
        placeholder={"Search location..."}
        onSubmit={onLocationSubmit}
      />
      <CurrentGeolocation onGetGeolocation={onGetGeolocation} />
    </div>
  );
};

export default UserLocation;
