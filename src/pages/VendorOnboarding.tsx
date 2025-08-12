import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, ChefHat, FileText, Truck, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VendorOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    businessType: "",
    cuisine: "",
    location: "",
    capacity: "",
    experience: "",
    description: "",
    hasLicense: false,
    hasInsurance: false,
    agreeTerms: false
  });

  const steps = [
    { id: 1, title: "Business Info", icon: ChefHat },
    { id: 2, title: "Operations", icon: Truck },
    { id: 3, title: "Documentation", icon: FileText },
    { id: 4, title: "Agreement", icon: DollarSign }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Vendor application submitted:", formData);
    setCurrentStep(5); // Success step
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name *</Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                placeholder="Your restaurant/business name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ownerName">Owner/Manager Name *</Label>
              <Input
                id="ownerName"
                value={formData.ownerName}
                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                placeholder="Your full name"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Business Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="business@email.com"
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
              <Label htmlFor="businessType">Business Type *</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="restaurant">Restaurant</SelectItem>
                  <SelectItem value="catering">Catering Service</SelectItem>
                  <SelectItem value="cloud-kitchen">Cloud Kitchen</SelectItem>
                  <SelectItem value="food-truck">Food Truck</SelectItem>
                  <SelectItem value="home-cook">Home-based Cook</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="cuisine">Cuisine Type *</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, cuisine: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select primary cuisine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="african">African</SelectItem>
                  <SelectItem value="continental">Continental</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                  <SelectItem value="indian">Indian</SelectItem>
                  <SelectItem value="italian">Italian</SelectItem>
                  <SelectItem value="fast-food">Fast Food</SelectItem>
                  <SelectItem value="healthy">Healthy/Organic</SelectItem>
                  <SelectItem value="mixed">Mixed Cuisine</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location/Coverage Area *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Areas you can serve"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="capacity">Daily Capacity *</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, capacity: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="How many meals can you prepare daily?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-50">Under 50 meals</SelectItem>
                  <SelectItem value="50-100">50-100 meals</SelectItem>
                  <SelectItem value="100-500">100-500 meals</SelectItem>
                  <SelectItem value="500-1000">500-1000 meals</SelectItem>
                  <SelectItem value="1000+">1000+ meals</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience *</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="How long have you been in business?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">Just starting</SelectItem>
                  <SelectItem value="1-2">1-2 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5+">5+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Business Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Tell us about your business, specialties, and what makes you unique"
                rows={3}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-gradient-warm p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Required Documentation</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Please ensure you have the following documents ready. You'll upload them after approval.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasLicense"
                    checked={formData.hasLicense}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, hasLicense: checked as boolean })
                    }
                  />
                  <Label htmlFor="hasLicense" className="text-sm">
                    Business License/Registration Certificate
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasInsurance"
                    checked={formData.hasInsurance}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, hasInsurance: checked as boolean })
                    }
                  />
                  <Label htmlFor="hasInsurance" className="text-sm">
                    Food Safety Certificate/Health Permit
                  </Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Additional Documents (Optional)</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Insurance certificate</li>
                <li>• Photos of your kitchen/facility</li>
                <li>• Sample menu with pricing</li>
                <li>• Customer testimonials or reviews</li>
              </ul>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-gradient-warm p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Partnership Terms</h4>
              <ul className="text-sm space-y-2">
                <li>• 15% platform commission on orders</li>
                <li>• Weekly payment cycles</li>
                <li>• Free marketing and promotion</li>
                <li>• Access to corporate clients</li>
                <li>• Quality assurance support</li>
                <li>• 24/7 customer service backup</li>
              </ul>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, agreeTerms: checked as boolean })
                }
              />
              <Label htmlFor="agreeTerms" className="text-sm">
                I agree to the Terms of Service and Partnership Agreement *
              </Label>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                By submitting this application, you acknowledge that you've read and understood 
                our partnership terms and quality standards.
              </p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="text-center space-y-6">
            <CheckCircle className="w-16 h-16 text-primary mx-auto" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Application Submitted Successfully!</h3>
              <p className="text-muted-foreground">
                Welcome to the Weechoo vendor family! We'll review your application and get back to you within 48 hours.
              </p>
            </div>
            <div className="bg-gradient-warm p-6 rounded-lg">
              <p className="font-semibold mb-2">Next Steps:</p>
              <ul className="text-sm space-y-1">
                <li>• Our team will review your application</li>
                <li>• We may contact you for additional information</li>
                <li>• Once approved, we'll help you set up your profile</li>
                <li>• Start receiving orders within a week!</li>
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
                Join as a Food Vendor
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Partner with us to reach more customers and grow your business
            </p>
          </div>

          {currentStep < 5 && (
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
                {currentStep < 5 ? `Step ${currentStep} of 4` : "Application Complete!"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Tell us about your business"}
                {currentStep === 2 && "Share your operational details"}
                {currentStep === 3 && "Confirm your documentation"}
                {currentStep === 4 && "Review and accept terms"}
                {currentStep === 5 && "Welcome to Weechoo!"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {renderStep()}
              
              {currentStep < 5 && (
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button onClick={handleNext} variant="hero">
                      Next Step
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleSubmit} 
                      variant="hero"
                      disabled={!formData.agreeTerms}
                    >
                      Submit Application
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

export default VendorOnboarding;