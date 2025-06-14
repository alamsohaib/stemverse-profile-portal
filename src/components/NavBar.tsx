
import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "/lovable-uploads/d09ee496-38e9-4fbb-8a39-ed4fbeafc3a3.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/stem", label: "STEM" },
  { to: "/promise", label: "Our Promise" },
  { to: "/contact", label: "Contact" },
];

const NavBar = () => {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 shadow-md flex justify-center backdrop-blur animate-fade-in">
      <nav className="flex items-center justify-between w-full max-w-6xl px-4 py-2 gap-2">
        <div className="flex items-center gap-3">
          <img src={logo} alt="STEMverse Logo" className="w-12 h-12" />
          <span className="text-2xl font-playfair text-stemblue font-bold tracking-tight">STEMverse</span>
        </div>
        <ul className="flex-1 flex justify-center gap-1 sm:gap-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-stemblue hover:text-yellow-500 font-semibold px-2 py-1 rounded focus:outline-none focus:bg-yellow-100 transition-colors text-sm md:text-base ${location.pathname === link.to ? "text-yellow-500" : ""}`}
              >
                {link.label}
              </Link>
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
};

export default NavBar;
