
import { useSession } from "@/hooks/useSession";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import ScienceIcon from "@/components/ScienceIcon";

// Domain icons for blocks
const domainIcons: Record<string, string | null> = {
  "Game Development": "/lovable-uploads/7ba6385a-c8dc-41a4-9d8e-a66a276a8735.png", // new icon
  "App Development": "/lovable-uploads/916481b5-e79f-4443-bbe3-028d14554614.png",
  "Programming": "/lovable-uploads/df896daa-5e39-4fad-9f57-064c8e989cb5.png", // new icon
  "3D Modeling & Electronics": "/lovable-uploads/0f6280c4-a4bc-4aa3-ad86-61a54419d717.png",
  "Artificial Intelligence": "/lovable-uploads/08094218-4b61-4ccf-8daf-b73c67a00d54.png",
  "Science Simulations": null, // handled by custom SVG ScienceIcon
  "AR/VR": "/lovable-uploads/ef0f2976-79fd-47b8-ab0a-a598251ada8f.png",
};

const toolBlocks = [
  {
    title: "Game Development",
    tools: [
      {
        name: "Scratch",
        url: "https://scratch.mit.edu/",
        color: "bg-yellow-100 hover:bg-yellow-200",
      },
    ],
  },
  {
    title: "App Development",
    tools: [
      {
        name: "MIT App Inventor",
        url: "https://appinventor.mit.edu/",
        color: "bg-green-100 hover:bg-green-200",
      },
      {
        name: "Thunkable",
        url: "https://thunkable.com/",
        color: "bg-teal-100 hover:bg-teal-200",
      },
    ],
  },
  {
    title: "Programming",
    tools: [
      {
        name: "Tynker",
        url: "https://www.tynker.com/#/join/classcode/",
        color: "bg-blue-100 hover:bg-blue-200",
      },
      {
        name: "Code.org",
        url: "https://www.code.org/",
        color: "bg-indigo-100 hover:bg-indigo-200",
      },
    ],
  },
  {
    title: "3D Modeling & Electronics",
    tools: [
      {
        name: "TinkerCAD Electronics",
        url: "https://www.tinkercad.com/",
        color: "bg-blue-100 hover:bg-blue-200",
      },
      {
        name: "TinkerCAD 3D Modeling",
        url: "https://www.tinkercad.com/joinclass",
        color: "bg-cyan-100 hover:bg-cyan-200",
      },
    ],
  },
  {
    title: "Artificial Intelligence",
    tools: [
      {
        name: "Teachable Machines",
        url: "https://teachablemachine.withgoogle.com/",
        color: "bg-purple-100 hover:bg-purple-200",
      },
      {
        name: "Machine Learning for Kids",
        url: "https://machinelearningforkids.co.uk/",
        color: "bg-pink-100 hover:bg-pink-200",
      },
    ],
  },
  {
    title: "Science Simulations",
    tools: [
      {
        name: "PhET Simulations",
        url: "https://phet.colorado.edu/",
        color: "bg-orange-100 hover:bg-orange-200",
      },
    ],
  },
  {
    title: "AR/VR",
    tools: [
      {
        name: "CoSpaces Edu",
        url: "https://cospaces.io/edu/",
        color: "bg-violet-100 hover:bg-violet-200",
      },
    ],
  },
];

const StudentDashboard = () => {
  const { user, loading } = useSession();
  const navigate = useNavigate();
  const [statusChecked, setStatusChecked] = useState(false);

  useEffect(() => {
    async function checkStatus() {
      if (user) {
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("status")
          .eq("id", user.id)
          .maybeSingle();
        if (error || !profile) {
          toast({ title: "Unable to load profile", description: error?.message || "Profile not found." });
          await supabase.auth.signOut();
          navigate("/auth");
          return;
        }
        if (profile.status !== "approved") {
          toast({
            title: "Account pending approval",
            description: "Your account has not been approved by an admin yet.",
          });
          await supabase.auth.signOut();
          navigate("/auth");
          return;
        }
        setStatusChecked(true);
      }
    }
    checkStatus();
    // eslint-disable-next-line
  }, [user]);

  if (loading || (user && !statusChecked))
    return (
      <div className="min-h-screen flex items-center justify-center text-stemblue">
        Loading...
      </div>
    );
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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-yellow-50 via-white to-blue-50 animate-fade-in pb-12">
      <div className="w-full max-w-4xl mx-auto mt-8 mb-2 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-stemblue mb-4">
          Welcome to STEMverse Tools
        </h2>
        <p className="text-lg text-gray-800 mb-8 text-center">
          {user.email}{" "}
          <span className="ml-2 text-green-600 font-semibold">
            [Student]
          </span>
        </p>
        {/* Category blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-10">
          {toolBlocks.map((block) => (
            <Card key={block.title} className="shadow-lg border-blue-100">
              <CardHeader className="flex flex-row items-center gap-3">
                {/* Domain block icon */}
                {block.title === "Science Simulations" ? (
                  <ScienceIcon className="w-10 h-10 rounded shadow" />
                ) : domainIcons[block.title] ? (
                  <img
                    src={domainIcons[block.title] as string}
                    alt={`${block.title} icon`}
                    className="w-10 h-10 rounded shadow"
                  />
                ) : null}
                <CardTitle className="text-stemblue text-xl flex-1">
                  {block.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-5">
                  {block.tools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center gap-1 justify-center ${tool.color} px-3 py-4 rounded-lg shadow-md transition hover:scale-105 active:scale-95 border-2 border-blue-100 hover:border-accent w-32`}
                    >
                      {/* Show domain icon for first tool in block, plain for others */}
                      {block.title === "Science Simulations" ? (
                        <ScienceIcon className="w-10 h-10 rounded shadow" />
                      ) : domainIcons[block.title] && tool === block.tools[0] ? (
                        <img
                          src={domainIcons[block.title] as string}
                          className="w-10 h-10 rounded shadow"
                          alt={`${block.title} domain`}
                        />
                      ) : (
                        <span className="w-10 h-10" />
                      )}
                      <span className="text-base font-semibold text-stemblue text-center">
                        {tool.name}
                      </span>
                      <span className="text-gray-500 text-xs">Open</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button
          onClick={logout}
          size="lg"
          className="mt-6 bg-stemblue text-white hover:bg-accent rounded-xl flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" /> Log out
        </Button>
      </div>
    </div>
  );
};

export default StudentDashboard;
