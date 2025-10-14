"use client";

import { motion } from "framer-motion";

type Props = {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  space?: boolean;
  suffix?: string;
};

export default function OdometerCount({
  from,
  to,
  duration = 1.2,
  delay = 0,
  suffix,
}: Props) {
  // Format 'to' with commas
  const toFormatted = to.toLocaleString();
  const fromRaw = from.toString().padStart(to.toString().length, "0");

  // Build aligned fromDigits and toDigits arrays
  const fromDigits: string[] = [];
  const toDigits: string[] = [];

  let fromIndex = 0;
  for (let i = 0; i < toFormatted.length; i++) {
    const char = toFormatted[i];
    if (char === ",") {
      fromDigits.push(",");
      toDigits.push(",");
    } else {
      fromDigits.push(fromRaw[fromIndex]);
      toDigits.push(char);
      fromIndex++;
    }
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-[0]">
        {toDigits.map((char, i) => {
          if (char === ",") {
            return <div key={i}>,</div>;
          }

          const fromDigit = parseInt(fromDigits[i] ?? "0");
          const toDigit = parseInt(char);

          return (
            <DigitScroll
              key={i}
              from={fromDigit}
              to={toDigit}
              index={i}
              duration={duration}
              delay={delay}
            />
          );
        })}
      </div>

      {suffix && <span>{suffix}</span>}
    </div>
  );
}

function DigitScroll({
  from,
  to,
  index,
  duration,
  delay,
}: {
  from: number;
  to: number;
  index: number;
  duration: number;
  delay: number;
}) {
  const digitSequence: number[] = [];
  let current = from;
  while (true) {
    digitSequence.push(current);
    if (current === to) break;
    current = (current + 1) % 10;
  }

  const scrollHeight = 20;

  return (
    <div className="relative h-[20px] overflow-hidden">
      <motion.span
        className="flex flex-col"
        custom={index}
        initial={{ y: 0 }}
        whileInView="animate"
        variants={{
          animate: (i) => ({
            y: `-${(digitSequence.length - 1) * scrollHeight}px`,
            transition: {
              duration,
              delay: delay + i * 0.25,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          }),
        }}
        viewport={{ once: true }}
      >
        {digitSequence.map((digit, idx) => (
          <span
            key={idx}
            className="text-center leading-[20px] sm:tracking-[0em]"
          >
            {digit}
          </span>
        ))}
      </motion.span>
    </div>
  );
}
