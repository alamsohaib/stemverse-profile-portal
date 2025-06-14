
-- Correct: Insert an admin profile (NO email field)
INSERT INTO public.profiles
  (id, name, age, guardian_name, school_name, grade, phone_number, status, created_at)
VALUES
  (
    'b8222d0a-d6e8-497f-9504-7a8f4fe84e84', -- your Supabase user ID
    'Admin User',          -- name, or put email if preferred
    NULL,                  -- age
    NULL,                  -- guardian_name
    NULL,                  -- school_name
    NULL,                  -- grade
    NULL,                  -- phone_number
    'approved',            -- status (should be approved for admin)
    now()                  -- created_at
  )
ON CONFLICT (id) DO NOTHING;
