
import React from "react";
import { Handshake, Layers, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Handshake className="w-8 h-8 text-[#FFCE27]" />,
    title: "Proven Partnerships",
    desc: (
      <>
        Al‑HADI Schools, NIC Peshawar, Women Techmakers
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
    icon: <Layers className="w-8 h-8 text-[#263868]" />,
    title: "Project-Based Methodology",
    desc: (
      <>
        Modeled after micro:bit—learn by building, testing, iterating
        <div className="mt-1 text-xs">
          <a className="underline text-green-700" href="https://educationtothecore.com" target="_blank">educationtothecore.com</a>
        </div>
      </>
    )
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: "Safe, Culturally-Tailored Learning",
    desc: (
      <>Age-appropriate content in moderated environments</>
    )
  }
];

const WhyStemverse = () => (
  <section className="w-full bg-[#f8f4ec] py-14 px-4 flex justify-center">
    <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between gap-8">
      {features.map(({ icon, title, desc }) => (
        <div
          key={title}
          className="flex-1 flex flex-col gap-2 bg-white/90 rounded-2xl shadow border border-yellow-100 p-7 md:items-center hover:shadow-xl transition animate-fade-in"
        >
          <div className="mb-1">{icon}</div>
          <span className="font-bold text-lg text-stemblue">{title}</span>
          <span className="text-sm text-gray-700">{desc}</span>
        </div>
      ))}
    </div>
  </section>
);

export default WhyStemverse;
