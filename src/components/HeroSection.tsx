
import React from "react";
import { Button } from "@/components/ui/button";

const HERO_BG = "/lovable-uploads/2c0ec58e-c17c-434e-a914-5c57db68cd11.png"; // Use provided STEM photo

const HeroSection = () => (
  <section
    className="relative flex items-center justify-center min-h-[60vh] md:min-h-[75vh] w-full overflow-hidden"
    style={{
      background: `
        linear-gradient(120deg, #ffeec2cc 60%, #e4edfbcc 100%), 
        url(${HERO_BG}) center center/cover no-repeat
      `
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-[#263868b8] via-yellow-100/70 to-[#ffce27b3] mix-blend-multiply pointer-events-none" />
    <div className="relative z-10 flex flex-col items-center justify-center text-center p-5 w-full max-w-3xl mx-auto gap-6">
      <h1 className="text-4xl md:text-5xl font-playfair text-white font-extrabold drop-shadow-lg leading-tight bg-[#263868]/80 px-5 py-3 rounded-2xl">
        Hands-On STEM Education for Every Generation
      </h1>
      <p className="text-xl md:text-2xl text-yellow-50 font-medium drop-shadow px-4">
        Ignite curiosity. Build skills. Shape tomorrow.
      </p>
      <Button
        size="lg"
        className="mt-4 px-8 py-4 bg-gradient-to-r from-[#FFCE27] via-[#ffe891] to-[#263868] text-stemblue font-bold rounded-2xl shadow-xl
          hover:from-[#263868] hover:to-[#ffe891] hover:text-white transition hover:scale-110 hover:shadow-2xl active:scale-100 border-2 border-yellow-200 uppercase"
        onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
      >
        Explore Programs
      </Button>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#263868b3] via-transparent to-transparent pointer-events-none" />
  </section>
);

export default HeroSection;
