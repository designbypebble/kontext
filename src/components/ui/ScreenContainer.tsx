import clsx from "clsx";

interface ScreenContainerProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ScreenContainer({
  title = "Without Kontex",
  className = "",
  children = (
    <>
      <p className="text-[14px] leading-[1.5] text-foreground font-mono">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.{" "}
      </p>
    </>
  ),
}: ScreenContainerProps) {
  return (
    <>
      <div
        className={clsx(
          "flex flex-col rounded-lg border-[0.5px] border-gridline bg-white items-center max-w-full overflow-clip",
          className
        )}
      >
        {/* Header */}
        <div className="flex w-full bg-[FAFCFB] border-b-[0.5px] border-gridline ">
          <div className="flex gap-2 px-4 py-[10px] border-r-[0.5px] border-gridline">
            <div className="w-3 h-3 border-[0.5px] border-gridline rounded-full"></div>
            <div className="w-3 h-3 border-[0.5px] border-gridline rounded-full"></div>
            <div className="w-3 h-3 border-[0.5px] border-gridline rounded-full"></div>
          </div>
          <div className="flex justify-center items-center flex-1">
            <p className="text-[12px] leading-[1.5] text-foreground/50 font-mono">
              {title}
            </p>
          </div>
        </div>
        {/* Header Ends*/}

        {/* Text */}
        <div className="w-full font-mono overflow-hidden">{children}</div>
        {/* Text Ends */}
      </div>
    </>
  );
}
