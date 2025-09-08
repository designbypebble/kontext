"use client";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";

type TagProps = {
  /** Only the inner text, e.g. "GET STARTED" */
  text: string;
  className?: string;
  /** ms per character (default 100) */
  speedMs?: number;
  /** optional delay before typing starts (after in-view) */
  startDelayMs?: number;
  /** ms to hold full text before backspacing (default 5000) */
  holdMs?: number;
  /** run the animation in a loop (default true) */
  loop?: boolean;
};

export function Tag({
  text,
  className,
  speedMs = 100,
  startDelayMs = 0,
  holdMs = 2500,
  loop = true,
}: TagProps) {
  const safeText = String(text ?? "");
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<
    "idle" | "typing" | "holding" | "backspacing"
  >("idle");

  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.2, once: false });

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelledRef = useRef(false);

  function clearTimer() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }

  useEffect(() => {
    cancelledRef.current = false;
    return () => {
      cancelledRef.current = true;
      clearTimer();
    };
  }, []);

  useEffect(() => {
    // restart animation when text changes or when view state changes
    setDisplayed("");
    setPhase("idle");
  }, [safeText]);

  useEffect(() => {
    clearTimer();

    // Respect reduced motion: show text, no loop
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setDisplayed(safeText);
      setPhase("holding");
      return;
    }

    if (!inView) {
      // Pause when out of view; reset so it replays on re-enter
      setDisplayed("");
      setPhase("idle");
      return;
    }

    let i = displayed.length; // continue from current length (usually 0 on start)

    const startTyping = () => {
      setPhase("typing");
      const tick = () => {
        if (cancelledRef.current) return;
        i = Math.min(i + 1, safeText.length);
        setDisplayed(safeText.slice(0, i));

        if (i < safeText.length) {
          timeoutRef.current = setTimeout(tick, speedMs);
        } else {
          // full string typed → hold
          setPhase("holding");
          timeoutRef.current = setTimeout(() => {
            if (!loop) return; // stop after one cycle if loop=false
            // begin backspacing
            startBackspace();
          }, holdMs);
        }
      };
      tick();
    };

    const startBackspace = () => {
      setPhase("backspacing");
      const tick = () => {
        if (cancelledRef.current) return;
        i = Math.max(i - 1, 0);
        setDisplayed(safeText.slice(0, i));

        if (i > 0) {
          timeoutRef.current = setTimeout(tick, speedMs);
        } else {
          // back to empty → restart typing (loop)
          setPhase("idle");
          timeoutRef.current = setTimeout(() => startTyping(), startDelayMs);
        }
      };
      tick();
    };

    // Kick off (or re-kick) the loop
    timeoutRef.current = setTimeout(() => startTyping(), startDelayMs);

    return () => clearTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, safeText, speedMs, startDelayMs, holdMs, loop]);

  const done = displayed.length >= safeText.length && phase !== "backspacing";

  return (
    <div
      ref={ref}
      className={clsx(
        "inline-flex items-center font-mono text-lg font-medium text-black",
        className
      )}
      aria-label={safeText}
    >
      <span>[</span>
      <span>{displayed}</span>
      {/* Caret shows while typing/backspacing, hides during full hold */}
      {!done && (
        <motion.span
          className="w-1 h-[1.2em] bg-black ml-[2px] mr-[2px]"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      )}
      <span>]</span>
    </div>
  );
}
