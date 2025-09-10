import React from "react";
import { Atom, Rocket, Zap, Orbit } from "lucide-react";

const QuickIntro = () => (
  <section className="w-full py-16 px-4 bg-background">
    {/* Main content */}
    <div className="w-full text-center relative z-10">
      {/* Icon row with space theme */}
      <div className="flex justify-center items-center gap-6 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-space-purple rounded-2xl flex items-center justify-center animate-float shadow-lg">
          <Atom className="w-6 h-6 text-white" />
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-secondary to-space-blue rounded-2xl flex items-center justify-center animate-float shadow-lg" style={{animationDelay: "0.5s"}}>
          <Rocket className="w-6 h-6 text-white" />
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-accent to-star-yellow rounded-2xl flex items-center justify-center animate-float shadow-lg" style={{animationDelay: "1s"}}>
          <Zap className="w-6 h-6 text-white" />
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-nebula-pink to-space-glow rounded-2xl flex items-center justify-center animate-float shadow-lg" style={{animationDelay: "1.5s"}}>
          <Orbit className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="bg-card/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-primary/20 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary mb-6">
          🌌 Join the STEM Galaxy! 🌟
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Welcome to an amazing universe where young explorers become scientists, engineers, and innovators! 
          Our space-age learning adventures make complex concepts simple and super fun. Ready to blast off 
          into the future of education? 🚀✨
        </p>
      </div>
    </div>
  </section>
);

export default QuickIntro;