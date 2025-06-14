
import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white/80 shadow-md border-b border-blue-100 sticky top-0 z-30">
      {/* Logo + name, left */}
      <NavLink to="/" className="flex items-center font-bold text-xl text-stemblue hover:scale-105 transition gap-2">
        <img
          src="/lovable-uploads/829409f4-ab09-41be-90c0-d40a0f6e4712.png"
          alt="STEMverse Logo"
          className="w-10 h-10 object-contain"
          style={{ marginRight: 0 }}
        />
        <span className="font-playfair tracking-wide">STEMverse</span>
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
