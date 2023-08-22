"use client";

import React from "react";
import { motion } from "framer-motion";
import { themeStateProp, useTheme } from "@/store/theme";

export default function SectionDivider() {
  const isDark = useTheme((state: themeStateProp) => state.isDark);
  return (
    <motion.div
      className={`bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block ${
        isDark ? "bg-opacity-20" : ""
      }`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
