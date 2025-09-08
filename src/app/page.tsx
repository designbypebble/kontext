import CTA from "@/components/home/CTA";
import DashboardTable from "@/components/home/DashboardTable";
import Hero from "@/components/home/Hero";
import Divider from "@/components/ui/Divider";
import Footer from "@/components/ui/Footer";
import { DotSquare } from "@/components/ui/GridCircleCouple";

export default function Home() {
  return (
    <div className="!font-sans w-full min-h-screen">
      <main className="w-full relative flex flex-col items-center">
        <Hero />
        <Divider />
        <DashboardTable />
        <DotSquare className="h-[90px]" />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
