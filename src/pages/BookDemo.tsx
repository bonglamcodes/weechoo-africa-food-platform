import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Video, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookDemo = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    companySize: "",
    timeSlot: "",
    interests: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo request submitted:", formData);
    // Here you would typically send this to your backend/notification system
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Demo Scheduled!
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your interest in Weechoo. We've received your demo request and will contact you within 24 hours to confirm your preferred time slot.
            </p>
            
            <div className="bg-gradient-warm p-6 rounded-lg mb-8">
              <h3 className="font-semibold mb-4">What to expect in your demo:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Video className="w-4 h-4 text-primary" />
                  <span>30-minute personalized session</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Flexible scheduling options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Live platform walkthrough</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Custom pricing discussion</span>
                </div>
              </div>
            </div>
            
            <Button variant="hero" onClick={() => window.location.href = "/"}>
              Return to Homepage
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Book Your Demo
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              See how Weechoo can transform your workplace dining experience. Schedule a personalized demo with our team.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Schedule Your Personalized Demo</CardTitle>
              <CardDescription>
                Tell us about your needs and we'll show you exactly how Weechoo can help your organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name <span className="text-destructive">*</span></Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name <span className="text-destructive">*</span></Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email <span className="text-destructive">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+233 XXX XXX XXX"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name <span className="text-destructive">*</span></Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title <span className="text-destructive">*</span></Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      placeholder="HR Manager, CEO, etc."
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size <span className="text-destructive">*</span></Label>
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
                    <Label htmlFor="timeSlot">Preferred Time Slot</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, timeSlot: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12:00 PM - 3:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (3:00 PM - 6:00 PM)</SelectItem>
                        <SelectItem value="flexible">I'm flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">What interests you most about Weechoo?</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, interests: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employee-meals">Employee meal benefits</SelectItem>
                      <SelectItem value="vendor-network">Access to local food vendors</SelectItem>
                      <SelectItem value="cost-savings">Cost savings on meal programs</SelectItem>
                      <SelectItem value="ease-management">Easy meal program management</SelectItem>
                      <SelectItem value="all">All of the above</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your current meal program, specific challenges, or any questions you have..."
                    rows={4}
                  />
                </div>

                <div className="bg-gradient-warm p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Video className="w-5 h-5 mr-2 text-primary" />
                    What happens after you submit?
                  </h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Our team will contact you within 24 hours</li>
                    <li>• We'll schedule a 30-minute video call at your convenience</li>
                    <li>• Get a personalized walkthrough of our platform</li>
                    <li>• Discuss pricing and implementation timeline</li>
                    <li>• No obligations - just valuable insights for your business</li>
                  </ul>
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full">
                  Schedule My Demo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDemo;