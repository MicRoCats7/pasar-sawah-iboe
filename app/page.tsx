"use client";

import AboutSection from "@/components/shared/AboutSection";
import Blog from "@/components/shared/Blog";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import Maps from "@/components/shared/Maps/Maps";
import Menu from "@/components/shared/Menu";
import Navbar from "@/components/shared/Navbar";
import StatsSection from "@/components/shared/StatsSection";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <Menu />
      <AboutSection />
      <Maps />
      <Blog />
      <Footer />
      <div className="fixed bottom-5 right-5 bg-main w-[72px] p-4 rounded-bl-[32px] rounded-tr-[32px] cursor-pointer">
        <FaWhatsapp size={43} color="#fff"/>
      </div>
    </main>
  );
}
