"use client";
import React, { useEffect, useRef, useState } from "react";
import Input from "@/components/Input";
import { Icons } from "@/components/Icons";

const SearchInput = ({ onSubmit, ...props }) => {
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("onkeydown", (e) => {
        if (e.keyCode === "31") {
          onSubmit(search);
        }
      });
    }
  }, [inputRef.current]);

  return (
    <div className={"relative w-full"}>
      <button
        className={"absolute left-2 top-1/2 -translate-y-1/2"}
        onClick={() => onSubmit(search)}
      >
        <Icons.MagnifyingGlass className={"w-4"} />
      </button>

      <Input
        ref={inputRef}
        className={"px-8 w-full"}
        {...props}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          e.keyCode === 13 ? onSubmit(search) : {};
        }}
      />

      {search.length > 0 && (
        <button
          className={"absolute top-1/2 -translate-y-1/2 right-2"}
          onClick={() => {
            setSearch("");
            inputRef.current.focus();
          }}
        >
          <Icons.Close className={"w-4"} />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
