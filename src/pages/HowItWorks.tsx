import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, ChefHat, Clock, CheckCircle, Calendar } from "lucide-react";
import officeImage from "@/assets/office-lunch.jpg";
import vendorImage from "@/assets/vendor-kitchen.jpg";

const HowItWorks = () => {
  const institutionSteps = [
    {
      step: "1",
      title: "Sign Up & Setup",
      description: "Register your institution and upload employee details via simple Excel sheet (Name, Email, Department)",
      icon: <Building2 className="w-8 h-8 text-primary" />
    },
    {
      step: "2", 
      title: "Employee Onboarding",
      description: "Your employees automatically receive portal access notifications and login credentials",
      icon: <Users className="w-8 h-8 text-secondary" />
    },
    {
      step: "3",
      title: "Menu Selection",
      description: "Employees browse weekly menus every Friday and select meals for the upcoming week",
      icon: <Calendar className="w-8 h-8 text-accent" />
    },
    {
      step: "4",
      title: "Delivery & Billing",
      description: "Fresh meals delivered daily to your office. Flexible weekly/monthly billing to your institution",
      icon: <CheckCircle className="w-8 h-8 text-primary-glow" />
    }
  ];

  const vendorSteps = [
    {
      step: "1",
      title: "Application & Approval",
      description: "Submit your vendor application with menu samples and certifications for quick review",
      icon: <ChefHat className="w-8 h-8 text-primary" />
    },
    {
      step: "2",
      title: "Kitchen Access",
      description: "Get access to our certified commercial kitchen facilities and prep time slots",
      icon: <Building2 className="w-8 h-8 text-secondary" />
    },
    {
      step: "3",
      title: "Menu Integration",
      description: "Your dishes are added to our weekly menu rotation across all partner institutions",
      icon: <Calendar className="w-8 h-8 text-accent" />
    },
    {
      step: "4",
      title: "Scale & Grow",
      description: "Receive bulk orders from 1000s of employees across multiple institutions daily",
      icon: <CheckCircle className="w-8 h-8 text-primary-glow" />
    }
  ];

  const employeeProcess = [
    {
      title: "Weekly Menu Release",
      description: "Every Friday, browse next week's curated menu from our partner vendors",
      time: "Fridays, 9 AM"
    },
    {
      title: "Meal Selection",
      description: "Choose your preferred meals for Monday through Friday with dietary preferences",
      time: "Friday - Sunday"
    },
    {
      title: "Order Confirmation",
      description: "Review and confirm your weekly meal schedule with automatic reminders",
      time: "Sunday 11:59 PM cutoff"
    },
    {
      title: "Daily Delivery",
      description: "Fresh meals delivered to your office with real-time tracking notifications",
      time: "Monday - Friday"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">How</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Weechoo Works</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A comprehensive look at how we're transforming institutional food services across Africa - from vendor onboarding to employee meal delivery.
            </p>
          </div>
        </div>
      </section>

      {/* For Institutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">For Institutions</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Transform your employee meal program with our seamless onboarding process. From Excel upload to daily deliveries, we handle everything.
                </p>
                <Button variant="hero" size="lg">
                  Start Free Trial
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={officeImage} 
                  alt="Office employees enjoying lunch" 
                  className="rounded-2xl shadow-warm w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {institutionSteps.map((step, index) => (
                <Card key={index} className="border-border/20 bg-card/50 hover:shadow-warm transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                    </div>
                    <div className="mx-auto mb-2">{step.icon}</div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employee Portal Process */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Employee Portal Experience</h2>
            <p className="text-lg text-muted-foreground">
              A simple, intuitive process that puts employees in control of their meal choices
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {employeeProcess.map((process, index) => (
                <div key={index} className="flex items-start space-x-6 bg-background/50 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{process.title}</h3>
                      <span className="text-sm text-primary font-medium">{process.time}</span>
                    </div>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Vendors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <img 
                  src={vendorImage} 
                  alt="Professional kitchen environment" 
                  className="rounded-2xl shadow-warm w-full h-80 object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">For Food Vendors</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Join our ecosystem and scale your food business by serving thousands of employees across multiple institutions daily.
                </p>
                <Button variant="secondary" size="lg">
                  Apply as Vendor
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vendorSteps.map((step, index) => (
                <Card key={index} className="border-border/20 bg-card/50 hover:shadow-warm transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent-foreground">{step.step}</span>
                    </div>
                    <div className="mx-auto mb-2">{step.icon}</div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">Ready to Transform Your Food Program?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the future of institutional food services across Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Sign Up as Institution
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Apply as Vendor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;