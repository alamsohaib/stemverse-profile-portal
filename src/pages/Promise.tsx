
import NavBar from "@/components/NavBar";
import { Rocket, Brain, Sparkle } from "lucide-react";

const Badge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow border border-yellow-200 font-semibold text-md hover-scale">
    {icon}
    <span>{label}</span>
  </div>
);

const PromisePage = () => (
  <main className="w-full flex flex-col items-center bg-background min-h-screen">
    <NavBar />
    <section id="promise" className="w-full py-14 md:py-20 bg-gradient-to-r from-blue-50 via-yellow-100 to-green-50">
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
    </section>
  </main>
);

export default PromisePage;
