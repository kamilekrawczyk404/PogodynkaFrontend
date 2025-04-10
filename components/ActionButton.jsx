import React from "react";

const ActionButton = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`hover:cursor-pointer flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
