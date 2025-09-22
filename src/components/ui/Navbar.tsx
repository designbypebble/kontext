import SectionAppearAnimation from "@/components/animations/SectionAppear";
import Divider from "./Divider";
import GridCircleCouple from "./GridCircleCouple";
import LayoutWrapper from "./LayoutWrapper";
import { LogoFull } from "./Logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <SectionAppearAnimation
      initialY={-20}
      delay={0}
      className="w-full flex flex-col items-center z-10 relative "
    >
      <LayoutWrapper className="lg:px-[66px] ">
        <nav className="w-full py-4 px-4 flex justify-between bg-background/60 backdrop-blur-md">
          <LogoFull className="w-[120px]" />
          <NavButton />
        </nav>
      </LayoutWrapper>
      <div className="w-full h-[1px] bg-gridline " />
      <div className="w-full flex justify-between items-center py-4 px-4 max-w-[1732px] bg-background/60">
        <Divider className="!w-[120px]" />
        <Divider className="!w-[120px]" />
      </div>
      <LayoutWrapper className="backdrop-blur-md">
        <div className="w-full flex justify-between">
          <GridCircleCouple />
          <GridCircleCouple />
        </div>
      </LayoutWrapper>
      <Divider />
    </SectionAppearAnimation>
  );
}

const NavButton = () => {
  return (
    <Link
      href={"https://docs.kontext.dev/documentation/quickstart"}
      className="px-7 py-2 rounded-full bg-[#00573f] font-sans text-white scale-100 hover:scale-90 ease-in-out duration-250 transition-transform cursor-pointer"
    >
      Get Started
    </Link>
  );
};
