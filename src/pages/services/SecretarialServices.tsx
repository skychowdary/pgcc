
import { Link } from "react-router-dom";
import { Users, FileText, Shield, Target, Calendar, CheckCircle, ArrowRight } from "lucide-react";

const SecretarialServices = () => {
  const services = [
    {
      icon: FileText,
      title: "Corporate Governance",
      description: "Comprehensive corporate governance support including board meetings and compliance."
    },
    {
      icon: Users,
      title: "Board Support",
      description: "Professional support for board meetings, minutes, and corporate resolutions."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Ensure compliance with corporate laws and regulatory requirements across jurisdictions."
    },
    {
      icon: Target,
      title: "Corporate Filings",
      description: "Timely filing of corporate documents and regulatory submissions."
    },
    {
      icon: Calendar,
      title: "Annual Compliance",
      description: "Annual compliance services including AGMs and statutory filings."
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Professional management of corporate documents and statutory registers."
    }
  ];

  const benefits = [
    {
      title: "Regulatory Compliance",
      description: "Ensure full compliance with corporate laws and regulatory requirements."
    },
    {
      title: "Professional Support",
      description: "Access to experienced corporate secretarial professionals and expertise."
    },
    {
      title: "Risk Mitigation",
      description: "Reduce compliance risks and avoid penalties through expert guidance."
    },
    {
      title: "Time Savings",
      description: "Free up management time to focus on core business activities."
    },
    {
      title: "Cost Efficiency",
      description: "Cost-effective alternative to in-house corporate secretarial functions."
    },
    {
      title: "Multi-jurisdiction",
      description: "Support across multiple jurisdictions with local expertise and knowledge."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive assessment of current corporate governance and compliance status."
    },
    {
      step: "02",
      title: "Planning",
      description: "Development of corporate governance strategy and compliance plan."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Implementation of corporate governance framework and compliance procedures."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous support and monitoring to ensure ongoing compliance."
    }
  ];

  const serviceTypes = [
    {
      title: "Corporate Governance",
      description: "Comprehensive corporate governance support and advisory services.",
      features: [
        "Board meeting support",
        "Corporate resolutions",
        "Governance framework",
        "Policy development",
        "Compliance monitoring"
      ]
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure compliance with corporate laws and regulatory requirements.",
      features: [
        "Statutory filings",
        "Regulatory submissions",
        "Compliance reporting",
        "Audit support",
        "Risk management"
      ]
    },
    {
      title: "Document Management",
      description: "Professional management of corporate documents and records.",
      features: [
        "Corporate registers",
        "Document filing",
        "Record keeping",
        "Digital archiving",
        "Access management"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Secretarial Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Corporate governance and compliance support for businesses of all sizes
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
                Professional Corporate Governance
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our secretarial services provide comprehensive corporate governance and compliance 
                support to ensure your business meets all regulatory requirements. We help 
                businesses maintain proper corporate structure and governance while focusing 
                on their core operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our Secretarial Services
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

      {/* Service Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Types of Secretarial Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-montserrat font-bold text-secondary mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Benefits of Professional Secretarial Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
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

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our Secretarial Process
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
                Success Story: Compliance Excellence
              </h2>
              <p className="text-lg mb-6">
                "PGC's secretarial services helped us achieve 100% regulatory compliance 
                across all our jurisdictions. Their expertise in corporate governance 
                and regulatory requirements has been invaluable for our international expansion."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Lisa Anderson</p>
                  <p className="text-gray-200">General Counsel, Global Enterprises</p>
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
            Ready for Professional Governance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our secretarial experts help you maintain proper corporate governance and compliance.
          </p>
          <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SecretarialServices;
