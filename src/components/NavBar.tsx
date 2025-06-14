
import React from "react";
import { Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white/80 shadow-md border-b border-blue-100 sticky top-0 z-30">
      {/* Logo - top left */}
      <NavLink to="/" className="flex items-center font-bold text-xl text-stemblue hover:scale-105 transition">
        <Sparkle className="mr-2 w-6 h-6 text-yellow-500" />
        STEMverse
      </NavLink>
      {/* Center navigation links */}
      <div className="flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium text-base ${
              isActive ? "text-stemblue underline" : "text-gray-800 hover:text-stemblue"
            }`
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-medium text-base ${
              isActive ? "text-stemblue underline" : "text-gray-800 hover:text-stemblue"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/programs"
          className={({ isActive }) =>
            `font-medium text-base ${
              isActive ? "text-stemblue underline" : "text-gray-800 hover:text-stemblue"
            }`
          }
        >
          Programs
        </NavLink>
      </div>
      {/* Student Login button, always right */}
      <div>
        <Button
          onClick={() => navigate("/auth")}
          className="bg-stemblue text-white hover:bg-accent rounded-md shadow"
          size="sm"
        >
          Student Login
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;

