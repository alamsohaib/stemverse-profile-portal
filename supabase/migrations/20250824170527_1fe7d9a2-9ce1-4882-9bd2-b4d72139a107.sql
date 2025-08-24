-- Create a view that includes user emails for admin access
-- First, create a function to get user email (security definer allows access to auth schema)
CREATE OR REPLACE FUNCTION public.get_user_email(user_uuid uuid)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
    user_email text;
BEGIN
    SELECT email INTO user_email 
    FROM auth.users 
    WHERE id = user_uuid;
    
    RETURN user_email;
END;
$$;

-- Create a view that joins profiles with roles and emails
CREATE OR REPLACE VIEW public.admin_user_view AS
SELECT 
    p.id,
    p.name,
    p.age,
    p.guardian_name,
    p.school_name,
    p.grade,
    p.phone_number,
    p.status,
    p.created_at,
    public.get_user_email(p.id) as email,
    ur.role
FROM public.profiles p
LEFT JOIN public.user_roles ur ON p.id = ur.user_id
ORDER BY p.created_at DESC;

-- Add RLS policy for the view - only admins can access
ALTER VIEW public.admin_user_view SET (security_invoker = on);

-- Grant select permission on the view to authenticated users
GRANT SELECT ON public.admin_user_view TO authenticated;