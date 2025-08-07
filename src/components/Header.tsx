import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import weechooLogo from "@/assets/weechoo-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img src={weechooLogo} alt="Weechoo" className="h-8 w-auto" />
            
            {/* Left side navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors font-medium flex items-center">
                  Platform
                  <ChevronDown className="ml-1" size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <a href="#institutions" className="w-full">For Institutions</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#vendors" className="w-full">For Vendors</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#employees" className="w-full">Employee Portal</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="/how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
                How It Works
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </a>
            </div>
          </div>
          
          {/* Right side navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#customers" className="text-foreground hover:text-primary transition-colors font-medium">
              Tour our Kitchen
            </a>
            <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
            </div>
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
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">Platform</p>
                <div className="pl-4 space-y-2">
                  <a href="#institutions" className="block text-foreground hover:text-primary transition-colors">
                    For Institutions
                  </a>
                  <a href="#vendors" className="block text-foreground hover:text-primary transition-colors">
                    For Vendors
                  </a>
                  <a href="#employees" className="block text-foreground hover:text-primary transition-colors">
                    Employee Portal
                  </a>
                </div>
              </div>
              <a href="/how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
                How It Works
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </a>
              <a href="#customers" className="text-foreground hover:text-primary transition-colors font-medium">
                Tour our Kitchen
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