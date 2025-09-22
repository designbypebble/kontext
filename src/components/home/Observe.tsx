import DashedLine from "@/components/ui/DashedLine";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Tag } from "@/components/ui/Tag";
import { H1 } from "@/components/ui/typography/H1";
import { P } from "@/components/ui/typography/P";

export default function Observe() {
  return (
    <>
      <LayoutWrapper className="flex justify-between max-lg:justify-center">
        {/* Filler Div */}
        <div className="w-[109px] max-lg:hidden"></div>
        {/* Filler Div Ended*/}

        <DashedLine
          height={"545px"}
          color="var(--color-gridline)"
          className="max-lg:hidden"
        />
        <div className="flex flex-1 min-h-[545px] flex justify-center items-center max-md:p-6">
          <div className="flex">Observe</div>
        </div>
        <DashedLine
          height={"545px"}
          color="var(--color-gridline)"
          className="max-lg:hidden"
        />

        {/* Filler Div */}
        <div className="w-[109px] max-lg:hidden"></div>
        {/* Filler Div Ended*/}
      </LayoutWrapper>

      {/* Title */}
      <SectionContainer>
        <LayoutWrapper className="flex items-end justify-between flex-wrap max-md:px-6 px-[105px] py-[30px]">
          <div className="flex flex-col">
            <Tag text="03/03"></Tag>
            <H1 className="text-accent">Observe</H1>
          </div>
          <P className="!max-w-[351px]">
            Track impact with built-in observability. Monitor accuracy, usage,
            and trust at scale.
          </P>
        </LayoutWrapper>
      </SectionContainer>
      {/* Title Ends */}
    </>
  );
}
