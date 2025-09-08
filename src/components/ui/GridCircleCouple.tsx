import clsx from "clsx";
import { GridCircle } from "./GridCircle";

export default function GridCircleCouple({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "w-[66px] flex justify-between items-center relative",
        className
      )}
    >
      <GridCircle />
      <GridCircle variant="right" />
    </div>
  );
}
