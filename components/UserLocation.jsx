"use client";
import React from "react";
import SearchInput from "@/components/SearchInput";
import CurrentGeolocation from "@/components/CurrentGeolocation";

const UserLocation = () => {
  const onLocationSubmit = async (search) => {
    console.log(`user search - ${search}`);
  };

  const onGetGeolocation = async (geolocation) => {
    console.log(geolocation);
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
