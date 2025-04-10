import React, { useEffect, useRef, useState } from "react";
import { styles } from "@/styles";
import { Icons } from "@/components/Icons";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Selector = ({ items, render, children, onItemSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemsContainerRef = useRef(null);

  useEffect(() => {
    const wasClickedOutside = (e) => {
      if (isOpen && !e.target.contains(itemsContainerRef.current)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", wasClickedOutside);

    return () => document.removeEventListener("click", wasClickedOutside);
  }, [itemsContainerRef.current]);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`relative flex gap-2 items-center hover:cursor-pointer hover:${styles.borderColorFocus} transition-colors border-[1px] rounded-xl px-3 py-2 ${styles.borderColor}`}
    >
      {children}

      <Icons.AngleDown />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={itemsContainerRef}
            exit={{ opacity: 0, translateY: "-.5rem" }}
            initial={{ opacity: 0, translateY: "-.5rem" }}
            animate={{ opacity: 1, translateY: "0rem" }}
            className={`top-[calc(100%+.5rem)] left-0 absolute rounded-xl overflow-hidden z-[20] max-h-[30rem] ${styles.borderColorFocus} border-[1px] ${styles.bgColor}`}
          >
            {items.map((item, index) => (
              <div
                className={`hover:brightness-90 transition-colors flex items-center px-3 py-1 h-full w-full [&:not(:last-child)]:border-b-[1px]`}
                key={index}
                onClick={(item) => onItemSelected(item)}
              >
                <span className={"mr-2"}>{`${index + 1}.`}</span>
                {render(item)}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Selector;
