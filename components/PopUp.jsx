"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icons } from "@/components/Icons";
import { styles } from "@/styles";
import { hidePopUp } from "@/redux/popUpSlice";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const PopUp = () => {
  const { message, type, seen } = useSelector((state) => state.popUp);
  const [icon, setIcon] = useState(null);
  const [className, setClassName] = useState({ text: "", bg: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    switch (type) {
      case "success":
        setClassName({ text: "text-lime-600", bg: "bg-lime-600/25" });
        setIcon(<Icons.Success />);
        break;
      case "error":
        setClassName({ text: "text-red-600", bg: "bg-red-600/25" });
        setIcon(<Icons.Error />);
        break;
      case "info":
        setClassName({ text: "text-blue-600", bg: "bg-blue-600/25" });
        setIcon(<Icons.Info />);
        break;
      case "warning":
        setClassName({ text: "text-amber-600", bg: "bg-amber-600/25" });
        setIcon(<Icons.Warning />);
        break;
      default:
        setClassName({ text: "text-blue-600", bg: "bg-blue-600/25" });
        setIcon(<Icons.Info />);
        break;
    }

    setTimeout(() => {
      dispatch(hidePopUp());
    }, 4000);
  }, [seen, message, type]);

  return (
    <AnimatePresence>
      {seen && (
        <motion.div
          initial={{ translateY: ".5rem", opacity: 0 }}
          animate={{ translateY: "0rem", opacity: 1 }}
          exit={{ translateY: ".5rem", opacity: 0 }}
          className={`fixed bottom-8 right-8 ${styles.bodyBgColor} ${styles.borderColor} border-[1px] rounded-xl ${styles.paddings} shadow-md flex ${styles.gaps} items-center`}
        >
          <div
            className={`p-2 rounded-xl ${className.bg} ${className.text} w-[3rem] text-3xl aspect-square flex items-center justify-center`}
          >
            {icon}
          </div>
          <div className={"flex flex-col justify-between"}>
            <h3 className={"text-lg font-semibold"}>
              {type.substring(0, 1).toUpperCase() +
                type.substring(1, type.length)}
            </h3>
            <span className={className.text}>{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUp;
