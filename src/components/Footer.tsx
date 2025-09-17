
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Email: info@pgcglobal.in</p>
              <p>Phone: 8895458388</p>
              <div>
                <p className="font-medium text-white">India HQ:</p>
                <p>Hyderabad</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/people" className="block text-sm text-gray-300 hover:text-white transition-colors">
                People
              </Link>
              <Link to="/why-pgc" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Why PGC
              </Link>
              <Link to="/contact" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Resources</h3>
            <div className="space-y-2">
              <Link to="/knowledge-center" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Knowledge Center
              </Link>
              <Link to="/life-at-pgc" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Life at PGC
              </Link>
              <Link to="/contact" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col items-center space-y-4">
            <img src="/pgc-logo.png" alt="PGC Logo" className="h-14 w-auto object-contain" />
            <p className="text-sm text-gray-400">
              © 2025 Precedence Global Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
