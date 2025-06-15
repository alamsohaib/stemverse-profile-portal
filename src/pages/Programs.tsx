
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import LandingFooter from "../components/LandingFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen,
  Sun, 
  Monitor,
  Clock,
  Briefcase,
  GraduationCap,
  Zap,
  School,
  Mail,
  Users,
  Calendar,
  Globe,
  Code,
  Cpu,
  Gamepad2,
  Bot,
  Building
} from "lucide-react";

const Programs = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("camps");

  const programCategories = {
    camps: {
      title: "STEM Camps",
      icon: <Sun className="w-6 h-6" />,
      programs: [
        {
          title: "Summer & Winter STEM Camps",
          subtitle: "In-Person & Virtual • Ages 7–18",
          description: "Make the most of school breaks with immersive STEM adventures—robotics, AI, 3D printing, game design, and more. Students learn by doing, form new friendships, and explore hands-on projects in a supportive environment.",
          features: ["Robotics & Engineering", "AI & Machine Learning", "3D Printing & Design", "Game Development"],
          icon: <Sun className="w-8 h-8 text-yellow-500" />,
          color: "from-yellow-50 to-orange-50"
        },
        {
          title: "Online AI & Coding Camps",
          subtitle: "Live Virtual Classes • Ages 10–18",
          description: "Build a strong foundation in Python, machine learning, and creative coding through interactive sessions led by expert mentors. Projects include chatbots, data visualization, and introductory AI.",
          features: ["Python Programming", "Machine Learning Basics", "Chatbot Development", "Data Visualization"],
          icon: <Code className="w-8 h-8 text-blue-500" />,
          color: "from-blue-50 to-cyan-50"
        }
      ]
    },
    flexible: {
      title: "Flexible Learning",
      icon: <Clock className="w-6 h-6" />,
      programs: [
        {
          title: "Self-Paced STEM Modules",
          subtitle: "On-Demand Interactive Courses • Ages 7–14",
          description: "Explore STEM at your own pace with guided lessons, simulations, quizzes, and project challenges. Ideal for learners seeking flexible, structured content with measurable progress.",
          features: ["Interactive Simulations", "Progress Tracking", "Hands-on Projects", "Self-Assessment Tools"],
          icon: <Monitor className="w-8 h-8 text-green-500" />,
          color: "from-green-50 to-emerald-50"
        }
      ]
    },
    career: {
      title: "Career Development",
      icon: <Briefcase className="w-6 h-6" />,
      programs: [
        {
          title: "STEM Internships",
          subtitle: "In-Person & Virtual • College & University Students",
          description: "From Campus to Career: real-world technology experience through hands-on projects, mentorship, and career-readiness workshops. Gain industry insight and practical skills to launch your tech journey.",
          features: ["Real-world Projects", "Industry Mentorship", "Career Workshops", "Professional Network"],
          icon: <Briefcase className="w-8 h-8 text-purple-500" />,
          color: "from-purple-50 to-violet-50"
        }
      ]
    },
    educators: {
      title: "For Educators",
      icon: <GraduationCap className="w-6 h-6" />,
      programs: [
        {
          title: "Teacher Training",
          subtitle: "Workshops & Certification • Educators",
          description: "Equip yourself with the knowledge and confidence to integrate STEM into the classroom. Learn to use modern education tools, design hands-on lessons, and inspire students through project-based learning.",
          features: ["Modern Education Tools", "Hands-on Lesson Design", "Project-based Learning", "Certification Programs"],
          icon: <GraduationCap className="w-8 h-8 text-indigo-500" />,
          color: "from-indigo-50 to-blue-50"
        }
      ]
    },
    workshops: {
      title: "Bootcamps & Workshops",
      icon: <Zap className="w-6 h-6" />,
      programs: [
        {
          title: "Bootcamps & Workshops",
          subtitle: "Short-Term Thematic Programs • All Ages",
          description: "Dive into focused sessions on trending technologies: Arduino, IoT, robotics, VR/AR, cybersecurity, and 3D modeling. Perfect for schools, events, and curious learners looking for a taste of STEAM.",
          features: ["Arduino & IoT", "VR/AR Development", "Cybersecurity Basics", "3D Modeling"],
          icon: <Zap className="w-8 h-8 text-orange-500" />,
          color: "from-orange-50 to-red-50"
        }
      ]
    }
  };

  const technologies = [
    { name: "Robotics", icon: <Bot className="w-6 h-6" /> },
    { name: "AI & ML", icon: <Cpu className="w-6 h-6" /> },
    { name: "Coding", icon: <Code className="w-6 h-6" /> },
    { name: "Game Design", icon: <Gamepad2 className="w-6 h-6" /> },
    { name: "3D Printing", icon: <Building className="w-6 h-6" /> },
    { name: "IoT", icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <main className="w-full flex flex-col items-center bg-gradient-to-br from-[#f3f6fb] via-white to-[#ddebf7] min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-6 py-16 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-12 h-12 text-[#263868] mr-4" />
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-[#263868]">
              Our Programs
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-[#ffce27] font-semibold mb-2">
            Hands-on STEM experiences for every age and stage
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At STEMverse, our programs are designed to spark curiosity, build real-world skills, and empower participants—from early learners to teachers and university students.
          </p>
        </div>
      </section>

      {/* Technologies Preview */}
      <section className="w-full max-w-6xl px-6 py-8 mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name}
              className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-[#263868]">{tech.icon}</div>
              <span className="text-[#263868] font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Program Categories */}
      <section className="w-full max-w-7xl px-6 py-8">
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-8 bg-white/80">
            {Object.entries(programCategories).map(([key, category]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                className="flex items-center gap-2 data-[state=active]:bg-[#263868] data-[state=active]:text-white"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(programCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.programs.map((program, index) => (
                  <Card 
                    key={index}
                    className={`bg-gradient-to-br ${program.color} border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in`}
                  >
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        {program.icon}
                        <CardTitle className="text-xl font-bold text-[#263868] ml-3">
                          {program.title}
                        </CardTitle>
                      </div>
                      <Badge variant="secondary" className="w-fit text-sm">
                        {program.subtitle}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-[#263868]">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {program.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-[#ffce27] rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button 
                        className="w-full mt-4 bg-[#263868] text-white hover:bg-[#3851a6]"
                        onClick={() => navigate("/auth")}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Partnership Section */}
      <section className="w-full max-w-5xl px-6 py-16 mb-12">
        <Card className="bg-gradient-to-r from-[#263868] to-[#3851a6] text-white shadow-xl animate-scale-in">
          <CardContent className="p-8 md:p-12 text-center">
            <School className="w-16 h-16 text-[#ffce27] mx-auto mb-6" />
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Bring STEMverse to your school or community through tailored camps, workshops, or year-long collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-[#ffce27] text-[#263868] hover:bg-[#f7b800] font-bold px-8 py-3 text-lg"
                size="lg"
                onClick={() => window.location.href = "mailto:stemsverse@gmail.com"}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <div className="flex items-center text-[#ffce27]">
                <Mail className="w-5 h-5 mr-2" />
                <span>stemsverse@gmail.com</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-4xl px-6 py-12 mb-12">
        <Card className="bg-gradient-to-r from-[#ffce27] to-[#f7b800] shadow-xl animate-fade-in">
          <CardContent className="p-8 text-center">
            <Users className="w-12 h-12 text-[#263868] mx-auto mb-4" />
            <h3 className="text-3xl font-playfair font-bold text-[#263868] mb-4">
              Ready to Start Your STEM Journey?
            </h3>
            <p className="text-lg text-[#263868] mb-6">
              Join thousands of learners who are already exploring, creating, and innovating with STEMverse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/auth")}
                className="bg-[#263868] text-white hover:bg-[#3851a6] font-bold px-8 py-3"
                size="lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Enroll Now
              </Button>
              <Button 
                onClick={() => navigate("/about")}
                variant="outline"
                className="border-2 border-[#263868] text-[#263868] hover:bg-[#263868] hover:text-white font-bold px-8 py-3"
                size="lg"
              >
                Learn More About Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <LandingFooter />
    </main>
  );
};

export default Programs;
