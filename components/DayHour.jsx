import { useDispatch, useSelector } from "react-redux";
import Card from "@/components/Card";
import { setSelectedHourData } from "@/redux/weatherSlice";
import React from "react";

const DayHour = ({ hour }) => {
  const dispatch = useDispatch();
  const { selectedHourData } = useSelector((state) => state.weather);

  return (
    <Card
      className={"px-3 py-1"}
      active={selectedHourData.hour === hour}
      onClick={() => dispatch(setSelectedHourData(hour))}
    >
      {hour === "all" ? "Average" : hour}
    </Card>
  );
};

export default DayHour;
