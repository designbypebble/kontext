"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Token = { t: string; h?: boolean; isPlaceholder?: boolean };

const blocks: Token[][] = [
  [
    { t: "Randy", h: true },
    { t: " " },
    { t: "[NAME]", h: true, isPlaceholder: true },
    { t: " we know you’re " },
    { t: "building at the edge of security,", h: true },
    { t: " " },
    { t: "infrastructure, and AI", h: true },
    { t: " " },
    { t: "[EXPERTISE]", h: true, isPlaceholder: true },
  ],
  [
    {
      t: "That’s exactly where our platform fits. Instead of spending cycles wiring up brittle integrations and compliance layers, you can use our SDKs and APIs to give your apps ",
    },
    { t: "secure, reliable functionality", h: true },
    { t: " " },
    { t: "[NEED]", h: true, isPlaceholder: true },
  ],
  [
    { t: "With you " },
    { t: "focusing on cutting-edge ideas", h: true },
    { t: " " },
    { t: "[WORK STYLE]", h: true, isPlaceholder: true },
    { t: " we’ll handle the " },
    { t: "guardrails – trust, compliance, security", h: true },
    { t: " " },
    { t: "[VALUE EMPHASIS]", h: true, isPlaceholder: true },
    { t: " – so you can " },
    { t: "ship, scale, and experiment", h: true },
    { t: " " },
    { t: "without compromise", h: true },
    { t: " " },
    { t: "[DESIRED OUTCOME]", h: true, isPlaceholder: true },
  ],
];

export default function SimpleHighlights() {
  const totalHighlights = useMemo(
    () => blocks.flat().filter((t) => t.h).length,
    []
  );

  let hi = 0;

  return (
    <div className="max-w-full mx-auto text-lg max-md:text-[12px] leading-relaxed space-y-6 px-8 py-6 text-foreground/50">
      {blocks.map((row, pi) => (
        <p key={pi} className="select-text">
          {row.map((token, ti) =>
            token.h ? (
              <HighlightSpan
                key={`${pi}-${ti}`}
                index={hi++}
                total={totalHighlights}
                isPlaceholder={token.isPlaceholder}
              >
                {token.t}
              </HighlightSpan>
            ) : (
              <span key={`${pi}-${ti}`}>{token.t}</span>
            )
          )}
        </p>
      ))}
    </div>
  );
}

function HighlightSpan({
  index,
  total,
  isPlaceholder = false,
  children,
}: {
  index: number;
  total: number;
  isPlaceholder?: boolean;
  children: React.ReactNode;
}) {
  return (
    <span className="relative inline-block px-1 rounded md:text-nowrap">
      {/* highlight bar behind the text */}
      <motion.span
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 0.6,
          delay: index * (0.05 + 0.5 / total),
        }}
        className="absolute left-0 w-full top-0.5 bottom-0.5 bg-[rgba(0,87,63,0.1)] rounded"
        style={{ zIndex: 0, display: "inline-block" }}
      />

      {/* text on top */}
      <motion.span
        initial={{
          color: "rgba(0,0,0,0.5)",
          border: "1px solid rgba(0,87,63,0)",
        }}
        animate={{
          color: "rgb(0,87,63)",
          border: isPlaceholder
            ? "1px solid rgba(0,87,63,0.5)"
            : "1px solid rgba(0,87,63,0)",
        }}
        transition={{
          duration: 0.6,
          delay: index * (0.05 + 0.5 / total),
        }}
        className="relative z-10"
      >
        {children}
      </motion.span>
    </span>
  );
}
