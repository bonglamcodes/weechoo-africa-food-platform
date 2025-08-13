import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, Star, Shield, CheckCircle, Smartphone, Bell, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import officeLunchImage from "@/assets/office-lunch.jpg";

const ForEmployees = () => {
  const benefits = [
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Weekly Menu Planning",
      description: "Order your entire week's meals every Friday for the following week",
      color: "primary"
    },
    {
      icon: <Clock className="w-8 h-8 text-secondary" />,
      title: "Time-Saving",
      description: "No more lunch queues or meal decisions - everything pre-ordered and delivered",
      color: "secondary"
    },
    {
      icon: <Star className="w-8 h-8 text-accent" />,
      title: "Quality Assured",
      description: "Every meal from verified vendors with quality guarantees",
      color: "accent"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-glow" />,
      title: "Secure Payments",
      description: "Company-sponsored meals with seamless billing integration",
      color: "primary-glow"
    }
  ];

  return (
    <section id="employees" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with Large Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src={officeLunchImage} 
                alt="Professional employees enjoying lunch in modern office setting"
                className="rounded-3xl shadow-warm w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl"></div>
            </div>
            <div className="text-left">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-hero bg-clip-text text-transparent">Employee Portal</span>
                <br />
                <span className="text-foreground">Simplified</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                An elegant, easy-to-use platform that turns meal ordering into a delight. Your team will enjoy a smooth, stress-free experience—every single time.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 bg-card/60 backdrop-blur-sm hover:shadow-warm transition-all duration-300 hover:scale-105 hover:bg-card/80">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 rounded-2xl bg-${benefit.color}/10`}>
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Portal Preview Section */}
          <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-border/20 mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Experience the Portal
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Our intuitive interface makes meal selection and ordering a delightful experience for every employee.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Real-time menu updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">Smart notification system</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Dietary preference tracking</span>
                  </div>
                </div>

                <Link to="/book-demo">
                  <Button variant="hero" size="lg" className="group">
                    View Portal Demo
                    <Smartphone className="ml-2 group-hover:rotate-12 transition-transform" size={20} />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <div className="bg-gradient-warm rounded-2xl p-1">
                  <div className="bg-background rounded-2xl p-6">
                    {/* Mock Portal Interface */}
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-semibold">Hello, Kwame! 👋</h4>
                      <div className="flex items-center gap-2">
                        <Bell className="w-5 h-5 text-muted-foreground" />
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 rounded-xl p-4 mb-6">
                      <h5 className="font-medium mb-2">This Week's Menu</h5>
                      <p className="text-sm text-muted-foreground">Week of March 18-22, 2024 • Akosombo Kitchen, Accra</p>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { day: "Monday", meal: "Jollof Rice & Grilled Chicken", price: "₵25", status: "ordered" },
                        { day: "Tuesday", meal: "Waakye with Fish", price: "₵22", status: "ordered" },
                        { day: "Wednesday", meal: "Banku & Tilapia", price: "₵28", status: "available" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{item.day}</p>
                            <p className="text-xs text-muted-foreground">{item.meal}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-sm">{item.price}</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              item.status === 'ordered' 
                                ? 'bg-primary/10 text-primary' 
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              {item.status === 'ordered' ? 'Ordered' : 'Available'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Company Sponsored</span>
                      </div>
                      <Button size="sm" variant="hero">Complete Order</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ForEmployees;