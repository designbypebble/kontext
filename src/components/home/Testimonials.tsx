import Image from "next/image";
import LayoutWrapper from "../ui/LayoutWrapper";
import testimonial_accent from "@/assets/images/testimonial_sccent.svg";
import { P } from "../ui/typography/P";
import { Tag } from "../ui/Tag";
import Divider from "../ui/Divider";
import Marquee from "../utility/Marquee";
import SectionAppearAnimation from "@/components/animations/SectionAppear";

const testimonials = [
  {
    name: "John Carter",
    company: "BrightPath AI",
    content:
      "Kontext made it effortless to integrate context-aware features into our product. The setup was simple and the performance exceeded our expectations, saving countless engineering hours.",
  },
  {
    name: "Sofia Nguyen",
    company: "DataLoom",
    content:
      "We used Kontext to handle sensitive data flows with full transparency. The audit logs and granular controls gave our compliance team exactly what they needed to feel confident.",
  },
  {
    name: "Marcus Lee",
    company: "NovaCloud Systems",
    content:
      "The platform completely changed how we think about user personalization. Kontext let us ship deeply tailored experiences with minimal overhead and maximum security built in.",
  },
  {
    name: "Priya Shah",
    company: "Insightful Labs",
    content:
      "As a startup we needed an easy way to scale our AI context handling. Kontext delivered a clean API and clear documentation that allowed our developers to move fast safely.",
  },
  {
    name: "Daniel Ortiz",
    company: "NextWave Health",
    content:
      "Security and privacy are non-negotiable in healthcare. Kontext’s encryption, audit features, and smooth developer experience have been invaluable for meeting our compliance goals.",
  },
  {
    name: "Elena Rossi",
    company: "UrbanX Mobility",
    content:
      "Kontext gave our engineering team full visibility into how context flows across microservices. The dashboards are clean, the metrics are actionable, and the support team is responsive.",
  },
  {
    name: "James Okafor",
    company: "Crestline Finance",
    content:
      "We were looking for a flexible context layer that could handle sensitive transactions. Kontext offered the ideal mix of speed, reliability, and clear access controls.",
  },
  {
    name: "Lily Tan",
    company: "EduSpark",
    content:
      "Kontext simplified how we deliver personalized learning experiences. Our students now get relevant recommendations instantly while we maintain strict data privacy standards.",
  },
  {
    name: "Gabriel Morales",
    company: "QuantumOps",
    content:
      "Deploying Kontext was seamless with our existing stack. The observability tools gave us confidence in production and helped us debug context-related issues quickly.",
  },
  {
    name: "Hannah Kim",
    company: "Aurora Robotics",
    content:
      "For robotics and automation, timing and precision are everything. Kontext ensured our AI modules stayed synchronized with user context, improving both safety and reliability.",
  },
  {
    name: "Omar Farouk",
    company: "GreenGrid Energy",
    content:
      "Integrating Kontext into our energy analytics platform was straightforward. The performance gains and enhanced privacy controls helped us win key enterprise customers.",
  },
  {
    name: "Zoey Clark",
    company: "SocialNest",
    content:
      "Our social platform thrives on personalization but we needed to protect user data. Kontext gave us a powerful and transparent way to manage context at scale.",
  },
  {
    name: "Benjamin Hart",
    company: "SkyForge Analytics",
    content:
      "Kontext dramatically reduced the time it took to build a secure context pipeline. The support team guided us through best practices and performance tuning.",
  },
  {
    name: "Maya Desai",
    company: "WellSpring Tech",
    content:
      "We were able to roll out new context-driven features without compromising privacy. Kontext gave us the confidence to innovate faster in a sensitive industry.",
  },
  {
    name: "Alejandro Cruz",
    company: "VectorWorks",
    content:
      "The clarity of Kontext’s documentation and the quality of its SDKs made integration a breeze. We now have fine-grained control over how our AI systems handle context.",
  },
  {
    name: "Chloe Anderson",
    company: "BlueHorizon Media",
    content:
      "Kontext became a cornerstone of our personalization strategy. The combination of transparency, observability, and ease of integration sets it apart from anything else we tried.",
  },
];

export default function Testimonials() {
  return (
    <LayoutWrapper>
      <div className="w-full flex md:h-[439px] max-md:px-6 max-md:py-5 justify-center items-center">
        <div className="w-[var(--grid-space)] max-lg:hidden">
          <Image
            alt=""
            src={testimonial_accent}
            aria-hidden
            className="select-none pointer-events-none"
          />
        </div>
        <div className="flex-1 items-center max-w-full">
          <SectionAppearAnimation className="flex flex-col p-[10px] gap-4 mx-auto items-center w-[532px] max-w-full">
            {/* Impact */}
            <div className="flex flex-row items-center">
              <Tag text="TESTIMONIALS" className="text-center px-4 py-2" />
            </div>
            {/* Impact Ended */}

            {/* Header */}
            <div className="flex flex-col items-center">
              <h1 className="max-w-full text-6xl font-medium leading-[1em]  max-md:text-4xl text-center">
                Why developers
              </h1>
              <h1 className="max-w-full text-6xl font-medium leading-none max-md:text-4xl text-accent text-center">
                love Kontext
              </h1>
            </div>
            {/* Header Ended */}

            <P className="w-[431px] text-center">
              Discover what people love about Kontext.
            </P>
          </SectionAppearAnimation>
        </div>
        <div className="w-[var(--grid-space)] max-lg:hidden">
          <Image
            alt=""
            src={testimonial_accent}
            aria-hidden
            className="select-none pointer-events-none"
          />
        </div>
      </div>
      <Divider />
      <div className="lg:px-[66px] max-md:px-3 w-full">
        <Marquee className="w-full">{testimonialRow}</Marquee>
        <Divider />
        <Marquee direction="right" className="w-full">
          {testimonialRow}
        </Marquee>
      </div>
    </LayoutWrapper>
  );
}

const testimonialRow = (
  <div className="flex">
    {testimonials.map((testimonial, index) => {
      return (
        <div key={index} className="flex">
          <div className="w-[360px] px-6 py-8 max-sm:w-[240px]">
            <P className="sm:text-justify w-full text-wrap">
              {testimonial.content}
            </P>
            <div className="inline-flex justify-start items-start gap-2 mt-[18px]">
              <div className="size-[34px] rounded-full bg-accent" />
              <div className="inline-flex flex-col justify-start items-start">
                <p className="self-stretch justify-start text-foreground text-[14px] font-normal">
                  {testimonial.name}
                </p>
                <p className="self-stretch opacity-50 justify-start text-foreground text-[12px] font-normal">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </div>
          <div className="self-stretch min-w-[1px] bg-gridline"></div>
        </div>
      );
    })}
  </div>
);
