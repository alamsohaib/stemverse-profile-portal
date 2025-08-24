-- Create function to auto-create a profile for new users
CREATE OR REPLACE FUNCTION public.handle_new_profile()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public', 'auth'
AS $$
BEGIN
  -- Insert a default profile for every new user (id is same as auth.users.id)
  INSERT INTO public.profiles (id, name, status)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    CASE 
      WHEN NEW.email IN ('teacher@stemverse.demo','student@stemverse.demo') THEN 'approved'
      ELSE 'pending'
    END
  )
  ON CONFLICT (id) DO NOTHING;

  RETURN NEW;
END;
$$;

-- Ensure trigger for roles exists using existing function
DROP TRIGGER IF EXISTS on_auth_user_created_user_roles ON auth.users;
CREATE TRIGGER on_auth_user_created_user_roles
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE PROCEDURE public.handle_user_roles_and_demos();

-- Create trigger for profiles
DROP TRIGGER IF EXISTS on_auth_user_created_profile ON auth.users;
CREATE TRIGGER on_auth_user_created_profile
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE PROCEDURE public.handle_new_profile();

-- Backfill missing roles for existing users
INSERT INTO public.user_roles (user_id, role)
SELECT u.id,
  CASE 
    WHEN u.email = 'kuratulain007@gmail.com' THEN 'admin'::app_role
    WHEN u.email = 'teacher@stemverse.demo' THEN 'teacher'::app_role
    WHEN u.email = 'student@stemverse.demo' THEN 'student'::app_role
    ELSE 'student'::app_role
  END
FROM auth.users u
LEFT JOIN public.user_roles ur ON ur.user_id = u.id
WHERE ur.user_id IS NULL;

-- Backfill missing profiles for existing users
INSERT INTO public.profiles (id, name, status)
SELECT u.id,
  COALESCE(u.raw_user_meta_data->>'name', split_part(u.email, '@', 1)) AS name,
  CASE 
    WHEN u.email IN ('teacher@stemverse.demo','student@stemverse.demo') THEN 'approved'
    ELSE 'pending'
  END
FROM auth.users u
LEFT JOIN public.profiles p ON p.id = u.id
WHERE p.id IS NULL;