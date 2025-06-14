
import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "/lovable-uploads/d09ee496-38e9-4fbb-8a39-ed4fbeafc3a3.png";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "stem", label: "STEM" },
  { id: "promise", label: "Our Promise" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const NavBar = () => (
  <header className="sticky top-0 z-50 w-full bg-white/90 shadow-md flex justify-center backdrop-blur animate-fade-in">
    <nav className="flex items-center justify-between w-full max-w-6xl px-4 py-2 gap-2">
      <div className="flex items-center gap-3">
        <img src={logo} alt="STEMverse Logo" className="w-12 h-12" />
        <span className="text-2xl font-playfair text-stemblue font-bold tracking-tight">STEMverse</span>
      </div>
      <ul className="flex-1 flex justify-center gap-1 sm:gap-4">
        {navLinks.map((link) => (
          <li key={link.id}>
            <button
              className="text-stemblue hover:text-yellow-500 font-semibold px-2 py-1 rounded focus:outline-none focus:bg-yellow-100 transition-colors text-sm md:text-base"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <a href="https://facebook.com/mystemverse" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-5 h-5 text-blue-500 hover:scale-110 transition-transform" />
        </a>
        <a href="https://instagram.com/mystemverse" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5 text-pink-500 hover:scale-110 transition-transform" />
        </a>
        <a href="https://linkedin.com/company/mystemverse" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-800 hover:scale-110 transition-transform" />
        </a>
      </div>
    </nav>
  </header>
);

export default NavBar;
