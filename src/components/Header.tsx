import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import weechooLogo from "@/assets/weechoo-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={weechooLogo} alt="Weechoo" className="h-8 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#institutions" className="text-foreground hover:text-primary transition-colors font-medium">
              For Institutions
            </a>
            <a href="#vendors" className="text-foreground hover:text-primary transition-colors font-medium">
              For Vendors
            </a>
            <a href="#employees" className="text-foreground hover:text-primary transition-colors font-medium">
              Employee Portal
            </a>
            <a href="/how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#customers" className="text-foreground hover:text-primary transition-colors font-medium">
              Our Customers
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/20">
            <div className="flex flex-col space-y-4">
              <a href="#institutions" className="text-foreground hover:text-primary transition-colors font-medium">
                For Institutions
              </a>
              <a href="#vendors" className="text-foreground hover:text-primary transition-colors font-medium">
                For Vendors
              </a>
              <a href="#employees" className="text-foreground hover:text-primary transition-colors font-medium">
                Employee Portal
              </a>
              <a href="/how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
                How It Works
              </a>
              <a href="#customers" className="text-foreground hover:text-primary transition-colors font-medium">
                Our Customers
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button variant="default" size="sm">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;