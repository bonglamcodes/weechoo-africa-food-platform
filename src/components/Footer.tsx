import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import weechooLogo from "@/assets/weechoo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
             
              <img src={weechooLogo} alt="Weechoo Logo" className="h-12 rounded-sm w-auto" />
            </div>
            <p className="text-background/80">
              Building Africa's premier cloud kitchen and institutional food infrastructure platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#institutions" className="text-background/80 hover:text-primary transition-colors">For Institutions</a></li>
              <li><a href="#vendors" className="text-background/80 hover:text-primary transition-colors">For Vendors</a></li>
              <li><a href="#employees" className="text-background/80 hover:text-primary transition-colors">Employee Portal</a></li>
              <li><a href="#platform" className="text-background/80 hover:text-primary transition-colors">Platform & Tech</a></li>
              <li><a href="#about" className="text-background/80 hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-background/80">Corporate Meal Programs</span></li>
              <li><span className="text-background/80">Cloud Kitchen Infrastructure</span></li>
              <li><span className="text-background/80">Kitchen-as-a-Service <em className="text-background/60">(Coming Soon)</em></span></li>
              <li><span className="text-background/80">White-Label Fulfillment <em className="text-background/60">(Coming Soon)</em></span></li>
              <li><span className="text-background/80">POS & Smart Tablets <em className="text-background/60">(Coming Soon)</em></span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-background/80">hello@weechoo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-background/80">0504579633</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-background/80">Accra, Ghana</span>
              </div>
            </div>
            <div className="pt-4">
              <Button variant="default" size="sm">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 Weechoo. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;