import SectionAppearAnimation from "@/components/animations/SectionAppear";
import Divider from "./Divider";
import GridCircleCouple from "./GridCircleCouple";
import LayoutWrapper from "./LayoutWrapper";
import { LogoFull } from "./Logo";
import Link from "next/link";
import { DOCS_LINK, GET_STARTED_LINK } from "@/lib/constants";
import React from "react";
import { ProductDropdown } from "@/components/ui/ProductDropdown";
import HamburgerMenu from "@/components/ui/Hamburger";

export default function Navbar() {
  return (
    <SectionAppearAnimation
      initialY={-20}
      delay={0}
      className="w-full flex flex-col items-center z-10  "
    >
      <LayoutWrapper className="lg:px-[66px] fixed top-0 z-10">
        <nav className="w-full py-4 px-4 flex justify-between bg-background/60 backdrop-blur-md ">
          <div className="flex-1 self-stretch flex items-center justify-start">
            <Link href={"/"}>
              <LogoFull className="w-[100px]" />
            </Link>
          </div>

          <div className="flex-1 self-stretch flex items-center justify-center max-md:hidden">
            <NavLinkMenu />
          </div>
          <div className="flex-1 self-stretch flex items-center justify-end gap-3">
            <NavButton />
            <HamburgerMenu />
          </div>
        </nav>
      </LayoutWrapper>
      <div className="w-full h-[1px] bg-gridline mt-18 relative" />
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
      href={GET_STARTED_LINK}
      className="px-7 max-md:px-4 py-2 rounded-full bg-[#00573f] font-sans text-white scale-100 hover:scale-98 ease-in-out duration-100 transition-transform cursor-pointer"
    >
      Get Started
    </Link>
  );
};

const CircleDivider = () => {
  return (
    <div className="w-[4px] h-[4px] !aspect-square rounded-full bg-gridline"></div>
  );
};

const NavLinkMenu = () => {
  return (
    <div className="flex w-full justify-center items-center gap-7">
      <ProductDropdown />

      <CircleDivider />
      <Link
        className="hover:text-accent transition-colors duration-300 ease-in-out"
        href={DOCS_LINK}
      >
        Docs
      </Link>
      <CircleDivider />
      <Link
        className="hover:text-accent transition-colors duration-300 ease-in-out"
        href="/blog"
      >
        Blogs
      </Link>
    </div>
  );
};
