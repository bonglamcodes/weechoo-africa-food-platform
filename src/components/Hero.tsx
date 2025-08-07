import { Button } from "@/components/ui/button";
import { ArrowRight, Users, ChefHat, Building2, Tablet } from "lucide-react";
import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-warm overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Weechoo Cloud Kitchen" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-float">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Your Infinite
            </span>
            <br />
            <span className="text-foreground">Cloud Kitchen</span>
            <br />
            <span className="text-primary">in Africa</span>
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Restaurants reimagined. Building the food infrastructure for Africa.
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            From corporate lunch solutions to cloud kitchen ecosystem - we're transforming how institutions and food vendors connect across the continent.
          </p>


          {/* Primary CTA */}
          <div className="mb-16">
            <Button variant="hero" size="xl" className="animate-pulse-glow">
              Join as Institution
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </div>

          {/* Sub-CTAs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/20 hover:shadow-warm transition-all duration-300 hover:scale-105">
              <ChefHat className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Food Vendors</h3>
              <p className="text-sm text-muted-foreground mb-4">Join our ecosystem and reach thousands of companies</p>
              <Button variant="accent" size="sm" className="w-full">
                Join as Vendor
              </Button>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/20 hover:shadow-warm transition-all duration-300 hover:scale-105">
              <Building2 className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Kitchen-as-a-Service</h3>
              <p className="text-sm text-muted-foreground mb-4">Rent kitchen space and prep time for your business</p>
              <Button variant="minimal" size="sm" className="w-full">
                Coming Soon
              </Button>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/20 hover:shadow-warm transition-all duration-300 hover:scale-105">
              <Tablet className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">POS & Smart Tablets</h3>
              <p className="text-sm text-muted-foreground mb-4">Manage orders, invoices, and analytics seamlessly</p>
              <Button variant="minimal" size="sm" className="w-full">
                Coming Soon
              </Button>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/20 hover:shadow-warm transition-all duration-300 hover:scale-105">
              <Users className="w-12 h-12 text-primary-glow mx-auto mb-4" />
              <h3 className="font-semibold mb-2">White-Label Fulfillment</h3>
              <p className="text-sm text-muted-foreground mb-4">Production and delivery for digital food brands</p>
              <Button variant="minimal" size="sm" className="w-full">
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60 animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-8 h-8 bg-accent rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;