import Image from "next/image";
import LayoutWrapper from "../ui/LayoutWrapper";
import hero_dashaboard from "@/assets/images/hero_dashboard.svg";
export default function DashboardTable() {
  return (
    <LayoutWrapper>
      <div className="w-full flex pt-5 px-6 overflow-auto md:justify-center">
        <Image
          src={hero_dashaboard}
          alt="Context Based Use Input"
          className="max-md:min-w-[600px] bg-background md:max-w-full"
        />
      </div>
    </LayoutWrapper>
  );
}
