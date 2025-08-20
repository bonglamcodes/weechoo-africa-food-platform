import { Badge } from "@/components/ui/badge";
import { Building2, Users, Star, Award, MapPin } from "lucide-react";
import pavelonLogo from "@/assets/pavelon.png";
import ascendLogo from "@/assets/ascend.png";
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
    }
  ];

  // Create enough duplicates for seamless infinite loop
  const duplicatedCustomers = [
    ...customers,
    ...customers,
    ...customers,
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

        {/* Continuous Logo Slider */}
        <div className="mb-20 overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">Companies We're Proud to Serve</h3>
          
          <div className="relative">
            {/* Subtle gradient fade effects */}
            <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10"></div>
            
            <div className="flex animate-scroll-fast md:animate-scroll gap-6 md:gap-12 lg:gap-16">
              {/* Seamless infinite loop - render duplicated customers */}
              {duplicatedCustomers.map((customer, index) => (
                <div key={`seamless-${index}`} className="flex-shrink-0 flex items-center justify-center">
                  <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 flex items-center justify-center group md:bg-white/60 md:backdrop-blur-sm md:rounded-2xl md:border md:border-border/10 md:shadow-sm hover:md:shadow-md transition-all duration-300">
                    <img 
                      src={customer.logo} 
                      alt={`${customer.name} logo`} 
                      className="w-full h-full object-contain p-1 md:p-3 group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        console.log(`Failed to load image: ${customer.logo}`);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modern Testimonial Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card/80 backdrop-blur-sm border border-border/20 rounded-2xl p-8 lg:p-10 text-center shadow-sm">
            <div className="max-w-3xl mx-auto">
              {/* Star Rating */}
              <div className="flex justify-center mb-6 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-accent fill-accent" 
                  />
                ))}
              </div>
              
              <blockquote className="text-lg font-medium mb-8 text-foreground leading-relaxed">
                "Weechoo has revolutionized our employee dining experience. The platform is intuitive, the food quality is exceptional, and our team productivity has noticeably improved."
              </blockquote>
              
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">John</div>
                  <div className="text-sm text-muted-foreground">Operations Manager, Ascend Ghana</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card/80 backdrop-blur-sm border border-border/20 rounded-2xl p-8 lg:p-10 text-center shadow-sm">
            <div className="max-w-3xl mx-auto">
              {/* Star Rating */}
              <div className="flex justify-center mb-6 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-accent fill-accent" 
                  />
                ))}
              </div>
              
              <blockquote className="text-lg font-medium mb-8 text-foreground leading-relaxed">
                "Weechoo has transformed how we handle workplace dining. Our employees love the variety and convenience, while our HR team appreciates the seamless administration."
              </blockquote>
              
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Esther Lamptey</div>
                  <div className="text-sm text-muted-foreground">Human Resources, Pavelon Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCustomers;