import LayoutWrapper from "@/components/ui/LayoutWrapper";
import SectionAppearAnimation from "@/components/animations/SectionAppear";

import TableLoop from "@/components/home/TableLoop";

export default function DashboardTable() {
  return (
    <LayoutWrapper className="flex justify-between h-[350px] overflow-y-hidden">
      <div className="w-[var(--grid-space)] flex self-stretch items-center justify-center max-md:hidden">
        <div className="h-25 w-2 rounded-full border border-gridline"></div>
      </div>
      <SectionAppearAnimation className="flex pt-5 px-6 md:justify-center max-w-full w-[932px] mx-auto">
        <TableLoop />
      </SectionAppearAnimation>
      <div className="w-[var(--grid-space)] flex self-stretch items-center justify-center max-md:hidden">
        <div className="h-25 w-2 rounded-full border border-gridline"></div>
      </div>
    </LayoutWrapper>
  );
}
