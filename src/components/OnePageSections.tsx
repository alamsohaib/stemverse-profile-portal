import React from "react";
import { useForm } from "react-hook-form";
import { Sparkle, Rocket, Brain, Code, Atom, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";

const Section = ({
  id,
  bg,
  children,
  className = "",
}: {
  id: string;
  bg?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`relative w-full py-14 md:py-20 ${bg || ""} ${className}`.trim()}>
    {children}
  </section>
);

// Floating effect retained but softened: subtle blue/yellow glow, sharp shadow, slightly larger
const HomeHero = () => (
  <Section
    id="home"
    bg="bg-gradient-to-b from-[#f3f6fb] via-blue-50 to-[#ddebf7] overflow-visible"
    className="pt-10 pb-20"
  >
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto px-4">
      {/* Text beside image for modern hero */}
      <div className="flex-1 flex flex-col items-start z-20 gap-6 max-w-xl">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold bg-gradient-to-r from-blue-800 via-accent to-yellow-400 bg-clip-text text-transparent leading-tight shadow-text-glow">
          Unlocking <span className="text-yellow-500 bg-gradient-to-br from-yellow-400 to-accent bg-clip-text text-transparent">endless possibilities</span> to empower young innovators.
        </h1>
        <p className="text-lg md:text-2xl text-stemblue/90 font-semibold">
          Empowering everyone with skills for the future—kids, teens, teachers, and adults.<br />
          <span className="text-accent font-bold">#STEMverse</span>
        </p>
        <Button
          size="lg"
          className="mt-1 px-9 py-4 bg-gradient-to-tr from-blue-400 via-accent to-yellow-400 hover:from-yellow-400 hover:to-accent text-white font-extrabold rounded-xl shadow-lg
           transition hover:scale-105 ring-2 ring-blue-300/30"
          onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
        >
          Explore Programs <Rocket className="ml-2 animate-bounce-x" />
        </Button>
      </div>
      {/* FLUSH, floating, glowing, modern image */}
      <div className="relative flex-1 flex items-center justify-center md:justify-end w-full max-w-[600px] pt-8 md:pt-0">
        <div className="absolute -inset-x-6 -top-12 h-[400px] blur-2xl rounded-full opacity-40 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 30%, #c2dbfb 0%, #ffe472 60%, #ddebf7 100%)"
          }}
        />
        <img
          src="/lovable-uploads/a0ee7f5e-7d91-46e2-b501-aad3f36b4398.png"
          alt="Kids playing with robots"
          className="w-full h-auto max-h-[480px] md:max-h-[540px] object-contain animate-float-hero"
          style={{ borderRadius: "2.5rem" }}
        />
        <div className="absolute left-1/2 -translate-x-1/2 top-[16%] w-32 h-24 bg-blue-200/30 rounded-full blur-2xl pointer-events-none animate-float-glow" />
      </div>
    </div>
    <style>{`
      @keyframes float-hero {
        0% { transform: translateY(0px);}
        25% { transform: translateY(-20px);}
        50% { transform: translateY(10px);}
        75% { transform: translateY(-15px);}
        100% { transform: translateY(0px);}
      }
      .animate-float-hero {
        animation: float-hero 7.7s cubic-bezier(.3,0,.7,1) infinite;
        will-change: transform;
      }
      .shadow-text-glow {
        text-shadow: 0 2px 18px #a7d3ff60, 0 1px 1px #fff3;
      }
      .animate-bounce-x {
        animation: bounceX 1.15s infinite alternate cubic-bezier(0.7,0,0.3,1);
      }
      @keyframes bounceX {
        0% { transform: translateX(0);}
        100% { transform: translateX(6px);}
      }
      @keyframes float-glow {
        0%, 100% { opacity: 0.32; }
        50% { opacity: 0.6; }
      }
      .animate-float-glow {
        animation: float-glow 8s ease-in-out infinite;
      }
    `}</style>
  </Section>
);

