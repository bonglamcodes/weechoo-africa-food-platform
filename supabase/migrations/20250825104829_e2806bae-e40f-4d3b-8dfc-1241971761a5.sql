-- Create institution onboarding table
CREATE TABLE public.institution_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_size TEXT NOT NULL,
  industry TEXT NOT NULL,
  location TEXT NOT NULL,
  meal_budget TEXT,
  requirements TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.institution_applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since this is a public form)
CREATE POLICY "Anyone can submit institution applications" 
ON public.institution_applications 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading (for admin purposes)
CREATE POLICY "Anyone can view institution applications" 
ON public.institution_applications 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_institution_applications_updated_at
  BEFORE UPDATE ON public.institution_applications
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();