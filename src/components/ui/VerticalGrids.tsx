"use client";
import { motion } from "framer-motion";

export function VerticalGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, ease: "easeInOut", duration: 0.5 }}
      className="absolute w-full h-full top-0 left-0 pointer-events-none"
    >
      <div className="max-w-full h-full flex w-[1111px] 2xl:w-[1440px] mx-auto justify-between max-lg:hidden">
        <div className="w-[var(--grid-space)] h-full flex justify-between">
          <div className="w-[1px] h-full bg-gridline"></div>
          <div className="w-[1px] h-full bg-gridline"></div>
        </div>
        <div className="w-[var(--grid-space)] h-full flex justify-between">
          <div className="w-[1px] h-full bg-gridline"></div>
          <div className="w-[1px] h-full bg-gridline"></div>
        </div>
      </div>
      {/**MOBILE*/}
      <div className="lg:hidden w-full px-2 flex justify-between h-full">
        <div className="w-[1px] h-full bg-gridline"></div>
        <div className="w-[1px] h-full bg-gridline"></div>
      </div>
    </motion.div>
  );
}
