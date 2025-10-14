import CTA from "@/components/home/CTA";
import DashboardTable from "@/components/home/DashboardTable";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Impact from "@/components/home/Impact";
import Observability from "@/components/home/Observability";
import StickyNumbering from "@/components/home/StickyNumbering";
import Testimonials from "@/components/home/Testimonials";
import Divider from "@/components/ui/Divider";
import Footer from "@/components/ui/Footer";

import { DotLine, DotSquare } from "@/components/ui/GridCircleCouple";

export default function Home() {
  return (
    <div className="!font-sans w-full min-h-screen">
      <main className="w-full relative flex flex-col items-center">
        <Hero />
        <Divider />
        <DashboardTable />

        <DotSquare className="h-[30px]" />
        <Impact />
        <Divider />
        <StickyNumbering />

        <DotSquare topVisible={false} className="h-[40px]">
          <div className="flex w-full justify-center lg:justify-between items-center h-full md:px-[214px]">
            <div className="h-[40px] w-[0.5px] bg-gridline hidden lg:block"></div>
            <div className="h-[40px] w-[0.5px] bg-gridline "></div>
            <div className="h-[40px] w-[0.5px] bg-gridline hidden lg:block"></div>
          </div>
        </DotSquare>

        <Features />
        <Observability />
        <DotSquare bottomVisible={false} topVisible={false}>
          <div className="w-[901px] mx-auto py-1 px-1 my-6 relative rounded-[45px] max-w-[90%] border border-gridline">
            <div className="w-full h-[1px] bg-accent rounded-[45px]" />
          </div>
        </DotSquare>
        <DotSquare className="h-14" />
        <Testimonials />
        <DotLine />
        <CTA />
        <DotSquare bottomVisible={false}>
          <div className="w-[901px] mx-auto py-1 px-1 my-6 relative rounded-[45px] max-w-[90%] border border-gridline">
            <div className="w-full h-[1px] bg-accent rounded-[45px]" />
          </div>
        </DotSquare>
        <Footer />
      </main>
    </div>
  );
}
