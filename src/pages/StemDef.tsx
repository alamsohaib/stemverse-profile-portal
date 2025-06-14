
import NavBar from "@/components/NavBar";
import { Sparkle, Brain, Code, Atom } from "lucide-react";

const StemDef = () => (
  <main className="w-full flex flex-col items-center bg-background min-h-screen">
    <NavBar />
    <section id="stem" className="w-full py-14 md:py-20 bg-gradient-to-r from-green-50 via-yellow-50 to-purple-50">
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
    </section>
  </main>
);

export default StemDef;
