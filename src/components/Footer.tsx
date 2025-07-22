import { Phone, Mail, Linkedin, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import kothiwalLogo from "@/assets/kothiwal-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={kothiwalLogo} alt="Kothiwal Group" className="h-12 w-12" />
              <span className="text-2xl font-bold">Kothiwal Group</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              A diversified business group committed to excellence across multiple sectors, 
              building sustainable growth and community development.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9415001967</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@kothiwal.com" className="hover:underline">
                  info@kothiwal.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Kanpur, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:underline">Home</Link>
              <Link to="/about" className="block hover:underline">About Us</Link>
              <Link to="/contact" className="block hover:underline">Contact</Link>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-sm font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-primary-foreground/80 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Kothiwal Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;