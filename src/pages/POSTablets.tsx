import Header from "@/components/Header";
import Footer from "@/components/Footer";
import posSystemImage from "@/assets/pos-system-hero.jpg";
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

        <div className="bg-gradient-warm p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Complete POS Solution</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Hardware Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 10.1" HD touchscreen display</li>
                <li>• Built-in receipt printer</li>
                <li>• Card payment terminal</li>
                <li>• Cash drawer integration</li>
                <li>• Barcode scanner</li>
                <li>• WiFi and 4G connectivity</li>
                <li>• Long-lasting battery</li>
                <li>• Durable design for kitchen use</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Software Capabilities</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Menu management system</li>
                <li>• Order tracking and notifications</li>
                <li>• Customer management</li>
                <li>• Sales reporting and analytics</li>
                <li>• Integration with Weechoo platform</li>
                <li>• Multi-payment options (cash, card, mobile)</li>
                <li>• Offline mode capability</li>
                <li>• Real-time synchronization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Starter Package</h3>
            <div className="border rounded-lg p-6">
              <p className="text-3xl font-bold text-primary mb-2">GHS 2,500</p>
              <p className="text-sm text-muted-foreground mb-4">One-time purchase</p>
              <ul className="text-sm space-y-2 mb-6">
                <li>• 1 POS Tablet</li>
                <li>• Receipt Printer</li>
                <li>• Basic Support</li>
                <li>• Setup & Training</li>
              </ul>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Business Package</h3>
            <div className="border-2 border-primary rounded-lg p-6">
              <p className="text-3xl font-bold text-primary mb-2">GHS 4,800</p>
              <p className="text-sm text-muted-foreground mb-4">One-time purchase</p>
              <ul className="text-sm space-y-2 mb-6">
                <li>• 2 POS Tablets</li>
                <li>• Receipt Printer</li>
                <li>• Card Payment Terminal</li>
                <li>• Premium Support</li>
                <li>• Advanced Analytics</li>
              </ul>
              <Button variant="hero" className="w-full">
                Most Popular
              </Button>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Enterprise Package</h3>
            <div className="border rounded-lg p-6">
              <p className="text-3xl font-bold text-primary mb-2">Custom</p>
              <p className="text-sm text-muted-foreground mb-4">Contact for pricing</p>
              <ul className="text-sm space-y-2 mb-6">
                <li>• Multiple POS Tablets</li>
                <li>• Full Hardware Suite</li>
                <li>• White-label Options</li>
                <li>• 24/7 Support</li>
                <li>• Custom Integration</li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
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