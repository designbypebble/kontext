import Hero from "@/components/home/Hero";
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <div className="!font-sans w-full min-h-screen">
      <main className="w-full relative flex flex-col items-center">
        <Hero />
        <Divider />
      </main>
    </div>
  );
}
