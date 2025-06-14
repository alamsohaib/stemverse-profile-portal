
import React, { useRef, useState } from "react";
import { Rocket, Brain, Sparkle, Atom, MousePointerClick } from "lucide-react";
import FloatingCharacter from "@/components/FloatingCharacter";
import NavBar from "@/components/NavBar";

// Interactive video overlays and animated icons for engagement
const AnimatedHeroIcons = () => (
  <div className="flex flex-wrap gap-6 mt-8 md:mt-10 pb-6 justify-center w-full">
    <div className="animate-bounce-slow flex flex-col items-center">
      <Atom className="w-10 h-10 text-purple-400" />
      <span className="text-xs text-purple-800 font-semibold mt-1">Science</span>
    </div>
    <div className="animate-spin-slow flex flex-col items-center">
      <Rocket className="w-10 h-10 text-blue-400" />
      <span className="text-xs text-blue-800 font-semibold mt-1">Tech</span>
    </div>
    <div className="animate-pulse flex flex-col items-center">
      <Sparkle className="w-10 h-10 text-green-500" />
      <span className="text-xs text-green-800 font-semibold mt-1">Creativity</span>
    </div>
    <div className="animate-[bounce_0.8s_infinite_alternate] flex flex-col items-center">
      <Brain className="w-10 h-10 text-yellow-500" />
      <span className="text-xs text-yellow-700 font-semibold mt-1">Logic</span>
    </div>
  </div>
);

// Custom keyframes for slow bounce and spin (can be moved to css later if reused)
const style = `
@keyframes bounce-slow { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-24px);} }
.animate-bounce-slow { animation: bounce-slow 2s infinite; }
@keyframes spin-slow { 100% { transform: rotate(360deg); } }
.animate-spin-slow { animation: spin-slow 6s linear infinite; }
`;

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Play/pause video on click
  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <main className="w-full flex flex-col items-center bg-background min-h-screen relative overflow-x-hidden">
      <style>{style}</style>
      <NavBar />
      {/* Interactive Futuristic Video Background */}
      <section id="home" className="w-full min-h-[68vh] relative flex justify-center items-center">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-[-2] cursor-pointer"
          autoPlay
          muted
          loop
          playsInline
          onClick={toggleVideo}
          poster=""
          style={{
            minHeight: "100%",
            minWidth: "100%",
            opacity: isPaused ? 0.5 : 0.86,
            filter: isPaused
              ? "brightness(0.7) grayscale(60%)"
              : "brightness(1.07) saturate(1.18)",
            transition: "filter 0.3s, opacity 0.4s"
          }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-digital-background-with-blue-and-purple-light-1175-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 z-[-1] pointer-events-none bg-gradient-to-b from-blue-50/80 via-blue-200/60 to-white/90" />
        {/* Play/pause cue */}
        <div
          className={`absolute left-1/2 bottom-[20%] -translate-x-1/2 z-10 text-white bg-stemblue/80 rounded-full px-4 py-1 text-xs font-medium shadow-lg cursor-pointer transition ${
            isPaused ? "opacity-80 scale-110" : "opacity-0"}`}
            style={{ pointerEvents: isPaused ? "auto" : "none" }}
          onClick={toggleVideo}
          aria-label={isPaused ? "Play video" : "Pause video"}
        >
          {isPaused ? "▶️ Click to play video" : ""}
        </div>
        {/* Hero and animated icons */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col justify-center items-center pt-10 pb-8">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-stemblue mb-4 text-center drop-shadow-sm">
            Empowering{' '}
            <span className="text-yellow-500">future innovators</span>
            <br /> across Pakistan.
          </h1>
          <p className="mt-2 text-lg md:text-xl text-muted-foreground font-medium bg-white/60 backdrop-blur rounded-xl px-4 py-2 text-center mb-1">
            Welcome to STEMverse — a vibrant world of science, tech, engineering and math<br />
            for young minds, curious teens, inspiring teachers, and lifelong learners!
          </p>
          <span className="text-blue-700 text-md font-semibold px-3 py-2 rounded-xl bg-yellow-50/70 mt-2 mb-2 backdrop-blur">Interactive learning, inspiring creativity, and building a brighter future together.</span>
          <AnimatedHeroIcons />
        </div>
        {/* Interactive floating character follows mouse */}
        <FloatingCharacter />
      </section>
      {/* Additional content for Home page */}
      <section className="max-w-4xl mx-auto mt-2 mb-16 px-6 py-12 bg-white bg-opacity-80 rounded-3xl shadow-md border border-yellow-200 text-center flex flex-col items-center space-y-6 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-playfair text-blue-700 font-bold mb-1">Discover • Create • Excel</h2>
        <p className="text-xl text-blue-900 font-semibold">
          Immerse yourself in engaging workshops, project-based sessions, and interactive adventures designed for all age groups.<br />
          From building robots to coding games and exploring the wonders of science, STEMverse is your companion on a journey of discovery!
        </p>
        <p className="text-lg font-medium text-gray-700">
          Join our thriving community and unlock your full potential, today.<br />
          <span className="text-green-700 font-bold">Scroll down or explore our programs from the menu!</span>
        </p>
        <a
          href="/programs"
          className="inline-flex items-center gap-2 bg-yellow-400 text-stemblue font-bold py-3 px-7 rounded-xl shadow-lg hover:bg-blue-400 hover:text-white transition-colors text-lg"
        >
          View Programs
          <Rocket className="ml-2" />
        </a>
        <div className="text-xs mt-8 text-gray-600 font-medium opacity-80">
          Psst... Try moving your mouse! <br />
          Our friendly helper will follow you around the site.
        </div>
      </section>
    </main>
  );
};

export default Home;