// Card style: accent borders, modern spacing, but use original gradient colors
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl bg-white/80 border border-blue-100 shadow-lg p-8 ${className}`}>
    {children}
  </div>
);

const GlassProgramCard = ({ color, title, subtitle, description }: {
  color: string;
  title: string;
  subtitle: string;
  description: string;
}) => (
  <div
    className={`group p-5 rounded-xl bg-gradient-to-br ${color} border-2 border-blue-100 shadow hover:shadow-blue-200/60
     transition-transform hover:scale-103 hover:border-accent/40 relative overflow-hidden`}
    style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
  >
    <div className="text-lg font-bold text-stemblue">{title}</div>
    <div className="text-sm font-semibold text-yellow-700">{subtitle}</div>
    <div className="text-gray-800 text-sm mt-1">{description}</div>
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-16 bg-accent/15 rounded-full blur-xl pointer-events-none" />
  </div>
);

const ProgramsSection = () => (
  <Section id="programs" bg="bg-gradient-to-b from-yellow-50 via-white to-blue-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stemblue text-center mb-7 drop-shadow">Our Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <GlassProgramCard
          color="from-yellow-200 via-yellow-100 to-white"
          title="Edventurers"
          subtitle="Ages 5–12"
          description="Weekly workshops: Intro to electricity, coding, 3D modeling. Playful, hands-on quests!"
        />
        <GlassProgramCard
          color="from-blue-200 via-blue-100 to-white"
          title="Tech Titans"
          subtitle="Ages 13–19"
          description="Electricity, electronics, Python, Arduino robotics; project-based sessions."
        />
        <GlassProgramCard
          color="from-pink-200 via-pink-50 to-white"
          title="Teacher Tech"
          subtitle="For Educators"
          description="STEM skills for teachers: circuits, Arduino, 3D modeling, tech in classrooms."
        />
        <GlassProgramCard
          color="from-green-200 via-green-100 to-white"
          title="Slate2Tech"
          subtitle="Digital Literacy"
          description="Digital literacy workshops: graphic design, online tools, MS Office basics."
        />
        <GlassProgramCard
          color="from-purple-200 via-purple-100 to-white"
          title="Summer Programs"
          subtitle="Ages 7–18"
          description="Build robots, code AI, explore VR/AR! Summer camps & online adventures."
        />
      </div>
    </div>
  </Section>
);

const MissionSection = () => (
  <Section id="about" bg="bg-gradient-to-r from-blue-50 via-yellow-50 to-green-50">
    <div className="max-w-3xl mx-auto px-4 text-center animate-fade-in">
      <GlassCard>
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-700 mb-3 drop-shadow">STEMverse Mission</h2>
        <p className="text-xl text-blue-900 font-semibold mb-2">
          At STEMverse, we are dedicated to equipping individuals of all ages with the skills and knowledge necessary to thrive in the dynamic landscape of the 21st century.
        </p>
        <p className="text-lg font-normal text-gray-700">
          Our mission is clear: to empower the next generation and beyond through comprehensive STEM sessions tailored for youngsters, teenagers, teachers, and older adults.
        </p>
      </GlassCard>
    </div>
  </Section>
);

const STEMDefSection = () => (
  <Section id="stem" bg="bg-gradient-to-r from-green-50 via-yellow-50 to-purple-50">
    <div className="max-w-5xl mx-auto px-4 mb-6">
      <h2 className="text-2xl md:text-3xl font-playfair font-bold text-purple-700 text-center mb-6 drop-shadow">What is STEM?</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <GlassCard className="w-48 flex flex-col items-center border-4 border-yellow-100">
          <Atom className="w-10 h-10 text-purple-400 mb-2" />
          <span className="font-bold text-lg text-purple-800">Science</span>
          <span className="text-gray-600 text-center mt-2 text-sm">Understanding our world through curiosity, experiments, and discovery.</span>
        </GlassCard>
        <GlassCard className="w-48 flex flex-col items-center border-4 border-green-100">
          <Code className="w-10 h-10 text-blue-400 mb-2" />
          <span className="font-bold text-lg text-blue-800">Technology</span>
          <span className="text-gray-600 text-center mt-2 text-sm">Building and using tools to solve real-life problems in creative ways.</span>
        </GlassCard>
        <GlassCard className="w-48 flex flex-col items-center border-4 border-blue-100">
          <Sparkle className="w-10 h-10 text-yellow-500 mb-2" />
          <span className="font-bold text-lg text-yellow-700">Engineering</span>
          <span className="text-gray-600 text-center mt-2 text-sm">Designing, inventing, and improving our world through hands-on projects.</span>
        </GlassCard>
        <GlassCard className="w-48 flex flex-col items-center border-4 border-purple-100">
          <Brain className="w-10 h-10 text-green-500 mb-2" />
          <span className="font-bold text-lg text-green-800">Mathematics</span>
          <span className="text-gray-600 text-center mt-2 text-sm">Thinking logically, solving puzzles, and making sense of numbers and patterns.</span>
        </GlassCard>
      </div>
    </div>
  </Section>
);

const PromiseSection = () => (
  <Section id="promise" bg="bg-gradient-to-r from-blue-50 via-yellow-100 to-green-50">
    <div className="max-w-4xl mx-auto flex flex-col items-center px-4 text-center">
      <GlassCard>
        <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-2 text-blue-900 drop-shadow">Our Promise</h2>
        <p className="mb-2 text-blue-800 font-semibold">
          Bridging the gap between traditional education & the power of technology.
        </p>
        <span className="text-green-800 font-medium mb-4">STEMverse empowers Pakistani students for the 21st century with fun, culturally relevant learning!</span>
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          <Badge icon={<Rocket className="w-5 h-5 text-blue-500" />} label="Cutting-edge Tech: AI, AR/VR, Gamification" />
          <Badge icon={<Brain className="w-5 h-5 text-yellow-500" />} label="Culturally Relevant" />
          <Badge icon={<Sparkle className="w-5 h-5 text-green-500" />} label="Fun, Customizable Microlearning" />
        </div>
      </GlassCard>
    </div>
  </Section>
);

const Badge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 bg-white/90 rounded-xl px-3 py-2 shadow border border-yellow-200 font-semibold text-md hover-scale backdrop-blur-md">
    {icon}
    <span>{label}</span>
  </div>
);

const ContactSection = () => {
  const { register, handleSubmit, formState, reset } = useForm<{ name: string; email: string; message: string }>();
  const onSubmit = (data: any) => {
    alert("Thank you for contacting STEMverse! We'll be in touch soon.");
    reset();
  };

  return (
    <Section id="contact" bg="bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-lg mx-auto px-4">
        <GlassCard className="bg-white/85 border-stemblue/20 py-10 shadow-xl">
          <h2 className="text-2xl font-playfair font-bold text-center text-stemblue mb-2">Have Questions? Reach Out!</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <input 
              type="text"
              placeholder="Name"
              className="py-2 px-4 rounded-xl border border-yellow-200 focus:ring-2 focus:ring-blue-200 outline-none"
              {...register("name", { required: true })}
            />
            <input 
              type="email"
              placeholder="Email"
              className="py-2 px-4 rounded-xl border border-yellow-200 focus:ring-2 focus:ring-blue-200 outline-none"
              {...register("email", { required: true })}
            />
            <textarea
              placeholder="Your message"
              className="py-2 px-4 rounded-xl border border-yellow-200 focus:ring-2 focus:ring-blue-200 outline-none min-h-[90px] resize-y"
              {...register("message", { required: true })}
            />
            <Button type="submit" size="lg" className="bg-stemblue hover:bg-yellow-400 text-white font-semibold mt-4">
              Send <MousePointerClick className="ml-1" />
            </Button>
          </form>
          <div className="flex flex-col items-center mt-6 text-xs text-gray-500 gap-1">
            <span>Email: <a className="underline text-blue-800" href="mailto:stemsverse@gmail.com">stemsverse@gmail.com</a></span>
            <span>WhatsApp: <a className="underline text-green-700" href="https://wa.me/923020558423" target="_blank" rel="noopener noreferrer">+92‑302‑0558423</a></span>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="w-full text-center text-gray-600 py-4 flex flex-col items-center gap-1 text-xs bg-transparent">
    <div className="flex gap-2 text-stemblue mb-1">
      <a href="https://facebook.com/mystemverse" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a> •
      <a href="https://instagram.com/mystemverse" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a> •
      <a href="https://linkedin.com/company/mystemverse" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
    </div>
    <span>Copyright © My STEMverse 2024 • Icons by Lordicon.com</span>
  </footer>
);

const OnePageSections = () => (
  <div className="bg-gradient-to-br from-[#f3f6fb] via-white to-[#ddebf7] min-h-screen">
    <HomeHero />
    <hr className="border-b border-blue-100 my-0" />
    <MissionSection />
    <STEMDefSection />
    <ProgramsSection />
    <PromiseSection />
    <ContactSection />
    <Footer />
  </div>
);

export default OnePageSections;
