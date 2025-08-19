import { Badge } from "@/components/ui/badge";
import { Building2, Users, Star, Award, MapPin } from "lucide-react";
import pavelonLogo from "@/assets/pavelon.png";
import ascendLogo from "@/assets/ascend.png";
import boseaLogo from "@/assets/bosea.jpg";
import creditmallLogo from "@/assets/cml.png";

const TrustedCustomers = () => {
  const customers = [
    {
      name: "Credit Mall Limited",
      industry: "Financial Services",
      location: "Lagos, Nigeria",
      employees: "500+",
      description: "Leading financial services provider trusting Weechoo for daily corporate meals",
      logo: creditmallLogo
    },
    {
      name: "Ascend Ghana",
      industry: "Technology",
      location: "Accra, Ghana", 
      employees: "200+",
      description: "Fast-growing tech company scaling with Weechoo's flexible meal solutions",
      logo: ascendLogo
    },
    {
      name: "Pavelon Technologies",
      industry: "Software Development",
      location: "Lagos, Nigeria",
      employees: "150+", 
      description: "Innovative software company enhancing employee experience with Weechoo",
      logo: pavelonLogo
    },
    {
      name: "Bosea Ghana",
      industry: "Manufacturing",
      location: "Kumasi, Ghana",
      employees: "300+",
      description: "Manufacturing leader providing quality meals to workforce through Weechoo",
      logo: boseaLogo
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

        {/* Auto-scrolling Customer Logos */}
        <div className="mb-20 overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-16 text-foreground">Companies We're Proud to Serve</h3>
          
          <div className="relative">
            {/* Gradient fade effects for seamless appearance */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
            
            <div className="flex animate-scroll gap-12 md:gap-16">
              {/* First set of logos */}
              {customers.map((customer, index) => (
                <div key={`first-${index}`} className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white rounded-2xl flex items-center justify-center p-1 shadow-elegant hover:shadow-warm transition-all duration-300 border border-border/10 hover:scale-105">
                    <img 
                      src={customer.logo} 
                      alt={`${customer.name} logo`} 
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        console.log(`Failed to load image: ${customer.logo}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <p className="text-center mt-4 text-xs md:text-sm font-medium text-muted-foreground truncate max-w-[80px] md:max-w-[112px] lg:max-w-[128px]">
                    {customer.name}
                  </p>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {customers.map((customer, index) => (
                <div key={`second-${index}`} className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white rounded-2xl flex items-center justify-center p-1 shadow-elegant hover:shadow-warm transition-all duration-300 border border-border/10 hover:scale-105">
                    <img 
                      src={customer.logo} 
                      alt={`${customer.name} logo`} 
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        console.log(`Failed to load image: ${customer.logo}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <p className="text-center mt-4 text-xs md:text-sm font-medium text-muted-foreground truncate max-w-[80px] md:max-w-[112px] lg:max-w-[128px]">
                    {customer.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-warm rounded-2xl p-8 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-xl font-medium mb-6 text-foreground leading-relaxed">
                "Weechoo has revolutionized our employee dining experience. The platform is intuitive, the food quality is exceptional, and our team productivity has noticeably improved."
              </blockquote>
              <div className="text-lg text-foreground">
                <strong>John</strong>
                <div className="text-muted-foreground">Operations Manager, Ascend Ghana</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-warm rounded-2xl p-8 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-xl font-medium mb-6 text-foreground leading-relaxed">
                "Weechoo has transformed how we handle workplace dining. Our employees love the variety and convenience, while our HR team appreciates the seamless administration."
              </blockquote>
              <div className="text-lg text-foreground">
                <strong>Esther Lamptey</strong>
                <div className="text-muted-foreground">HR, Pavelon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCustomers;