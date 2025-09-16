import { HeaderSideSection } from "../ui/HeaderSideSection";
import { Tag } from "../ui/Tag";

import { P } from "../ui/typography/P";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
function Impact() {
  return (
    <LayoutWrapper className="flex items-center">
      
      <HeaderSideSection label="[ IMPACT ]" inverted={false} />

      {/* Side Div */}
      <div className="w-[109px] hidden lg:block"></div>
      {/* Side Div Ended*/}

      <div className="flex-1 flex justify-center items-center border-x-[0.5px] border-gridline md:h-[371px] max-md:px-6 max-md:py-5">
        <div className="flex flex-col p-[10px] gap-4 items-center w-[532px] max-lg:w-[65vw] max-md:w-[80vw]">
          {/* Impact */}
          <div className="flex flex-row items-center">
            <div className="w-[40px] h-[1px] bg-gridline"></div>
            <Tag text="IMPACT" className="text-center px-4 py-2" />
            <div className="w-[40px] h-[1px] bg-gridline"></div>
          </div>
          {/* Impact Ended */}

          {/* Header */}
          <div className="flex flex-col items-center">
            <h1 className="max-w-full text-6xl font-medium leading-[1em]  max-md:text-4xl text-center">
              From generic
            </h1>
            <h1 className="max-w-full text-6xl font-medium leading-none max-md:text-4xl text-accent text-center">
              to personal
            </h1>
          </div>
          {/* Header Ended */}

          <P className="w-[431px] text-center"> See how Kontext transforms your app in three steps.</P>
        </div>
      </div>

      {/* Side Div */}
      <div className="w-[109px] hidden lg:block"></div>
      {/* Side Div Ended*/}

      <HeaderSideSection label="[ IMPACT ]" inverted={true} />

    </LayoutWrapper>
  );
}

export default Impact;
