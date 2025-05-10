"use client";

import AboutSection from "@/components/shared/AboutSection";
import Blog from "@/components/shared/Blog";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import Maps from "@/components/shared/Maps/Maps";
import Menu from "@/components/shared/Menu";
import Navbar from "@/components/shared/Navbar";
import StatsSection from "@/components/shared/StatsSection";

export default function Home() {
  return (
    <main className="scroll-smooth overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <Menu />
      <AboutSection />
      <Maps />
      <Blog />
      <Footer />
    </main>
  );
}
