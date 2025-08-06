import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Smartphone, Calendar, History, Settings, Clock, Star, ArrowRight } from "lucide-react";
import mobileAppImage from "@/assets/mobile-app-preview.jpg";

const ForEmployees = () => {
  return (
    <section id="employees" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Employee</span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">Web Portal</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Take control of your daily meals with our intuitive web portal. Browse menus, set preferences, and track your orders - all while keeping HR out of the process.
              </p>
              <Button variant="accent" size="lg">
                Access Portal
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={mobileAppImage} 
                alt="Employee portal mobile interface" 
                className="rounded-2xl shadow-warm w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Portal Demo */}
          <div className="order-2 lg:order-1">
            <Card className="bg-card shadow-warm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Daily Meal Selection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="email">Company Email</Label>
                  <Input id="email" placeholder="your.email@company.com" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <Button className="w-full" variant="default">
                  Access Portal
                </Button>
                
                {/* Sample Menu Preview */}
                <div className="border-t pt-6 mt-6">
                  <h4 className="font-semibold mb-4">Today's Menu Preview</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div>
                        <p className="font-medium">Jollof Rice with Grilled Chicken</p>
                        <p className="text-sm text-muted-foreground">Mama Kemi's Kitchen</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-accent fill-current" />
                        <span className="text-sm">4.8</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div>
                        <p className="font-medium">Vegetarian Curry Bowl</p>
                        <p className="text-sm text-muted-foreground">Green Garden Cafe</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-accent fill-current" />
                        <span className="text-sm">4.6</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div>
                        <p className="font-medium">Fish & Chips</p>
                        <p className="text-sm text-muted-foreground">Coastal Bites</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-accent fill-current" />
                        <span className="text-sm">4.7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Browse Daily/Weekly Menus</h3>
                <p className="text-muted-foreground">View all available meals from local vendors with detailed descriptions, ratings, and nutritional information.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dietary Preferences</h3>
                <p className="text-muted-foreground">Set your allergies, dietary restrictions, and preferences once. The system will automatically filter suitable options.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <History className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Order History & Tracking</h3>
                <p className="text-muted-foreground">Track your meal history, favorite dishes, and monitor delivery status in real-time.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-glow/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-glow" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Smart Order Cut-off</h3>
                <p className="text-muted-foreground">Automatic reminders and smart cut-off times ensure you never miss your meal selection deadline.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ForEmployees;