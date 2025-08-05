import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Rocket, Globe, Award, Users, TrendingUp } from "lucide-react";

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

        {/* Mission Statement */}
        <div className="bg-gradient-warm rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h3>
            <blockquote className="text-2xl font-medium mb-8 text-foreground leading-relaxed">
              "To build the comprehensive food infrastructure that institutions across Africa need, while empowering local food entrepreneurs to scale and thrive in the digital economy."
            </blockquote>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">100+</div>
                <div className="text-muted-foreground">Food Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">10k+</div>
                <div className="text-muted-foreground">Daily Meals</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border/20 bg-card/50 hover:shadow-warm transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                    {milestone.year}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">The Road Ahead</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We're not just building a food delivery service. We're creating the infrastructure that will power the next generation of food businesses across Africa.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Rocket className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Kitchen-as-a-Service platform for food entrepreneurs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-secondary" />
                  <span className="text-foreground">White-label fulfillment for digital food brands</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  <span className="text-foreground">Platform licensing across African markets</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-hero/10 rounded-lg p-8 text-center">
              <h4 className="text-2xl font-bold mb-4 text-foreground">2026 Vision</h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-muted-foreground text-sm">African Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-muted-foreground text-sm">Partner Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                  <div className="text-muted-foreground text-sm">Cloud Kitchens</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-glow mb-2">100k+</div>
                  <div className="text-muted-foreground text-sm">Daily Orders</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to be part of Africa's food revolution?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Join as Institution
            </Button>
            <Button variant="secondary" size="xl">
              Become a Vendor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;