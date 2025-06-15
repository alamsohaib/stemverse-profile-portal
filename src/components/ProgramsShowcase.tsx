
import React from "react";
import { GraduationCap, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    title: "Summer & Winter Camps",
    subtitle: "Available Online & On-Site, Designed for Ages 7–18",
    desc: "Make the most of your vacations by diving into hands-on STEM adventures where you build, code, and explore alongside curious minds in robotics, AI, 3D printing, and more. Connect, create, and learn all year round.",
    href: "#"
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Teacher Training",
    subtitle: "STEM Integration & Technology for Classrooms",
    desc: "Give educators the tools and confidence to bring STEM into their classrooms. From using the latest educational technologies to designing hands-on activities, our training helps teachers understand, implement, and teach STEM concepts with ease and impact.",
    href: "#"
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-600" />,
    title: "STEM Internships",
    subtitle: "From Campus to Career: Your First Step into the Tech World",
    desc: "Gain real-world experience with emerging technologies through hands-on projects, mentorship, and skill-building sessions. Our internship equips you with practical know-how, career guidance, and the confidence to step into the tech industry.",
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
            hover:shadow-lg hover:scale-[1.03] hover:bg-[#f7eee0] transition duration-200 group animate-fade-in min-h-[320px]"
          key={p.title}
        >
          <div className="mb-2 transform group-hover:scale-110 transition-transform duration-200">{p.icon}</div>
          <span className="text-lg font-bold text-stemblue">{p.title}</span>
          <span className="text-accent font-medium">{p.subtitle}</span>
          <span className="mt-1 text-sm text-gray-700 flex-grow">{p.desc}</span>
          <Button size="sm" className="mt-auto px-4 py-2 rounded-lg bg-stemblue text-yellow-200 hover:bg-[#3851a6] shadow group-hover:border-accent/50">
            Learn More
          </Button>
        </div>
      ))}
    </div>
  </section>
);

export default ProgramsShowcase;
