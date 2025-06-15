
import React, { useState } from "react";
import { MapPin, Users, HeartHandshake, Trophy, ChevronRight, ArrowDown } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <MapPin className="w-8 h-8 text-[#FFCE27] mb-3" />,
    label: "Choose Your Path",
    desc: "Pick a program that fits—camps, internships, online courses, or teacher training.",
    details: "Browse our comprehensive program catalog and select the learning path that aligns with your goals and schedule."
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8 text-[#263868] mb-3" />,
    label: "Join & Learn by Doing",
    desc: "Attend interactive sessions (in-person or online) where you'll build, code, and create real-world projects.",
    details: "Engage in hands-on learning experiences with expert instructors and collaborative project work."
  },
  {
    id: 3,
    icon: <HeartHandshake className="w-8 h-8 text-green-600 mb-3" />,
    label: "Get Support & Feedback",
    desc: "Learn from experienced mentors, track your progress, and receive personalized guidance.",
    details: "Receive one-on-one mentorship, regular progress assessments, and customized learning recommendations."
  },
  {
    id: 4,
    icon: <Trophy className="w-8 h-8 text-purple-600 mb-3" />,
    label: "Showcase & Grow",
    desc: "Earn certificates, share your projects, and get ready for future academic or career opportunities.",
    details: "Build your portfolio, earn industry-recognized certifications, and prepare for your next educational or career milestone."
  }
];

const HowItWorksTimeline = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="w-full bg-gradient-to-br from-white via-yellow-50 to-blue-50 py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center text-stemblue mb-12">How It Works</h2>
      
      {/* Desktop Flowchart */}
      <div className="max-w-7xl mx-auto hidden md:block">
        <div className="grid grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.id} className="relative">
              {/* Step Card */}
              <div 
                className={`cursor-pointer transition-all duration-500 h-80 group ${
                  activeStep === step.id 
                    ? 'transform scale-105 shadow-2xl' 
                    : 'hover:scale-102 hover:shadow-xl'
                }`}
                onClick={() => setActiveStep(step.id)}
                onMouseEnter={() => setActiveStep(step.id)}
              >
                <div className={`flex flex-col items-center text-center p-8 rounded-3xl border-3 h-full relative overflow-hidden transition-all duration-500 ${
                  activeStep === step.id 
                    ? 'bg-gradient-to-br from-white to-yellow-50 border-[#FFCE27] shadow-2xl' 
                    : 'bg-gradient-to-br from-[#fffbf2] to-white border-gray-200 hover:border-[#FFCE27]/50'
                }`}>
                  
                  {/* Animated Background Pattern */}
                  <div className={`absolute inset-0 opacity-5 transition-opacity duration-500 ${
                    activeStep === step.id ? 'opacity-10' : 'opacity-0'
                  }`}>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-[#FFCE27] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-300 rounded-full animate-bounce"></div>
                  </div>

                  {/* Icon Container */}
                  <div className={`flex flex-col items-center justify-center rounded-full p-6 mb-4 transition-all duration-500 relative z-10 ${
                    activeStep === step.id 
                      ? 'bg-gradient-to-br from-[#FFCE27]/30 to-[#FFCE27]/10 scale-110' 
                      : 'bg-white/90 group-hover:bg-[#FFCE27]/20'
                  }`}>
                    <div className={`transition-transform duration-500 ${
                      activeStep === step.id ? 'animate-bounce' : ''
                    }`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center relative z-10">
                    <h3 className="font-bold text-stemblue text-xl mb-3 leading-tight">{step.label}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{step.desc}</p>
                    
                    {/* Expandable Details */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      activeStep === step.id 
                        ? 'max-h-32 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-[#FFCE27]/30 pt-3">
                        <p className="text-xs text-gray-700 leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step Number Badge */}
                <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-500 z-20 ${
                  activeStep === step.id 
                    ? 'bg-gradient-to-br from-[#FFCE27] to-yellow-500 scale-125 shadow-lg' 
                    : 'bg-gradient-to-br from-gray-400 to-gray-500'
                }`}>
                  {step.id}
                </div>
              </div>
              
              {/* Arrow Between Steps */}
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-30">
                  <div className={`w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-500 ${
                    activeStep === step.id ? 'scale-125' : ''
                  }`}>
                    <ChevronRight className={`w-4 h-4 transition-colors duration-500 ${
                      activeStep === step.id ? 'text-[#FFCE27]' : 'text-gray-400'
                    }`} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="max-w-lg mx-auto md:hidden">
        {steps.map((step, i) => (
          <div key={step.id} className="relative">
            <div 
              className={`cursor-pointer transition-all duration-500 ${
                activeStep === step.id ? 'transform scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className={`flex items-start gap-4 p-6 rounded-3xl border-3 transition-all duration-500 min-h-[200px] ${
                activeStep === step.id 
                  ? 'bg-gradient-to-br from-white to-yellow-50 border-[#FFCE27] shadow-xl' 
                  : 'bg-gradient-to-br from-[#fffbf2] to-white border-gray-200'
              }`}>
                {/* Step Number */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 transition-all duration-500 ${
                  activeStep === step.id 
                    ? 'bg-gradient-to-br from-[#FFCE27] to-yellow-500 scale-110 shadow-lg' 
                    : 'bg-gradient-to-br from-gray-400 to-gray-500'
                }`}>
                  {step.id}
                </div>
                
                <div className="flex-1">
                  <div className={`mb-3 transition-transform duration-500 ${
                    activeStep === step.id ? 'animate-bounce' : ''
                  }`}>
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-stemblue text-lg mb-2">{step.label}</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{step.desc}</p>
                  
                  {/* Expandable Details */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    activeStep === step.id 
                      ? 'max-h-32 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-[#FFCE27]/30 pt-3">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vertical Arrow */}
            {i < steps.length - 1 && (
              <div className="flex justify-center my-4">
                <div className={`w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-500 ${
                  activeStep === step.id ? 'scale-125' : ''
                }`}>
                  <ArrowDown className={`w-5 h-5 transition-colors duration-500 ${
                    activeStep === step.id ? 'text-[#FFCE27]' : 'text-gray-400'
                  }`} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksTimeline;
