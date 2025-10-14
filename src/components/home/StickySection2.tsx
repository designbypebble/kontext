import SectionAppearAnimation from "@/components/animations/SectionAppear";
import ScrollHighlights from "@/components/home/HighlightText";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import ScreenContainer from "@/components/ui/ScreenContainer";
import Image from "next/image";
import personalize_graphic from "@/assets/images/personalize_graphic.svg";
import { PersonalizeGraphic } from "@/assets/svg/personalize_graphic";

export function PersonalizeSectionIntro() {
  return (
    <LayoutWrapper className="flex-1 flex gap-[50px] items-center justify-center w-full">
      <div className="flex flex-1 justify-center items-center max-md:p-6 w-full">
        <SectionAppearAnimation className="max-w-full w-full flex justify-center items-center">
          <div className="w-[80%]">
            <PersonalizeGraphic />
          </div>
          {/* <Image 
            src={personalize_graphic}
            className="w-[80%]"
            alt="Personalzie with kontext"
          /> */}
          {/*  <ScreenContainer title="Without Kontext">
            <div className="w-full px-8 py-6">
              <p className="max-w-[350px] flex flex-col items-center gap-8 text-[14px] leading-[1.5] font-mono ">
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
            </div>
          </ScreenContainer> */}
        </SectionAppearAnimation>
      </div>
    </LayoutWrapper>
  );
}

export function PersonalizeSectionContent() {
  return (
    <div className="flex justify-center mx-auto w-full max-w-[1090px]">
      <div className="flex-1 max-md:max-w-[90vw]">
        <ScreenContainer title="With Kontext" className="w-[626px] mx-auto">
          <ScrollHighlights />
        </ScreenContainer>
      </div>
    </div>
  );
}
