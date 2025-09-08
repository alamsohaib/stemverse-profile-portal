import React from "react";
import { Atom, Rocket, Zap, Orbit } from "lucide-react";

const QuickIntro = () => (
  <section className="relative w-full py-16 px-4 overflow-hidden bg-gradient-to-br from-background via-space-purple/5 to-space-blue/10">
    {/* Floating background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-10 left-1/4 w-3 h-3 bg-star-yellow rounded-full animate-star-twinkle opacity-60"></div>
      <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-nebula-pink rounded-full animate-star-twinkle opacity-40" style={{animationDelay: "1s"}}></div>
      <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-space-glow rounded-full animate-star-twinkle" style={{animationDelay: "2s"}}></div>
    </div>

    {/* Floating STEM tags with space theme */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-16 left-[15%] bg-gradient-to-r from-primary/20 to-space-purple/30 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full text-sm font-medium text-foreground animate-float shadow-lg">
        🧪 Chemistry
      </div>
      <div className="absolute top-32 right-[20%] bg-gradient-to-r from-secondary/20 to-space-blue/30 backdrop-blur-sm border border-secondary/30 px-4 py-2 rounded-full text-sm font-medium text-foreground animate-float shadow-lg" style={{animationDelay: "0.5s"}}>
        🤖 Robotics
      </div>
      <div className="absolute top-48 left-[10%] bg-gradient-to-r from-accent/20 to-star-yellow/30 backdrop-blur-sm border border-accent/30 px-4 py-2 rounded-full text-sm font-medium text-foreground animate-float shadow-lg" style={{animationDelay: "1s"}}>
        🔬 Physics
      </div>
      <div className="absolute top-64 right-[15%] bg-gradient-to-r from-nebula-pink/20 to-space-glow/30 backdrop-blur-sm border border-nebula-pink/30 px-4 py-2 rounded-full text-sm font-medium text-foreground animate-float shadow-lg" style={{animationDelay: "1.5s"}}>
        💻 Programming
      </div>
      <div className="absolute bottom-32 left-[25%] bg-gradient-to-r from-primary/20 to-accent/30 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-full text-sm font-medium text-foreground animate-float shadow-lg" style={{animationDelay: "2s"}}>
        🚀 Engineering
      </div>
      <div className="absolute bottom-48 right-[25%] bg-gradient-to-r from-secondary/20 to-nebula-pink/30 backdrop-blur-sm border border-secondary/30 px-4 py-2 rounded-full text-sm font-medium text-foreground animate-float shadow-lg" style={{animationDelay: "2.5s"}}>
        📊 Math
      </div>
    </div>

    {/* Main content */}
    <div className="max-w-4xl mx-auto text-center relative z-10">
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