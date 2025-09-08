import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function SecondaryButton({
  className,
  children,
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      className={clsx(
        "px-1.5 py-1.5 bg-transparent rounded-full flex justify-center items-center gap-2.5 text-white font-sans relative border-1 border-black/25",
        className
      )}
      {...props}
    >
      <div className="px-4 py-2 rounded-full bg-black min-w-full">
        {" "}
        {children}
      </div>
    </button>
  );
}
