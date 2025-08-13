import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import KitchenService from "./pages/KitchenService";
import POSTablets from "./pages/POSTablets";
import WhiteLabelFulfillment from "./pages/WhiteLabelFulfillment";
import InstitutionOnboarding from "./pages/InstitutionOnboarding";
import VendorOnboarding from "./pages/VendorOnboarding";
import SignIn from "./pages/SignIn";
import BookDemo from "./pages/BookDemo";
import AboutUs from "./pages/AboutUs";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import EmployeeMenu from "./pages/EmployeeMenu";
import EmployeeOrderTracking from "./pages/EmployeeOrderTracking";
import EmployerDashboard from "./pages/EmployerDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/kitchen-service" element={<KitchenService />} />
          <Route path="/pos-tablets" element={<POSTablets />} />
          <Route path="/white-label-fulfillment" element={<WhiteLabelFulfillment />} />
          <Route path="/institution-onboarding" element={<InstitutionOnboarding />} />
          <Route path="/vendor-onboarding" element={<VendorOnboarding />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/employee-menu" element={<EmployeeMenu />} />
          <Route path="/employee-tracking" element={<EmployeeOrderTracking />} />
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
