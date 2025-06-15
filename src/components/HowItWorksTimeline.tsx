
import React, { useState } from "react";
import { MapPin, Users, HeartHandshake, Trophy, ChevronRight, ArrowDown } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <MapPin className="w-7 h-7 text-[#FFCE27] mb-2" />,
    label: "Choose Your Path",
    desc: "Pick a program that fits—camps, internships, online courses, or teacher training.",
    details: "Browse our comprehensive program catalog and select the learning path that aligns with your goals and schedule."
  },
  {
    id: 2,
    icon: <Users className="w-7 h-7 text-[#263868] mb-2" />,
    label: "Join & Learn by Doing",
    desc: "Attend interactive sessions (in-person or online) where you'll build, code, and create real-world projects.",
    details: "Engage in hands-on learning experiences with expert instructors and collaborative project work."
  },
  {
    id: 3,
    icon: <HeartHandshake className="w-7 h-7 text-green-600 mb-2" />,
    label: "Get Support & Feedback",
    desc: "Learn from experienced mentors, track your progress, and receive personalized guidance.",
    details: "Receive one-on-one mentorship, regular progress assessments, and customized learning recommendations."
  },
  {
    id: 4,
    icon: <Trophy className="w-7 h-7 text-purple-600 mb-2" />,
    label: "Showcase & Grow",
    desc: "Earn certificates, share your projects, and get ready for future academic or career opportunities.",
    details: "Build your portfolio, earn industry-recognized certifications, and prepare for your next educational or career milestone."
  }
];

const HowItWorksTimeline = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="w-full bg-gradient-to-br from-white via-yellow-50 to-blue-50 py-14 px-4">
      <h2 className="text-2xl md:text-3xl font-bold font-playfair text-center text-stemblue mb-7">How It Works</h2>
      
      {/* Desktop Flowchart */}
      <div className="max-w-6xl mx-auto hidden md:block">
        <div className="flex justify-between items-start gap-4">
          {steps.map((step, i) => (
            <div key={step.id} className="flex flex-col items-center flex-1">
              {/* Step Card */}
              <div 
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeStep === step.id 
                    ? 'transform scale-105 shadow-lg' 
                    : 'hover:scale-102 hover:shadow-md'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className={`flex flex-col items-center text-center p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeStep === step.id 
                    ? 'bg-white border-[#FFCE27] shadow-lg' 
                    : 'bg-[#fffbf2] border-gray-200 hover:border-[#FFCE27]/50'
                }`}>
                  <div className={`flex flex-col items-center justify-center rounded-full p-4 mb-3 transition-all duration-300 ${
                    activeStep === step.id ? 'bg-[#FFCE27]/20' : 'bg-white/80'
                  }`}>
                    {step.icon}
                  </div>
                  <span className="font-bold text-stemblue text-lg mb-2">{step.label}</span>
                  <span className="text-sm text-gray-600 leading-relaxed">{step.desc}</span>
                </div>
                
                {/* Step Number Badge */}
                <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-300 ${
                  activeStep === step.id ? 'bg-[#FFCE27] scale-110' : 'bg-gray-400'
                }`}>
                  {step.id}
                </div>
              </div>
              
              {/* Arrow Between Steps */}
              {i < steps.length - 1 && (
                <div className="flex items-center mt-4">
                  <ChevronRight className={`w-6 h-6 transition-colors duration-300 ${
                    activeStep === step.id ? 'text-[#FFCE27]' : 'text-gray-400'
                  }`} />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Active Step Details */}
        <div className="mt-8 bg-white/90 rounded-2xl p-6 border border-[#FFCE27]/30 shadow-lg animate-fade-in">
          <h3 className="font-bold text-xl text-stemblue mb-3">
            Step {activeStep}: {steps[activeStep - 1].label}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {steps[activeStep - 1].details}
          </p>
        </div>
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="max-w-lg mx-auto md:hidden">
        {steps.map((step, i) => (
          <div key={step.id} className="relative">
            <div 
              className={`cursor-pointer transition-all duration-300 ${
                activeStep === step.id ? 'transform scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className={`flex items-start gap-4 p-6 rounded-2xl border-2 transition-all duration-300 ${
                activeStep === step.id 
                  ? 'bg-white border-[#FFCE27] shadow-lg' 
                  : 'bg-[#fffbf2] border-gray-200'
              }`}>
                {/* Step Number */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 transition-all duration-300 ${
                  activeStep === step.id ? 'bg-[#FFCE27] scale-110' : 'bg-gray-400'
                }`}>
                  {step.id}
                </div>
                
                <div className="flex-1">
                  <div className="mb-2">{step.icon}</div>
                  <h3 className="font-bold text-stemblue text-lg mb-2">{step.label}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.desc}</p>
                  
                  {/* Expandable Details */}
                  {activeStep === step.id && (
                    <div className="mt-4 pt-4 border-t border-[#FFCE27]/30 animate-fade-in">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Vertical Arrow */}
            {i < steps.length - 1 && (
              <div className="flex justify-center my-2">
                <ArrowDown className={`w-6 h-6 transition-colors duration-300 ${
                  activeStep === step.id ? 'text-[#FFCE27]' : 'text-gray-400'
                }`} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksTimeline;
