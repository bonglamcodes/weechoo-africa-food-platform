import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Rocket, Globe, Award, Users, TrendingUp, ChefHat } from "lucide-react";

const AboutUs = () => {
  const milestones = [
    {
      year: "2022",
      title: "Founded",
      description: "Started as a corporate lunch provider in Lagos"
    },
    {
      year: "2023",
      title: "First Cloud Kitchen",
      description: "Opened our first certified commercial kitchen facility"
    },
    {
      year: "2024",
      title: "Platform Evolution",
      description: "Launched tech platform serving 50+ companies"
    },
    {
      year: "2025",
      title: "African Expansion",
      description: "Scaling across Kenya, Ghana, and South Africa"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Infrastructure First",
      description: "Building the foundational technology and physical infrastructure that the African food ecosystem needs to thrive."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Community Driven",
      description: "Empowering local food vendors and entrepreneurs with the tools and platforms to scale their businesses."
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Continental Vision",
      description: "Creating a unified food platform that connects institutions and vendors across all African markets."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Building</span>
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">Africa's Food Infrastructure</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From a lean start providing corporate lunches to becoming Africa's first comprehensive cloud kitchen and institutional food platform.
          </p>
        </div>

        {/* Interactive Demo Preview */}
        <div className="bg-gradient-warm rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">Experience Our Platform</h3>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              See how our intuitive platform transforms meal ordering and kitchen operations with real-time analytics and seamless workflows.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Demo Preview Cards */}
              <div className="space-y-6">
                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/20 hover:shadow-warm transition-all duration-300 cursor-pointer hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Employee Portal</h4>
                      <p className="text-sm text-muted-foreground">Intuitive meal ordering</p>
                    </div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="space-y-2">
                      <div className="h-3 bg-primary/30 rounded w-3/4"></div>
                      <div className="h-3 bg-secondary/30 rounded w-1/2"></div>
                      <div className="h-3 bg-accent/30 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/20 hover:shadow-warm transition-all duration-300 cursor-pointer hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <ChefHat className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Kitchen Dashboard</h4>
                      <p className="text-sm text-muted-foreground">Real-time operations</p>
                    </div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-8 bg-primary/20 rounded"></div>
                      <div className="h-8 bg-secondary/20 rounded"></div>
                      <div className="h-8 bg-accent/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Dashboard */}
              <div className="bg-card/60 backdrop-blur-sm p-8 rounded-xl border border-border/20">
                <h4 className="font-semibold text-foreground mb-6 text-center">Live Platform Stats</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Companies Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">Food Vendors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">10k+</div>
                    <div className="text-sm text-muted-foreground">Daily Meals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">4</div>
                    <div className="text-sm text-muted-foreground">African Markets</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border/20">
                  <Button variant="hero" className="w-full">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Transform your institution's meal experience</h3>
          <div className="flex justify-center">
            <Button variant="hero" size="xl">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;