import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useSession } from "@/hooks/useSession";
import { toast } from "@/hooks/use-toast";

const ADMIN_EMAIL = "kuratulain007@gmail.com";

const AdminAuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSession();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  // If already logged in as admin, redirect to admin panel
  if (user?.email === ADMIN_EMAIL) {
    navigate("/admin");
    return null;
  }

  // If logged in as non-admin, redirect to home
  if (user && user.email !== ADMIN_EMAIL) {
    navigate("/");
    return null;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if email is the admin email
    if (email !== ADMIN_EMAIL) {
      toast({ 
        title: "Access denied", 
        description: "This is the admin login. Use the main login for student/teacher accounts." 
      });
      return;
    }

    setSubmitting(true);
    
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    
    setSubmitting(false);
    
    if (error) {
      toast({ title: "Login failed", description: error.message });
    } else if (data.user?.email === ADMIN_EMAIL) {
      toast({ title: "Admin logged in!", description: "Welcome to the admin dashboard." });
      navigate("/admin");
    } else {
      toast({ title: "Access denied", description: "You are not authorized to access the admin panel." });
      await supabase.auth.signOut();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-red-50">
      <div className="bg-white/90 rounded-2xl shadow-xl border p-10 w-full max-w-sm animate-fade-in">
        <div className="text-center mb-6">
          <h2 className="font-playfair text-3xl font-bold text-accent mb-2">
            Admin Login
          </h2>
          <p className="text-sm text-muted-foreground">
            Administrative access only
          </p>
        </div>
        
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">
            <strong>Restricted Access:</strong> This login is for administrators only.
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Admin Email"
            autoComplete="email"
            className="focus:ring-accent"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            minLength={6}
            required
            value={password}
            className="focus:ring-accent"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            size="lg"
            className="mt-2 bg-red-600 rounded-lg hover:bg-red-700 text-white transition w-full"
            disabled={submitting}
          >
            {submitting ? "Logging in..." : "Admin Login"}
          </Button>
        </form>

        <div className="text-center text-sm mt-6 text-muted-foreground space-y-2">
          <div>
            Not an admin?{" "}
            <button
              type="button"
              className="text-accent font-medium underline"
              onClick={() => navigate("/auth")}
            >
              Student/Teacher Login
            </button>
          </div>
          <div>
            <button
              type="button"
              className="text-accent font-medium underline"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuthPage;