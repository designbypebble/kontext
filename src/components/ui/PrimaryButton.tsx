"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { motion, type HTMLMotionProps } from "framer-motion";
import AccentBrackets from "./AccentBrackets";

type PrimaryButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children?: React.ReactNode;
};

export function PrimaryButton({
  className,
  children,
  ...props
}: PrimaryButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      className={clsx(
        "group px-1.5 py-1.5 bg-transparent flex justify-center items-center gap-2.5 font-sans text-[1.15rem] relative overflow-hidden cursor-pointer ",
        className
      )}
      initial={{
        color: "#fff",
        boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      {...props}
    >
      <AccentBrackets
        bracketSvgProps={{
          strokeOpacity: hovered ? 1 : 0.25,
          stroke: hovered ? "var(--color-accent)" : "black",
        }}
        className={hovered ? "inset-[2px]" : "inset-0"}
      />
      <div
        className={clsx(
          "px-4 py-2 min-w-full text-center relative transition-colors duration-300 ease-in-out",
          hovered ? "bg-accent/90" : "bg-accent"
        )}
      >
        {children}
      </div>
    </motion.button>
  );
}
