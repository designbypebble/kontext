import { TableLogLoop } from "@/components/home/TableLoop";
import { SectionContainer } from "@/components/ui/SectionContainer";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import SectionAppearAnimation from "@/components/animations/SectionAppear";

import Image from "next/image";
import Divider from "@/components/ui/Divider";
import clsx from "clsx";
export default function Observability() {
  return (
    <>
      <SectionContainer>
        <div className="h-[260px] w-full overflow-hidden px-6">
          <TableLogLoop />
        </div>
      </SectionContainer>

      <LayoutWrapper className="flex justify-between h-[300px] overflow-y-hidden">
        <div className="w-[var(--grid-space)] flex self-stretch items-center justify-center max-md:hidden">
          <div className="h-25 w-2 rounded-full border border-gridline bg-white"></div>
        </div>
        <Accent />
        <SectionAppearAnimation className="flex pt-5 px-6 md:justify-center max-w-full mx-auto w-[683px] border-x border-gridline">
          <div className="flex flex-col px-8 pt-[38px] pb-[47px] gap-2 justify-center items-center w-full">
            <div className="flex gap-2 w-full justify-center items-center">
              <Image
                alt="rocket"
                src="/rocket.png"
                width={18}
                height={18}
                style={{ objectFit: "contain" }}
              />
              <p className="text-xl font-medium text-center">
                Observability and Compliance
              </p>
            </div>
            <p className="text-lg leading-[1.5] text-foreground/50 text-center w-[424px] max-w-full mx-auto">
              Audit logs and metrics ensure outputs are transparent and
              compliant.
            </p>
          </div>
        </SectionAppearAnimation>
        <Accent />
        <div className="w-[var(--grid-space)] flex self-stretch items-center justify-center max-md:hidden">
          <div className="h-25 w-2 rounded-full border border-gridline bg-white"></div>
        </div>
      </LayoutWrapper>
      <Divider />
    </>
  );
}

const Accent = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "flex-col flex-1 px-12 h-full flex justify-center items-center gap-3.5  max-md:hidden",
        className
      )}
    >
      <div className="w-14 h-2 bg-white rounded-full border border-gridline" />
      <div className="w-14 h-2 bg-white rounded-full border border-gridline" />
      <div className="w-14 h-2 bg-white rounded-full border border-gridline" />
    </div>
  );
};
