import { HTMLAttributes } from "react";
import clsx from "clsx";

type PProps = HTMLAttributes<HTMLParagraphElement> & {
  className?: string;
};

export function P({ className, children, ...props }: PProps) {
  return (
    <p
      className={clsx(
        "max-w-full text-[18px] text-black text-center",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
