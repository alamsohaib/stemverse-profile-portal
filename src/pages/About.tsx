
import React from "react";
import NavBar from "../components/NavBar";
import LandingFooter from "../components/LandingFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  GraduationCap, 
  Lightbulb, 
  Rocket,
  BookOpen,
  Brain,
  Target,
  Zap
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const audienceCards = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#ffce27]" />,
      title: "For Young Learners",
      description: "We spark curiosity early through hands-on exploration of robotics, circuits, coding, and creative problem-solving—laying strong foundations for lifelong learning.",
      color: "from-blue-50 to-blue-100"
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#263868]" />,
      title: "For Teenagers", 
      description: "Through interactive workshops and real-world exposure, we help teens discover their interests, develop critical thinking, and choose meaningful futures in tech and beyond.",
      color: "from-purple-50 to-purple-100"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#ffce27]" />,
      title: "For Educators",
      description: "We equip teachers with modern tools, AI-integrated lesson plans, and hands-on training so they can inspire and lead the next generation with confidence.",
      color: "from-green-50 to-green-100"
    },
    {
      icon: <Users className="w-8 h-8 text-[#263868]" />,
      title: "For Adults",
      description: "Whether returning to the workforce or exploring a new field, our programs help adults navigate a rapidly changing digital landscape with practical, career-ready skills.",
      color: "from-orange-50 to-orange-100"
    }
  ];

  return (
    <main className="w-full flex flex-col items-center bg-gradient-to-br from-[#f3f6fb] via-white to-[#ddebf7] min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-6 py-16 text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-[#263868] mb-4">
            About STEMverse
          </h1>
          <p className="text-2xl md:text-3xl text-[#ffce27] font-semibold mb-2">
            Endless Curiosity, Limitless Possibilities
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where Curiosity Meets Innovation
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="w-full max-w-5xl px-6 py-8 mb-12">
        <Card className="bg-white/90 shadow-xl border-[#ffce27]/20 animate-scale-in">
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-12 h-12 text-[#263868] mr-4" />
              <h2 className="text-3xl font-playfair font-bold text-[#263868]">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              The world is moving fast and we're making sure no one gets left behind. At STEMverse, we bridge the gap between traditional education and the power of technology by designing learning experiences that prepare learners of all ages for the challenges and opportunities of the 21st century.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Vision Statement */}
      <section className="w-full max-w-4xl px-6 py-8 mb-12">
        <Card className="bg-gradient-to-r from-[#263868] to-[#3851a6] text-white shadow-xl animate-fade-in">
          <CardContent className="p-8 md:p-10 text-center">
            <Target className="w-12 h-12 text-[#ffce27] mx-auto mb-6" />
            <h2 className="text-3xl font-playfair font-bold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              We're passionate about making STEM exciting, accessible, and relevant for everyone—whether you're a student discovering coding for the first time, a teen exploring career paths, a teacher looking to modernize your classroom, or an adult catching up with the digital world.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Who We Serve */}
      <section className="w-full max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-[#263868] mb-4">Who We Serve</h2>
          <p className="text-xl text-gray-600">Empowering learners at every stage of their journey</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {audienceCards.map((card, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-to-br ${card.color} border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {card.icon}
                  <h3 className="text-2xl font-bold text-[#263868] ml-4">{card.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-5xl px-6 py-16 mb-12">
        <Card className="bg-gradient-to-r from-[#ffce27] to-[#f7b800] shadow-xl animate-scale-in">
          <CardContent className="p-8 md:p-12 text-center">
            <Zap className="w-16 h-16 text-[#263868] mx-auto mb-6" />
            <h2 className="text-4xl font-playfair font-bold text-[#263868] mb-6">
              It's Time for a Change
            </h2>
            <p className="text-xl text-[#263868] mb-8 leading-relaxed max-w-3xl mx-auto">
              At STEMverse, we are driven by a deep understanding of the education system and a commitment to providing culturally relevant learning solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/programs")}
                className="bg-[#263868] text-white hover:bg-[#3851a6] font-bold px-8 py-3 text-lg"
                size="lg"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Programs
              </Button>
              <Button 
                onClick={() => navigate("/auth")}
                variant="outline"
                className="border-2 border-[#263868] text-[#263868] hover:bg-[#263868] hover:text-white font-bold px-8 py-3 text-lg"
                size="lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Our Community
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <LandingFooter />
    </main>
  );
};

export default About;
