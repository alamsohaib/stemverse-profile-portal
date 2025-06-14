
import { useSession } from "@/hooks/useSession";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { LogOut } from "lucide-react";

const tools = [
  {
    name: "TinkerCAD (Electronics)",
    url: "https://www.tinkercad.com/",
    color: "bg-blue-100 hover:bg-blue-200",
    icon: "/lovable-uploads/d09ee496-38e9-4fbb-8a39-ed4fbeafc3a3.png",
  },
  {
    name: "CoSpaces Edu (AR/VR)",
    url: "https://cospaces.io/edu/",
    color: "bg-purple-100 hover:bg-purple-200",
    icon: "/lovable-uploads/414562a0-bc63-4d90-ad88-a6f39add6aac.png",
  }
  // Feel free to add more tools here!
];

const StudentDashboard = () => {
  const { user, loading } = useSession();
  const navigate = useNavigate();

  if (loading) return <div className="min-h-screen flex items-center justify-center text-stemblue">Loading...</div>;
  if (!user) {
    navigate("/auth");
    return null;
  }

  const logout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Signed out" });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-yellow-50 via-white to-blue-50 animate-fade-in">
      <div className="w-full max-w-2xl mx-auto mt-8 mb-2 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-stemblue mb-4">Welcome to STEMverse Tools</h2>
        <p className="text-lg text-gray-800 mb-8 text-center">
          {user.email} <span className="ml-2 text-green-600 font-semibold">[Student]</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 ${tool.color} px-5 py-7 rounded-lg shadow-md transition hover:scale-105 active:scale-95 border-2 border-blue-100 hover:border-accent`}
            >
              <img src={tool.icon} className="w-16 h-16 rounded-md shadow" alt={tool.name} />
              <span className="text-xl font-bold text-stemblue">{tool.name}</span>
              <span className="text-gray-500 text-sm">Open Tool</span>
            </a>
          ))}
        </div>
        <Button
          onClick={logout}
          size="lg"
          className="mt-10 bg-stemblue text-white hover:bg-accent rounded-xl flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" /> Log out
        </Button>
      </div>
    </div>
  );
};

export default StudentDashboard;
