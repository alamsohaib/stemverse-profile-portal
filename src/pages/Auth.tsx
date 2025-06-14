
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useSession } from "@/hooks/useSession";
import { toast } from "@/components/ui/use-toast";

const AuthPage = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { session, user } = useSession();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  // If already logged in, go to dashboard
  if (user) {
    navigate("/dashboard");
    return null;
  }

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (mode === "signup") {
      // Use email redirect as required by supabase
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/dashboard` },
      });
      setSubmitting(false);
      if (error) {
        toast({ title: "Signup failed", description: error.message });
      } else {
        toast({ title: "Signup successful!", description: "Check your email for a confirmation link." });
        setMode("login");
      }
      return;
    }

    // Login flow
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);
    if (error) {
      toast({ title: "Login failed", description: error.message });
    } else {
      toast({ title: "Logged in!", description: "Welcome back." });
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="bg-white/90 rounded-2xl shadow-xl border p-10 w-full max-w-sm animate-fade-in">
        <h2 className="font-playfair text-3xl font-bold text-center text-accent mb-4">
          {mode === "login" ? "Student Login" : "Create Your STEMverse Account"}
        </h2>
        <form onSubmit={handleAuth} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="focus:ring-accent"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
            minLength={6}
            required
            value={password}
            className="focus:ring-accent"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            size="lg"
            className="mt-2 bg-stemblue rounded-lg hover:bg-accent text-white transition w-full"
            disabled={submitting}
          >
            {submitting ? (mode === "signup" ? "Signing up..." : "Logging in...") : (mode === "signup" ? "Sign Up" : "Log In")}
          </Button>
        </form>
        <div className="text-center text-sm mt-6 text-muted-foreground">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                className="text-accent font-medium underline"
                onClick={() => setMode("signup")}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                className="text-accent font-medium underline"
                onClick={() => setMode("login")}
              >
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
