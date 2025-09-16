interface ScreenContainerProps {
  title?: string;
  children?: React.ReactNode;
}

export default function ScreenContainer({
  title = "Without Kontex",
  children = (
    <>
      <p className="text-[14px] leading-[1.5] text-black font-[Geist_Mono]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.{" "}
      </p>
    </>
  ),
}: ScreenContainerProps) {
  return (
    <>
      <div className="flex flex-col rounded-lg border-[0.5px] border-black/25 bg-white items-center">
        {/* Header */}
        <div className="flex w-full bg-[FAFCFB] border-b-[0.5px] border-black/25 max-w-[496px] ">
          <div className="flex gap-2 px-4 py-[10px] border-r-[0.5px] border-black/25">
            <div className="w-3 h-3 border-[0.5px] border-black/25 rounded-full"></div>
            <div className="w-3 h-3 border-[0.5px] border-black/25 rounded-full"></div>
            <div className="w-3 h-3 border-[0.5px] border-black/25 rounded-full"></div>
          </div>
          <div className="flex justify-center items-center flex-1">
            <p className="text-[10px] leading-[1.5] text-black/50 font-[Geist_Mono]">{title}</p>
          </div>
        </div>
        {/* Header Ends*/}

        {/* Text */}
        <div className="flex flex-col items-center px-8 py-6 gap-8 text-[14px] leading-[1.5] font-[Geist_Mono] ">
          {children}
        </div>
        {/* Text Ends */}
      </div>
    </>
  );
}


