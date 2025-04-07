"use client";
import React from "react";
import SearchInput from "@/components/SearchInput";
import CurrentGeolocation from "@/components/CurrentGeolocation";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "@/redux/weatherSlice";

const UserLocation = () => {
  const dispatch = useDispatch();

  const onLocationSubmit = async (search) => {
    dispatch(fetchWeatherData(search));
  };

  const onGetGeolocation = async (geolocation) => {
    dispatch(fetchWeatherData(geolocation));
  };

  return (
    <div className={"flex gap-2 items-center w-full"}>
      <SearchInput
        placeholder={"Search location..."}
        onSubmit={onLocationSubmit}
      />
      <CurrentGeolocation onGetGeolocation={onGetGeolocation} />
    </div>
  );
};

export default UserLocation;
