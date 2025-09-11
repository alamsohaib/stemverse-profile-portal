
import React, { useState } from "react";
import { MapPin, Users, HeartHandshake, Trophy, ChevronRight, ArrowDown, RotateCcw } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <MapPin className="w-8 h-8 text-[#FFCE27]" />,
    label: "Choose Your Path",
    shortDesc: "Pick your perfect program",
    fullDesc: "Pick a program that fits—camps, internships, online courses, or teacher training.",
    details: [
      "Browse our comprehensive program catalog",
      "Select learning paths that align with your goals",
      "Choose from flexible schedules and formats",
      "Get personalized program recommendations"
    ]
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8 text-[#263868]" />,
    label: "Join & Learn by Doing",
    shortDesc: "Hands-on interactive learning",
    fullDesc: "Attend interactive sessions (in-person or online) where you'll build, code, and create real-world projects.",
    details: [
      "Engage in hands-on learning experiences",
      "Work with expert instructors and mentors",
      "Collaborate on exciting group projects",
      "Build real-world applications and solutions"
    ]
  },
  {
    id: 3,
    icon: <HeartHandshake className="w-8 h-8 text-green-600" />,
    label: "Get Support & Feedback",
    shortDesc: "Personalized mentorship & guidance",
    fullDesc: "Learn from experienced mentors, track your progress, and receive personalized guidance.",
    details: [
      "Receive one-on-one mentorship sessions",
      "Get regular progress assessments",
      "Access customized learning recommendations",
      "Join supportive learning communities"
    ]
  },
  {
    id: 4,
    icon: <Trophy className="w-8 h-8 text-purple-600" />,
    label: "Showcase & Grow",
    shortDesc: "Build your portfolio & career",
    fullDesc: "Earn certificates, share your projects, and get ready for future academic or career opportunities.",
    details: [
      "Build an impressive project portfolio",
      "Earn industry-recognized certifications",
      "Prepare for academic or career milestones",
      "Connect with potential employers and schools"
    ]
  }
];

const FlipCard = ({ step, index, isLast }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative">
      {/* Flip Card Container */}
      <div 
        className="flip-card h-80 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Front Side */}
          <div className="flip-card-front">
            <div className="flex flex-col items-center text-center p-8 rounded-3xl border-3 h-full relative overflow-hidden bg-gradient-to-br from-[#fffbf2] to-white border-gray-200 hover:border-[#FFCE27]/50 transition-all duration-300 hover:shadow-xl">
              
              {/* Icon Container */}
              <div className="flex flex-col items-center justify-center rounded-full p-6 mb-4 bg-white/90 group-hover:bg-[#FFCE27]/20 transition-all duration-300">
                {step.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-stemblue text-xl mb-3 leading-tight">{step.label}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{step.shortDesc}</p>
                
                <div className="flex items-center justify-center text-[#FFCE27] mt-auto">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">Click to flip</span>
                </div>
              </div>
            </div>
            
            {/* Step Number Badge */}
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br from-gray-400 to-gray-500 z-20">
              {step.id}
            </div>
          </div>

          {/* Back Side */}
          <div className="flip-card-back">
            <div className="flex flex-col items-center text-center p-8 rounded-3xl border-3 h-full relative overflow-hidden bg-gradient-to-br from-white to-yellow-50 border-[#FFCE27] shadow-2xl">
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-16 h-16 bg-[#FFCE27] rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-300 rounded-full animate-bounce"></div>
              </div>

              {/* Icon Container */}
              <div className="flex flex-col items-center justify-center rounded-full p-4 mb-4 bg-gradient-to-br from-[#FFCE27]/30 to-[#FFCE27]/10 relative z-10">
                {step.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center relative z-10">
                <h3 className="font-bold text-stemblue text-lg mb-3 leading-tight">{step.label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">{step.fullDesc}</p>
                
                <div className="space-y-2">
                  {step.details.map((detail, i) => (
                    <div key={i} className="flex items-start text-left">
                      <div className="w-2 h-2 bg-[#FFCE27] rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      <p className="text-xs text-gray-700 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center text-[#FFCE27] mt-4">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">Click to flip back</span>
                </div>
              </div>
            </div>
            
            {/* Step Number Badge */}
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br from-[#FFCE27] to-yellow-500 scale-125 shadow-lg z-20">
              {step.id}
            </div>
          </div>
        </div>
      </div>
      
      {/* Arrow Between Steps */}
      {!isLast && (
        <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-30 hidden md:block">
          <div className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      )}
    </div>
  );
};

const MobileFlipCard = ({ step, index, isLast }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative">
      <div 
        className="flip-card min-h-[250px] cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Front Side */}
          <div className="flip-card-front">
            <div className="flex items-start gap-4 p-6 rounded-3xl border-3 bg-gradient-to-br from-[#fffbf2] to-white border-gray-200 min-h-[250px]">
              {/* Step Number */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 bg-gradient-to-br from-gray-400 to-gray-500">
                {step.id}
              </div>
              
              <div className="flex-1">
                <div className="mb-3">
                  {step.icon}
                </div>
                <h3 className="font-bold text-stemblue text-lg mb-2">{step.label}</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{step.shortDesc}</p>
                
                <div className="flex items-center text-[#FFCE27] mt-4">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">Tap to see details</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="flip-card-back">
            <div className="flex items-start gap-4 p-6 rounded-3xl border-3 bg-gradient-to-br from-white to-yellow-50 border-[#FFCE27] shadow-xl min-h-[250px]">
              {/* Step Number */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 bg-gradient-to-br from-[#FFCE27] to-yellow-500 scale-110 shadow-lg">
                {step.id}
              </div>
              
              <div className="flex-1">
                <div className="mb-3">
                  {step.icon}
                </div>
                <h3 className="font-bold text-stemblue text-lg mb-2">{step.label}</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{step.fullDesc}</p>
                
                <div className="space-y-2 mb-4">
                  {step.details.map((detail, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#FFCE27] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-[#FFCE27]">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">Tap to go back</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Vertical Arrow */}
      {!isLast && (
        <div className="flex justify-center my-4">
          <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
            <ArrowDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      )}
    </div>
  );
};

const HowItWorksTimeline = () => {
  return (
    <section className="w-full bg-gradient-to-br from-yellow-50 via-blue-50 to-white py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center text-stemblue mb-12">How It Works</h2>
      
      {/* Desktop Grid */}
      <div className="max-w-7xl mx-auto hidden md:block">
        <div className="grid grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FlipCard 
              key={step.id} 
              step={step} 
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Mobile Stack */}
      <div className="max-w-lg mx-auto md:hidden">
        {steps.map((step, i) => (
          <MobileFlipCard 
            key={step.id} 
            step={step} 
            index={i}
            isLast={i === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksTimeline;
