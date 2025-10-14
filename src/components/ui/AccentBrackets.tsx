import Bracket from "@/assets/svg/bracket";
import clsx from "clsx";

export default function AccentBrackets({
  bracketSvgProps = {
    stroke: "black",
    strokeOpacity: "0.25",
    strokeWidth: "0.5",
  },
  className,
}: {
  bracketSvgProps?: React.SVGProps<SVGSVGElement>;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "absolute  flex flex-col justify-between transition-all duration-150 ease-in-out",
        className
      )}
    >
      <div className="w-full flex justify-between">
        <Bracket svg={{ ...bracketSvgProps }} />
        <Bracket
          svg={{ ...bracketSvgProps }}
          wrapper={{ className: "rotate-y-180" }}
        />
      </div>
      <div className="w-full flex justify-between rotate-x-180">
        <Bracket svg={{ ...bracketSvgProps }} />
        <Bracket
          svg={{ ...bracketSvgProps }}
          wrapper={{ className: "rotate-y-180" }}
        />
      </div>
    </div>
  );
}
