import { Button } from "@/components/ui/button";
import { Users, ChefHat, Building2, Tablet } from "lucide-react";

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
      </div>
    </section>
  );
};

export default PlatformServices;