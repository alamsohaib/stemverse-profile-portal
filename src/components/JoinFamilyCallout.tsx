
import React from "react";

const JoinFamilyCallout = () => (
  <section className="w-full flex justify-center px-4">
    <div className="w-full flex flex-col items-center bg-card/80 backdrop-blur-md rounded-3xl shadow-2xl border border-primary/30 p-8 gap-3 text-center animate-fade-in relative overflow-hidden">
      
      <div className="relative z-10">
        <span className="text-xl font-bold text-accent mb-1 flex items-center justify-center gap-2">
          🚀 Join the STEMverse Network 🌟
        </span>
        <span className="text-muted-foreground text-base font-medium">
          Whether you're a passionate STEM educator, a potential collaborator, or a school seeking innovative learning solutions, we'd love to work with you on this cosmic journey!
        </span>
        <a
          href="mailto:quratulain@mystemverse.com"
          className="text-accent hover:text-star-yellow font-semibold underline mt-2 transition-colors duration-300 hover:scale-105 inline-block"
        >
          🛸 Explore Instructor Roles & Partnership Opportunities 🌌
        </a>
      </div>
    </div>
  </section>
);

export default JoinFamilyCallout;
