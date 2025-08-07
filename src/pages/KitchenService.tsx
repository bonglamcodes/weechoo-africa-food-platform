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