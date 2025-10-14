import clsx from "clsx";
import { GridCircle } from "./GridCircle";
import LayoutWrapper from "./LayoutWrapper";
import Divider from "./Divider";
import SectionAppearAnimation from "@/components/animations/SectionAppear";

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

interface DotSquareProps {
  className?: string;
  children?: React.ReactNode;
}

export const SectionContainer: React.FC<DotSquareProps> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={clsx(
        "w-full flex flex-col items-center min-h-full justify-between"
      )}
    >
      <Divider />
      <LayoutWrapper
        className={clsx("flex flex-col justify-between", className)}
      >
        <div className="w-full flex justify-between relative">
          <GridCircleCouple />
          <GridCircleCouple />
        </div>

        {children && (
          <SectionAppearAnimation className="w-full flex justify-center">
            {children}
          </SectionAppearAnimation>
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
