"use client";

import { motion, AnimatePresence } from "framer-motion";
import CountUp from "@/components/animations/CountUp";

type TableRowProps = {
  id?: string;
  question?: string;
  percentage?: number;
  achievements?: string;
  highlighted?: boolean;
  className?: string;
};

export default function TableRow({
  id = "ID_13_PDF",
  question = "What are my key achievements?",
  percentage = 100,
  achievements = "Achievement 1, Achievement 2, Achievement 3",
  highlighted = false,
  className = "",
}: TableRowProps) {
  return (
    <div
      className={`w-full h-[50px] max-md:px-2 px-6 py-4 top-0 relative border-b-[0.50px] border-gridline flex items-center justify-between transition-all ease-out duration-300
        ${
          highlighted
            ? "bg-white shadow-[0px_7px_15px_rgba(0,0,0,0.03),0px_27px_27px_rgba(0,0,0,0.02)]"
            : "bg-transparent"
        } ${className}
      `}
    >
      <div className="relative self-stretch flex justify-start items-center gap-6 flex-1">
        <div className="w-[var(--grid-space)] opacity-50 text-foreground text-[12px] font-light leading-none max-md:hidden">
          {id}
        </div>
        <motion.div
          animate={{ opacity: highlighted ? 1 : 0.5 }}
          transition={{ duration: 0.4 }}
          className="md:text-right text-foreground text-[12px] max-md:text-[10px] font-light leading-none"
        >
          {question}
        </motion.div>
      </div>

      <div className="text-right text-foreground text-[12px] max-md:text-[10px] font-light leading-none w-[60px] max-md:hidden">
        <AnimatePresence>
          {highlighted && (
            <motion.div
              key="odometer"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
            >
              <CountUp from={32} to={percentage} suffix="%" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-right text-[12px] max-md:text-[10px] font-normal leading-none flex-1">
        <AnimatePresence mode="wait">
          {highlighted ? (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
              className="text-[#00573f]"
            >
              {achievements}
            </motion.div>
          ) : (
            <motion.div
              key="dots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-foreground/70"
            >
              ...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

type TableLogRowProps = {
  time?: string;
  message?: string;
  meta?: string;
  highlighted?: boolean;
};

export function TableLogRow({
  time = "2025-09-04 12:03:21",
  message = "User login",
  meta = "user_id = 3421",
}: TableLogRowProps) {
  return (
    <div
      className={`w-full h-[50px] max-md:px-2 px-6 py-4 relative border-b-[0.50px] border-gridline flex items-center justify-between hover:bg-white hover:shadow-[0px_7px_15px_rgba(0,0,0,0.03),0px_27px_27px_rgba(0,0,0,0.02)] transition-all ease-out duration-300`}
    >
      <div className="text-[12px] font-light text-foreground/20 flex-1">
        {time}
      </div>

      <div className="text-[12px] font-light text-[#00573f] flex-1">
        {message}
      </div>

      <div className="text-[12px] font-light text-foreground/70 flex-1">
        {meta}
      </div>
    </div>
  );
}

type TableRowHeaderProps = {
  id?: string;
  question?: string;
  percentage?: number | string;
  achievements?: string;
  className?: string;
};

export function TableRowHeader({
  id = "ID",
  question = "Query",
  percentage = "Status",
  achievements = "Response",
  className = "",
}: TableRowHeaderProps) {
  return (
    <div
      className={`w-full h-[50px] max-md:px-2 px-6 py-4 top-0 relative border-b-[0.50px] border-gridline flex items-center justify-between ${className} bg-background z-2 text-foreground/50`}
    >
      {/* Left section */}
      <div className="relative self-stretch flex justify-start items-center gap-6 flex-1">
        <div className="w-[var(--grid-space)] text-[12px] font-medium leading-none max-md:hidden">
          {id}
        </div>
        <div className="md:text-right  text-[12px] max-md:text-[10px] font-medium leading-none">
          {question}
        </div>
      </div>

      {/* Status */}
      <div className="text-right text-[12px] max-md:text-[10px] font-medium leading-none w-[60px] max-md:hidden">
        {percentage}
      </div>

      {/* Response */}
      <div className="text-right text-[12px] max-md:text-[10px] font-medium leading-none flex-1">
        {achievements}
      </div>
    </div>
  );
}
