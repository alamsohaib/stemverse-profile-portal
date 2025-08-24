import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useSession } from "@/hooks/useSession";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminFeaturedHighlights from "@/components/AdminFeaturedHighlights";

type Profile = {
  id: string;
  name: string;
  email?: string;
  age: number | null;
  guardian_name: string | null;
  school_name: string | null;
  grade: string | null;
  phone_number: string | null;
  status: string;
  role?: string;
  created_at?: string;
};

const ADMIN_EMAIL = "kuratulain007@gmail.com";

const AdminUserApprovalPage = () => {
  const { user, loading } = useSession();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<keyof Profile>("status");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  // Only allow the specified email to be the admin
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user && user.email === ADMIN_EMAIL) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  useEffect(() => {
    async function fetchProfiles() {
      // First get profiles
      const { data: profilesData, error: profilesError } = await supabase
        .from("profiles")
        .select("*")
        .order('created_at', { ascending: false });
      
      if (profilesError) {
        toast({ title: "Error loading users", description: profilesError.message });
        return;
      }

      // Then get user emails and roles
      const enrichedProfiles = await Promise.all(
        (profilesData || []).map(async (profile) => {
          // Get email from auth.users
          const { data: userData } = await supabase.auth.admin.getUserById(profile.id);
          
          // Get role from user_roles
          const { data: roleData } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', profile.id)
            .single();

          return {
            ...profile,
            email: userData?.user?.email || 'N/A',
            role: roleData?.role || 'No role assigned'
          };
        })
      );

      setProfiles(enrichedProfiles);
    }
    fetchProfiles();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({ title: "Error signing out", description: error.message });
    } else {
      toast({ title: "Signed out successfully" });
      navigate("/");
    }
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleApprove = async (id: string) => {
    const { error } = await supabase.from("profiles").update({ status: "approved" }).eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message });
    } else {
      toast({ title: "User approved" });
      setProfiles(prev => prev.map(p => p.id === id ? { ...p, status: "approved" } : p));
    }
  };

  const handleReject = async (id: string) => {
    const { error } = await supabase.from("profiles").update({ status: "rejected" }).eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message });
    } else {
      toast({ title: "User rejected" });
      setProfiles(prev => prev.map(p => p.id === id ? { ...p, status: "rejected" } : p));
    }
  };

  // Search, sort
  let filtered = profiles.filter(p =>
    (p.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.email?.toLowerCase().includes(search.toLowerCase()) ||
      p.guardian_name?.toLowerCase().includes(search.toLowerCase()) ||
      p.school_name?.toLowerCase().includes(search.toLowerCase()) ||
      p.grade?.toLowerCase().includes(search.toLowerCase()) ||
      p.phone_number?.toLowerCase().includes(search.toLowerCase()))
  );

  filtered = filtered.sort((a, b) => {
    const aVal = a[sortKey] ?? "";
    const bVal = b[sortKey] ?? "";
    if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
    if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please log in.</div>;
  if (!isAdmin) return <div>You do not have admin access.</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-stemblue">Admin Dashboard</h1>
            <span className="text-sm text-gray-500">Welcome, {user.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={handleGoHome}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button
              variant="destructive"
              onClick={handleSignOut}
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-6 bg-white p-6 rounded-xl shadow-lg">
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="users">User Approvals</TabsTrigger>
            <TabsTrigger value="highlights">Featured Highlights</TabsTrigger>
          </TabsList>
          
          <TabsContent value="users" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-stemblue">User Management</h2>
              <div className="flex gap-4 text-sm">
                <span className="text-yellow-600">Pending: {profiles.filter(p => p.status === 'pending').length}</span>
                <span className="text-green-600">Approved: {profiles.filter(p => p.status === 'approved').length}</span>
                <span className="text-red-600">Rejected: {profiles.filter(p => p.status === 'rejected').length}</span>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <Input
                placeholder="Search users by name, email, school..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="max-w-md"
              />
              <div className="ml-auto text-sm text-muted-foreground">
                Total: {profiles.length} users
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  {[
                    { key: "name", label: "Name" },
                    { key: "email", label: "Email" },
                    { key: "role", label: "Role" },
                    { key: "age", label: "Age" },
                    { key: "school_name", label: "School" },
                    { key: "grade", label: "Grade" },
                    { key: "status", label: "Status" }
                  ].map(({ key, label }) => (
                    <TableHead
                      key={key}
                      onClick={() => {
                        if (sortKey === key) setSortDir(dir => dir === "asc" ? "desc" : "asc");
                        setSortKey(key as keyof Profile);
                      }}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      {label} {sortKey === key ? (sortDir === "asc" ? "↑" : "↓") : ""}
                    </TableHead>
                  ))}
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                      No users found matching your search criteria
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map(profile => (
                    <TableRow key={profile.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{profile.name}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{profile.email}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          profile.role === 'admin' ? 'bg-purple-100 text-purple-700' :
                          profile.role === 'teacher' ? 'bg-blue-100 text-blue-700' :
                          profile.role === 'student' ? 'bg-green-100 text-green-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {profile.role}
                        </span>
                      </TableCell>
                      <TableCell>{profile.age || 'N/A'}</TableCell>
                      <TableCell className="text-sm">{profile.school_name || 'N/A'}</TableCell>
                      <TableCell>{profile.grade || 'N/A'}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          profile.status === "pending" ? 'bg-yellow-100 text-yellow-700' :
                          profile.status === "approved" ? 'bg-green-100 text-green-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {profile.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        {profile.status === "pending" && (
                          <div className="flex gap-2 justify-center">
                            <Button 
                              onClick={() => handleApprove(profile.id)} 
                              size="sm" 
                              className="bg-green-500 text-white hover:bg-green-600"
                            >
                              Approve
                            </Button>
                            <Button 
                              onClick={() => handleReject(profile.id)} 
                              size="sm" 
                              variant="destructive"
                            >
                              Reject
                            </Button>
                          </div>
                        )}
                        {profile.status === "approved" && (
                          <Button 
                            onClick={() => handleReject(profile.id)} 
                            size="sm" 
                            variant="outline"
                            className="text-red-600 hover:text-red-700"
                          >
                            Revoke
                          </Button>
                        )}
                        {profile.status === "rejected" && (
                          <Button 
                            onClick={() => handleApprove(profile.id)} 
                            size="sm" 
                            variant="outline"
                            className="text-green-600 hover:text-green-700"
                          >
                            Approve
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TabsContent>
          
          <TabsContent value="highlights">
            <AdminFeaturedHighlights />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminUserApprovalPage;
