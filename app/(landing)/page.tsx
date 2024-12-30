"use client";
import HeroSection from "@/components/landing/hero";

const LandingPage = () => {
  return (
    <div className="relative">
      <HeroSection />
      <div className="flex flex-col h-screen items-center justify-center">
        other sections content
      </div>
    </div>
  );
};

export default LandingPage;
