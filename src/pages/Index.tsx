import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ForInstitutions from "@/components/ForInstitutions";
import ForEmployees from "@/components/ForEmployees";
import ForVendors from "@/components/ForVendors";
import TrustedCustomers from "@/components/TrustedCustomers";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ForInstitutions />
      <ForEmployees />
      <ForVendors />
      <TrustedCustomers />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
