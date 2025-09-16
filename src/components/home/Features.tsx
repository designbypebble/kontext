import Image from "next/image";
import { HeaderSideSection } from "../ui/HeaderSideSection";
import { Tag } from "../ui/Tag";

import { P } from "../ui/typography/P";
import LayoutWrapper from "@/components/ui/LayoutWrapper";
import Divider from "../ui/Divider";
import { DotLine } from "../ui/GridCircleCouple";
import clsx from "clsx";
function Features() {
  return (
    <>
    <LayoutWrapper className="flex">
      <HeaderSideSection label="[ 23-34-67 ]" inverted={false} />

      {/* Side Div */}
      <div className="w-[147.5px] hidden lg:block">
        <DiagonalLines angle={120} spacing={5} />
      </div>
      {/* Side Div Ended*/}

      <div className="flex-1 flex justify-center items-center border-x-1 border-gridline">
        <div className="w-[532px] max-lg:w-[65vw] max-md:w-[80vw] flex flex-col p-[10px] gap-4 items-center">
          {/* Features */}
          <div className="flex flex-row items-center">
            {/* <div className="w-[40px] h-[1px] bg-gridline"></div> */}
            <Tag text="Features" className="text-center px-4 py-2" />
            {/* <div className="w-[40px] h-[1px] bg-gridline"></div> */}
          </div>
          {/* Features Ended */}

          {/* Header */}
          <div className="flex flex-col items-center">
            <h1 className="max-w-full text-6xl font-medium leading-[1em]  max-md:text-4xl text-center">
              Simple to start
            </h1>
            <h1 className="max-w-full text-6xl font-medium leading-none max-md:text-4xl text-accent text-center">
              Build for trust
            </h1>
          </div>
          {/* Header Ended */}

          <P className="text-center">
            {" "}
            The essentials for AI apps, ready from the start.
          </P>
        </div>
      </div>

      {/* Side Div */}
      <div className="w-[147.5px] hidden lg:block">
        <DiagonalLines angle={-120} spacing={5} />
      </div>
      {/* Side Div Ended*/}

      <HeaderSideSection label="[ 23-34-67 ]" inverted={true} />
    </LayoutWrapper>
    <DotLine/>

    {/* Features Section */}
    <LayoutWrapper className="flex flex-col lg:flex-row lg:px-[66px] max-md:px-3">

      
      
      {/* Box 1 */}
    <div className="flex flex-1 flex-col">
      <div className=" h-[315px] border-b-[0.5px] border-gridline justify-center items-center">Img Container</div>
      <div className="flex flex-col px-8 pt-[38px] pb-[47px] gap-2">
        
        <div className="flex gap-2 ">
          <Image alt="rocket" src="/rocket.png"  width={18} height={18} style={{objectFit: "contain"}} />
          <p className="text-xl font-medium">Ship faster</p>
        </div>
        <p className="text-lg leading-[1.5] text-black/50">Kontext saves you months of development effort and continuous maintenance.</p>
      </div>
    </div>
    {/* Box 1 Ended */}
    <Divider className="lg:!w-[1px] lg:!h-auto"/>
    {/* Box 2 */}
     <div className="flex flex-1 flex-col">
      <div className=" h-[315px] border-b-[0.5px] border-gridline justify-center items-center">Img Container</div>
      <div className="flex flex-col px-8 pt-[38px] pb-[47px] gap-2">
        <div className="flex gap-2 ">
          <Image alt="rocket" src="/award-certificate.png"  width={18} height={18} style={{objectFit: "contain"}} />
          <p className="text-xl font-medium">Context APIs</p>
        </div>
        <p className="text-lg leading-[1.5] text-black/50">A clean SDK to bring user context into your app securely.</p>
      </div>
    </div>
    {/* Box 2 Ended */}
    </LayoutWrapper>
    {/* Features Section Ended */}
    </>
  );
}

export default Features;

interface DiagonalLinesProps {
  angle?: number; // rotation angle of lines
  spacing?: number; // distance between lines
  strokeWidth?: number; // thickness of lines
  className?: string; // for sizing/styling
}

const DiagonalLines: React.FC<DiagonalLinesProps> = ({
  angle = 30,
  spacing = 20,
  strokeWidth = 1,
  className = "w-full h-full",
}) => {
  const patternId = `diagonal-lines-${angle}-${spacing}-${strokeWidth}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <defs>
        <pattern
          id={patternId}
          patternUnits="userSpaceOnUse"
          width={spacing}
          height={spacing}
          patternTransform={`rotate(${angle})`}
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2={spacing}
            stroke="#00573F"
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};


const Line=({className=""}:{className?:string})=>{
  return <div className={clsx("w-full h-[0.5px] bg-gridline", className)}></div>
}