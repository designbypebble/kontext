"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

type TagProps = {
  /** Only the inner text, e.g. "GET STARTED" */
  text: string;
  className?: string;
  /** ms per character (default 100) */
  speedMs?: number;
};

export function Tag({ text, className, speedMs = 100 }: TagProps) {
  const safeText = String(text ?? "");
  const [displayed, setDisplayed] = useState("");
  const done = displayed.length >= safeText.length;

  useEffect(() => {
    let cancelled = false;
    setDisplayed("");

    const step = (i: number) => {
      if (cancelled) return;
      setDisplayed(safeText.slice(0, i));
      if (i <= safeText.length) {
        setTimeout(() => step(i + 1), speedMs);
      }
    };

    // start typing from the first character
    step(1);

    return () => {
      cancelled = true;
    };
  }, [safeText, speedMs]);

  return (
    <div
      className={clsx(
        "inline-flex items-center font-mono text-lg font-medium text-black",
        className
      )}
    >
      {/* Opening bracket */}
      <span>[</span>

      {/* Typed text */}
      <span>{displayed}</span>

      {/* Caret (occupies the “extra space” before closing bracket) */}
      {!done && (
        <motion.span
          className="w-1 h-[1.2em] bg-black ml-[2px] mr-[2px]"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Closing bracket */}
      <span>]</span>
    </div>
  );
}
