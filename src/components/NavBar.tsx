
import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  // Colors based on logo: dark blue (#263868) and gold (#FFCE27 or similar)
  const navBg = "bg-[#24325f]/95"; // slightly darkened logo blue with some opacity
  const navShadow = "shadow-lg border-b border-[#ffce27]/30"; // gold soft shadow
  const linkBase = "font-medium text-base px-2 py-1 rounded transition";
  const activeLink = "text-[#ffbe3f] underline underline-offset-4 bg-[#263868]/80"; // gold/yellow active text, deep blue bg
  const inactiveLink = "text-white hover:text-[#ffbe3f] hover:bg-[#263868]/60";

  return (
    <nav className={`w-full flex items-center justify-between py-3 px-6 ${navBg} ${navShadow} sticky top-0 z-30`}>
      {/* Logo + name, left */}
      <NavLink to="/" className="flex items-center font-bold text-xl text-white hover:scale-105 transition gap-2">
        <img
          src="/lovable-uploads/829409f4-ab09-41be-90c0-d40a0f6e4712.png"
          alt="STEMverse Logo"
          className="w-10 h-10 object-contain"
          style={{ marginRight: 0 }}
        />
        <span className="font-playfair tracking-wide">STEMverse</span>
      </NavLink>
      {/* Center navigation links */}
      <div className="flex items-center gap-6 md:gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : inactiveLink}`
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : inactiveLink}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/programs"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : inactiveLink}`
          }
        >
          Programs
        </NavLink>
        <NavLink
          to="/resources"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : inactiveLink}`
          }
        >
          Resources
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : inactiveLink}`
          }
        >
          Products
        </NavLink>
      </div>
      {/* Student Login button, always right */}
      <div>
        <Button
          onClick={() => navigate("/auth")}
          className="bg-[#ffce27] text-[#263868] hover:bg-[#edae10] rounded-md shadow font-bold border-2 border-[#263868]/30"
          size="sm"
        >
          Student Login
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
