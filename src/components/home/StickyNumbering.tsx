import Image from "next/image";
import DashedLine from "@/components/ui/DashedLine";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import NavItemsSection from "@/components/ui/NavItemsSection";
import impact_01 from "@/assets/images/impact_01.avif";
import personalize_02 from "@/assets/images/personalize_02.png";
import observe_01 from "@/assets/images/observe_01.png";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Tag } from "@/components/ui/Tag";
import { H1 } from "@/components/ui/typography/H1";
import { P } from "@/components/ui/typography/P";
import ScreenContainer from "@/components/ui/ScreenContainer";

export default function StickyNumbering() {
  return (
    <LayoutWrapper className="w-full relative">
      <div className="sticky left-0 w-full top-0 flex justify-between max-h-screen h-[700px]">
        <NavItemsSection />
        <NavItemsSection />
      </div>

      <div className="flex justify-between mx-auto relative w-full mt-[-700px] max-w-[1090px]">
        <div className="flex-1 w-full flex min-h-[700px] gap-[50px] items-center justify-center ">
          <DashedLine color="var(--color-gridline)" className="max-lg:hidden" />
          <div className="w-full py-[50px]">
            <Image
              src={impact_01}
              alt=""
              aria-hidden
              className="max-w-[720px] mx-auto w-full"
            />
          </div>
          <DashedLine color="var(--color-gridline)" className="max-lg:hidden" />
        </div>
      </div>

      <SectionContainer>
        <LayoutWrapper className="flex items-end flex-wrap justify-between max-md:px-6 px-[105px] py-[30px] ">
          <div className="flex flex-col">
            <Tag text="01/03"></Tag>
            <H1 className="text-accent">Link</H1>
          </div>
          <P className="!max-w-[351px]">
            Integrate Kontext in 5 minutes. One simple SDK connects your app to
            user context.
          </P>
        </LayoutWrapper>
      </SectionContainer>

      <div className="flex justify-between mx-auto relative w-full max-w-[1090px]">
        <div className="flex-1 w-full flex min-h-[700px] gap-[50px] items-center justify-center ">
          <DashedLine color="var(--color-gridline)" className="max-lg:hidden" />
          <div className="w-full py-[50px]">
            <div className="flex min-h-[537px] flex-1 justify-center items-center max-md:p-6">
              <div className="max-w-full flex justify-center items-center ">
                <ScreenContainer title="Without Kontext">
                  <p className="max-w-[350px]">
                    We are building a developer platform designed to make it
                    easier to integrate secure, reliable functionality into
                    applications.
                  </p>
                  <p className="max-w-[350px]">
                    The product focuses on providing simple APIs and SDKs that
                    help developers move faster while maintaining trust and
                    compliance standards.
                  </p>
                  <p className="max-w-[350px]">
                    Our goal is to enable teams to ship high-quality products
                    with less overhead, whether they are early-stage startups or
                    established enterprises.
                  </p>
                </ScreenContainer>
              </div>
            </div>
          </div>
          <DashedLine color="var(--color-gridline)" className="max-lg:hidden" />
        </div>
      </div>

      <SectionContainer>
        <LayoutWrapper className="flex items-end justify-between flex-wrap max-md:px-6 px-[105px] py-[30px]">
          <div className="flex flex-col">
            <Tag text="02/03"></Tag>
            <H1 className="text-accent">Personalize</H1>
          </div>
          <P className="!max-w-[351px]">
            Integrate Kontext in 5 minutes. One simple SDK connects your app to
            user context.
          </P>
        </LayoutWrapper>
      </SectionContainer>

      <div className="flex justify-between mx-auto relative w-full max-w-[1090px]">
        <div className="flex-1 w-full flex min-h-[700px] gap-[50px] items-center justify-center ">
          <DashedLine color="var(--color-gridline)" className="max-lg:hidden" />
          <div className="w-full py-[50px]">
            <Image
              src={personalize_02}
              alt=""
              aria-hidden
              className="max-w-[720px] mx-auto w-full"
            />
          </div>
          <DashedLine color="var(--color-gridline)" className="max-lg:hidden" />
        </div>
      </div>

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

      <div className="flex justify-between mx-auto relative w-full max-w-[1090px]">
        <div className="flex-1 w-full flex min-h-[700px] gap-[50px] items-center justify-center ">
          <DashedLine color="var(--color-gridline)" className="max-lg:hidden" />
          <div className="w-full py-[50px]">
            <Image
              src={observe_01}
              alt=""
              aria-hidden
              className="max-w-[900px] mx-auto w-full"
            />
          </div>
          <DashedLine color="var(--color-gridline)" className="max-lg:hidden" />
        </div>
      </div>

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
    </LayoutWrapper>
  );
}
