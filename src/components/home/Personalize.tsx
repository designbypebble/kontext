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
      <LayoutWrapper className="flex justify-between max-lg:justify-center">
        <NavItemsSection />

        {/* Filler Div */}
        <div className="w-[109px] max-lg:hidden"></div>
        {/* Filler Div Ended*/}

        <DashedLine height={"537px"} color="var(--color-gridline)" className="max-lg:hidden" />
        <div className="flex min-h-[537px] flex-1 justify-center items-center max-md:p-6">
          <div className="max-w-full flex justify-center items-center ">
            <ScreenContainer title="Without Kontext">
              <p className="max-w-[350px]">
                We are building a developer platform designed to make it easier
                to integrate secure, reliable functionality into applications.
              </p>
              <p className="max-w-[350px]">
                The product focuses on providing simple APIs and SDKs that help
                developers move faster while maintaining trust and compliance
                standards.
              </p>
              <p className="max-w-[350px]">
                Our goal is to enable teams to ship high-quality products with
                less overhead, whether they are early-stage startups or
                established enterprises.
              </p>
            </ScreenContainer>
          </div>
        </div>
        <DashedLine height={"537px"} color="var(--color-gridline)" className="max-lg:hidden" />
        {/* Filler Div */}
        <div className="w-[109px] max-lg:hidden"></div>
        {/* Filler Div Ended*/}

        <NavItemsSection />
      </LayoutWrapper>

      {/* Title */}
      <SectionContainer>
        <LayoutWrapper className="flex items-end justify-between flex-wrap max-md:px-6 px-[105px] py-[30px]">
          <div className="flex flex-col">
            <Tag text="02/03"></Tag>
            <H1 className="text-accent">Personalize</H1>
          </div>
          <P className="!max-w-[351px]">
            Kontext personalizes outputs with real user context such as tone,
            preferences, and history while keeping users in control.
          </P>
        </LayoutWrapper>
      </SectionContainer>
      {/* Title Ends */}
    </>
  );
}
