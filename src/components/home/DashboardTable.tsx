import Image from "next/image";
import LayoutWrapper from "../ui/LayoutWrapper";
import hero_dashaboard from "@/assets/images/hero_dashboard.svg";
export default function DashboardTable() {
  return (
    <LayoutWrapper>
      <div className="w-full flex justify-center pt-5 px-6">
        <Image src={hero_dashaboard} alt="Context Based Use Input" />
      </div>
    </LayoutWrapper>
  );
}
