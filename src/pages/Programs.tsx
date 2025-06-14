
import NavBar from "@/components/NavBar";

const programs = [
  {
    color: "from-yellow-200 via-yellow-100 to-white",
    title: "Edventurers",
    subtitle: "Ages 5–12",
    description: "Weekly workshops: Intro to electricity, coding, 3D modeling. Playful, hands-on quests!"
  },
  {
    color: "from-blue-200 via-blue-100 to-white",
    title: "Tech Titans",
    subtitle: "Ages 13–19",
    description: "Electricity, electronics, Python, Arduino robotics; project-based sessions."
  },
  {
    color: "from-pink-200 via-pink-50 to-white",
    title: "Teacher Tech",
    subtitle: "For Educators",
    description: "STEM skills for teachers: circuits, Arduino, 3D modeling, tech in classrooms."
  },
  {
    color: "from-green-200 via-green-100 to-white",
    title: "Slate2Tech",
    subtitle: "Digital Literacy",
    description: "Digital literacy workshops: graphic design, online tools, MS Office basics."
  },
  {
    color: "from-purple-200 via-purple-100 to-white",
    title: "Summer Programs",
    subtitle: "Ages 7–18",
    description: "Build robots, code AI, explore VR/AR! Summer camps & online adventures."
  }
];

const ProgramCard = ({ color, title, subtitle, description }: any) => (
  <div
    className={`p-5 rounded-2xl shadow-md bg-gradient-to-br ${color} flex flex-col gap-2 items-start hover:scale-105 duration-200 border-2 border-stemblue/10`}
  >
    <div className="text-lg font-bold text-stemblue">{title}</div>
    <div className="text-sm font-semibold text-yellow-700">{subtitle}</div>
    <div className="text-gray-700 text-sm mt-1">{description}</div>
  </div>
);

const Programs = () => (
  <main className="w-full flex flex-col items-center bg-background min-h-screen">
    <NavBar />
    <section id="programs" className="w-full py-14 md:py-20 bg-gradient-to-b from-yellow-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stemblue text-center mb-7">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {programs.map((p) => (
            <ProgramCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Programs;
