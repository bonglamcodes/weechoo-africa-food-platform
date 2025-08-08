import { Button } from "@/components/ui/button";
import { Users, ChefHat, Building2, Tablet } from "lucide-react";
import featuredDish from "@/assets/jollof-rice-featured.jpg";

const PlatformServices = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Platform Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for every aspect of your food business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/20 hover:shadow-warm transition-all duration-300 hover:scale-105">
            <ChefHat className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-center">Food Vendors</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">Join our ecosystem and reach thousands of companies</p>
            <Button variant="accent" size="sm" className="w-full">
              Join as Vendor
            </Button>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/20 hover:shadow-warm transition-all duration-300 hover:scale-105">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-center">Kitchen-as-a-Service</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">Rent kitchen space and prep time for your business</p>
            <a href="/kitchen-service">
              <Button variant="default" size="sm" className="w-full">
                Read More
              </Button>
            </a>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/20 hover:shadow-warm transition-all duration-300 hover:scale-105">
            <Tablet className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-center">POS & Smart Tablets</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">Manage orders, invoices, and analytics seamlessly</p>
            <a href="/pos-tablets">
              <Button variant="default" size="sm" className="w-full">
                Read More
              </Button>
            </a>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/20 hover:shadow-warm transition-all duration-300 hover:scale-105">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-center">White-Label Fulfillment</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">Production and delivery for digital food brands</p>
            <a href="/white-label-fulfillment">
              <Button variant="default" size="sm" className="w-full">
                Read More
              </Button>
            </a>
          </div>
        </div>

        {/* Featured Dish Hero Section */}
        <div className="mt-16">
          <div className="relative min-h-[70vh] bg-gradient-warm overflow-hidden rounded-3xl">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img 
                src={featuredDish} 
                alt="Traditional Jollof Rice with grilled chicken and vegetables"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
            </div>

            <div className="relative container mx-auto px-8 py-20 lg:py-32">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-4xl lg:text-6xl font-bold mb-6 animate-float">
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Authentic African
                  </span>
                  <br />
                  <span className="text-foreground">Cuisine</span>
                </h3>
                
                <p className="text-xl lg:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                  Experience the rich flavors of traditional African dishes, prepared with fresh ingredients and authentic recipes.
                </p>

                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  From corporate lunch solutions to authentic dining experiences - every meal tells a story of Africa's culinary heritage.
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/20 hover:shadow-warm transition-all duration-300 hover:scale-105">
                    <ChefHat className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2 text-center">Locally Sourced</h4>
                    <p className="text-sm text-muted-foreground text-center">Fresh ingredients from local African farmers</p>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/20 hover:shadow-warm transition-all duration-300 hover:scale-105">
                    <Building2 className="w-8 h-8 text-secondary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2 text-center">Traditional Methods</h4>
                    <p className="text-sm text-muted-foreground text-center">Time-honored cooking techniques passed down generations</p>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/20 hover:shadow-warm transition-all duration-300 hover:scale-105">
                    <Tablet className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h4 className="font-semibold mb-2 text-center">Daily Fresh</h4>
                    <p className="text-sm text-muted-foreground text-center">Prepared fresh daily in certified cloud kitchens</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60 animate-float"></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 left-20 w-8 h-8 bg-accent rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformServices;