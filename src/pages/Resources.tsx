
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import LandingFooter from "../components/LandingFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen,
  Search,
  ExternalLink,
  Cpu,
  Printer,
  Code,
  Zap,
  Bot,
  Gamepad2,
  Glasses,
  GraduationCap,
  Mail,
  ArrowRight,
  Filter
} from "lucide-react";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const resources = [
    {
      id: 1,
      title: "Arduino Project Hub",
      category: "Arduino",
      icon: <Cpu className="w-6 h-6" />,
      description: "A massive library of beginner-to-advanced Arduino projects with step-by-step guides and real-world applications.",
      link: "https://create.arduino.cc/projecthub",
      difficulty: "Beginner to Advanced",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "3D Printing Basics",
      category: "3D Printing",
      icon: <Printer className="w-6 h-6" />,
      description: "A beginner-friendly guide covering 3D printing technologies, materials, design, and use cases.",
      link: "https://3dprintingindustry.com/3d-printing-basics-free-beginners-guide/",
      difficulty: "Beginner",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "MIT OpenCourseWare – Intro to Python",
      category: "Python Programming",
      icon: <Code className="w-6 h-6" />,
      description: "A free, university-level course teaching Python from scratch using practical examples.",
      link: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/",
      difficulty: "Beginner",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "Tinkercad Learning Center",
      category: "Tinkercad",
      icon: <Gamepad2 className="w-6 h-6" />,
      description: "Interactive tutorials for beginners in 3D modeling, coding, and virtual electronics using Tinkercad.",
      link: "https://www.tinkercad.com/learn",
      difficulty: "Beginner",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      title: "Khan Academy – Electrical Engineering",
      category: "Electronics",
      icon: <Zap className="w-6 h-6" />,
      description: "Free, self-paced lessons and videos that break down the essentials of electricity and circuits.",
      link: "https://www.khanacademy.org/science/electrical-engineering",
      difficulty: "Beginner to Intermediate",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 6,
      title: "edX – Physical Computing with Raspberry Pi",
      category: "Robotics",
      icon: <Bot className="w-6 h-6" />,
      description: "Build interactive robotics projects using Raspberry Pi and Python through this beginner-friendly course.",
      link: "https://www.edx.org/course/physical-computing-raspberry-pi-iot",
      difficulty: "Intermediate",
      color: "from-red-500 to-red-600"
    },
    {
      id: 7,
      title: "Micro:bit – Get Started Guide",
      category: "Micro:bit",
      icon: <Cpu className="w-6 h-6" />,
      description: "Step-by-step tutorials for students and teachers on using the BBC micro:bit for hands-on digital learning.",
      link: "https://microbit.org/get-started/",
      difficulty: "Beginner",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 8,
      title: "CoSpaces Edu Tutorials",
      category: "AR & VR",
      icon: <Glasses className="w-6 h-6" />,
      description: "Learn to create your own VR/AR content and code simple simulations—all within an intuitive educational platform.",
      link: "https://cospaces.io/edu/",
      difficulty: "Beginner to Intermediate",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: 9,
      title: "Khan Academy – STEM Subjects",
      category: "General STEM",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Free, world-class lessons in math, science, physics, chemistry, biology, and more—perfect for all ages and levels.",
      link: "https://www.khanacademy.org/",
      difficulty: "All Levels",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const categories = ["all", "Arduino", "3D Printing", "Python Programming", "Tinkercad", "Electronics", "Robotics", "Micro:bit", "AR & VR", "General STEM"];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes("Beginner")) return "bg-green-100 text-green-800";
    if (difficulty.includes("Intermediate")) return "bg-yellow-100 text-yellow-800";
    if (difficulty.includes("Advanced")) return "bg-red-100 text-red-800";
    return "bg-blue-100 text-blue-800";
  };

  return (
    <main className="w-full flex flex-col items-center bg-gradient-to-br from-[#f3f6fb] via-white to-[#ddebf7] min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-6 py-16 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-12 h-12 text-[#263868] mr-4" />
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-[#263868]">
              STEM Learning Resources
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-[#ffce27] font-semibold mb-2">
            Curated tutorials and guides for every STEM enthusiast
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore handpicked resources from leading educational platforms. These free tutorials will help students, teachers, and curious minds dive deep into the world of STEM.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="w-full max-w-6xl px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg border-2 border-[#ffce27]/30 focus:border-[#263868]"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-[#263868]" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border-2 border-[#ffce27]/30 rounded-md focus:border-[#263868] bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="w-full max-w-7xl px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <Card 
              key={resource.id}
              className="bg-white/90 border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${resource.color} text-white mr-3`}>
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-[#263868] leading-tight">
                      {resource.title}
                    </CardTitle>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {resource.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                  {resource.description}
                </p>
                <div className="space-y-3">
                  <Badge className={`w-fit text-xs ${getDifficultyColor(resource.difficulty)}`}>
                    {resource.difficulty}
                  </Badge>
                  <Button 
                    className="w-full bg-[#263868] text-white hover:bg-[#3851a6] flex items-center justify-center gap-2"
                    onClick={() => window.open(resource.link, '_blank')}
                  >
                    Explore Resource
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No resources found matching your criteria.</p>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter options.</p>
          </div>
        )}
      </section>

      {/* Coming Soon Section */}
      <section className="w-full max-w-5xl px-6 py-16 mb-12">
        <Card className="bg-gradient-to-r from-[#263868] to-[#3851a6] text-white shadow-xl animate-scale-in">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-[#ffce27] rounded-full flex items-center justify-center mx-auto mb-6">
              <ArrowRight className="w-8 h-8 text-[#263868]" />
            </div>
            <h2 className="text-4xl font-playfair font-bold mb-6">
              More Coming Soon
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              We'll continue adding custom lesson plans, downloadable kits, and activity guides soon. Stay tuned for more exciting STEM resources!
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-4xl px-6 py-12 mb-12">
        <Card className="bg-gradient-to-r from-[#ffce27] to-[#f7b800] shadow-xl animate-fade-in">
          <CardContent className="p-8 text-center">
            <Mail className="w-12 h-12 text-[#263868] mx-auto mb-4" />
            <h3 className="text-3xl font-playfair font-bold text-[#263868] mb-4">
              Want to suggest a resource?
            </h3>
            <p className="text-lg text-[#263868] mb-6">
              Help us expand our collection! Share your favorite STEM learning resources with our community.
            </p>
            <Button 
              onClick={() => window.location.href = "mailto:quratulain@mystemverse.com"}
              className="bg-[#263868] text-white hover:bg-[#3851a6] font-bold px-8 py-3"
              size="lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </CardContent>
        </Card>
      </section>

      <LandingFooter />
    </main>
  );
};

export default Resources;
