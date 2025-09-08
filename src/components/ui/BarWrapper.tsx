import clsx from "clsx";
import { ReactNode } from "react";

export default function BarWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={clsx("w-[66px]", className)}>{children}</div>;
}
