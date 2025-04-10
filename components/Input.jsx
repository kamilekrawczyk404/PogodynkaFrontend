import React, { forwardRef } from "react";
import { styles } from "@/styles";
import ErrorMessage from "@/components/ErrorMessage";

const Input = forwardRef(
  ({ className = "", globalError, errorMessage, ...props }, ref) => {
    return (
      <div className={"flex flex-col gap-1"}>
        {props?.name?.length > 0 && (
          <div className={"flex gap-2 items-end text-sm"}>
            <label
              htmlFor={props.name}
              className={`${
                errorMessage?.length > 0 || globalError?.length > 0
                  ? "text-red-600"
                  : ""
              } group-focus-within:text-purple-700 transition-all ease-in-out`}
            >
              {props.name}
            </label>
            <ErrorMessage message={errorMessage} />
          </div>
        )}

        <input
          ref={ref}
          className={`${
            errorMessage?.length > 0 || globalError?.length > 0
              ? "text-red-600 border-red-600"
              : `${styles.borderColor}`
          } bg-transparent rounded-xl outline-none border-[1px] px-3 py-1 focus:border-purple-700 transition-all ease-in-out ${className}`}
          {...props}
        />
      </div>
    );
  },
);

export default Input;
