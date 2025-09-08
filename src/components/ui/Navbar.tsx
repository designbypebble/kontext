import Divider from "./Divider";
import GridCircleCouple from "./GridCircleCouple";
import LayoutWrapper from "./LayoutWrapper";
import { LogoFull } from "./Logo";

export default function Navbar() {
  return (
    <div className="w-full flex flex-col items-center ">
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
    </div>
  );
}

const NavButton = () => {
  return (
    <div className="px-7 py-2 rounded-full bg-[#00573f] font-sans text-white">
      Get Started
    </div>
  );
};
