import React from "react";
import { Sparkle } from "lucide-react";
import { useSession } from "@/hooks/useSession";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user } = useSession();
  const navigate = useNavigate();

  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white/80 shadow-md border-b border-blue-100 sticky top-0 z-30">
      <a href="/" className="flex items-center font-bold text-xl text-stemblue hover:scale-105 transition">
        <Sparkle className="mr-2 w-6 h-6 text-yellow-500" />
        STEMverse
      </a>
      <div className="flex items-center gap-4">
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
