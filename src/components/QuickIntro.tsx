
import React from "react";

const QuickIntro = () => (
  <section className="w-full flex justify-center bg-[#F8F6ED] py-16 px-4 animate-fade-in relative overflow-hidden">
    <div className="max-w-4xl text-center relative">
      {/* Floating STEM Tags - Made more visible */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Game/Web Development */}
        <div className="absolute top-4 left-8 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl transform rotate-[-12deg] animate-pulse border-2 border-white/30">
          Game/Web Development
        </div>
        
        {/* App Development */}
        <div className="absolute top-12 right-12 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl transform rotate-[8deg] animate-pulse delay-500 border-2 border-white/30">
          App Development
        </div>
        
        {/* Coding & AI */}
        <div className="absolute bottom-16 left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl transform rotate-[15deg] animate-pulse delay-1000 border-2 border-white/30">
          Coding & AI
        </div>
        
        {/* 3D Modelling */}
        <div className="absolute bottom-8 right-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl transform rotate-[-8deg] animate-pulse delay-700 border-2 border-white/30">
          3D Modelling
        </div>
        
        {/* Robotics */}
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl rotate-[5deg] animate-pulse delay-300 border-2 border-white/30">
          Robotics
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#ffce27]/30">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#263868] mb-6">
          Join the <span className="text-[#ffce27]">STEM</span> Movement
        </h2>
        <p className="text-lg md:text-xl text-[#263868]/80 leading-relaxed max-w-3xl mx-auto">
          Where curiosity meets innovation! Dive into a world of hands-on learning experiences 
          that spark creativity, build essential skills, and prepare you for the future. 
          From coding adventures to robotic challenges, we're here to turn your STEM dreams into reality.
        </p>
      </div>
    </div>
  </section>
);

export default QuickIntro;
