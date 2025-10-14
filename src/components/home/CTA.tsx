"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import { Tag } from "@/components/ui/Tag";
import { H1 } from "@/components/ui/typography/H1";
import { P } from "@/components/ui/typography/P";
import Link from "next/link";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import Divider from "@/components/ui/Divider";
import clsx from "clsx";
import cta_accent from "@/assets/images/cta_accent.svg";
import KontextCompact from "@/assets/svg/kontext_compact";
import CTABackground from "@/assets/svg/cta_background";
import { DOCS_LINK, GET_STARTED_LINK } from "@/lib/constants";

export default function CTA() {
  return (
    <LayoutWrapper className="flex min-h-[500px] max-md:flex-col max-md:gap-12 max-md:px-3">
      <div className="w-[var(--grid-space)] max-lg:hidden self-stretch flex flex-col items-center justify-center">
        <Image
          src={cta_accent}
          alt=""
          aria-hidden
          className="select-none pointer-events-none"
        />
      </div>
      {/* Left side content */}
      <div className="flex-1 flex flex-col items-center justify-center self-stretch md:max-w-[50%] max-md:pt-12">
        <div className="w-[438px] px-3 flex flex-col gap-7 max-w-full">
          <div className="w-full flex flex-col gap-2">
            <Tag text="GET STARTED" className="text-center" />
            <H1>
              Start building with <span className="text-accent">Kontext</span>
            </H1>
            <P className="w-[300px]">
              Ship AI apps that users trust—personalized, permissioned, and
              observable.
            </P>
          </div>
          <div className="flex w-full gap-2.5 justify-center md:w-[360px] max-md:flex-col">
            <Link href={GET_STARTED_LINK} className="flex-1 flex">
              <PrimaryButton className="flex-1">Get Started</PrimaryButton>
            </Link>

            <Link className="flex-1 flex" href={DOCS_LINK}>
              <SecondaryButton className="flex-1">Talk To Us</SecondaryButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="min-w-[1px] min-h-full bg-gridline max-md:hidden" />
      <Divider className="md:hidden" />

      {/* Right side visual */}
      <div className="flex-1 flex flex-col items-center justify-center md:max-w-[50%] max-md:pb-12">
        <div className="w-[442px] relative max-w-full overflow-clip">
          {/* Base rings (under everything) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="size-[79%] rounded-full border-[0.50px] border-black/10" />
          </div>
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="size-[87%] rounded-full border-[0.50px] border-black/10" />
          </div>

          {/* Rotating fading arcs (above the image) */}
          <SpinningArc
            size="87%"
            thickness={2}
            arcDeg={30}
            duration={8}
            rotate={-360}
          />
          <SpinningArc
            size="79%"
            thickness={2}
            arcDeg={30}
            duration={5.5}
            rotate={360}
          />

          {/* Background image (keep below arcs) */}
          <div className="w-[100%] object-contain relative z-0">
            <CTABackground />
          </div>

          {/* <Image
            className="w-[100%] object-contain relative z-0"
            src={cta_background}
            alt="Context Offerings"
          /> */}
          <div className="inset-0 flex flex-col items-center justify-center absolute">
            <div className="size-30 p-6 shadow-md rounded-full bg-white flex flex-col items-center justify-center">
              <KontextCompact />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[var(--grid-space)] max-lg:hidden self-stretch flex flex-col items-center justify-center">
        <Image
          src={cta_accent}
          alt=""
          aria-hidden
          className="select-none pointer-events-none"
        />
      </div>
    </LayoutWrapper>
  );
}

export const SpinningArc = ({
  size,
  thickness = 2,
  arcDeg = 24,
  duration = 6,
  rotate = 360, // 360 = CW, -360 = CCW
  color = "var(--color-accent, #00573f)",
  fromDeg = -90, // starting angle (top)
  className,
}: {
  size: string;
  thickness?: number;
  arcDeg?: number;
  duration?: number;
  rotate?: number;
  color?: string;
  fromDeg?: number;
  className?: string;
}) => {
  const isCCW = rotate < 0;

  const background = !isCCW
    ? `conic-gradient(from ${fromDeg}deg, transparent 0deg, ${color} ${arcDeg}deg, transparent ${arcDeg}deg 360deg)`
    : `conic-gradient(from ${fromDeg}deg, ${color} 0deg, transparent ${arcDeg}deg, transparent ${arcDeg}deg 360deg)`;

  return (
    <div
      className={clsx(
        "absolute inset-0 flex items-center justify-center pointer-events-none",
        className
      )}
    >
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: "9999px",
          background,
          WebkitMaskImage: `radial-gradient(closest-side, transparent calc(100% - ${thickness}px), white calc(100% - ${thickness}px))`,
          maskImage: `radial-gradient(closest-side, transparent calc(100% - ${thickness}px), white calc(100% - ${thickness}px))`,
          willChange: "transform",
        }}
        animate={{ rotate }}
        transition={{
          duration: Math.abs(duration),
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
};
