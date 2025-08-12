import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Truck, Package, Star } from "lucide-react";

const WhiteLabelFulfillment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              White-Label Fulfillment
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete production and delivery solutions for digital food brands. Focus on your brand while we handle the operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-card p-6 rounded-lg border">
            <Package className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Production</h3>
            <p className="text-muted-foreground">We produce your food items to your exact specifications and quality standards.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <Truck className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Delivery Network</h3>
            <p className="text-muted-foreground">Reliable delivery across Accra and major cities in Ghana with real-time tracking.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <Star className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Quality Control</h3>
            <p className="text-muted-foreground">Rigorous quality assurance processes ensure your brand maintains its reputation.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Brand Support</h3>
            <p className="text-muted-foreground">Your brand, our execution. Complete white-label solution for digital food businesses.</p>
          </div>
        </div>

        <div className="bg-gradient-warm p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">How Our Partnership Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h3 className="font-semibold mb-2">Brand Setup</h3>
              <p className="text-sm text-muted-foreground">We create your branded food platform</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h3 className="font-semibold mb-2">Menu Curation</h3>
              <p className="text-sm text-muted-foreground">Our chefs develop your signature menu</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h3 className="font-semibold mb-2">Production</h3>
              <p className="text-sm text-muted-foreground">We handle all cooking and packaging</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                4
              </div>
              <h3 className="font-semibold mb-2">Delivery</h3>
              <p className="text-sm text-muted-foreground">Fast delivery to your customers</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Partnership Benefits</h2>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Zero Operational Burden</h4>
                  <p className="text-sm text-muted-foreground">We handle everything from cooking to delivery</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Revenue Sharing</h4>
                  <p className="text-sm text-muted-foreground">Earn 30-50% commission on every order</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Brand Control</h4>
                  <p className="text-sm text-muted-foreground">Full customization of your food brand</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Scalable Growth</h4>
                  <p className="text-sm text-muted-foreground">Expand to new markets without infrastructure</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Ideal Partners</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold">Influencers & Content Creators</h4>
                <p className="text-sm text-muted-foreground">Monetize your audience with your own food brand</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold">Restaurants</h4>
                <p className="text-sm text-muted-foreground">Expand delivery reach without additional kitchens</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold">Food Entrepreneurs</h4>
                <p className="text-sm text-muted-foreground">Launch your food concept without capital investment</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold">Corporate Partners</h4>
                <p className="text-sm text-muted-foreground">Employee meal programs under your company brand</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl">
            Partner With Us
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Launching Q2 2024 in Ghana
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhiteLabelFulfillment;