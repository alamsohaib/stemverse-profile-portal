-- Drop all existing triggers and recreate with proper demo account handling
DROP TRIGGER IF EXISTS on_auth_user_created_assign_role ON auth.users;
DROP TRIGGER IF EXISTS on_auth_user_created_assign_demo_role ON auth.users;

CREATE OR REPLACE FUNCTION public.handle_user_roles_and_demos()
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
  
  -- Handle admin account
  IF NEW.email = 'kuratulain007@gmail.com' THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin');
    RETURN NEW;
  END IF;
  
  -- Default new users to student role
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'student');
  RETURN NEW;
END;
$$;

-- Create the new trigger
CREATE TRIGGER on_auth_user_created_roles_and_demos
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_user_roles_and_demos();