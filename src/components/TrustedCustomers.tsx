import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Star, Award, MapPin } from "lucide-react";

const TrustedCustomers = () => {
  const customers = [
    {
      name: "Credit Mall Limited",
      industry: "Financial Services",
      location: "Lagos, Nigeria",
      employees: "500+",
      description: "Leading financial services provider trusting Weechoo for daily corporate meals",
      logo: "CM"
    },
    {
      name: "Ascend Ghana",
      industry: "Technology",
      location: "Accra, Ghana", 
      employees: "200+",
      description: "Fast-growing tech company scaling with Weechoo's flexible meal solutions",
      logo: "AG"
    },
    {
      name: "Pavelon Technologies",
      industry: "Software Development",
      location: "Lagos, Nigeria",
      employees: "150+", 
      description: "Innovative software company enhancing employee experience with Weechoo",
      logo: "PT"
    },
    {
      name: "Bosea Ghana",
      industry: "Manufacturing",
      location: "Kumasi, Ghana",
      employees: "300+",
      description: "Manufacturing leader providing quality meals to workforce through Weechoo",
      logo: "BG"
    },
    {
      name: "DataFlow Systems", 
      industry: "IT Services",
      location: "Abuja, Nigeria",
      employees: "250+",
      description: "Leading IT services provider optimizing operations with Weechoo's platform",
      logo: "DS"
    },
    {
      name: "GreenTech Solutions",
      industry: "Clean Energy", 
      location: "Cape Town, South Africa",
      employees: "180+",
      description: "Sustainable energy company fueling teams with Weechoo's eco-friendly approach",
      logo: "GT"
    }
  ];

  const stats = [
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      number: "50+",
      label: "Companies Served",
      description: "Growing portfolio of institutional clients"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      number: "15,000+",
      label: "Employees Fed Daily",
      description: "Across all partner organizations"
    },
    {
      icon: <Star className="w-8 h-8 text-accent" />,
      number: "4.8/5",
      label: "Customer Satisfaction",
      description: "Based on monthly feedback surveys"
    },
    {
      icon: <Award className="w-8 h-8 text-primary-glow" />,
      number: "98%",
      label: "Client Retention Rate",
      description: "Companies continue partnering with us"
    }
  ];

  return (
    <section id="customers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Trusted By Industry Leaders
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Our</span>
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">Trusted Customers</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From tech startups to established enterprises, leading organizations across Africa trust Weechoo to power their workplace dining experiences.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border/20 bg-card/50 text-center hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-hero/10 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Companies We're Proud to Serve</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customers.map((customer, index) => (
              <Card key={index} className="border-border/20 bg-card/50 hover:shadow-warm transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {customer.logo}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-1">{customer.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {customer.industry}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {customer.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{customer.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{customer.employees}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-warm rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl font-medium mb-6 text-foreground leading-relaxed">
              "Weechoo has transformed how we handle workplace dining. Our employees love the variety and convenience, while our HR team appreciates the seamless administration."
            </blockquote>
            <div className="text-lg text-foreground">
              <strong>Sarah Adebayo</strong>
              <div className="text-muted-foreground">Head of Operations, Credit Mall Limited</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCustomers;