
import { Link } from "react-router-dom";
import { Building, Users, FileText, Calculator, Shield, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const Outsourcing = () => {
  const services = [
    {
      icon: FileText,
      title: "Bookkeeping Services",
      description: "Complete bookkeeping services including accounts payable, accounts receivable, and general ledger maintenance."
    },
    {
      icon: Calculator,
      title: "Financial Reporting",
      description: "Monthly, quarterly, and annual financial statements with detailed analysis and insights."
    },
    {
      icon: Users,
      title: "Payroll Processing",
      description: "End-to-end payroll services including calculations, tax filings, and compliance management."
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Ensure regulatory compliance across multiple jurisdictions with expert oversight."
    },
    {
      icon: TrendingUp,
      title: "Process Optimization",
      description: "Streamline financial processes and implement best practices for improved efficiency."
    },
    {
      icon: Building,
      title: "Technology Integration",
      description: "Implement and optimize financial software solutions for enhanced productivity."
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Reduce operational costs by 30-50% compared to in-house accounting departments."
    },
    {
      title: "Expert Access",
      description: "Access to specialized expertise across multiple jurisdictions and industries."
    },
    {
      title: "Scalability",
      description: "Flexible services that grow with your business needs and requirements."
    },
    {
      title: "Technology",
      description: "Access to cutting-edge financial technology and automation tools."
    },
    {
      title: "Compliance",
      description: "Ensure regulatory compliance with expert knowledge of local and international requirements."
    },
    {
      title: "Focus",
      description: "Free up internal resources to focus on core business activities and growth."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive evaluation of your current processes and outsourcing needs."
    },
    {
      step: "02",
      title: "Planning",
      description: "Development of customized outsourcing strategy and implementation plan."
    },
    {
      step: "03",
      title: "Transition",
      description: "Smooth transition of processes with minimal disruption to operations."
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous improvement and optimization of outsourced processes."
    }
  ];

  const packages = [
    {
      title: "Starter",
      description: "Essential outsourcing services for small businesses",
      features: [
        "Monthly bookkeeping",
        "Basic financial reporting",
        "Payroll processing",
        "Tax filing support",
        "Email and phone support"
      ],
      recommended: false
    },
    {
      title: "Professional",
      description: "Comprehensive outsourcing for growing businesses",
      features: [
        "Weekly bookkeeping",
        "Detailed financial reporting",
        "Advanced payroll services",
        "Compliance management",
        "Process optimization",
        "Dedicated account manager"
      ],
      recommended: true
    },
    {
      title: "Enterprise",
      description: "Full-service outsourcing for large organizations",
      features: [
        "Daily bookkeeping",
        "Real-time reporting",
        "Multi-jurisdiction payroll",
        "Advanced compliance",
        "Technology integration",
        "Dedicated team",
        "24/7 support"
      ],
      recommended: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Outsourcing Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Complete accounting and bookkeeping outsourcing solutions for businesses of all sizes
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Building className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
                Streamlined Financial Operations
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our outsourcing services provide complete accounting and bookkeeping solutions 
                that help businesses reduce costs, improve efficiency, and focus on core activities. 
                We handle all aspects of financial operations with expert precision and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our Outsourcing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-montserrat font-bold text-secondary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Benefits of Outsourcing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-montserrat font-bold text-secondary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Outsourcing Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-lg border-2 ${pkg.recommended ? 'border-primary' : 'border-gray-200'}`}>
                {pkg.recommended && (
                  <div className="bg-primary text-white text-center py-2 px-4 rounded-full text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-montserrat font-bold text-secondary mb-2">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    pkg.recommended 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'bg-gray-100 text-secondary hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our Outsourcing Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-secondary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary text-white p-8 rounded-lg">
              <h2 className="text-2xl font-montserrat font-bold mb-4">
                Success Story: Manufacturing Efficiency
              </h2>
              <p className="text-lg mb-6">
                "By outsourcing our accounting operations to PGC, we reduced our financial 
                processing costs by 45% while improving accuracy and compliance. Their 
                expertise in multi-jurisdiction operations has been invaluable for our 
                global expansion."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-gray-200">CFO, Global Manufacturing Co.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our outsourcing experts help you streamline your financial operations and reduce costs.
          </p>
          <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Outsourcing;
