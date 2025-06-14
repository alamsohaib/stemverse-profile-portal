import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useSession } from "@/hooks/useSession";
import { toast } from "@/components/ui/use-toast";

const gradeOptions = [
  "Pre-K",
  "Kindergarten",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const AuthPage = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { session, user } = useSession();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  // New fields for signup
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [grade, setGrade] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // If already logged in, go to dashboard
  if (user) {
    navigate("/dashboard");
    return null;
  }

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (mode === "signup") {
      if (!name) {
        toast({ title: "Name is required" });
        setSubmitting(false);
        return;
      }
      // 1. Sign up the user in Supabase
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/dashboard` },
      });
      if (error) {
        setSubmitting(false);
        toast({ title: "Signup failed", description: error.message });
        return;
      }
      // 2. If sign up successful, insert profile record with 'pending' status
      const userId = data.user?.id;
      if (userId) {
        const { error: profileError } = await supabase.from("profiles").insert([
          {
            id: userId,
            name,
            age: age ? Number(age) : null,
            guardian_name: guardianName || null,
            school_name: schoolName || null,
            grade: grade || null,
            phone_number: phoneNumber || null,
            status: 'pending',
          },
        ]);
        if (profileError) {
          toast({
            title: "Profile creation failed",
            description: profileError.message,
          });
        }
      }
      setSubmitting(false);
      toast({
        title: "Registration submitted!",
        description:
          "An admin will need to approve your account before you can log in.",
      });
      setMode("login");
      return;
    }

    // Login flow
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);
    if (error) {
      toast({ title: "Login failed", description: error.message });
    } else {
      // After login, check user's profile status
      const userId = data.user.id;
      const { data: profiles, error: fetchError } = await supabase
        .from("profiles")
        .select("status")
        .eq("id", userId)
        .maybeSingle();

      if (fetchError || !profiles) {
        toast({ title: "Profile fetch failed", description: fetchError?.message || "No profile found." });
        await supabase.auth.signOut();
        return;
      }

      if (profiles.status !== "approved") {
        toast({
          title: "Account not approved",
          description: "Your account is pending admin approval.",
        });
        await supabase.auth.signOut();
        return;
      }

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
          {mode === "signup" && (
            <>
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="number"
                min="4"
                max="120"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Guardian Name"
                value={guardianName}
                onChange={(e) => setGuardianName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="School Name"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
              />
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              >
                <option value="">Select Grade</option>
                {gradeOptions.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </>
          )}
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
            {submitting
              ? mode === "signup"
                ? "Signing up..."
                : "Logging in..."
              : mode === "signup"
              ? "Sign Up"
              : "Log In"}
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
