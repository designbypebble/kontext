import AnimatedKontextIcon from "@/components/animations/KontextIcon";
import AnimatedUserIcon from "@/components/animations/UserIcon";
import AnimatedUserLapotopIcon from "@/components/animations/UserLaptopIcon";
import ImpactSvgContainer from "@/components/home/ImpactSvgContainer";

import LayoutWrapper from "@/components/ui/LayoutWrapper";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Tag } from "@/components/ui/Tag";
import { H1 } from "@/components/ui/typography/H1";
import { P } from "@/components/ui/typography/P";

export function LinkSection() {
  return (
    <LayoutWrapper className="flex-1 flex gap-[50px] items-center justify-cente">
      <div className="flex justify-center gap-2 max-md:flex-col flex-1">
        <ImpactSvgContainer title="Dev" icon={<AnimatedUserLapotopIcon />} />
        <DotDivider />
        <ImpactSvgContainer
          delay={0.25}
          title="Kontext"
          icon={<AnimatedKontextIcon />}
        />
        <DotDivider />
        <ImpactSvgContainer
          delay={0.5}
          title="User"
          icon={<AnimatedUserIcon />}
        />
      </div>
    </LayoutWrapper>
  );
}

export function LinkSectionTitle() {
  return (
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
  );
}

const DotDivider = () => {
  return (
    <div className="flex gap-1.5 items-center relative md:top-[-40px] opacity-60 max-md:flex-col">
      <div className="w-4 h-[1px] bg-gridline max-md:h-1 max-md:w-[1px]" />
      <div className="rounded-full size-1 bg-gridline"></div>
      <div className="w-4 h-[1px] bg-gridline max-md:h-1 max-md:w-[1px]" />
    </div>
  );
};
