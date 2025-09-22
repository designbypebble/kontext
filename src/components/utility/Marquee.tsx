"use client";

import { useAnimationFrame } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type MarqueeProps = {
  speed?: number; // pixels per second
  direction?: "left" | "right"; // new prop
  children: React.ReactNode;
  className?: string;
};

export default function Marquee({
  speed = 60,
  direction = "left", // default
  children,
  className = "",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const x = useRef(0);

  useEffect(() => {
    if (direction === "right") {
      x.current = -width; // start off-screen left
    } else {
      x.current = 0; // start at 0
    }
  }, [direction, width]);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current && contentRef.current) {
        const contentWidth = contentRef.current.offsetWidth;
        setWidth(contentWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((t, delta) => {
    const px = (speed * delta) / 1000;

    if (direction === "right") {
      x.current += px;
      if (x.current >= 0) x.current = -width; // wrap back
    } else {
      x.current -= px;
      if (x.current <= -width) x.current = 0; // wrap back
    }

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <div className={`overflow-hidden whitespace-nowrap w-full ${className}`}>
      <div ref={containerRef} className="flex">
        <div ref={contentRef} className="flex shrink-0">
          {children}
        </div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
