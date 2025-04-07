import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const RolledNumber = ({
  number,
  duration = 1,
  rolling = 10,
  delay = 0.1,
  height,
  width,
  className = "",
}) => {
  return (
    <>
      <div
        className={`relative flex overflow-hidden ${className}`}
        style={{ height }}
      >
        {number
          .toString()
          .split("")
          .map((singleNumber, index) =>
            singleNumber !== "." ? (
              <div key={index} className={"relative"} style={{ width }}>
                <SingleRolledNumber
                  key={index}
                  number={singleNumber}
                  duration={duration}
                  delay={delay * index}
                  rolling={rolling}
                />
              </div>
            ) : (
              <span key={index}>.</span>
            ),
          )}
      </div>
    </>
  );
};

const SingleRolledNumber = ({ number, duration, rolling, delay }) => {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const controls = useAnimation();
  const [numbersStack, setNumbersStack] = useState([]);

  useEffect(() => {
    const newNumbersStack = [
      number.toString(),
      ...Array.from(Array(rolling).keys()).map(
        (_, index) => numbers[index % number.length],
      ),
    ];
    setNumbersStack(newNumbersStack);

    controls.start({
      top: [`-${newNumbersStack.length * 2}rem`, "0rem"],
      transition: { duration, type: "spring", delay },
    });

    return () => controls.stop();
  }, [number, duration, rolling, delay]);

  return (
    <motion.div
      className={"absolute flex flex-col"}
      animate={controls}
      exit={{ opacity: 0 }}
    >
      {numbersStack.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </motion.div>
  );
};

export default RolledNumber;
