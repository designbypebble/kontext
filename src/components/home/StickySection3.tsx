"use client";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Tag } from "@/components/ui/Tag";
import { H1 } from "@/components/ui/typography/H1";
import { P } from "@/components/ui/typography/P";
import SectionAppearAnimation from "@/components/animations/SectionAppear";

export function ObserveSection() {
  return (
    <LayoutWrapper className="flex-1 flex gap-[50px] items-center justify-center">
      <SectionAppearAnimation className="flex-1 flex justify-center items-center max-md:flex-col">
        <LottieAppear />
      </SectionAppearAnimation>
    </LayoutWrapper>
  );
}

export function ObserveSectionTitle() {
  return (
    <SectionContainer>
      <LayoutWrapper className="flex items-end justify-between flex-wrap max-md:px-6 px-[105px] py-[30px]">
        <div className="flex flex-col">
          <Tag text="03/03"></Tag>
          <H1 className="text-accent">Observe</H1>
        </div>
        <P className="!max-w-[351px]">
          Track impact with built-in observability. Monitor accuracy, usage, and
          trust at scale.
        </P>
      </LayoutWrapper>
    </SectionContainer>
  );
}

import { useRef } from "react";
import { useInView, AnimatePresence, motion } from "framer-motion";

export default function LottieAppear() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <div ref={ref} className="w-full overflow-hidden">
      <AnimatePresence>
        {isInView && (
          <motion.iframe
            key="lottie"
            src="https://cdn.lottielab.com/l/34Sz99gi9LZh1z.html?loop=false"
            className="w-full aspect-[820/375] object-contain  mx-auto max-lg:hidden"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
        {isInView && (
          <motion.iframe
            key="lottie mobile"
            src="https://cdn.lottielab.com/l/58eJUwoPzFQatZ.html?loop=false"
            className="w-full aspect-square object-contain mx-auto lg:hidden"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
