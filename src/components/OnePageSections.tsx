
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
  <section id={id} className={`w-full py-14 md:py-20 ${bg || ""} ${className}`.trim()}>
    {children}
  </section>
);

const HomeHero = () => (
  <Section id="home" bg="bg-gradient-to-b from-yellow-50 to-blue-50">
    <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 max-w-6xl mx-auto px-4">
      <div className="relative">
        <img
          src="/lovable-uploads/414562a0-bc63-4d90-ad88-a6f39add6aac.png"
          alt="STEMverse logo"
          className="
            w-36 h-36 md:w-56 md:h-56 drop-shadow-xl md:drop-shadow-2xl
            rounded-xl md:rounded-2xl
            bg-gradient-to-br from-yellow-100/60 via-transparent to-blue-100/40
            shadow-lg md:shadow-2xl
            ring-2 ring-yellow-300/10
            transition-all duration-300
            hover:scale-105
            "
          style={{
            objectFit: "contain",
            background: "none", // this ensures box is transparent if png supports it
            boxShadow:
              "0 8px 32px 0 rgba(38,56,104,0.25), 0 1.5px 4px 0 rgba(0,0,0,0.08)", // embossed effect
            border: "none"
          }}
        />
        {/* Subtle glowing circle behind, for more 'one piece' modern/embossed feel */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none z-[-1] blur-[10px]"
          style={{
            background: "radial-gradient(circle, #FFE06655 40%, #e1ecfc22 82%)",
          }}
        />
      </div>
      <div className="flex flex-col items-start gap-4 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-stemblue mb-1 tracking-tight">
          Unlocking <span className="text-yellow-500">endless possibilities</span> to empower young innovators.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-medium">
          Empowering everyone with skills for the future—kids, teens, teachers, and adults.<br />
          <span className="text-blue-600">#STEMverse</span>
        </p>
        <Button
          size="lg"
          className="mt-2 bg-blue-400 hover:bg-yellow-400 text-white font-bold px-7 py-3 rounded-xl shadow-lg"
          onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
        >
          Explore Programs <Rocket className="ml-2" />
        </Button>
      </div>
    </div>
  </Section>
);

const MissionSection = () => (
  <Section id="about" bg="bg-gradient-to-r from-blue-100 via-yellow-50 to-green-50">
    <div className="max-w-3xl mx-auto px-4 text-center animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-700 mb-4">STEMverse Mission</h2>
      <p className="text-xl text-blue-900 font-semibold mb-2">
        At STEMverse, we are dedicated to equipping individuals of all ages with the skills and knowledge necessary to thrive in the dynamic landscape of the 21st century.
      </p>
      <p className="text-lg font-normal text-gray-700">
        Our mission is clear: to empower the next generation and beyond through comprehensive STEM sessions tailored for youngsters, teenagers, teachers, and older adults.
      </p>
    </div>
  </Section>
);

const STEMDefSection = () => (
  <Section id="stem" bg="bg-gradient-to-r from-green-50 via-yellow-50 to-purple-50">
    <div className="max-w-5xl mx-auto px-4 mb-6">
      <h2 className="text-2xl md:text-3xl font-playfair font-bold text-purple-700 text-center mb-6">What is STEM?</h2>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 w-48 hover:scale-105 duration-200 border-4 border-yellow-100">
          <Atom className="w-10 h-10 text-purple-400 mb-2" />
          <span className="font-bold text-lg text-purple-800">Science</span>
          <span className="text-gray-600 text-center mt-2 text-sm">Understanding our world through curiosity, experiments, and discovery.</span>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 w-48 hover:scale-105 duration-200 border-4 border-green-100">
          <Code className="w-10 h-10 text-blue-400 mb-2" />
          <span className="font-bold text-lg text-blue-800">Technology</span>
          <span className="text-gray-600 text-center mt-2 text-sm">Building and using tools to solve real-life problems in creative ways.</span>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 w-48 hover:scale-105 duration-200 border-4 border-blue-100">
          <Sparkle className="w-10 h-10 text-yellow-500 mb-2" />
          <span className="font-bold text-lg text-yellow-700">Engineering</span>
          <span className="text-gray-600 text-center mt-2 text-sm">Designing, inventing, and improving our world through hands-on projects.</span>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-5 w-48 hover:scale-105 duration-200 border-4 border-purple-100">
          <Brain className="w-10 h-10 text-green-500 mb-2" />
          <span className="font-bold text-lg text-green-800">Mathematics</span>
          <span className="text-gray-600 text-center mt-2 text-sm">Thinking logically, solving puzzles, and making sense of numbers and patterns.</span>
        </div>
      </div>
    </div>
  </Section>
);

const ProgramsSection = () => (
  <Section id="programs" bg="bg-gradient-to-b from-yellow-50 via-white to-blue-50">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stemblue text-center mb-7">Our Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <ProgramCard
          color="from-yellow-200 via-yellow-100 to-white"
          title="Edventurers"
          subtitle="Ages 5–12"
          description="Weekly workshops: Intro to electricity, coding, 3D modeling. Playful, hands-on quests!"
        />
        <ProgramCard
          color="from-blue-200 via-blue-100 to-white"
          title="Tech Titans"
          subtitle="Ages 13–19"
          description="Electricity, electronics, Python, Arduino robotics; project-based sessions."
        />
        <ProgramCard
          color="from-pink-200 via-pink-50 to-white"
          title="Teacher Tech"
          subtitle="For Educators"
          description="STEM skills for teachers: circuits, Arduino, 3D modeling, tech in classrooms."
        />
        <ProgramCard
          color="from-green-200 via-green-100 to-white"
          title="Slate2Tech"
          subtitle="Digital Literacy"
          description="Digital literacy workshops: graphic design, online tools, MS Office basics."
        />
        <ProgramCard
          color="from-purple-200 via-purple-100 to-white"
          title="Summer Programs"
          subtitle="Ages 7–18"
          description="Build robots, code AI, explore VR/AR! Summer camps & online adventures."
        />
      </div>
    </div>
  </Section>
);

const ProgramCard = ({
  color,
  title,
  subtitle,
  description,
}: {
  color: string;
  title: string;
  subtitle: string;
  description: string;
}) => (
  <div
    className={`p-5 rounded-2xl shadow-md bg-gradient-to-br ${color} flex flex-col gap-2 items-start hover:scale-105 duration-200 border-2 border-stemblue/10`}
  >
    <div className="text-lg font-bold text-stemblue">{title}</div>
    <div className="text-sm font-semibold text-yellow-700">{subtitle}</div>
    <div className="text-gray-700 text-sm mt-1">{description}</div>
  </div>
);

const PromiseSection = () => (
  <Section id="promise" bg="bg-gradient-to-r from-blue-50 via-yellow-100 to-green-50">
    <div className="max-w-4xl mx-auto flex flex-col items-center px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-2 text-blue-900">Our Promise</h2>
      <p className="mb-2 text-blue-800 font-semibold">
        Bridging the gap between traditional education & the power of technology.
      </p>
      <span className="text-green-800 font-medium mb-4">STEMverse empowers Pakistani students for the 21st century with fun, culturally relevant learning!</span>
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        <Badge icon={<Rocket className="w-5 h-5 text-blue-500" />} label="Cutting-edge Tech: AI, AR/VR, Gamification" />
        <Badge icon={<Brain className="w-5 h-5 text-yellow-500" />} label="Culturally Relevant" />
        <Badge icon={<Sparkle className="w-5 h-5 text-green-500" />} label="Fun, Customizable Microlearning" />
      </div>
    </div>
  </Section>
);

const Badge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow border border-yellow-200 font-semibold text-md hover-scale">
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
    <Section id="contact" bg="bg-yellow-50">
      <div className="max-w-lg mx-auto px-4 bg-white/80 rounded-2xl shadow-md border border-stemblue/20 py-10">
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
          <Button type="submit" size="lg" className="bg-stemblue hover:bg-yellow-400 text-white font-semibold mt-4">Send <MousePointerClick className="ml-1" /></Button>
        </form>
        <div className="flex flex-col items-center mt-6 text-xs text-gray-500 gap-1">
          <span>Email: <a className="underline text-blue-800" href="mailto:stemsverse@gmail.com">stemsverse@gmail.com</a></span>
          <span>WhatsApp: <a className="underline text-green-700" href="https://wa.me/923020558423" target="_blank" rel="noopener noreferrer">+92‑302‑0558423</a></span>
        </div>
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="w-full text-center text-gray-600 py-4 flex flex-col items-center gap-1 text-xs">
    <div className="flex gap-2 text-stemblue mb-1">
      <a href="https://facebook.com/mystemverse" target="_blank" rel="noopener noreferrer">Facebook</a> •
      <a href="https://instagram.com/mystemverse" target="_blank" rel="noopener noreferrer">Instagram</a> •
      <a href="https://linkedin.com/company/mystemverse" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
    <span>Copyright © My STEMverse 2024 • Icons by Lordicon.com</span>
  </footer>
);

const OnePageSections = () => (
  <div>
    <HomeHero />
    <MissionSection />
    <STEMDefSection />
    <ProgramsSection />
    <PromiseSection />
    <ContactSection />
    <Footer />
  </div>
);

export default OnePageSections;
