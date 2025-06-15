
import React from "react";
import { Button } from "@/components/ui/button";

const HERO_BG_IMAGE = "/lovable-uploads/2c0ec58e-c17c-434e-a914-5c57db68cd11.png";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-[54vh] md:min-h-[68vh] w-full overflow-hidden"
      style={{
        background: `url(${HERO_BG_IMAGE}) center center/cover no-repeat, linear-gradient(120deg, #fffbe7cc 40%, #e4eafd99 100%)`
      }}
    >
      {/* Blue/Gold overlay for modern effect and contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#263868c7] via-yellow-100/80 to-[#ffce27b5] mix-blend-multiply pointer-events-none" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12 gap-5 w-full max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold font-playfair text-white drop-shadow-lg bg-blue-900/40 px-3 py-2 rounded-xl">
          Hands-On STEM Education for Every Generation
        </h1>
        <p className="text-lg md:text-2xl mt-1 font-medium text-yellow-50 drop-shadow px-3">
          Ignite curiosity. Build skills. Shape tomorrow.
        </p>
        <Button
          size="lg"
          className="mt-2 px-8 py-4 bg-gradient-to-tr from-[#263868] via-[#FFCE27] to-[#ffe891] text-blue-900 font-extrabold rounded-xl shadow-xl
            hover:from-[#FFCE27] hover:to-[#263868] hover:text-white transition hover:scale-110 hover:shadow-2xl active:scale-100 border-2 border-yellow-200"
          onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
        >
          Explore Programs
        </Button>
      </div>
      {/* Subtle overlay at bottom for additional legibility */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#263868b2] via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
