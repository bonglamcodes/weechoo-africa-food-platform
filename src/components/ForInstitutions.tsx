import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, CreditCard, BarChart3, Heart } from "lucide-react";

const ForInstitutions = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Zero Admin Burden",
      description: "Employees select their own meals daily through our web portal. HR stays out of food management entirely."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-secondary" />,
      title: "Flexible Billing",
      description: "Weekly or monthly billing cycles that fit your company's financial processes with transparent pricing."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Employee Choice",
      description: "Wide variety of meals from local vendors, accommodating dietary restrictions and preferences automatically."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary-glow" />,
      title: "Analytics & Insights",
      description: "Track meal preferences, spending patterns, and employee satisfaction with detailed reporting."
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary" />,
      title: "Wellness Focus",
      description: "Nutritious meal options that promote employee health and productivity in the workplace."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: "Reliable Service",
      description: "Consistent delivery times, quality control, and 24/7 customer support for seamless operations."
    }
  ];

  return (
    <section id="institutions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Transform Your</span>
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">Corporate Meal Program</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Give your employees the freedom to choose their meals while eliminating administrative overhead for HR teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border/20 bg-card/50 hover:shadow-warm transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-warm rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl font-medium mb-6 text-foreground">
              "Weechoo completely eliminated our lunch coordination headaches. Our employees love the variety and our HR team loves the simplicity."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-hero rounded-full"></div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Sarah Ochieng</p>
                <p className="text-muted-foreground">HR Director, TechHub Kenya</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-12 text-foreground">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2">Sign Up Your Company</h4>
              <p className="text-muted-foreground">Quick onboarding process with flexible billing options</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2">Employees Choose Meals</h4>
              <p className="text-muted-foreground">Your team selects daily meals through our intuitive web portal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2">We Handle Everything</h4>
              <p className="text-muted-foreground">Fresh meals delivered on time, every time with full analytics</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl">
            Sign Up for Institution Service
          </Button>
          <p className="text-sm text-muted-foreground mt-4">No setup fees • Cancel anytime • 30-day trial</p>
        </div>
      </div>
    </section>
  );
};

export default ForInstitutions;