
import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-card/90 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
      {/* Logo + name with space theme */}
      <NavLink to="/" className="flex items-center font-bold text-xl text-foreground hover:scale-105 transition-all duration-300 gap-2 group">
        <div className="relative">
          <img
            src="/lovable-uploads/829409f4-ab09-41be-90c0-d40a0f6e4712.png"
            alt="STEMverse Logo"
            className="w-12 h-12 object-contain animate-float group-hover:animate-glow transition-all duration-300"
          />
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-glow"></div>
        </div>
        <span className="font-playfair tracking-wide bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          STEMverse
        </span>
      </NavLink>

      {/* Center navigation links with space theme */}
      <div className="flex items-center gap-6 md:gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium text-base px-4 py-2 rounded-xl transition-all duration-300 ${
              isActive 
                ? "text-accent bg-primary/20 shadow-lg backdrop-blur-sm border border-primary/30" 
                : "text-foreground hover:text-accent hover:bg-primary/10 hover:scale-105"
            }`
          }
          end
        >
          🏠 Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-medium text-base px-4 py-2 rounded-xl transition-all duration-300 ${
              isActive 
                ? "text-accent bg-primary/20 shadow-lg backdrop-blur-sm border border-primary/30" 
                : "text-foreground hover:text-accent hover:bg-primary/10 hover:scale-105"
            }`
          }
        >
          🚀 About
        </NavLink>
        <NavLink
          to="/programs"
          className={({ isActive }) =>
            `font-medium text-base px-4 py-2 rounded-xl transition-all duration-300 ${
              isActive 
                ? "text-accent bg-primary/20 shadow-lg backdrop-blur-sm border border-primary/30" 
                : "text-foreground hover:text-accent hover:bg-primary/10 hover:scale-105"
            }`
          }
        >
          🌟 Programs
        </NavLink>
        <NavLink
          to="/resources"
          className={({ isActive }) =>
            `font-medium text-base px-4 py-2 rounded-xl transition-all duration-300 ${
              isActive 
                ? "text-accent bg-primary/20 shadow-lg backdrop-blur-sm border border-primary/30" 
                : "text-foreground hover:text-accent hover:bg-primary/10 hover:scale-105"
            }`
          }
        >
          📚 Resources
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `font-medium text-base px-4 py-2 rounded-xl transition-all duration-300 ${
              isActive 
                ? "text-accent bg-primary/20 shadow-lg backdrop-blur-sm border border-primary/30" 
                : "text-foreground hover:text-accent hover:bg-primary/10 hover:scale-105"
            }`
          }
        >
          🛸 Products
        </NavLink>
      </div>

      {/* Login buttons with space theme */}
      <div className="flex gap-3">
        <Button
          onClick={() => navigate("/auth")}
          className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 rounded-xl shadow-lg font-bold border border-primary/30 transition-all duration-300 hover:scale-105 animate-glow"
          size="sm"
        >
          🌌 Login
        </Button>
        <Button
          onClick={() => navigate("/admin-login")}
          variant="outline"
          className="border-primary/50 text-foreground hover:bg-primary/10 hover:text-accent rounded-xl shadow-lg font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105"
          size="sm"
        >
          ⭐ Admin
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
