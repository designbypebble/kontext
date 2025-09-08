import clsx from "clsx";

type GridCircleProps = {
  className?: string;
  variant?: "left" | "right";
};

export function GridCircle({ className, variant = "left" }: GridCircleProps) {
  return (
    <div
      className={clsx(
        "w-[5px] h-[5px] rounded-full bg-gridline shadow-[0_0_0_4.74px_#fff] absolute",
        variant === "left" && "left-[-2px] top-[-2px]",
        variant === "right" && "right-[-2px] top-[-2px]",
        className
      )}
    />
  );
}
