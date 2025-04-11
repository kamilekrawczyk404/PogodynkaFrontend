"use client";
import React from "react";
import { motion } from "framer-motion";

const StaggerList = ({ items, render, delay = 0.1, className = "" }) => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: delay,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {items.map((itemData, index) => (
        <motion.li key={index} variants={item}>
          {render(itemData)}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default StaggerList;
