-- Create RLS policy for admin_user_view to allow admins to see all users
CREATE POLICY "Admins can view all users" 
ON public.admin_user_view 
FOR SELECT 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));