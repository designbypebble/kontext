import Image from "next/image";
import LayoutWrapper from "../ui/LayoutWrapper";
import testimonial_accent from "@/assets/images/testimonial_sccent.svg";
import { P } from "../ui/typography/P";
import { Tag } from "../ui/Tag";
import Divider from "../ui/Divider";
import Marquee from "../utility/Marquee";

const testimonials = [
  {
    name: "John Doe",
    company: "comapany",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
  },
  {
    name: "John Doe",
    company: "comapany",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
  },
  {
    name: "John Doe",
    company: "comapany",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
  },
  {
    name: "John Doe",
    company: "comapany",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
  },
  {
    name: "John Doe",
    company: "comapany",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
  },
  {
    name: "John Doe",
    company: "comapany",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
  },
  {
    name: "John Doe",
    company: "comapany",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
  },
];

export default function Testimonials() {
  return (
    <LayoutWrapper>
      <div className="w-full flex md:h-[439px] max-md:px-6 max-md:py-5 justify-center items-center">
        <div className="w-[66px] max-lg:hidden">
          <Image alt="" src={testimonial_accent} />
        </div>
        <div className="flex-1 items-center max-w-full">
          <div className="flex flex-col p-[10px] gap-4 mx-auto items-center w-[532px] max-w-full">
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
          </div>
        </div>
        <div className="w-[66px] max-lg:hidden">
          <Image alt="" src={testimonial_accent} />
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
          <div className="w-[360px] px-6 py-8">
            <P className="text-justify w-full text-wrap">
              {testimonial.content}
            </P>
            <div className="inline-flex justify-start items-start gap-2 mt-[18px]">
              <div className="size-[34px] rounded-full bg-accent" />
              <div className="inline-flex flex-col justify-start items-start">
                <p className="self-stretch justify-start text-black text-[14px] font-normal">
                  {testimonial.name}
                </p>
                <p className="self-stretch opacity-50 justify-start text-black text-[12px] font-normal">
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
