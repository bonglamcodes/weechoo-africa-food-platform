import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Globe, Users, Zap, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Community First",
      description: "We believe in building strong relationships with our vendors, institutions, and employees across Africa."
    },
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "Pan-African Vision",
      description: "Our goal is to transform food infrastructure across the entire African continent."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Innovation Driven",
      description: "We leverage cutting-edge technology to solve real-world food challenges in Africa."
    },
    {
      icon: <Award className="w-8 h-8 text-primary-glow" />,
      title: "Quality Assured",
      description: "Every meal, every vendor, every experience is held to the highest standards of quality."
    }
  ];

  const team = [
    {
      name: "African Food Experts",
      role: "Culinary Leadership",
      description: "Local food experts who understand the diverse tastes and preferences across Africa."
    },
    {
      name: "Technology Innovators",
      role: "Platform Development",
      description: "World-class engineers building scalable solutions for Africa's unique challenges."
    },
    {
      name: "Operations Excellence",
      role: "Service Delivery",
      description: "Logistics and operations experts ensuring seamless food delivery experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">About</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Weechoo</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're on a mission to revolutionize Africa's food infrastructure by connecting institutions, vendors, and employees through innovative cloud kitchen technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-foreground">Our</span>
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To build the food infrastructure Africa deserves. We're creating a comprehensive ecosystem that empowers local food vendors, simplifies corporate meal programs, and delivers exceptional dining experiences to employees across the continent.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through our cloud kitchen platform, we're not just delivering meals – we're fostering economic growth, supporting local businesses, and nourishing communities one delivery at a time.
                </p>
              </div>
              <div className="bg-gradient-warm rounded-2xl p-8">
                <div className="text-center">
                  <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be Africa's leading cloud kitchen platform, transforming how millions of people access, enjoy, and experience food across the continent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do as we build the future of food in Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A diverse group of passionate professionals committed to transforming Africa's food landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {team.map((member, index) => (
                <Card key={index} className="border-border/20 bg-card/50 hover:shadow-warm transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4"></div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-primary font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Since our launch, we've been making a meaningful difference across Africa's food ecosystem.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Partner Vendors</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
                <p className="text-muted-foreground">Daily Meals Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">25+</div>
                <p className="text-muted-foreground">Corporate Partners</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
              <p className="text-muted-foreground mb-8">
                Be part of the revolution that's transforming Africa's food infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/institution-onboarding">
                  <Button variant="hero" size="lg">
                    Partner With Us
                  </Button>
                </Link>
                <Link to="/book-demo">
                  <Button variant="outline" size="lg">
                    Schedule a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;