"use client";

import { themeStateProp, useTheme } from "@/store/theme";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const isDark = useTheme((state: themeStateProp) => state.isDark);
  const toggleTheme = useTheme((state: themeStateProp) => state.toggleTheme);
  // const [dark, setDark] = useState(false);

  // useEffect(() => {
  //   setDark(isDark);
  // }, [isDark]);

  return (
    <button
      className={`fixed bottom-5 right-5 bg-white w-[3rem] 
      h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border 
      border-white border-opacity-40 shadow-2xl rounded-full 
      flex items-center justify-center hover:scale-[1.15] 
      active:scale-105 transition-all ${isDark ? "bg-gray-950" : ""}`}
      onClick={toggleTheme}
    >
      {isDark ? <BsSun /> : <BsMoon />}
    </button>
  );
}
