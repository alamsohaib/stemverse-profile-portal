-- Create demo teacher account
-- Note: This will be added manually since auth.users table insertions 
-- need to go through Supabase Auth API, not direct SQL insertion

-- For now, let's create a trigger that will handle demo accounts
-- when they sign up through the normal flow
CREATE OR REPLACE FUNCTION public.handle_demo_accounts()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER 
SET search_path = public, auth
AS $$
BEGIN
  -- Handle demo teacher account
  IF NEW.email = 'teacher@stemverse.demo' THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'teacher');
    INSERT INTO public.profiles (id, name, status) 
    VALUES (NEW.id, 'Demo Teacher', 'approved');
    RETURN NEW;
  END IF;
  
  -- Handle demo student account
  IF NEW.email = 'student@stemverse.demo' THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'student');
    INSERT INTO public.profiles (id, name, status) 
    VALUES (NEW.id, 'Demo Student', 'approved');
    RETURN NEW;
  END IF;
  
  -- Handle admin account (update existing trigger logic)
  IF NEW.email = 'kuratulain007@gmail.com' THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
    RETURN NEW;
  END IF;
  
  -- Default new users to student role
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'student')
  ON CONFLICT (user_id, role) DO NOTHING;
  RETURN NEW;
END;
$$;

-- Drop the old trigger and create the new one
DROP TRIGGER IF EXISTS on_auth_user_created_assign_role ON auth.users;
CREATE TRIGGER on_auth_user_created_assign_demo_role
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_demo_accounts();