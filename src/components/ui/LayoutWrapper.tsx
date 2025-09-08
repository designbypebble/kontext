import { ReactNode } from "react";
import clsx from "clsx";

type LayoutWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function LayoutWrapper({
  children,
  className,
}: LayoutWrapperProps) {
  return (
    <div className={clsx("w-[1111px] 2xl:w-[1440px] max-w-full", className)}>
      {children}
    </div>
  );
}
