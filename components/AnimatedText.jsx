import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const AnimatedText = ({ text }) => {
  return (
    <AnimatePresence>
      <div className={"relative h-[2rem] flex item-center"}>
        <motion.p
          key={text}
          initial={{ translateY: "-100%", opacity: 0.75 }}
          exit={{ translateY: "100%", opacity: 0.75 }}
          animate={{ translateY: "-50%", opacity: 1 }}
          className={"absolute top-1/2 h-fit"}
        >
          {text}
        </motion.p>
      </div>
    </AnimatePresence>
  );
};

export default AnimatedText;
