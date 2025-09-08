import Image from "next/image";
import LayoutWrapper from "../ui/LayoutWrapper";
import hero_panel from "@/assets/images/hero_panel.svg";
import clsx from "clsx";
import { H1 } from "../ui/typography/H1";
import { P } from "../ui/typography/p";
import { PrimaryButton } from "../ui/PrimaryButton";
import { SecondaryButton } from "../ui/SecondaryButton";
export default function Hero() {
  return (
    <LayoutWrapper>
      <div className="w-full flex h-[439px]">
        <StripesBarSVG />
        <HeroPanel />
        <div className="flex-1 self-stretch flex flex-col items-center justify-center max-w-full">
          <div className="w-[532px] max-w-full flex flex-col gap-[12px] items-center">
            <H1 className="text-center">
              The <span className="text-accent">context</span> layer for AI
              apps.
            </H1>
            <P className="w-[375px]">
              Make your AI apps personal, secure, and trusted in minutes.
            </P>
            <div className="flex w-full gap-2.5 justify-center md:w-[336px] max-md:flex-col">
              <SecondaryButton className="flex-1">
                Read The Docs
              </SecondaryButton>
              <PrimaryButton className="flex-1">Get Started</PrimaryButton>
            </div>
          </div>
        </div>
        <HeroPanel className="rotate-y-180" />
        <StripesBarSVG />
      </div>
    </LayoutWrapper>
  );
}

export function StripesBarSVG() {
  return (
    <div className="w-[66px] h-full max-lg:hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="diagonalPattern"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(40)"
          >
            <rect width="100%" height="2" fill="var(--color-accent)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalPattern)" />
      </svg>
    </div>
  );
}

function HeroPanel({ className = "" }: { className?: string }) {
  return (
    <div className={clsx("max-lg:hidden flex", className)}>
      <Image alt="Hero Panel" aria-hidden src={hero_panel} className="mx-4" />
      <div className="h-calc(100%_+_2.125rem) -mt-8.5 w-[1px] bg-gridline"></div>
    </div>
  );
}
