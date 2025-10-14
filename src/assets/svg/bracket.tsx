import React from "react";

type BracketProps = {
  wrapper?: React.HTMLAttributes<HTMLDivElement>;
  svg?: React.SVGProps<SVGSVGElement>;
};

export default function Bracket({ wrapper = {}, svg = {} }: BracketProps) {
  return (
    <div data-svg-wrapper {...wrapper}>
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svg}
      >
        <path
          d="M0.5 8V1H7.5"
          stroke={svg?.stroke ?? "black"}
          strokeOpacity={svg?.strokeOpacity ?? 0.25}
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}
