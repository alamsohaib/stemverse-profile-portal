
import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  // Use a light gold/white blend as background so logo pops, and blue/gold for accents
  const navBg = "bg-white/85"; // Lighter background for logo visibility
  const navShadow = "shadow-lg border-b border-[#ffce27]/30";
  const linkBase = "font-medium text-base px-2 py-1 rounded transition";
  // On white, blue looks more crisp; gold for highlight
  const activeLink = "text-[#263868] underline underline-offset-4 bg-[#ffecd0]/80"; // deep blue text, pale gold bg
  const inactiveLink = "text-[#263868] hover:text-[#FFCE27] hover:bg-[#e4eafd]"; // blue with gold hover

  return (
    <nav className={`w-full flex items-center justify-between py-3 px-6 ${navBg} ${navShadow} sticky top-0 z-30`}>
      {/* Logo + name, left */}
      <NavLink to="/" className="flex items-center font-bold text-xl text-[#263868] hover:scale-105 transition gap-2">
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
      {/* Login buttons, always right */}
      <div className="flex gap-2">
        <Button
          onClick={() => navigate("/auth")}
          className="bg-[#263868] text-[#ffce27] hover:bg-[#3851a6] hover:text-[#fff] rounded-md shadow font-bold border-2 border-[#263868]/15"
          size="sm"
        >
          Login
        </Button>
        <Button
          onClick={() => navigate("/admin-login")}
          variant="outline"
          className="border-[#263868] text-[#263868] hover:bg-[#263868] hover:text-[#ffce27] rounded-md shadow font-bold"
          size="sm"
        >
          Admin
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
