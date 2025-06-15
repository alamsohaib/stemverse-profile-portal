
import React from "react";
import { CalendarRange, MapPin, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedHighlight = () => (
  <section className="w-full flex justify-center py-12 px-4 bg-gradient-to-r from-[#fdf6e4] via-white to-blue-50">
    <div className="max-w-2xl w-full bg-white/90 rounded-2xl p-8 border border-accent/40 shadow-lg flex flex-col items-center gap-4 text-center animate-fade-in">
      <span className="uppercase text-xs tracking-widest text-[#FFCE27] font-bold">Featured Highlight</span>
      <h3 className="font-playfair text-xl md:text-2xl font-bold text-stemblue">
        Summer STEM Camp 2025
      </h3>
      <div className="flex flex-wrap justify-center gap-6 text-stemblue font-semibold text-sm mb-2">
        <span className="flex items-center gap-1"><CalendarRange className="w-5 h-5" /> Start: July 1</span>
        <span className="flex items-center gap-1"><MapPin className="w-5 h-5" /> Peshawar & Online </span>
        <span className="flex items-center gap-1"><Zap className="w-5 h-5" /> 2 weeks</span>
      </div>
      <div className="text-stemblue font-medium text-base mb-2 max-w-lg">
        Get ready for an exciting summer of innovation and creativity! Our hands-on STEM camp offers students ages 6–18 the chance to explore <span className="font-bold text-green-700">robotics, AI, game design, and 3D printing</span>—guided by expert instructors in a fun, future-focused environment.
      </div>
      <Button
        size="lg"
        className="mt-3 px-5 py-3 rounded-xl bg-stemblue text-accent font-bold shadow hover:scale-110 transition-all flex items-center gap-1"
        onClick={() => window.open("https://forms.gle/vRjvomZfF4UwNinD7", "_blank")}
      >
        Apply Now <ArrowRight className="ml-1" />
      </Button>
    </div>
  </section>
);

export default FeaturedHighlight;
