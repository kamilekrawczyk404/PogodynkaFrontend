"use client";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles";

const BarChart = ({ bgColor, min, max, value }) => {
  return (
    <div
      className={`relative flex items-end rounded-xl h-full border-[1px] p-1 w-5 ${styles.borderColor}`}
    >
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: `${(value / (max - min)) * 100}%` }}
        transition={{ type: "spring", duration: 0.5 }}
        className={`w-full rounded-xl ${bgColor}`}
      ></motion.div>
    </div>
  );
};

export default BarChart;
