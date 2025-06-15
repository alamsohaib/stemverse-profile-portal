
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Edit, Trash2, Plus } from "lucide-react";

type FeaturedHighlight = {
  id: string;
  title: string;
  start_date: string;
  location: string;
  duration: string;
  description: string;
  button_text: string | null;
  button_url: string | null;
  is_active: boolean;
  display_order: number;
  created_at: string;
};

type HighlightForm = {
  title: string;
  start_date: string;
  location: string;
  duration: string;
  description: string;
  button_text: string;
  button_url: string;
  is_active: boolean;
  display_order: number;
};

const AdminFeaturedHighlights = () => {
  const [highlights, setHighlights] = useState<FeaturedHighlight[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingHighlight, setEditingHighlight] = useState<FeaturedHighlight | null>(null);
  const [formData, setFormData] = useState<HighlightForm>({
    title: "",
    start_date: "",
    location: "",
    duration: "",
    description: "",
    button_text: "Apply Now",
    button_url: "",
    is_active: true,
    display_order: 0,
  });

  useEffect(() => {
    fetchHighlights();
  }, []);

  const fetchHighlights = async () => {
    const { data, error } = await supabase
      .from("featured_highlights")
      .select("*")
      .order("display_order", { ascending: true });

    if (error) {
      toast({ title: "Error", description: error.message });
    } else {
      setHighlights(data || []);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      start_date: "",
      location: "",
      duration: "",
      description: "",
      button_text: "Apply Now",
      button_url: "",
      is_active: true,
      display_order: highlights.length + 1,
    });
    setEditingHighlight(null);
  };

  const openCreateDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const openEditDialog = (highlight: FeaturedHighlight) => {
    setFormData({
      title: highlight.title,
      start_date: highlight.start_date,
      location: highlight.location,
      duration: highlight.duration,
      description: highlight.description,
      button_text: highlight.button_text || "Apply Now",
      button_url: highlight.button_url || "",
      is_active: highlight.is_active,
      display_order: highlight.display_order,
    });
    setEditingHighlight(highlight);
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingHighlight) {
        // Update existing highlight
        const { error } = await supabase
          .from("featured_highlights")
          .update(formData)
          .eq("id", editingHighlight.id);

        if (error) throw error;
        toast({ title: "Success", description: "Highlight updated successfully!" });
      } else {
        // Create new highlight
        const { error } = await supabase
          .from("featured_highlights")
          .insert([formData]);

        if (error) throw error;
        toast({ title: "Success", description: "Highlight created successfully!" });
      }

      setIsDialogOpen(false);
      fetchHighlights();
      resetForm();
    } catch (error: any) {
      toast({ title: "Error", description: error.message });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this highlight?")) return;

    try {
      const { error } = await supabase
        .from("featured_highlights")
        .delete()
        .eq("id", id);

      if (error) throw error;
      toast({ title: "Success", description: "Highlight deleted successfully!" });
      fetchHighlights();
    } catch (error: any) {
      toast({ title: "Error", description: error.message });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-stemblue">Featured Highlights</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateDialog} className="bg-stemblue text-white hover:bg-stemblue/90">
              <Plus className="w-4 h-4 mr-2" />
              Add Highlight
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingHighlight ? "Edit Highlight" : "Create New Highlight"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="start_date">Start Date</Label>
                  <Input
                    id="start_date"
                    type="date"
                    value={formData.start_date}
                    onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="e.g., 2 weeks"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., Peshawar & Online"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="button_text">Button Text</Label>
                  <Input
                    id="button_text"
                    value={formData.button_text}
                    onChange={(e) => setFormData({ ...formData, button_text: e.target.value })}
                    placeholder="Apply Now"
                  />
                </div>
                <div>
                  <Label htmlFor="button_url">Button URL</Label>
                  <Input
                    id="button_url"
                    value={formData.button_url}
                    onChange={(e) => setFormData({ ...formData, button_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="display_order">Display Order</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
                    min="0"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_active"
                    checked={formData.is_active}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                  />
                  <Label htmlFor="is_active">Active</Label>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-stemblue text-white hover:bg-stemblue/90">
                  {editingHighlight ? "Update" : "Create"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Order</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {highlights.map((highlight) => (
            <TableRow key={highlight.id}>
              <TableCell className="font-medium">{highlight.title}</TableCell>
              <TableCell>{formatDate(highlight.start_date)}</TableCell>
              <TableCell>{highlight.location}</TableCell>
              <TableCell>{highlight.duration}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  highlight.is_active 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {highlight.is_active ? "Active" : "Inactive"}
                </span>
              </TableCell>
              <TableCell>{highlight.display_order}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openEditDialog(highlight)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(highlight.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {highlights.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No highlights found. Create your first highlight!
        </div>
      )}
    </div>
  );
};

export default AdminFeaturedHighlights;
