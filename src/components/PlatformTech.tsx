import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Tablet, BarChart3, Zap, Cloud, Smartphone, Settings, Database } from "lucide-react";

const PlatformTech = () => {
  const features = [
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "Vendor Dashboard",
      description: "Comprehensive analytics, order management, and performance tracking for food vendors.",
      status: "Coming Q4 2025"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-secondary" />,
      title: "Institution Admin Portal",
      description: "Bulk order management, employee analytics, and budget tracking for corporate clients.",
      status: "Coming Q4 2025"
    },
    {
      icon: <Tablet className="w-8 h-8 text-accent" />,
      title: "Smart POS Tablets",
      description: "Integrated point-of-sale system with real-time order tracking and payment processing.",
      status: "Coming Soon"
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary-glow" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud platform managing orders, payments, and logistics across Africa.",
      status: "Live Now"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-secondary" />,
      title: "Mobile Apps",
      description: "Native mobile applications for vendors and employees with offline capabilities.",
      status: "Coming 2026"
    },
    {
      icon: <Database className="w-8 h-8 text-accent" />,
      title: "API Platform",
      description: "RESTful APIs for third-party integrations and custom enterprise solutions.",
      status: "Coming 2026"
    }
  ];

  return (
    <section id="platform" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Platform &</span>
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">Technology Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Advanced technology stack powering Africa's food infrastructure. From POS systems to analytics dashboards, we're building the future of institutional food services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/20 bg-card/50 hover:shadow-warm transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <div className="text-sm text-muted-foreground font-medium">
                  {feature.status}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack Showcase */}
        <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Built for Scale</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed to handle millions of orders, thousands of vendors, and hundreds of institutions across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-primary-foreground" />
              </div>
              <h4 className="text-2xl font-bold mb-2 text-primary">99.9%</h4>
              <p className="font-semibold mb-2">Uptime Guarantee</p>
              <p className="text-muted-foreground text-sm">Reliable service with enterprise-grade infrastructure</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Settings className="w-10 h-10 text-primary-foreground" />
              </div>
              <h4 className="text-2xl font-bold mb-2 text-secondary">Real-time</h4>
              <p className="font-semibold mb-2">Order Processing</p>
              <p className="text-muted-foreground text-sm">Instant order routing and status updates</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Database className="w-10 h-10 text-primary-foreground" />
              </div>
              <h4 className="text-2xl font-bold mb-2 text-accent">Multi-tenant</h4>
              <p className="font-semibold mb-2">Architecture</p>
              <p className="text-muted-foreground text-sm">Scalable solution for enterprise deployments</p>
            </div>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Technology Roadmap</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
              
              <div className="space-y-12">
                <div className="flex items-start space-x-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    Q3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Employee Web Portal Launch</h4>
                    <p className="text-muted-foreground">Complete web portal for employee meal selection and order management</p>
                    <div className="text-sm text-primary font-medium mt-1">✓ Completed</div>
                  </div>
                </div>

                <div className="flex items-start space-x-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">
                    Q4
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">POS & Smart Tablets</h4>
                    <p className="text-muted-foreground">Launch of integrated POS system and vendor management tablets</p>
                    <div className="text-sm text-secondary font-medium mt-1">In Development</div>
                  </div>
                </div>

                <div className="flex items-start space-x-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    2026
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Full Platform Suite</h4>
                    <p className="text-muted-foreground">Complete dashboard ecosystem, mobile apps, and API platform</p>
                    <div className="text-sm text-accent font-medium mt-1">Planned</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl">
            Get Early Access
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Be the first to access new platform features</p>
        </div>
      </div>
    </section>
  );
};

export default PlatformTech;