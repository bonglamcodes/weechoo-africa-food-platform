import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Building2, Users, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const InstitutionOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    companySize: "",
    industry: "",
    location: "",
    mealBudget: "",
    requirements: ""
  });

  const steps = [
    { id: 1, title: "Company Information", icon: Building2 },
    { id: 2, title: "Team Details", icon: Users },
    { id: 3, title: "Meal Preferences", icon: Calendar }
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Call Supabase Edge Function to send email
      const { data, error } = await supabase.functions.invoke('send-onboarding-email', {
        body: formData
      });

      if (error) {
        console.error('Error sending email:', error);
        toast({
          title: "Submission Failed",
          description: "There was an error submitting your application. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      console.log("Form submitted and email sent:", formData);
      toast({
        title: "Application Submitted!",
        description: "We've received your application and will be in touch within 24 hours.",
      });
      setCurrentStep(4); // Success step
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="Your company name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactName">Contact Person *</Label>
              <Input
                id="contactName"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                placeholder="Your full name"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+233 XXX XXX XXX"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Office Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="City, Country"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="companySize">Company Size *</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, companySize: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-500">201-500 employees</SelectItem>
                  <SelectItem value="500+">500+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry *</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="finance">Finance & Banking</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mealBudget">Monthly Meal Budget (Optional)</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, mealBudget: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-1000">Under GHS 1,000</SelectItem>
                  <SelectItem value="1000-5000">GHS 1,000 - 5,000</SelectItem>
                  <SelectItem value="5000-10000">GHS 5,000 - 10,000</SelectItem>
                  <SelectItem value="10000+">GHS 10,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="requirements">Special Requirements or Preferences</Label>
              <Textarea
                id="requirements"
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                placeholder="Tell us about dietary restrictions, meal times, delivery preferences, etc."
                rows={4}
              />
            </div>
            <div className="bg-gradient-warm p-6 rounded-lg">
              <h4 className="font-semibold mb-3">What happens next?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Our team will review your application within 24 hours</li>
                <li>• We'll schedule a personalized demo based on your needs</li>
                <li>• Together, we'll design a meal program that fits your culture</li>
                <li>• Launch within 2 weeks with full support</li>
              </ul>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-center space-y-6">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Welcome to the Weechoo Family!</h3>
              <p className="text-muted-foreground">
                We've received your application and will be in touch within 24 hours.
              </p>
            </div>
            <div className="bg-gradient-warm p-6 rounded-lg">
              <p className="font-semibold mb-2">Meanwhile, you can:</p>
              <ul className="text-sm space-y-1">
                <li>• Explore our platform features</li>
                <li>• Read success stories from other institutions</li>
                <li>• Follow us on social media for updates</li>
              </ul>
            </div>
            <Button variant="hero" onClick={() => window.location.href = "/"}>
              Return to Homepage
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Join Our Institution Network
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Transform your workplace dining experience in just a few steps
            </p>
          </div>

          {currentStep < 4 && (
            <div className="flex justify-between mb-8">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className={`flex items-center space-x-2 ${
                      currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        currentStep >= step.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <Icon className="w-4 h-4" />
                      )}
                    </div>
                    <span className="text-sm font-medium hidden md:block">{step.title}</span>
                  </div>
                );
              })}
            </div>
          )}

          <Card>
            <CardHeader>
              <CardTitle>
                {currentStep < 4 ? `Step ${currentStep} of 3` : "Application Complete!"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Let's start with your company details"}
                {currentStep === 2 && "Tell us about your team"}
                {currentStep === 3 && "Final details about your meal program"}
                {currentStep === 4 && "Thank you for choosing Weechoo"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {renderStep()}
              
              {currentStep < 4 && (
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 3 ? (
                    <Button onClick={handleNext} variant="hero">
                      Next Step
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleSubmit} 
                      variant="hero"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InstitutionOnboarding;