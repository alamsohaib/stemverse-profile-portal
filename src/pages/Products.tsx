
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import LandingFooter from "../components/LandingFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart,
  Cpu,
  Printer,
  Glasses,
  Wrench,
  Mail,
  Package,
  Settings,
  Zap,
  Building2,
  Calculator,
  Filter,
  Search
} from "lucide-react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const hardwareKits = [
    { name: "Electrical Circuits Kit", description: "Ideal for beginners learning basic electronics with LEDs, wires, batteries.", price: 4000, category: "Electronics" },
    { name: "Arduino Essentials Kit", description: "All key components to start Arduino-based projects.", price: 5000, category: "Arduino" },
    { name: "IoT & Automation Kit", description: "Sensors, relays, and modules for smart systems and automation projects.", price: 8000, category: "IoT" },
    { name: "Micro:bit Kit", description: "BBC Micro:bit with add-ons and sensors for coding and physical computing.", price: 15000, category: "Programming" },
    { name: "Physical Computing Kit", description: "A complete package for learning embedded systems and real-world interaction.", price: 10000, category: "Computing" },
    { name: "Otto Bot Robotics Kit", description: "DIY robot kit that students can assemble, code, and customize.", price: 10000, category: "Robotics" },
    { name: "Robotic Arm Kit", description: "Introductory kit for building and controlling a mechanical arm.", price: 5000, category: "Robotics" },
    { name: "Wearable Electronics Kit", description: "Explore circuits using conductive thread, sensors, and fabrics.", price: 8000, category: "Electronics" },
    { name: "Solar Kit", description: "Learn renewable energy concepts using compact solar-powered projects.", price: 3000, category: "Energy" },
    { name: "Wheeled Robotics Kit", description: "Includes motors, chassis, and controller for mobile robot development.", price: 8000, category: "Robotics" },
    { name: "Scientist Kit", description: "Themed experiments to explore basic physics, chemistry, and engineering.", price: 7000, category: "Science" },
    { name: "Advanced Arduino Kit", description: "Expanded toolkit with advanced sensors and shields for complex projects.", price: 10000, category: "Arduino" }
  ];

  const advancedProducts = [
    { name: "3D Printer", details: "Available as part of Maker Lab packages", price: "Subject to requirement", category: "3D Printing" },
    { name: "3D Pen (Basic Model)", details: "Safe and student-friendly for creative 3D drawing", price: 3000, category: "3D Printing" },
    { name: "VR Exploration Kit", details: "Entry-level virtual reality headset and viewer", price: "Subject to requirement", category: "VR" },
    { name: "Dash & Dot Robot Kit", details: "Premium programmable robot duo for classroom use", price: 70000, category: "Robotics" }
  ];

  const makerLabSetups = [
    {
      tier: "Basic Setup",
      includes: "1x 3D Printer, basic electronics, simple robotics kits, tools & craft materials",
      price: 500000,
      features: ["1x 3D Printer", "Basic Electronics", "Simple Robotics Kits", "Tools & Craft Materials"]
    },
    {
      tier: "Standard Setup", 
      includes: "1x 3D Printer, 1x CNC Machine, advanced robotics kits, expanded equipment & installation",
      price: 1000000,
      features: ["1x 3D Printer", "1x CNC Machine", "Advanced Robotics Kits", "Expanded Equipment", "Installation"]
    },
    {
      tier: "Premium Setup",
      includes: "2x 3D Printers, CNC Machine, VR Headsets, full robotics & electronics suite, laptops, full setup",
      price: 1500000,
      features: ["2x 3D Printers", "CNC Machine", "VR Headsets", "Full Robotics Suite", "Electronics Suite", "Laptops", "Complete Setup"]
    }
  ];

  const categories = ["all", "Electronics", "Arduino", "IoT", "Programming", "Computing", "Robotics", "Energy", "Science", "3D Printing", "VR"];

  const filteredKits = selectedCategory === "all" 
    ? hardwareKits 
    : hardwareKits.filter(kit => kit.category === selectedCategory);

  const formatPrice = (price: number | string) => {
    if (typeof price === "string") return price;
    return `Rs ${price.toLocaleString()}`;
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, JSX.Element> = {
      Electronics: <Zap className="w-5 h-5" />,
      Arduino: <Cpu className="w-5 h-5" />,
      Robotics: <Settings className="w-5 h-5" />,
      "3D Printing": <Printer className="w-5 h-5" />,
      VR: <Glasses className="w-5 h-5" />,
      Programming: <Cpu className="w-5 h-5" />,
      Science: <Calculator className="w-5 h-5" />,
      default: <Package className="w-5 h-5" />
    };
    return iconMap[category] || iconMap.default;
  };

  return (
    <main className="w-full flex flex-col items-center bg-gradient-to-br from-[#f3f6fb] via-white to-[#ddebf7] min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-6 py-16 text-center">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <ShoppingCart className="w-12 h-12 text-[#263868] mr-4" />
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-[#263868]">
              STEMverse Products
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-[#ffce27] font-semibold mb-2">
            Hands-on STEM kits and tools for learners, educators, and classrooms
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our products are designed to make STEM learning engaging, accessible, and real. Whether you're setting up a maker lab or enhancing your classroom, we offer curated kits, equipment, and setup solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="w-full max-w-6xl px-6 py-8">
        <div className="flex items-center gap-2 mb-8">
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
      </section>

      {/* Hardware Kits Section */}
      <section className="w-full max-w-7xl px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Wrench className="w-8 h-8 text-[#263868] mr-3" />
            <h2 className="text-4xl font-playfair font-bold text-[#263868]">Hardware Kits</h2>
          </div>
          <p className="text-lg text-gray-600">
            Equip students with ready-to-use kits that simplify learning electronics, robotics, and programming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredKits.map((kit, index) => (
            <Card 
              key={kit.name}
              className="bg-white/90 border-2 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-[#263868] to-[#3851a6] text-white mr-3">
                    {getCategoryIcon(kit.category)}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-[#263868] leading-tight">
                      {kit.name}
                    </CardTitle>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {kit.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                  {kit.description}
                </p>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-[#263868]">
                    {formatPrice(kit.price)}
                  </div>
                  <Button 
                    className="w-full bg-[#ffce27] text-[#263868] hover:bg-[#f7b800] font-bold"
                    onClick={() => window.location.href = "mailto:stemsverse@gmail.com?subject=Product Inquiry: " + kit.name}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 3D Printing & VR Kits */}
      <section className="w-full max-w-6xl px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="flex gap-2">
              <Printer className="w-8 h-8 text-[#263868]" />
              <Glasses className="w-8 h-8 text-[#263868]" />
            </div>
            <h2 className="text-4xl font-playfair font-bold text-[#263868] ml-3">3D Printing & VR Kits</h2>
          </div>
          <p className="text-lg text-gray-600">
            Bring ideas to life and explore immersive learning.
          </p>
        </div>

        <Card className="bg-white/90 border-2 border-white/50 shadow-lg">
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-[#263868]">Product</TableHead>
                  <TableHead className="font-bold text-[#263868]">Details</TableHead>
                  <TableHead className="font-bold text-[#263868]">Price</TableHead>
                  <TableHead className="font-bold text-[#263868]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {advancedProducts.map((product) => (
                  <TableRow key={product.name} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-[#263868]">
                      <div className="flex items-center">
                        {getCategoryIcon(product.category)}
                        <span className="ml-2">{product.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-700">{product.details}</TableCell>
                    <TableCell className="font-bold text-[#263868]">
                      {formatPrice(product.price)}
                    </TableCell>
                    <TableCell>
                      <Button 
                        size="sm"
                        className="bg-[#263868] text-white hover:bg-[#3851a6]"
                        onClick={() => window.location.href = "mailto:stemsverse@gmail.com?subject=Product Inquiry: " + product.name}
                      >
                        <Mail className="w-4 h-4 mr-1" />
                        Inquire
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Maker's Lab Setups */}
      <section className="w-full max-w-7xl px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Building2 className="w-8 h-8 text-[#263868] mr-3" />
            <h2 className="text-4xl font-playfair font-bold text-[#263868]">Maker's Lab Setups</h2>
          </div>
          <p className="text-lg text-gray-600">
            Complete STEM lab environments for schools and innovation centers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {makerLabSetups.map((setup, index) => (
            <Card 
              key={setup.tier}
              className={`bg-white/90 border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in ${
                index === 1 ? 'border-[#ffce27] ring-2 ring-[#ffce27]/30' : 'border-white/50'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#263868]">
                  {setup.tier}
                  {index === 1 && (
                    <Badge className="ml-2 bg-[#ffce27] text-[#263868]">Popular</Badge>
                  )}
                </CardTitle>
                <div className="text-3xl font-bold text-[#263868]">
                  Rs {setup.price.toLocaleString()}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {setup.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#ffce27] rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Includes software installation, one-day teacher orientation, and support for 20 students at a time.
                </p>
                <Button 
                  className="w-full bg-[#263868] text-white hover:bg-[#3851a6] font-bold"
                  onClick={() => window.location.href = "mailto:stemsverse@gmail.com?subject=Maker Lab Setup Inquiry: " + setup.tier}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Custom Orders Section */}
      <section className="w-full max-w-5xl px-6 py-16 mb-12">
        <Card className="bg-gradient-to-r from-[#263868] to-[#3851a6] text-white shadow-xl animate-scale-in">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-[#ffce27] rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="w-8 h-8 text-[#263868]" />
            </div>
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Custom Orders & Bulk Pricing
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Need kits for a school, competition, or camp? We offer customized bundles and discounts for institutions.
            </p>
            <Button 
              onClick={() => window.location.href = "mailto:stemsverse@gmail.com?subject=Custom Order Inquiry"}
              className="bg-[#ffce27] text-[#263868] hover:bg-[#f7b800] font-bold px-8 py-3"
              size="lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
          </CardContent>
        </Card>
      </section>

      <LandingFooter />
    </main>
  );
};

export default Products;
