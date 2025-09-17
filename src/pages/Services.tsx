
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { 
  FileText, 
  Building, 
  Calculator, 
  BarChart3, 
  TrendingUp, 
  FileSpreadsheet, 
  Users, 
  Lightbulb,
  Calendar
} from "lucide-react";

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle anchor scrolling when the component mounts or location changes
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          const headerHeight = 80; // Height of fixed header
          const elementPosition = element.offsetTop - headerHeight - 20; // 20px padding
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);
  const services = [
    {
      icon: FileText,
      title: "Bookkeeping",
      description: "Professional bookkeeping services for accurate financial records",
      link: "/services/bookkeeping",
      id: "bookkeeping"
    },
    {
      icon: FileText,
      title: "Taxation",
      description: "Comprehensive tax planning and compliance services",
      link: "/services/taxation",
      id: "taxation"
    },
    {
      icon: Building,
      title: "Outsourcing Services",
      description: "Complete accounting and bookkeeping outsourcing",
      link: "/services/outsourcing",
      id: "outsourcing-services"
    },
    {
      icon: Calculator,
      title: "Virtual CFO",
      description: "Strategic financial leadership and planning",
      link: "/services/virtual-cfo",
      id: "virtual-cfo"
    },
    {
      icon: BarChart3,
      title: "Financial Reporting Advisory",
      description: "Expert guidance on financial reporting standards",
      link: "/services/financial-reporting",
      id: "financial-reporting-advisory"
    },
    {
      icon: Lightbulb,
      title: "Advisory Services",
      description: "Strategic guidance and expert advice to navigate complex financial and tax landscapes",
      link: "/services/advisory",
      id: "advisory-services"
    },
    {
      icon: Calendar,
      title: "Retainer Services",
      description: "Ongoing, dedicated support and expert consultation to ensure continuous compliance and strategic alignment",
      link: "/services/retainer",
      id: "retainer-services"
    },
    {
      icon: TrendingUp,
      title: "Mergers & Acquisitions",
      description: "M&A advisory and due diligence services",
      link: "/services/mergers-acquisitions",
      id: "mergers-acquisitions"
    },
    {
      icon: FileSpreadsheet,
      title: "Valuations",
      description: "Business and asset valuation services",
      link: "/services/valuations",
      id: "valuations"
    },
    {
      icon: Users,
      title: "Secretarial Services",
      description: "Corporate governance and compliance support",
      link: "/services/secretarial",
      id: "secretarial-services"
    },

  ];



  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Strategic solutions for cross-border tax and finance across the United States, Canada, and India
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <div key={index} id={service.id}>
                  <div
                    onClick={() => navigate(service.link)}
                    className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block cursor-pointer"
                  >
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-montserrat font-bold text-secondary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our experts can design tailored strategies for your unique business needs.
          </p>
          <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
