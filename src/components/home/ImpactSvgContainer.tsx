import AnimatedUserIcon from "@/components/animations/UserIcon";
import arc from "@/assets/images/arc_svg.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ImpactSvgContainer({
  icon = <AnimatedUserIcon />,
  title,
  delay = 0,
}: {
  icon?: React.ReactNode;
  title?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{
        duration: 2,
        ease: [0.25, 1, 0.5, 1],
        delay,
      }}
      className="inline-flex flex-col justify-start items-center gap-2.5 rounded-full overflow-visible"
    >
      <div className="flex items-center">
        <div className="max-md:w-30 w-44 aspect-square relative rounded-full flex justify-center items-center">
          <div
            className="size-36 aspect-square bg-white rounded-full max-md:size-26 
        shadow-[0_64.478px_18.163px_0_rgba(0,0,0,0),0_40.866px_16.346px_0_rgba(0,0,0,0),0_22.703px_13.622px_0_rgba(0,0,0,0.01),0_9.99px_9.99px_0_rgba(0,0,0,0.02),0_2.724px_5.449px_0_rgba(0,0,0,0.02)]
        outline-[0.45px] outline-offset-[-0.45px] outline-gridline 
        flex flex-col justify-center items-center relative"
          >
            <div className="w-full h-full flex flex-col items-center justify-center md:p-10 p-6">
              {icon}
            </div>
          </div>
          <div className="absolute flex inset-0 rounded-full flex-col items-center justify-center pointer-events-none animate-[spin_2s_linear_infinite]">
            <Image src={arc} alt="" aria-hidden />
          </div>
        </div>
      </div>
      <div className="h-5 w-[1px] bg-gridline max-md:hidden" />
      <div className="px-9 py-2.5 max-md:py-1 rounded-full outline-[0.45px] outline-offset-[-0.45px] outline-gridline inline-flex justify-center items-center gap-3">
        <div className="text-center text-foreground text-[14px] font-medium leading-snug">
          {title}
        </div>
      </div>
    </motion.div>
  );
}
