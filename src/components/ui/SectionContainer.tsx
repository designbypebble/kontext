import clsx from "clsx";
import { GridCircle } from "./GridCircle";
import LayoutWrapper from "./LayoutWrapper";
import Divider from "./Divider";

export default function GridCircleCouple({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "w-[66px] flex justify-between items-center relative max-w-full",
        className
      )}
    >
      <GridCircle />
      <GridCircle variant="right" />
    </div>
  );
}

interface DotSquareProps {
  className?: string;
  children?: React.ReactNode;
}

export const SectionContainer: React.FC<DotSquareProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={clsx("w-full flex flex-col items-center")}>
      <Divider />
      <LayoutWrapper className={clsx("flex flex-col justify-between", className)}>
        
        <div className="w-full flex justify-between relative">
          <GridCircleCouple />
          <GridCircleCouple />
        </div>

        
        {children && (
          <div className="w-full flex justify-center">{children}</div>
        )}

        <div className="w-full flex justify-between relative">
          <GridCircleCouple />
          <GridCircleCouple />
        </div>
      </LayoutWrapper>
      <Divider />
    </div>
  );
};
