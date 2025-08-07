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