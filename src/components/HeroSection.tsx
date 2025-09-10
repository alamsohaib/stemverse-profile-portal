import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Rocket, Star, Sparkles } from "lucide-react";
import heroAstronaut from "@/assets/hero-astronaut.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="w-full px-4 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Hero Content */}
        <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <Rocket className="w-8 h-8 text-accent animate-rocket-launch" />
              <h1 className="text-5xl md:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary leading-tight">
                STEMverse
              </h1>
              <Sparkles className="w-6 h-6 text-star-yellow animate-star-twinkle" />
            </div>
            
            <h2 className="text-2xl md:text-4xl font-playfair text-foreground">
              🚀 Explore the Universe of Learning! 🌟
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Join our cosmic adventure where Science, Technology, Engineering, and Math come to life! 
              Discover amazing experiments, build cool projects, and learn with friends across the galaxy! ⭐
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              onClick={() => navigate("/programs")}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Your Adventure!
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/about")}
              className="border-2 border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-primary/10 text-foreground font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <Star className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative animate-scale-in">
          <div className="relative">
            <img
              src={heroAstronaut}
              alt="Cute astronaut kid floating in space"
              className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl animate-float"
            />
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-accent to-star-yellow rounded-full animate-orbit"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-nebula-pink to-primary rounded-full animate-orbit" style={{animationDelay: "2s"}}></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;