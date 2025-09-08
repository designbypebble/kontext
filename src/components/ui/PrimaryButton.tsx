"use client";
import React from "react";
import clsx from "clsx";
import { motion, type HTMLMotionProps } from "framer-motion";

// children narrowed so it can go inside a normal <div>
type PrimaryButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children?: React.ReactNode;
};

export function PrimaryButton({
  className,
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <motion.button
      className={clsx(
        "px-1.5 py-1.5 bg-transparent rounded-full flex justify-center items-center gap-2.5 font-sans text-[18px] relative border border-black/25 overflow-hidden cursor-pointer",
        className
      )}
      whileHover="hover"
      initial={{ color: "#fff", boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)" }}
      variants={{
        hover: {
          color: "var(--color-accent)",
          boxShadow: "0px 3px 0px 0px rgba(0,0,0,0.25)",
        },
      }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      {...props}
    >
      {/* base accent background */}
      <div className="absolute inset-1.5 rounded-full bg-accent" />

      {/* animated white ball that rises + expands */}
      <motion.div
        className="absolute left-1/2 top-[105%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-sm"
        initial={{ width: "18px", height: "18px", y: 0 }}
        variants={{
          hover: {
            y: -40, // rise smoothly
            width: "100%", // expand to fill width
            height: "140px", // expand tall enough to cover
          },
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.5, 1],
        }}
      />

      {/* text pill */}
      <div className="px-4 py-1.5 rounded-full min-w-full text-center relative">
        {children}
      </div>
    </motion.button>
  );
}
