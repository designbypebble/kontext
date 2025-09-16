import CTA from "@/components/home/CTA";
import DashboardTable from "@/components/home/DashboardTable";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Impact from "@/components/home/Impact";
import LinkSection from "@/components/home/LinkSection";
import Observe from "@/components/home/Observe";
import Personalize from "@/components/home/Personalize";
import Divider from "@/components/ui/Divider";
import Footer from "@/components/ui/Footer";
import { GridCircle } from "@/components/ui/GridCircle";
import { DotLine, DotSquare } from "@/components/ui/GridCircleCouple";
import { SectionContainer } from "@/components/ui/SectionContainer";

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

        <LinkSection/>
        <Personalize/>
        <Observe/>

        <DotSquare className="h-[102px]" />
        <SectionContainer className="h-[40px]">
          <div className="flex w-full justify-center lg:justify-between items-center h-full md:px-[214px]">
            <div className="h-[40px] w-[0.5px] bg-gridline hidden lg:block"></div>
          <div className="h-[40px] w-[0.5px] bg-gridline "></div>
          <div className="h-[40px] w-[0.5px] bg-gridline hidden lg:block"></div>
          </div>
        </SectionContainer>
        <Features/>
        <DotLine />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
