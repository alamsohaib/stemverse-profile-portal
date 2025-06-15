
import React from "react";
import { Award, Target, Shield } from "lucide-react";

const features = [
  {
    icon: <Award className="w-8 h-8 text-[#FFCE27] animate-pulse" />,
    title: "Proven Partnerships",
    desc: (
      <>
        Top Schools, UNDP, NIC Peshawar, Women Techmakers, GIZ, OntarioTech
        <div className="flex gap-3 mt-1 text-xs">
          <a className="underline text-blue-700" href="https://behance.net" target="_blank">behance.net</a>
          <span>+1</span>
          <a className="underline text-pink-800" href="https://pinterest.com" target="_blank">pinterest.com</a>
          <span>+1</span>
        </div>
      </>
    )
  },
  {
    icon: <Target className="w-8 h-8 text-[#263868] animate-bounce" />,
    title: "Project-Based Methodology",
    desc: (
      <>
        Aligned with international STEM standards, learn by building, testing, and improving real-world projects.
        <div className="mt-1 text-xs">
          <a className="underline text-green-700" href="https://educationtothecore.com" target="_blank">educationtothecore.com</a>
        </div>
      </>
    )
  },
  {
    icon: <Shield className="w-8 h-8 text-accent animate-pulse" />,
    title: "Safe, Culturally-Tailored Learning",
    desc: (
      <>Age-appropriate, locally relevant content delivered in secure, inclusive, and well-guided learning environments.</>
    )
  }
];

const WhyStemverse = () => (
  <section className="w-full bg-[#f8f4ec] py-14 px-4 flex justify-center">
    <div className="max-w-5xl w-full">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stemblue text-center mb-8">
        Why STEMverse
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {features.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="flex-1 flex flex-col gap-2 bg-white/90 rounded-2xl shadow border border-yellow-100 p-7 text-left hover:shadow-xl transition animate-fade-in"
          >
            <div className="mb-1">{icon}</div>
            <span className="font-bold text-lg text-stemblue">{title}</span>
            <span className="text-sm text-gray-700">{desc}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyStemverse;
