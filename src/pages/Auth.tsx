
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useSession } from "@/hooks/useSession";
import { useUserRole } from "@/hooks/useUserRole";
import { toast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

const ADMIN_EMAIL = "kuratulain007@gmail.com";

const AuthPage = () => {
  const [mode, setMode] = useState<"login" | "signup" | "forgot-password">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<"student" | "teacher">("student");
  const { session, user } = useSession();
  const { role, loading: roleLoading } = useUserRole();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  // New fields for signup
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [grade, setGrade] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // If already logged in, redirect based on user role
  if (user && !roleLoading) {
    if (user.email === ADMIN_EMAIL) {
      navigate("/admin");
    } else if (role === 'teacher') {
      navigate("/teacher-dashboard");
    } else if (role === 'student') {
      navigate("/student-dashboard");
    } else {
      navigate("/dashboard");
    }
    return null;
  }

  const handleForgotPassword = async () => {
    if (!email) {
      toast({ title: "Email required", description: "Please enter your email address" });
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth?mode=reset-password`,
    });

    setSubmitting(false);
    if (error) {
      toast({ title: "Error", description: error.message });
    } else {
      toast({ 
        title: "Password reset email sent", 
        description: "Check your email for the password reset link" 
      });
      setMode("login");
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (mode === "forgot-password") {
      await handleForgotPassword();
      return;
    }

    if (mode === "signup") {
      if (!name) {
        toast({ title: "Name is required" });
        setSubmitting(false);
        return;
      }
      
      console.log("Starting signup process for:", email, "Role:", selectedRole);
      
      // 1. Sign up the user in Supabase
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/` },
      });
      
      console.log("Signup response:", { data, error });
      
      if (error) {
        console.error("Signup error:", error);
        setSubmitting(false);
        toast({ title: "Signup failed", description: error.message });
        return;
      }
      // 2. If sign up successful, insert profile record with 'pending' status
      const userId = data.user?.id;
      console.log("User ID after signup:", userId);
      
      if (userId) {
        // Check if this is a demo account (auto-approved by trigger)
        const isDemoAccount = email === 'teacher@stemverse.demo' || email === 'student@stemverse.demo';
        
        console.log("Is demo account:", isDemoAccount);
        
        if (!isDemoAccount) {
          // Only create profile for non-demo accounts (demo accounts handled by trigger)
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
          
          console.log("Profile creation result:", { profileError });
          
          if (profileError) {
            toast({
              title: "Profile creation failed",
              description: profileError.message,
            });
          }
          
          // Also assign the selected role to the user (if not demo account)
          const { error: roleError } = await supabase.from("user_roles").insert([
            {
              user_id: userId,
              role: selectedRole,
            },
          ]);
          
          console.log("Role assignment result:", { roleError });
          
          if (roleError) {
            toast({
              title: "Role assignment failed", 
              description: roleError.message,
            });
          }
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
    console.log("Starting login process for:", email);
    
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    
    console.log("Login response:", { data, error });
    
    setSubmitting(false);
    if (error) {
      console.error("Login error:", error);
      toast({ title: "Login failed", description: error.message });
    } else {
      // Check if user is admin
      if (data.user.email === ADMIN_EMAIL) {
        toast({ title: "Admin logged in!", description: "Welcome to the admin dashboard." });
        navigate("/admin");
        return;
      }

      // After login, check user's profile status for non-admin users
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

      // Check user role and redirect accordingly
      const { data: roleData, error: roleError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .single();

      if (roleError || !roleData) {
        toast({ title: "Role fetch failed", description: "Unable to determine user role." });
        await supabase.auth.signOut();
        return;
      }

      toast({ title: "Logged in!", description: "Welcome back." });
      
      // Redirect based on user role
      if (roleData.role === 'teacher') {
        navigate("/teacher-dashboard");
      } else if (roleData.role === 'student') {
        navigate("/student-dashboard");
      } else {
        navigate("/dashboard");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="bg-white/90 rounded-2xl shadow-xl border p-10 w-full max-w-sm animate-fade-in">
        <h2 className="font-playfair text-3xl font-bold text-center text-accent mb-4">
          {mode === "login" ? "Login" : 
           mode === "signup" ? "Create Your STEMverse Account" : 
           "Reset Your Password"}
        </h2>
        
        {mode === "login" && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Admin Access:</strong> Use kuratulain007@gmail.com to access the admin dashboard
            </p>
          </div>
        )}

        {mode === "forgot-password" && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-700">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>
        )}
        
        {/* Role Selection - only show for signup */}
        {mode === "signup" && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">I am a:</label>
            <Select value={selectedRole} onValueChange={(value: "student" | "teacher") => setSelectedRole(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
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
          {mode !== "forgot-password" && (
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
          )}
          <Button
            type="submit"
            size="lg"
            className="mt-2 bg-stemblue rounded-lg hover:bg-accent text-white transition w-full"
            disabled={submitting}
          >
            {submitting
              ? mode === "signup"
                ? "Signing up..."
                : mode === "forgot-password"
                ? "Sending reset email..."
                : "Logging in..."
              : mode === "signup"
              ? "Sign Up"
              : mode === "forgot-password"
              ? "Send Reset Email"
              : "Log In"}
          </Button>
        </form>
        <div className="text-center text-sm mt-6 text-muted-foreground space-y-2">
          {mode === "login" ? (
            <>
              <div>
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-accent font-medium underline"
                  onClick={() => setMode("signup")}
                >
                  Sign up
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="text-accent font-medium underline"
                  onClick={() => setMode("forgot-password")}
                >
                  Forgot your password?
                </button>
              </div>
            </>
          ) : mode === "signup" ? (
            <>
              <div>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-accent font-medium underline"
                  onClick={() => setMode("login")}
                >
                  Log in
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                Remember your password?{" "}
                <button
                  type="button"
                  className="text-accent font-medium underline"
                  onClick={() => setMode("login")}
                >
                  Back to login
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
