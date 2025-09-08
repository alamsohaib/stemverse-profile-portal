
import React from "react";

const JoinFamilyCallout = () => (
  <section className="w-full flex justify-center my-10 px-4">
    <div className="max-w-2xl w-full flex flex-col items-center bg-gradient-to-br from-primary/90 via-space-purple/80 to-space-blue/90 rounded-3xl shadow-2xl border border-primary/30 p-8 gap-3 text-center animate-fade-in relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-4 right-8 w-2 h-2 bg-star-yellow rounded-full animate-star-twinkle opacity-60"></div>
        <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-nebula-pink rounded-full animate-star-twinkle opacity-40" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/2 right-12 w-1 h-1 bg-accent rounded-full animate-star-twinkle" style={{animationDelay: "2s"}}></div>
      </div>
      
      <div className="relative z-10">
        <span className="text-xl font-bold text-accent mb-1 flex items-center justify-center gap-2">
          🚀 Join the STEMverse Network 🌟
        </span>
        <span className="text-white text-base font-medium">
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
