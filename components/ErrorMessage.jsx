import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <AnimatePresence>
      {message?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, translateY: "-.5rem" }}
          animate={{ opacity: 1, translateY: "0rem" }}
          exit={{ opacity: 0, translateY: ".5rem" }}
          className={"text-red-600"}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorMessage;
