import SectionAppearAnimation from "@/components/animations/SectionAppear";
import { HeroCenterFlexGrow } from "@/components/home/HeroFlexGrow";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import { H1 } from "@/components/ui/typography/H1";
import clsx from "clsx";

export default function BlogIndexTitle() {
  return (
    <LayoutWrapper>
      <SectionAppearAnimation
        initialY={0}
        delay={0}
        className="w-full flex max-md:px-6 max-md:py-20 justify-center max-lg:min-h-[230px]"
      >
        <StripesBarSVG />
        <HeroPanel />
        <HeroCenterFlexGrow delay={0.35}>
          <div className="w-[532px] max-lg:w-[65vw] max-md:w-[80vw] flex flex-col gap-[12px] items-center">
            <H1 className="text-center">Blogs</H1>
          </div>
        </HeroCenterFlexGrow>
        <HeroPanel className="rotate-y-180" />
        <StripesBarSVG />
      </SectionAppearAnimation>
    </LayoutWrapper>
  );
}

const HeroPanel = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "max-lg:hidden flex self-stretch justify-center items-center px-4",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="104"
        viewBox="0 0 20 104"
        fill="none"
      >
        <rect
          opacity="0.25"
          x="-0.25"
          y="0.25"
          width="9.5"
          height="103.121"
          rx="4.75"
          transform="matrix(-1 0 0 1 19.5 0.0240784)"
          fill="url(#paint0_linear_374_3916)"
          fillOpacity="0.3"
          stroke="black"
          strokeWidth="0.5"
        />
        <path
          d="M0 17C0 11.4772 4.47715 7 10 7H20V97H10C4.47715 97 0 92.5229 0 87V17Z"
          fill="#FAFCFB"
        />
        <path
          d="M10 7.25H19.75V96.75H10C4.61522 96.75 0.25 92.3848 0.25 87V17C0.25 11.6152 4.61522 7.25 10 7.25Z"
          stroke="url(#paint1_linear_374_3916)"
          strokeOpacity="0.25"
          strokeWidth="0.5"
        />
        <path d="M10 16L9.99999 88.1926" stroke="#00573F" strokeWidth="0.5" />
        <defs>
          <linearGradient
            id="paint0_linear_374_3916"
            x1="10"
            y1="51.8107"
            x2="0"
            y2="51.8107"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D9D9D9" />
            <stop offset="1" stopColor="#737373" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_374_3916"
            x1="0"
            y1="52"
            x2="19.5455"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="0.997638" stopOpacity="0.1" />
            <stop offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

function StripesBarSVG() {
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
