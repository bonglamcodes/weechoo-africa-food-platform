import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Users, Eye, EyeOff } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (userType: "employer" | "employee") => {
    console.log(`${userType} login:`, formData);
    // Handle authentication here
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Welcome Back
              </span>
            </h1>
            <p className="text-muted-foreground">
              Sign in to access your account
            </p>
          </div>

          <Tabs defaultValue="employee" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="employee" className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Employee</span>
              </TabsTrigger>
              <TabsTrigger value="employer" className="flex items-center space-x-2">
                <Building2 className="w-4 h-4" />
                <span>Employer</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="employee">
              <Card className="border-2 border-primary/20 shadow-warm">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Employee Portal</CardTitle>
                  <CardDescription>
                    Access your meal benefits and place orders
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="employee-email">Work Email</Label>
                    <Input
                      id="employee-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employee-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="employee-password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Enter your password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="hero"
                    onClick={() => handleSubmit("employee")}
                  >
                    Sign In as Employee
                  </Button>
                  <div className="text-center">
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    Don't have access? Contact your HR department
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="employer">
              <Card className="border-2 border-secondary/20 shadow-warm">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle>Employer Dashboard</CardTitle>
                  <CardDescription>
                    Manage your organization's meal program
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="employer-email">Business Email</Label>
                    <Input
                      id="employer-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="admin@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employer-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="employer-password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Enter your password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    variant="secondary"
                    onClick={() => handleSubmit("employer")}
                  >
                    Sign In as Employer
                  </Button>
                  <div className="text-center">
                    <Link to="/forgot-password" className="text-sm text-secondary hover:underline">
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    New to Weechoo? <Link to="/institution-onboarding" className="text-secondary hover:underline">Get started here</Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Looking for something else?
            </p>
            <div className="space-y-2">
              <Link to="/vendor-onboarding">
                <Button variant="outline" className="w-full">
                  Join as a Food Vendor
                </Button>
              </Link>
              <Link to="/book-demo">
                <Button variant="outline" className="w-full">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignIn;