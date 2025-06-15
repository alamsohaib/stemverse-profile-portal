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
      const { data, error } = await supabase
        .from("profiles")
        .select("*");
      if (error) {
        toast({ title: "Error loading users", description: error.message });
      } else {
        setProfiles(data || []);
      }
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
            <h2 className="text-2xl font-bold text-stemblue">User Approvals</h2>
            <div className="mb-4 flex items-center gap-2">
              <Input
                placeholder="Search students..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="max-w-sm"
              />
              <div className="ml-auto text-sm text-muted-foreground">
                {profiles.length} users
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  {["name", "age", "guardian_name", "school_name", "grade", "phone_number", "status"].map(col => (
                    <TableHead
                      key={col}
                      onClick={() => {
                        if (sortKey === col) setSortDir(dir => dir === "asc" ? "desc" : "asc");
                        // @ts-ignore
                        else setSortKey(col);
                      }}
                      className="cursor-pointer"
                    >
                      {col.charAt(0).toUpperCase() + col.slice(1)} {sortKey === col ? (sortDir === "asc" ? "↑" : "↓") : ""}
                    </TableHead>
                  ))}
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map(profile => (
                  <TableRow key={profile.id}>
                    <TableCell>{profile.name}</TableCell>
                    <TableCell>{profile.age}</TableCell>
                    <TableCell>{profile.guardian_name}</TableCell>
                    <TableCell>{profile.school_name}</TableCell>
                    <TableCell>{profile.grade}</TableCell>
                    <TableCell>{profile.phone_number}</TableCell>
                    <TableCell>
                      {profile.status === "pending" && <span className="text-yellow-500">Pending</span>}
                      {profile.status === "approved" && <span className="text-green-600">Approved</span>}
                      {profile.status === "rejected" && <span className="text-red-500">Rejected</span>}
                    </TableCell>
                    <TableCell>
                      {profile.status === "pending" && (
                        <div className="flex gap-2">
                          <Button onClick={() => handleApprove(profile.id)} size="sm" className="bg-green-500 text-white hover:bg-green-600">Approve</Button>
                          <Button onClick={() => handleReject(profile.id)} size="sm" variant="destructive">Reject</Button>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
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
