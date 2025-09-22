"use client";
import React from "react";
import clsx from "clsx";
import { motion, type HTMLMotionProps } from "framer-motion";
import AccentBrackets from "./AccentBrackets";

type SecondaryButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children?: React.ReactNode;
};

export function SecondaryButton({
  className,
  children,
  ...props
}: SecondaryButtonProps) {
  return (
    <motion.button
      className={clsx(
        "px-1.5 py-1.5 bg-transparent flex justify-center items-center gap-2.5 font-sans text-[18px] relative overflow-hidden cursor-pointer",
        className
      )}
      whileHover="hover"
      initial={{ color: "#fff", boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)" }}
      variants={{
        hover: {},
      }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      {...props}
    >
      <AccentBrackets />
      {/* text layer */}
      <div className="px-4 py-1.5 min-w-full text-center relative bg-black">
        {children}
      </div>
    </motion.button>
  );
}
