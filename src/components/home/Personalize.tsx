import DashedLine from "../ui/DashedLine";
import LayoutWrapper from "../ui/LayoutWrapper";
import NavItemsSection from "../ui/NavItemsSection";
import ScreenContainer from "../ui/ScreenContainer";
import { SectionContainer } from "../ui/SectionContainer";
import { Tag } from "../ui/Tag";
import { H1 } from "../ui/typography/H1";
import { P } from "../ui/typography/P";

export default function () {
  return (
    <>
      <LayoutWrapper className="flex">
        <NavItemsSection />


        {/* Filler Div */}
        <div className="w-[109px]"></div>
        {/* Filler Div Ended*/}

        <DashedLine height={"538px"} color="var(--color-gridline)" />

        <div className="w-full flex justify-center items-center ">
          <ScreenContainer></ScreenContainer>
        </div>

        <DashedLine height={"538px"} color="var(--color-gridline)" />

        {/* Filler Div */}
        <div className="w-[109px]"></div>
        {/* Filler Div Ended*/}


        <NavItemsSection />
      </LayoutWrapper>

      {/* Title */}
            <SectionContainer>
                <LayoutWrapper className="flex items-end justify-between flex-wrap px-[105px] py-[30px]">
                  <div className="flex flex-col">
                    <Tag text="02/03"></Tag>
                    <H1 className="text-accent">Personalize</H1>
                  </div>
                  <P className="!max-w-[351px]">
                   Kontext personalizes outputs with real user context such as tone, preferences, and history while keeping users in control.
                  </P>
                </LayoutWrapper>
            </SectionContainer>
            {/* Title Ends */}
    </>
  );
}
