
import React from "react";
import { GraduationCap, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ResourcesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#F6F9FF] py-12 px-4 flex justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col bg-white/90 rounded-2xl shadow border border-blue-100 p-8">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-6 h-6 text-stemblue" />
            <span className="text-lg font-bold text-stemblue">Free Downloads</span>
          </div>
          <div className="mt-1 text-gray-700 text-sm flex-1">
            Camp brochures, lesson plan samples, and ready-to-use STEM ideas to spark your next project.
          </div>
          <Button
            className="mt-4 px-5 py-2 bg-accent text-stemblue rounded-lg font-bold hover:bg-stemblue hover:text-yellow-100 transition-all"
            onClick={() => navigate("/resources")}
          >
            View Free Resources
          </Button>
        </div>
        <div className="flex flex-col bg-white/90 rounded-2xl shadow border border-blue-100 p-8">
          <div className="flex items-center gap-2 mb-2">
            <ShoppingBag className="w-6 h-6 text-[#f7b800]" />
            <span className="text-lg font-bold text-stemblue">Shop STEM Kits</span>
          </div>
          <div className="mt-1 text-gray-700 text-sm flex-1">
            Arduino sets, robotics kits, and teacher toolkits—everything you need for hands-on learning at home or in the classroom.
          </div>
          <Button
            className="mt-4 px-5 py-2 bg-stemblue text-accent rounded-lg font-bold hover:bg-accent hover:text-stemblue transition-all"
            onClick={() => navigate("/products")}
          >
            Shop Now <ArrowRight className="ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
