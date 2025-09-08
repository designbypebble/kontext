import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton({
  className,
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={clsx(
        "px-1.5 py-1.5 bg-transparent rounded-full flex justify-center items-center gap-2.5 text-white font-sans relative border-1 border-black/25",
        className
      )}
      {...props}
    >
      <div className="px-4 py-2 rounded-full bg-[#00573f] min-w-full">
        {" "}
        {children}
      </div>
    </button>
  );
}
