import DashedLine from "../ui/DashedLine";
import LayoutWrapper from "../ui/LayoutWrapper";
import NavItemsSection from "../ui/NavItemsSection";
import { SectionContainer } from "../ui/SectionContainer";
import { Tag } from "../ui/Tag";
import { H1 } from "../ui/typography/H1";
import { P } from "../ui/typography/P";

export default function Observe() {
  return (
    <>
      <LayoutWrapper className="flex justify-center">
        <NavItemsSection />



        <div className="flex max-w-[760px] flex-1">
          <DashedLine height={"538px"} color="var(--color-gridline)" />

        <div className="w-full flex justify-center items-center ">
          Observe
        </div>

        <DashedLine height={"538px"} color="var(--color-gridline)" /></div> 

        


        <NavItemsSection />
      </LayoutWrapper>

      {/* Title */}
            <SectionContainer>
                <LayoutWrapper className="flex items-end justify-between flex-wrap px-[105px] py-[30px]">
                  <div className="flex flex-col">
                    <Tag text="03/03"></Tag>
                    <H1 className="text-accent">Observe</H1>
                  </div>
                  <P className="!max-w-[351px]">
                   Track impact with built-in observability. Monitor accuracy, usage, and trust at scale.
                  </P>
                </LayoutWrapper>
            </SectionContainer>
            {/* Title Ends */}
    </>
  );
}
