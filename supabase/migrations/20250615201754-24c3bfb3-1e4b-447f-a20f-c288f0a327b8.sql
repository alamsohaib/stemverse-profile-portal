
-- Create table for featured highlights
CREATE TABLE public.featured_highlights (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  start_date DATE NOT NULL,
  location TEXT NOT NULL,
  duration TEXT NOT NULL,
  description TEXT NOT NULL,
  button_text TEXT DEFAULT 'Apply Now',
  button_url TEXT,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS)
ALTER TABLE public.featured_highlights ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to read highlights (public access)
CREATE POLICY "Anyone can view active highlights" 
  ON public.featured_highlights 
  FOR SELECT 
  USING (is_active = true);

-- Create policy that allows authenticated users to manage highlights (admin access)
CREATE POLICY "Authenticated users can manage highlights" 
  ON public.featured_highlights 
  FOR ALL 
  USING (auth.role() = 'authenticated');

-- Insert the current highlight as the first entry
INSERT INTO public.featured_highlights (
  title,
  start_date,
  location,
  duration,
  description,
  button_text,
  button_url,
  display_order
) VALUES (
  'Summer STEM Camp 2025',
  '2025-07-01',
  'Peshawar & Online',
  '2 weeks',
  'Get ready for an exciting summer of innovation and creativity! Our hands-on STEM camp offers students ages 6–18 the chance to explore robotics, AI, game design, and 3D printing—guided by expert instructors in a fun, future-focused environment.',
  'Apply Now',
  'https://forms.gle/vRjvomZfF4UwNinD7',
  1
);
