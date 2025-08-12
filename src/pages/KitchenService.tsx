import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Clock, Users, MapPin } from "lucide-react";

const KitchenService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Kitchen-as-a-Service
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional kitchen spaces and prep time for your culinary business. Scale without the overhead.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-6 rounded-lg border">
            <Building2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Professional Kitchens</h3>
            <p className="text-muted-foreground">Access fully equipped commercial kitchens with state-of-the-art equipment and facilities.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Flexible Hours</h3>
            <p className="text-muted-foreground">Book kitchen time that works for your schedule. From early morning prep to late-night operations.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Shared Resources</h3>
            <p className="text-muted-foreground">Connect with other culinary professionals and share resources in our collaborative spaces.</p>
          </div>
        </div>

        <div className="bg-gradient-warm p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h3 className="font-semibold mb-2">Book Your Slot</h3>
              <p className="text-sm text-muted-foreground">Reserve kitchen time through our easy booking system</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h3 className="font-semibold mb-2">Cook & Prep</h3>
              <p className="text-sm text-muted-foreground">Access fully equipped commercial kitchens</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h3 className="font-semibold mb-2">Scale Your Business</h3>
              <p className="text-sm text-muted-foreground">Grow without the overhead of owning a kitchen</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Pricing</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Hourly Rate</h3>
                <p className="text-2xl font-bold text-primary">GHS 50/hour</p>
                <p className="text-sm text-muted-foreground">Perfect for testing recipes or small batches</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Daily Rate</h3>
                <p className="text-2xl font-bold text-primary">GHS 300/day</p>
                <p className="text-sm text-muted-foreground">Ideal for regular production schedules</p>
              </div>
              <div className="border rounded-lg p-4 border-primary">
                <h3 className="font-semibold">Monthly Membership</h3>
                <p className="text-2xl font-bold text-primary">GHS 2,500/month</p>
                <p className="text-sm text-muted-foreground">Best value for growing food businesses</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Included Equipment</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Commercial-grade ovens and stoves</li>
              <li>• Industrial mixers and food processors</li>
              <li>• Refrigeration and freezer units</li>
              <li>• Food prep stations and cutting boards</li>
              <li>• Packaging and labeling equipment</li>
              <li>• Cleaning and sanitation supplies</li>
              <li>• Storage space for ingredients</li>
              <li>• WiFi and office facilities</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl">
            Join Waitlist
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Coming soon to Accra, Ghana
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KitchenService;