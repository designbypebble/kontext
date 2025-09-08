import { HTMLAttributes } from "react";
import clsx from "clsx";

type H1Props = HTMLAttributes<HTMLHeadingElement> & {
  className?: string;
};

export function H1({ className, children, ...props }: H1Props) {
  return (
    <h1
      className={clsx(
        "max-w-full text-6xl font-medium leading-[1.2em] capitalize",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
