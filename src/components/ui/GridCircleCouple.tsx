import clsx from "clsx";
import { GridCircle } from "./GridCircle";
import LayoutWrapper from "./LayoutWrapper";
import Divider from "./Divider";
import React from "react";

export default function GridCircleCouple({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "w-[var(--grid-space)] flex justify-between items-center relative max-w-full",
        className
      )}
    >
      <GridCircle />
      <GridCircle variant="right" />
    </div>
  );
}

export const DotSquare = ({
  className = "",
  topVisible = true,
  bottomVisible = true,
  children,
}: {
  className?: string;
  topVisible?: boolean;
  bottomVisible?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <div className={clsx("w-full flex flex-col items-center")}>
      {topVisible && <Divider />}
      <LayoutWrapper
        className={clsx("flex flex-col justify-between", className)}
      >
        {topVisible && (
          <div className={clsx("w-full flex justify-between relative")}>
            <GridCircleCouple />
            <GridCircleCouple />
          </div>
        )}
        {children && children}
        {bottomVisible && (
          <div className={clsx("w-full flex justify-between relative")}>
            <GridCircleCouple />
            <GridCircleCouple />
          </div>
        )}
      </LayoutWrapper>

      {bottomVisible && <Divider />}
    </div>
  );
};

export const DotLine = ({ className = "" }: { className?: string }) => {
  return (
    <div className={clsx("w-full flex flex-col items-center")}>
      <Divider />
      <LayoutWrapper
        className={clsx("flex flex-col justify-between", className)}
      >
        <div className={clsx("w-full flex justify-between relative")}>
          <GridCircleCouple />
          <GridCircleCouple />
        </div>
      </LayoutWrapper>
    </div>
  );
};
