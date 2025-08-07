import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tablet, BarChart3, CreditCard, Smartphone } from "lucide-react";

const POSTablets = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              POS & Smart Tablets
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete point-of-sale solution with smart tablets for seamless order management and analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-card p-6 rounded-lg border">
            <Tablet className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Smart Tablets</h3>
            <p className="text-muted-foreground">Intuitive tablet interface for taking orders and managing your restaurant operations.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <CreditCard className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Payment Processing</h3>
            <p className="text-muted-foreground">Accept multiple payment methods including mobile money, cards, and cash.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <BarChart3 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Real-time Analytics</h3>
            <p className="text-muted-foreground">Track sales, inventory, and customer preferences with comprehensive dashboards.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <Smartphone className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Mobile Integration</h3>
            <p className="text-muted-foreground">Sync with mobile apps for complete order management across all channels.</p>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl">
            Request Demo
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Available for pre-order in Ghana
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default POSTablets;