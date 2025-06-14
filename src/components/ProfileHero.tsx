
import { Sparkle } from "lucide-react";

const ProfileHero = () => (
  <section className="w-full py-16 md:py-24 lg:py-32 flex flex-col items-center bg-transparent">
    <div className="max-w-5xl w-full flex flex-col items-center animate-fade-in">
      <div className="flex flex-col gap-3 items-center mb-4">
        <div className="flex items-center gap-2">
          <Sparkle size={44} strokeWidth={2.5} className="text-stemblue animate-scale-in drop-shadow" />
          <h1 className="text-5xl md:text-7xl font-playfair font-bold tracking-tight text-stemblue leading-tight">
            STEMverse
          </h1>
        </div>
        <h2 className="mt-2 text-2xl md:text-3xl font-normal text-primary">Unleashing the Power of STEM</h2>
        <div className="w-12 h-2 bg-gradient-to-r from-stemblue/90 to-accent rounded-full mt-4 mb-2" />
      </div>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-center">
        Empowering innovation, collaboration, and excellence at the intersection of Science, Technology, Engineering, and Mathematics.<br />
        Welcome to the new era of STEM.
      </p>
    </div>
  </section>
);

export default ProfileHero;
