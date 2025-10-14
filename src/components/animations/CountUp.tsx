"use client";

import {
  motion,
  useMotionValue,
  useAnimationFrame,
  animate,
} from "framer-motion";
import { useState } from "react";

type CountUpProps = {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  className?: string;
  delay?: number;
};

const CountUp = ({
  from = 0,
  to,
  duration = 1,
  decimals = 0,
  suffix = "",
  delay = 0,
  className = "",
}: CountUpProps) => {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from.toFixed(decimals));

  const handleEnterView = () => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
      delay,
    });
    return controls.stop;
  };

  useAnimationFrame(() => {
    setDisplay(parseInt(count.get().toFixed(decimals)).toLocaleString());
  });

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      onViewportEnter={handleEnterView}
      className={className}
    >
      {display}
      {suffix}
    </motion.span>
  );
};

export default CountUp;
