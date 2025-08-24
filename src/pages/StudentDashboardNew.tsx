import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useUserRole } from '@/hooks/useUserRole';
import { useSession } from '@/hooks/useSession';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Trophy, Calendar, User } from 'lucide-react';

export default function StudentDashboardNew() {
  const navigate = useNavigate();
  const { user, loading: sessionLoading } = useSession();
  const { role, loading: roleLoading } = useUserRole();

  useEffect(() => {
    if (!sessionLoading && !roleLoading) {
      if (!user) {
        navigate('/auth');
      } else if (role && role !== 'student') {
        // Redirect to appropriate dashboard based on role
        if (role === 'admin') navigate('/admin');
        else if (role === 'teacher') navigate('/teacher-dashboard');
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

  if (!user || role !== 'student') {
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
            <h1 className="text-2xl font-bold text-primary">Student Dashboard</h1>
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
          {/* My Courses Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                My Courses
              </CardTitle>
              <CardDescription>
                Access your enrolled STEM courses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Continue your learning journey.</p>
              <Button className="w-full mt-4" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          {/* Achievements Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Achievements
              </CardTitle>
              <CardDescription>
                Track your progress and badges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">View your accomplishments and certificates.</p>
              <Button className="w-full mt-4" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          {/* Schedule Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Schedule
              </CardTitle>
              <CardDescription>
                View upcoming classes and events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Stay on top of your learning schedule.</p>
              <Button className="w-full mt-4" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          {/* Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile
              </CardTitle>
              <CardDescription>
                Manage your student profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Update your information and preferences.</p>
              <Button className="w-full mt-4" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Progress Overview */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="p-6 rounded-lg bg-card border">
            <div className="text-2xl font-bold text-primary">0</div>
            <div className="text-muted-foreground">Courses Enrolled</div>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <div className="text-2xl font-bold text-primary">0%</div>
            <div className="text-muted-foreground">Overall Progress</div>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <div className="text-2xl font-bold text-primary">0</div>
            <div className="text-muted-foreground">Certificates Earned</div>
          </div>
        </div>
      </main>
    </div>
  );
}