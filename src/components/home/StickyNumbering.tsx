"use client";

import LayoutWrapper from "@/components/ui/LayoutWrapper";
import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { LinkSection } from "@/components/home/StickySection1";
import {
  PersonalizeSectionIntro,
  PersonalizeSectionContent,
} from "@/components/home/StickySection2";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { P } from "@/components/ui/typography/P";
import { Tag } from "@/components/ui/Tag";
import { H1 } from "@/components/ui/typography/H1";
import { VerticalGrid } from "@/components/ui/VerticalGrids";
import DashedLine from "@/components/ui/DashedLine";
import { ObserveSection } from "@/components/home/StickySection3";
import clsx from "clsx";
import KontextParticles from "@/components/animations/ParticlesBackground";

/* ---------------- Nav Items ---------------- */
interface NavItemsProps {
  title: number;
  active: boolean;
}

function NavItems({ title, active }: NavItemsProps) {
  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 300, damping: 75 }}
      className={`w-[40px] h-[40px] rounded-full bg-background justify-center items-center flex border
        ${active ? "border-accent/50" : "border-gridline "}`}
    >
      <p
        className={`text-[14px] font-[Geist_Mono]
          ${active ? "text-accent" : "text-gridline"}`}
      >
        0{title}
      </p>
    </motion.div>
  );
}

/* ---------------- Nav Section ---------------- */
function NavItemsSection({
  activeIndex,
  className = "",
}: {
  activeIndex: number;
  className?: string;
}) {
  return (
    <div
      className={clsx("flex flex-col p-[13px] items-center lg:flex", className)}
    >
      {[1, 2, 3].map((n) => (
        <motion.div
          key={n}
          layout
          transition={{ type: "spring", stiffness: 350, damping: 50 }}
          className={`${n === 1 ? "mt-0" : "mt-2"} ${
            n === activeIndex + 1 ? "mt-auto" : ""
          }`}
        >
          <NavItems title={n} active={activeIndex === n} />
        </motion.div>
      ))}
    </div>
  );
}

/* ---------------- Main Component ---------------- */
export default function StickyNumbering() {
  const [activeIndex, setActiveIndex] = useState(1);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref2b = useRef(null);
  const ref3 = useRef(null);

  const inView1 = useInView(ref1, { amount: 0.5 });
  const inView2 = useInView(ref2, { amount: 0.5 });
  const inView2b = useInView(ref2b, { amount: 0.5 });
  const inView3 = useInView(ref3, { amount: 0.5 });

  useEffect(() => {
    if (inView1) setActiveIndex(1);
    else if (inView2) setActiveIndex(2);
    else if (inView2b) setActiveIndex(2);
    else if (inView3) setActiveIndex(3);
  }, [inView1, inView2, inView2b, inView3]);

  const { tag, title, subtitle } = useMemo(() => {
    if (inView3) {
      return {
        tag: "03/03",
        title: "Observe",
        subtitle:
          "Track impact with built-in observability. Monitor accuracy, usage, and trust at scale.",
      };
    }
    if (inView2b) {
      return {
        tag: "02/03",
        title: "Personalize",
        subtitle:
          "Kontext personalizes outputs with real user context such as tone, preferences, and history while keeping users in control.",
      };
    }
    if (inView2) {
      return {
        tag: "02/03",
        title: "Personalize",
        subtitle:
          "Kontext personalizes outputs with real user context such as tone, preferences, and history while keeping users in control.",
      };
    }
    if (inView1) {
      return {
        tag: "01/03",
        title: "Link",
        subtitle:
          "Integrate Kontext in 5 minutes. One simple SDK connects your app to user context.",
      };
    }

    return {
      tag: "03/03",
      title: "Observe",
      subtitle:
        "Track impact with built-in observability. Monitor accuracy, usage, and trust at scale.",
    };
  }, [inView1, inView2, inView2b, inView3]);

  const headerKey = useMemo(() => {
    if (inView3) return "observe";
    if (inView2b) return "personalize-b"; // different from 2 so it re-animates
    if (inView2) return "personalize";
    return "link";
  }, [inView2, inView2b, inView3]);

  return (
    <div className="w-full relative flex flex-col">
      <div className="sticky w-full h-screen top-0 flex flex-col justify-between z-2">
        <LayoutWrapper className="flex justify-between self-stretch flex-1 mx-auto">
          <NavItemsSection
            activeIndex={activeIndex}
            className="max-lg:hidden"
          />
          <div className="flex-1 flex gap-[50px] items-center justify-center lg:px-[109px] relative">
            <DashedLine
              color="var(--color-gridline)"
              className="max-lg:hidden"
            />
            <KontextParticles
              className={clsx(
                "transition-opacity duration-200 ease-in-out",
                inView2 ? "opacity-100" : "opacity-0"
              )}
            />
            <div className="flex relative justify-center items-center gap-2 max-md:flex-col flex-1 w-full">
              {/* AnimatePresence around sections */}
              <AnimatePresence mode="wait">
                {inView1 && (
                  <motion.div
                    key="ref1"
                    className="flex absolute inset-0 justify-between items-center mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LinkSection />
                  </motion.div>
                )}

                {inView2 && (
                  <motion.div
                    key="ref2"
                    className="flex flex-col absolute inset-0 justify-center items-center mx-auto w-full"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PersonalizeSectionIntro />
                  </motion.div>
                )}

                {inView2b && (
                  <motion.div
                    key="ref2b"
                    className="flex absolute inset-0 justify-between items-center mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PersonalizeSectionContent />
                  </motion.div>
                )}

                {inView3 && (
                  <motion.div
                    key="ref3"
                    className="flex absolute inset-0 justify-between items-center mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ObserveSection />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <DashedLine
              color="var(--color-gridline)"
              className="max-lg:hidden"
            />
          </div>
          <NavItemsSection
            activeIndex={activeIndex}
            className="max-lg:hidden"
          />
        </LayoutWrapper>

        <div className="w-full bg-background h-[162px] max-lg:h-[200px]">
          <VerticalGrid />
          <SectionContainer className="h-full">
            <AnimatePresence mode="wait">
              <motion.div
                className="w-full"
                key={headerKey}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <div className="w-full flex lg:items-end lg:justify-between max-lg:px-6 px-[105px] py-[30px] max-lg:py-[15px] max-lg:flex-col">
                  <div className="flex flex-col flex-1">
                    <Tag text={tag} />
                    <H1 className="text-accent">{title}</H1>
                  </div>
                  <div className="flex-1 flex flex-col items-end">
                    <P className="w-[520px]">{subtitle}</P>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </SectionContainer>
        </div>
      </div>
      <div ref={ref1} className="h-screen -mt-[100vh]" />
      <div ref={ref2} className="h-screen" />
      {/*   <div ref={ref2b} className="h-screen" /> */}
      <div ref={ref3} className="h-screen" />
    </div>
  );
}
