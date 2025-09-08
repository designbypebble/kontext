"use client";
import React from "react";
import clsx from "clsx";
import { motion, type HTMLMotionProps } from "framer-motion";

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
      {/* black pill background */}
      <div className="absolute inset-1.5 rounded-full bg-black" />

      {/* animated white ball that grows into pill */}
      <motion.div
        className="absolute left-1/2 top-[105%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"
        initial={{ width: "18px", height: "18px", y: 0 }}
        variants={{
          hover: {
            y: -40, // rise a bit
            width: "100%", // expand smoothly to cover
            height: "140px", // extra tall to ensure full fill
          },
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.5, 1],
        }}
      />

      {/* text layer */}
      <div className="px-4 py-1.5 rounded-full min-w-full text-center relative">
        {children}
      </div>
    </motion.button>
  );
}
