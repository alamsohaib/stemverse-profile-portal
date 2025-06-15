
import React from "react";
import { Button } from "@/components/ui/button";

// STEMverse palette: #263868 (stemblue), #FFCE27 (gold), #F7B800 (accent gold)
const BG_IMG = "/lovable-uploads/2c0ec58e-c17c-434e-a914-5c57db68cd11.png"; // swap to your preferred hero bg

const HeroSection = () => (
  <section
    className="relative overflow-hidden w-full min-h-[60vh] md:min-h-[75vh] flex items-center justify-center"
    style={{
      background: `url(${BG_IMG}) center center/cover no-repeat`,
    }}
  >
    {/* Soft corners and LESS blur/darker overlay */}
    <div className="absolute inset-0 z-0 rounded-[50px] md:rounded-[60px] bg-[#263868]/40 backdrop-blur-[2.5px]" />
    <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#ffeec2a0] via-[#e4edfb66] to-transparent" />
    
    {/* Main Content Centered */}
    <div className="relative z-10 flex flex-col items-center justify-center w-full px-5 pt-20 pb-12 md:pt-0 text-center gap-7">
      <h1 className="font-playfair font-extrabold tracking-tight text-4xl md:text-6xl text-white drop-shadow-lg leading-snug md:leading-tight bg-[#263868b3] px-7 py-4 rounded-3xl mb-2">
        Hands-On STEM Education<br className="hidden md:block" /> for Every Generation
      </h1>
      <p className="text-xl md:text-2xl text-yellow-50 font-medium drop-shadow px-4 bg-[#263868]/60 rounded-2xl inline-block">
        Ignite curiosity. Build skills. Shape tomorrow.
      </p>
      <Button
        size="lg"
        className="mt-7 px-10 py-4 bg-gradient-to-r from-[#FFCE27] via-[#ffe891] to-[#263868] text-stemblue font-bold rounded-2xl shadow-xl
          hover:from-[#263868] hover:to-[#ffe891] hover:text-white transition hover:scale-110 hover:shadow-2xl active:scale-100 border-2 border-yellow-200 uppercase"
        onClick={() =>
          document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore Programs
      </Button>
    </div>
    {/* Masked rounded border all around (using pointer-events-none so it's just for style) */}
    <div className="pointer-events-none absolute inset-0 rounded-[50px] md:rounded-[60px] border-8 border-[#ffce2790] z-30" />
  </section>
);

export default HeroSection;

