import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUserRole } from '@/hooks/useUserRole';
import { useSession } from '@/hooks/useSession';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, GraduationCap, Settings } from 'lucide-react';

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const { user, loading: sessionLoading } = useSession();
  const { role, loading: roleLoading } = useUserRole();

  useEffect(() => {
    if (!sessionLoading && !roleLoading) {
      if (!user) {
        navigate('/auth');
      } else if (role && role !== 'teacher') {
        // Redirect to appropriate dashboard based on role
        if (role === 'admin') navigate('/admin');
        else if (role === 'student') navigate('/student-dashboard');
        else navigate('/');
      }
    }
  }, [user, role, sessionLoading, roleLoading, navigate]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/auth');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  if (sessionLoading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user || role !== 'teacher') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Access denied. Redirecting...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary">Teacher Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user.email}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleGoHome}>
              Home
            </Button>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* My Classes Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                My Classes
              </CardTitle>
              <CardDescription>
                Manage your classes and course content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">View and organize your teaching materials.</p>
              <Button className="w-full mt-4" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          {/* Students Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Students
              </CardTitle>
              <CardDescription>
                View and manage student progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Track student performance and assignments.</p>
              <Button className="w-full mt-4" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          {/* Curriculum Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Curriculum
              </CardTitle>
              <CardDescription>
                Access STEM curriculum resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Browse educational materials and lesson plans.</p>
              <Button className="w-full mt-4" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          {/* Settings Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Settings
              </CardTitle>
              <CardDescription>
                Manage your account preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Update your profile and preferences.</p>
              <Button className="w-full mt-4" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="p-6 rounded-lg bg-card border">
            <div className="text-2xl font-bold text-primary">0</div>
            <div className="text-muted-foreground">Active Classes</div>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <div className="text-2xl font-bold text-primary">0</div>
            <div className="text-muted-foreground">Total Students</div>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <div className="text-2xl font-bold text-primary">0</div>
            <div className="text-muted-foreground">Assignments Graded</div>
          </div>
        </div>
      </main>
    </div>
  );
}