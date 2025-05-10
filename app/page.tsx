import HeroSection from "@/components/shared/HeroSection";
import Menu from "@/components/shared/Menu";
import Navbar from "@/components/shared/Navbar";
import StatsSection from "@/components/shared/StatsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="scroll-smooth overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <Menu />
    </main>
  );
}
