
import { User, Users } from "lucide-react";

const team = [
  {
    name: "Morgan Lee",
    role: "Founder & CEO",
    avatar: <User className="w-10 h-10 text-stemblue" />,
    bio: "Visionary leader passionate about harnessing STEM for real-world impact.",
  },
  {
    name: "Riley Patel",
    role: "Lead Technologist",
    avatar: <Users className="w-10 h-10 text-stemblue" />,
    bio: "Innovator in technology and engineering, architecting the STEMverse future.",
  },
];

const TeamSection = () => (
  <section className="w-full py-4 md:py-8 flex flex-col items-center animate-fade-in">
    <h2 className="text-3xl font-playfair font-semibold text-stemblue mb-6">Meet Our Team</h2>
    <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl">
      {team.map((member) => (
        <div
          key={member.name}
          className="bg-white/90 rounded-xl shadow-lg border border-border flex flex-col items-center max-w-xs px-7 py-6 transition hover:scale-105 hover:shadow-2xl duration-200"
        >
          <div className="mb-3">{member.avatar}</div>
          <div className="text-xl font-semibold">{member.name}</div>
          <div className="text-sm text-stemblue mb-2">{member.role}</div>
          <div className="text-gray-600 text-center">{member.bio}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
