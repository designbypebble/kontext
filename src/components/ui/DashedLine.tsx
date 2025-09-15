// components/DashedLine.tsx
import React from "react";

interface DashedLineProps {
  orientation?: "vertical" | "horizontal"; // default vertical
  height?: string | number; // e.g. "100%", "200px"
  width?: string | number;  // e.g. "2", "4px"
  color?: string;           // e.g. "black", "#ccc", "currentColor"
  strokeWidth?: number;     // thickness of line
  dash?: number;            // dash length
  gap?: number;             // gap length
  lineCap?: "butt" | "round" | "square"; // style of dash cap
}

const DashedLine: React.FC<DashedLineProps> = ({
  orientation = "vertical",
  height = "100%",
  width = 1,
  color = "black",
  strokeWidth = 2,
  dash = 16,
  gap = 16,
  lineCap = "butt",
}) => {
  return orientation === "vertical" ? (
    <svg
      width={typeof width === "number" ? `${width}` : width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="50%"
        y1="0"
        x2="50%"
        y2="100%"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={`${dash} ${gap}`}
        strokeLinecap={lineCap}
      />
    </svg>
  ) : (
    <svg
      width={width}
      height={typeof height === "number" ? `${height}` : height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={`${dash} ${gap}`}
        strokeLinecap={lineCap}
      />
    </svg>
  );
};

export default DashedLine;
