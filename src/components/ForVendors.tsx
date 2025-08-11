import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, MapPin, Truck, DollarSign, Shield, ChefHat, BarChart, ArrowRight } from "lucide-react";
import vendorImage from "@/assets/professional-kitchen.jpg";
import modernKitchenPartners from "@/assets/modern-kitchen-partners.jpg";

const ForVendors = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Access Thousands of Companies",
      description: "Reach corporate customers across Africa without the hassle of individual business development."
    },
    {
      icon: <MapPin className="w-8 h-8 text-secondary" />,
      title: "Cloud Kitchen Infrastructure",
      description: "Use our certified commercial kitchens, equipment, and facilities to scale your operations."
    },
    {
      icon: <Truck className="w-8 h-8 text-accent" />,
      title: "Logistics Support",
      description: "We handle delivery, packaging, and distribution so you can focus on cooking amazing food."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary-glow" />,
      title: "Steady Revenue Stream",
      description: "Predictable daily orders from corporate clients provide stable income for your business."
    },
    {
      icon: <BarChart className="w-8 h-8 text-secondary" />,
      title: "Data & Analytics",
      description: "Access detailed insights about customer preferences, popular dishes, and peak ordering times."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Quality Assurance",
      description: "Our quality control team ensures food safety standards and customer satisfaction metrics."
    }
  ];

  return (
    <section id="vendors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src={vendorImage} 
                alt="Professional cloud kitchen environment" 
                className="rounded-2xl shadow-warm w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">For</span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">Food Vendors</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Join Africa's fastest-growing cloud kitchen ecosystem. Access thousands of corporate clients, world-class infrastructure, and the tools you need to scale.
              </p>
              <Button variant="secondary" size="lg">
                Join Our Ecosystem
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
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

        {/* Success Story */}
        <div className="bg-gradient-warm rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                  <ChefHat className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Chef Akwasi Kitchen</h3>
                  <p className="text-muted-foreground">Accra, Ghana</p>
                </div>
              </div>
              <blockquote className="text-xl font-medium mb-6 text-foreground">
                "Joining Weechoo transformed my small catering business into a thriving operation serving 15+ companies daily. The infrastructure support is incredible."
              </blockquote>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">300%</p>
                  <p className="text-sm text-muted-foreground">Revenue Growth</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">15+</p>
                  <p className="text-sm text-muted-foreground">Corporate Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">2k+</p>
                  <p className="text-sm text-muted-foreground">Daily Orders</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-background/20 backdrop-blur-sm rounded-lg p-6 border border-border/20">
                <h4 className="font-semibold mb-4 text-foreground">Monthly Performance</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Orders Completed</span>
                    <span className="font-semibold text-foreground">2,847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Customer Rating</span>
                    <span className="font-semibold text-foreground">4.9/5.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Revenue</span>
                    <span className="font-semibold text-primary">₦847,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Growth Rate</span>
                    <span className="font-semibold text-secondary flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +23%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Partner With */}
        <div className="relative rounded-3xl overflow-hidden mb-16 shadow-elegant">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent z-10"></div>
          <img 
            src={modernKitchenPartners} 
            alt="Modern professional kitchen with chefs working" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h3 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
                  Who We Partner With
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-4 h-4 bg-white rounded-full mb-3"></div>
                    <p className="text-xl text-white font-semibold mb-2">Restaurant Chains</p>
                    <p className="text-white/80 text-sm">Established brands looking to expand their reach</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-4 h-4 bg-secondary rounded-full mb-3"></div>
                    <p className="text-xl text-white font-semibold mb-2">Local Restaurants</p>
                    <p className="text-white/80 text-sm">Community favorites ready to scale operations</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="w-4 h-4 bg-accent rounded-full mb-3"></div>
                    <p className="text-xl text-white font-semibold mb-2">Food Entrepreneurs</p>
                    <p className="text-white/80 text-sm">Innovative chefs building the future of food</p>
                  </div>
                </div>
                <p className="text-xl text-white/90 leading-relaxed">
                  From established restaurant chains to innovative food entrepreneurs, we provide world-class infrastructure and support to scale your culinary business across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl">
            Join as Vendor
          </Button>
          <p className="text-sm text-muted-foreground mt-4">Application review in 3-5 business days • No upfront costs</p>
        </div>
      </div>
    </section>
  );
};

export default ForVendors;