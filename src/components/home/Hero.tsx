import Image from "next/image";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import hero_panel from "@/assets/images/hero_panel.svg";
import clsx from "clsx";
import { H1 } from "@/components/ui/typography/H1";
import { P } from "@/components/ui/typography/P";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import Link from "next/link";

import SectionAppearAnimation from "@/components/animations/SectionAppear";
import { HeroCenterFlexGrow } from "./HeroFlexGrow";

export default function Hero() {
  return (
    <LayoutWrapper>
      <SectionAppearAnimation
        initialY={0}
        delay={0}
        className="w-full flex md:h-[439px] max-md:px-6 max-md:py-20 justify-center"
      >
        <StripesBarSVG />
        <HeroPanel />
        <HeroCenterFlexGrow delay={0.35}>
          <div className="w-[532px] max-lg:w-[65vw] max-md:w-[80vw] flex flex-col gap-[12px] items-center">
            <H1 className="text-center">
              The <span className="text-accent">context</span> layer for AI
              apps.
            </H1>
            <P className="w-[375px] text-center">
              Make your AI apps personal, secure, and trusted in minutes.
            </P>
            <div className="flex w-full gap-2.5 justify-center md:w-[440px] max-md:flex-col">
              <Link
                className="flex-1 flex"
                href="https://docs.kontext.dev/documentation/introduction"
              >
                <SecondaryButton className="flex-1">
                  Read The Docs
                </SecondaryButton>
              </Link>
              <Link
                className="flex-1 flex"
                href={"https://docs.kontext.dev/documentation/quickstart"}
              >
                <PrimaryButton className="flex-1">Get Started</PrimaryButton>
              </Link>
            </div>
          </div>
        </HeroCenterFlexGrow>
        <HeroPanel className="rotate-y-180" />
        <StripesBarSVG />
      </SectionAppearAnimation>
    </LayoutWrapper>
  );
}

export function StripesBarSVG() {
  return (
    <div className="w-[var(--grid-space)] h-full max-lg:hidden">
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
      <Image
        alt="Hero Panel"
        aria-hidden
        src={hero_panel}
        className="mx-4 select-none pointer-events-none"
      />
      <div className="h-calc(100%_+_2.125rem) -mt-8.5 w-[1px] bg-gridline" />
    </div>
  );
}
