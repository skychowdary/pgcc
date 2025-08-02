
import { Link } from "react-router-dom";
import { FileText, Calculator, Building } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "U.S. Tax Solutions",
    description: "Comprehensive tax planning and compliance for individuals and corporations navigating U.S. tax obligations.",
    link: "/services/taxation"
  },
  {
    icon: Calculator,
    title: "Canada Tax Compliance",
    description: "Expert guidance on Canadian tax regulations, including T1, T2, and cross-border reporting requirements.",
    link: "/services/taxation"
  },
  {
    icon: Building,
    title: "Indian Taxation & Compliance",
    description: "Complete tax solutions including ITR, GST, TDS, and regulatory compliance for Indian operations.",
    link: "/services/taxation"
  }
];

export const ServicesPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card bg-secondary text-white">
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="text-primary hover:text-primary/80 font-medium transition-colors inline-flex items-center"
                >
                  Explore Services →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
