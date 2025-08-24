import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    path: "/",
    label: "Home"
  }, {
    path: "/about",
    label: "About Us"
  }, {
    path: "/people",
    label: "People"
  }, {
    path: "/services",
    label: "Services",
    hasDropdown: true
  }, {
    path: "/why-pgc",
    label: "Why PGC"
  }, {
    path: "/life-at-pgc",
    label: "Life at PGC"
  }, {
    path: "/contact",
    label: "Contact Us"
  }];
  const allServices = [
    { path: "/services#taxation", label: "Taxation" },
    { path: "/services#outsourcing-services", label: "Outsourcing Services" },
    { path: "/services#virtual-cfo", label: "Virtual CFO" },
    { path: "/services#financial-reporting-advisory", label: "Financial Reporting Advisory" },
    { path: "/services#advisory-services", label: "Advisory Services" },
    { path: "/services#retainer-services", label: "Retainer Services" },
    { path: "/services#mergers-acquisitions", label: "Mergers & Acquisitions" },
    { path: "/services#valuations", label: "Valuations" },
    { path: "/services#secretarial-services", label: "Secretarial Services" }
  ];
  return <header className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${isScrolled ? "bg-secondary shadow-lg" : "bg-secondary/90 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/pgc-logo.png" alt="PGC Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map(link => <div key={link.path} className="relative">
              {link.hasDropdown ? <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                  <Link to={link.path} className={`nav-link flex items-center gap-1 ${location.pathname === link.path ? "active" : ""}`}>
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  
                  {isServicesOpen && <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-2 z-10 max-h-96 overflow-y-auto">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-500">All Services</p>
                      </div>
                      {allServices.map(service => <Link key={service.path} to={service.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                          {service.label}
                        </Link>)}
                    </div>}
                </div> : <Link to={link.path} className={`nav-link ${location.pathname === link.path ? "active" : ""}`}>
                  {link.label}
                </Link>}
            </div>)}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-secondary-foreground p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-secondary shadow-lg lg:hidden">
            <nav className="container mx-auto px-4 py-4">
              {navLinks.map(link => (
                <div key={link.path} className="py-2">
                  <Link 
                    to={link.path} 
                    className="block text-secondary-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 mt-2">
                      {allServices.map(service => (
                        <Link 
                          key={service.path} 
                          to={service.path} 
                          className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>;
};