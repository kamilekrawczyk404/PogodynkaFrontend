"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import OverlayContainer from "@/components/OverlayContainer";

const CityPreview = ({ image, cityName }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [image, cityName]);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0.5 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
      className={
        "relative flex-1 max-h-[12rem] mt-auto text-center rounded-xl overflow-hidden"
      }
    >
      <Image
        src={"/city.jpg"}
        alt={"City image"}
        fill
        loading={"lazy"}
        className={"brightness-[.6]"}
        onLoad={() => setImageLoaded(true)}
      />
      <OverlayContainer
        className={"left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.7, delay: 0.5 }}
      >
        {cityName}
      </OverlayContainer>
    </motion.div>
  );
};

export default CityPreview;
