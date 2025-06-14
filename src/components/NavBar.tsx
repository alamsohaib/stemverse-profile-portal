import React from "react";
import { Sparkle } from "lucide-react";
import { useSession } from "@/hooks/useSession";
import { Button } from "@/components/ui/button";
import { useNavigate, NavLink } from "react-router-dom";

const NavBar = () => {
  const { user } = useSession();
  const navigate = useNavigate();

  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white/80 shadow-md border-b border-blue-100 sticky top-0 z-30">
      {/* Logo */}
      <NavLink to="/" className="flex items-center font-bold text-xl text-stemblue hover:scale-105 transition">
        <Sparkle className="mr-2 w-6 h-6 text-yellow-500" />
        STEMverse
      </NavLink>
      {/* Navigation Links */}
      <div className="flex items-center gap-6">
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
          to="/dashboard"
          className={({ isActive }) =>
            `font-medium text-base ${
              isActive ? "text-stemblue underline" : "text-gray-800 hover:text-stemblue"
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `font-medium text-base ${
              isActive ? "text-stemblue underline" : "text-gray-800 hover:text-stemblue"
            }`
          }
        >
          Admin
        </NavLink>
        <NavLink
          to="/auth"
          className={({ isActive }) =>
            `font-medium text-base ${
              isActive ? "text-stemblue underline" : "text-gray-800 hover:text-stemblue"
            }`
          }
        >
          Login
        </NavLink>
        {/* Session-based quick action (optional, keep as per your old logic) */}
        {!user ? (
          <Button
            onClick={() => navigate("/auth")}
            className="bg-stemblue text-white hover:bg-accent rounded-md shadow"
            size="sm"
          >
            Student Login
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/dashboard")}
            className="bg-accent text-white hover:bg-stemblue rounded-md shadow"
            size="sm"
          >
            Dashboard
          </Button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
