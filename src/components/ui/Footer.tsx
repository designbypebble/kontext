"use client";
import Image from "next/image";
import Link from "next/link";
import footer_logo from "@/assets/images/footer_logo.svg";
import LayoutWrapper from "./LayoutWrapper";
import { DotSquare } from "./GridCircleCouple";
import Divider from "./Divider";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionAppearAnimation from "@/components/animations/SectionAppear";

export default function Footer() {
  const docsLinks = [
    { label: "Documentation", isHeader: true },
    { label: "Node.js", href: "https://docs.kontext.dev/examples/node" },
    { label: "Next.js", href: "https://docs.kontext.dev/examples/next-js" },
    { label: "React", href: "https://docs.kontext.dev/examples/react" },
    {
      label: "Vercel AI SDK",
      href: "https://docs.kontext.dev/examples/vercel-ai-sdk",
    },
  ];

  const socialLinks = [
    { label: "Socials", isHeader: true },
    { label: "Instagram", href: "https://www.instagram.com/kontext.dev" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/co-browser/" },
    { label: "Twitter / X", href: "https://x.com/cobrowser" },
  ];

  const footerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(footerRef, { once: true, amount: 0.5 });

  return (
    <div className="w-full flex flex-col items-center" ref={footerRef}>
      <DotSquare className="h-[90px]" />
      <LayoutWrapper className="flex items-center">
        <Capsule />
        <SectionAppearAnimation className="flex-1 max-lg:px-3 max-lg:w-full">
          <Image src={footer_logo} alt="KONTEXT" className="w-full" />
        </SectionAppearAnimation>
        <Capsule />
      </LayoutWrapper>

      <Divider />
      <Divider className="mt-[42px]" />

      <LayoutWrapper className="lg:px-[66px] px-3">
        <motion.footer
          className="w-full flex min-h-[350px] max-sm:flex-col"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
        >
          <DocumentationLinksList items={docsLinks} />
          <SocialLinksList items={socialLinks} />
        </motion.footer>
      </LayoutWrapper>

      <Divider />

      <LayoutWrapper className="lg:px-[66px] ">
        <div className="w-full flex gap-3 px-3 py-2.5 items-center">
          <p className="opacity-30 text-black text-sm font-normal">
            © 2025 Kontext
          </p>
          <Divider className="flex-1" />
        </div>
      </LayoutWrapper>

      <Divider className="mb-[34px]" />
    </div>
  );
}

const Capsule = () => (
  <div className="w-[66px] flex flex-col items-center justify-center max-lg:hidden">
    <div className="w-1.5 h-24 rounded-full border-[0.50px] border-black/25" />
  </div>
);

/* =========================
   Local link list components
========================= */

type FooterItem = {
  label: string;
  href?: string;
  isHeader?: boolean;
};

const DocumentationLinksList = ({ items }: { items: FooterItem[] }) => (
  <div className="flex-1 inline-flex flex-col items-start sm:border-r-[1px] sm:border-gridline self-stretch ">
    {items.map((item, i) =>
      item.isHeader ? (
        <div
          key={i}
          className="self-stretch p-4 border-b-[0.50px] border-black/10 inline-flex items-center gap-2.5"
        >
          <div className="text-black text-base font-medium">{item.label}</div>
        </div>
      ) : (
        <FooterLinkRow key={i} href={item.href || "#"} label={item.label} />
      )
    )}
  </div>
);

const SocialLinksList = ({ items }: { items: FooterItem[] }) => (
  <div className="flex-1 inline-flex flex-col items-start self-stretch ">
    {items.map((item, i) =>
      item.isHeader ? (
        <div
          key={i}
          className="self-stretch p-4 border-b-[0.50px] border-black/10 inline-flex items-center gap-2.5"
        >
          <div className="text-black text-base font-medium">{item.label}</div>
        </div>
      ) : (
        <FooterLinkRow key={i} href={item.href || "#"} label={item.label} />
      )
    )}
  </div>
);

const FooterLinkRow = ({ href, label }: { href: string; label: string }) => {
  return (
    <motion.div
      className="w-full"
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeInOut" },
        },
      }}
    >
      <Link
        href={href}
        className="self-stretch p-4 border-b-[0.50px] border-black/10 inline-flex items-center gap-2.5 hover:bg-gridline/10 transition-colors group w-full"
        target="_blank"
        rel="noreferer noopener"
      >
        <span className="opacity-50 text-black text-base font-normal group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      </Link>
    </motion.div>
  );
};
