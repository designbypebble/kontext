import SectionAppearAnimation from "../animations/SectionAppear";
import Divider from "./Divider";
import GridCircleCouple from "./GridCircleCouple";
import LayoutWrapper from "./LayoutWrapper";
import { LogoFull } from "./Logo";

export default function Navbar() {
  return (
    <SectionAppearAnimation
      initialY={-20}
      delay={0}
      className="w-full flex flex-col items-center relative"
    >
      <LayoutWrapper className="lg:px-[66px]">
        <nav className="w-full py-4 px-4 flex justify-between">
          <LogoFull className="w-[120px]" />
          <NavButton />
        </nav>
      </LayoutWrapper>
      <div className="w-full h-[1px] bg-gridline" />
      <div className="w-full flex justify-between items-center py-4 px-4 max-w-[1732px]">
        <Divider className="!w-[120px]" />
        <Divider className="!w-[120px]" />
      </div>
      <LayoutWrapper>
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
    <div className="px-7 py-2 rounded-full bg-[#00573f] font-sans text-white scale-100 hover:scale-90 ease-in-out duration-250 transition-transform cursor-pointer">
      Get Started
    </div>
  );
};
