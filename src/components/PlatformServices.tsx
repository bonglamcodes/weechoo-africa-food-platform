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

        {/* Featured Dish Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-8 border border-border/20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Authentic African Cuisine
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Experience the rich flavors of traditional African dishes, prepared with fresh ingredients and authentic recipes by our certified chefs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <ChefHat className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Locally sourced ingredients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">Traditional cooking methods</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Tablet className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">Daily fresh preparation</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={featuredDish} 
                  alt="Traditional Jollof Rice with grilled chicken and vegetables"
                  className="rounded-2xl shadow-warm w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformServices;