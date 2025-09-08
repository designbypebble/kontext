export function VerticalGrid() {
  return (
    <div className="absolute w-full h-full top-0 left-0">
      <div className="max-w-full h-full flex w-[1111px] 2xl:w-[1440px] mx-auto justify-between max-lg:hidden">
        <div className="w-[66px] h-full flex justify-between">
          <div className="w-[1px] h-full bg-gridline"></div>
          <div className="w-[1px] h-full bg-gridline"></div>
        </div>
        <div className="w-[66px] h-full flex justify-between">
          <div className="w-[1px] h-full bg-gridline"></div>
          <div className="w-[1px] h-full bg-gridline"></div>
        </div>
      </div>
      <div className="lg:hidden w-full px-2 flex justify-between h-full">
        <div className="w-[1px] h-full bg-gridline"></div>
        <div className="w-[1px] h-full bg-gridline"></div>
      </div>
    </div>
  );
}
