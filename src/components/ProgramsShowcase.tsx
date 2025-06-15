
import React from "react";
import { Bot, Code, Atom, Users, BookOpen, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: <BookOpen className="w-8 h-8 text-stemblue" />,
    title: "Summer & Winter Camps",
    subtitle: "In-person & virtual, ages 7–18",
    desc: "Experience hands-on STEM adventures, make new friends, and explore new worlds—year-round.",
    href: "#"
  },
  {
    icon: <Bot className="w-8 h-8 text-yellow-600" />,
    title: "Online AI & Coding Camps",
    subtitle: "Live Python, ML, robotics",
    desc: "Code, create, and build smart systems, guided by expert instructors in real time.",
    href: "#"
  },
  {
    icon: <Atom className="w-8 h-8 text-green-600" />,
    title: "Online STEM Modules",
    subtitle: "Self-paced, hands-on",
    desc: "Flexible, practical mini-courses—crack open STEM topics at your own pace.",
    href: "#"
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "STEM Internships",
    subtitle: "FutureTech Internship, 3 weeks",
    desc: "Dive deep into industry projects, develop skills, and build your future with us.",
    href: "#"
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-500" />,
    title: "Teacher Training",
    subtitle: "AI-integrated pedagogy",
    desc: "Empower your teaching: modern pedagogy, digital skills, & next-gen STEM resources.",
    href: "#"
  },
  {
    icon: <Code className="w-8 h-8 text-accent" />,
    title: "Bootcamps & Workshops",
    subtitle: "Short intensives",
    desc: "Hands-on sessions: circuitry, AR, IoT, and cybersecurity—no prior experience needed.",
    href: "#"
  }
];

const ProgramsShowcase = () => (
  <section
    id="programs"
    className="w-full bg-gradient-to-tl from-[#f3ecd2] via-white to-blue-50 py-14 px-4"
  >
    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stemblue text-center mb-5">
      Featured Programs
    </h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {programs.map((p, i) => (
        <div
          className="flex flex-col items-start gap-3 px-7 py-8 rounded-2xl bg-white/90 border border-yellow-200 shadow
            hover:shadow-lg hover:scale-[1.03] hover:bg-[#f7eee0] transition duration-200 group animate-fade-in"
          key={p.title}
        >
          <div className="mb-2">{p.icon}</div>
          <span className="text-lg font-bold text-stemblue">{p.title}</span>
          <span className="text-accent font-medium">{p.subtitle}</span>
          <span className="mt-1 text-sm text-gray-700">{p.desc}</span>
          <Button size="sm" className="mt-3 px-4 py-2 rounded-lg bg-stemblue text-yellow-200 hover:bg-[#3851a6] shadow group-hover:border-accent/50">
            Learn More
          </Button>
        </div>
      ))}
    </div>
  </section>
);

export default ProgramsShowcase;
