
-- Add a status column to the profiles table to control user approval
ALTER TABLE public.profiles
ADD COLUMN status TEXT NOT NULL DEFAULT 'pending';

-- Optionally, create an index for faster lookup on status (relevant for admin review)
CREATE INDEX IF NOT EXISTS idx_profiles_status ON public.profiles(status);

-- You may want a constraint to limit acceptable statuses (optional, but increases safety)
ALTER TABLE public.profiles
ADD CONSTRAINT profiles_status_check CHECK (status IN ('pending', 'approved', 'rejected'));

-- (Optional) Set all existing users to approved
UPDATE public.profiles SET status = 'approved' WHERE status IS NULL;
