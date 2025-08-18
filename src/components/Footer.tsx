import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import weechooLogo from "@/assets/weechoo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
             
              <img src={weechooLogo} alt="Weechoo Logo" className="h-10 rounded-sm w-auto" />
            </div>
            <p className="text-background/80">
              Building Africa's premier cloud kitchen and institutional food infrastructure platform.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/weechoo/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-colors">
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
              <li><Link to="/institution-onboarding" className="text-background/80 hover:text-primary transition-colors">For Institutions</Link></li>
              <li><Link to="/vendor-onboarding" className="text-background/80 hover:text-primary transition-colors">For Vendors</Link></li>
              <li><Link to="/how-it-works" className="text-background/80 hover:text-primary transition-colors">Platform & Tech</Link></li>
              <li><Link to="/about" className="text-background/80 hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/institution-onboarding" className="text-background/80 hover:text-primary transition-colors">Corporate Meal Programs</Link></li>
              <li><Link to="/vendor-onboarding" className="text-background/80 hover:text-primary transition-colors">Cloud Kitchen Infrastructure</Link></li>
              <li><Link to="/kitchen-service" className="text-background/80 hover:text-primary transition-colors">Kitchen-as-a-Service <em className="text-background/60">(Coming Soon)</em></Link></li>
              <li><Link to="/white-label-fulfillment" className="text-background/80 hover:text-primary transition-colors">White-Label Fulfillment <em className="text-background/60">(Coming Soon)</em></Link></li>
              <li><Link to="/pos-tablets" className="text-background/80 hover:text-primary transition-colors">POS & Smart Tablets <em className="text-background/60">(Coming Soon)</em></Link></li>
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
              <Link to="/institution-onboarding">
                <Button variant="default" size="sm">
                  Get Started Today
                </Button>
              </Link>
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