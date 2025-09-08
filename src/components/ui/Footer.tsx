import Image from "next/image";
import Link from "next/link";
import footer_logo from "@/assets/images/footer_logo.svg";
import LayoutWrapper from "./LayoutWrapper";
import { DotSquare } from "./GridCircleCouple";
import Divider from "./Divider";

export default function Footer() {
  const docsLinks = [
    { label: "Documentation", isHeader: true },
    { label: "Node.js", href: "/docs/node" },
    { label: "Next.js", href: "/docs/next" },
    { label: "React", href: "/docs/react" },
    { label: "Vercel AI SDK", href: "/docs/vercel-ai" },
  ];

  const socialLinks = [
    { label: "Socials", isHeader: true },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter / X", href: "https://twitter.com" },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-32">
      <DotSquare className="h-[90px]" />
      <LayoutWrapper className="flex items-center">
        <Capsule />
        <div className="flex-1 max-lg:px-3 max-lg:w-full">
          <Image src={footer_logo} alt="KONTEXT" className="w-full" />
        </div>
        <Capsule />
      </LayoutWrapper>

      <Divider />
      <Divider className="mt-[42px]" />

      <LayoutWrapper className="lg:px-[66px] px-3">
        <footer className="w-full flex min-h-[350px] max-sm:flex-col">
          <DocumentationLinksList items={docsLinks} />
          <SocialLinksList items={socialLinks} />
        </footer>
      </LayoutWrapper>

      <Divider />

      <LayoutWrapper className="lg:px-[66px] ">
        <div className="w-full flex gap-3 px-3 py-2.5 items-center">
          <p className="opacity-30 text-justify justify-start text-black text-sm font-normal font-['Geist']">
            © 2025 Kontext
          </p>
          <Divider className="flex-1" />
        </div>
      </LayoutWrapper>

      <Divider className="mb-[34px]" />
    </div>
  );
}

const Capsule = () => {
  return (
    <div className="w-[66px] flex flex-col items-center justify-center max-lg:hidden">
      <div className="w-1.5 h-24 rounded-full border-[0.50px] border-black/25" />
    </div>
  );
};

/* =========================
   Local link list components
========================= */

type FooterItem = {
  label: string;
  href?: string;
  isHeader?: boolean;
};

const DocumentationLinksList = ({ items }: { items: FooterItem[] }) => {
  return (
    <div className="lg:w-80 max-lg:flex-1 inline-flex flex-col items-start sm:border-r-[1px] sm:border-gridline self-stretch ">
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
};

const SocialLinksList = ({ items }: { items: FooterItem[] }) => {
  return (
    <div className="lg:w-80 max-lg:flex-1 inline-flex flex-col items-start  lg:border-r-[1px] lg:border-gridline self-stretch ">
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
};

const FooterLinkRow = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="self-stretch p-4 border-b-[0.50px] border-black/10 inline-flex items-center gap-2.5 hover:bg-gridline/10 transition-colors group"
    >
      <span className="opacity-50 text-black text-base font-normal group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </Link>
  );
};
