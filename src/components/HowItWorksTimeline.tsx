
import React from "react";
import { BarChart2, BookOpenCheck, Trophy } from "lucide-react";

const steps = [
  {
    icon: <BarChart2 className="w-7 h-7 text-[#FFCE27] mb-2" />,
    label: "Pick Your Path",
    desc: "Camp, internship, training"
  },
  {
    icon: <BookOpenCheck className="w-7 h-7 text-[#263868] mb-2" />,
    label: "Dive into Hands-On Learning",
    desc: ""
  },
  {
    icon: <Trophy className="w-7 h-7 text-green-600 mb-2" />,
    label: "Showcase & Grow",
    desc: "Certificates, demos, mentorship"
  }
];

const HowItWorksTimeline = () => (
  <section className="w-full bg-gradient-to-br from-white via-yellow-50 to-blue-50 py-14 px-4">
    <h2 className="text-2xl md:text-3xl font-bold font-playfair text-center text-stemblue mb-7">How It Works</h2>
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
      {steps.map((s, i) => (
        <div
          key={s.label}
          className="flex flex-col items-center text-center flex-1 animate-fade-in"
        >
          <div className="flex flex-col items-center justify-center rounded-full bg-[#fffbf2] shadow p-4 mb-2">
            {s.icon}
          </div>
          <span className="font-bold text-stemblue text-lg">{s.label}</span>
          {s.desc && <span className="text-sm text-gray-600 mt-1">{s.desc}</span>}
          {i < steps.length - 1 && (
            <span
              className="hidden md:block w-14 h-1 bg-gradient-to-r from-[#FFCE27] to-[#263868]/20 rounded-lg mt-3"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
          )}
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorksTimeline;
