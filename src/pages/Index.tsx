import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ForInstitutions from "@/components/ForInstitutions";
import ForEmployees from "@/components/ForEmployees";
import ForVendors from "@/components/ForVendors";
import PlatformTech from "@/components/PlatformTech";
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
      <PlatformTech />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
