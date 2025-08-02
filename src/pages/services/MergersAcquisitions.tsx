
import { Link } from "react-router-dom";
import { TrendingUp, FileText, Users, Target, Shield, Calculator, CheckCircle, ArrowRight } from "lucide-react";

const MergersAcquisitions = () => {
  const services = [
    {
      icon: FileText,
      title: "Due Diligence",
      description: "Comprehensive financial, legal, and operational due diligence to assess target companies."
    },
    {
      icon: Calculator,
      title: "Valuation Analysis",
      description: "Detailed valuation analysis using multiple methodologies to determine fair market value."
    },
    {
      icon: Users,
      title: "Deal Structuring",
      description: "Strategic deal structuring to optimize tax efficiency and maximize value for all parties."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Comprehensive risk assessment and mitigation strategies for M&A transactions."
    },
    {
      icon: Target,
      title: "Integration Planning",
      description: "Post-merger integration planning to ensure smooth transition and value realization."
    },
    {
      icon: TrendingUp,
      title: "Strategic Advisory",
      description: "Strategic advisory services to guide M&A decisions and maximize transaction value."
    }
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      description: "Access to experienced M&A professionals with deep industry knowledge and expertise."
    },
    {
      title: "Value Maximization",
      description: "Strategic guidance to maximize transaction value and optimize deal structure."
    },
    {
      title: "Risk Mitigation",
      description: "Comprehensive risk assessment and mitigation strategies to protect your interests."
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure compliance with regulatory requirements across multiple jurisdictions."
    },
    {
      title: "Tax Optimization",
      description: "Tax-efficient deal structuring to minimize tax liabilities and maximize after-tax returns."
    },
    {
      title: "Integration Success",
      description: "Post-merger integration support to ensure successful value realization."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Strategy Development",
      description: "Develop M&A strategy aligned with business objectives and growth plans."
    },
    {
      step: "02",
      title: "Target Identification",
      description: "Identify and evaluate potential targets based on strategic fit and value potential."
    },
    {
      step: "03",
      title: "Due Diligence",
      description: "Comprehensive due diligence to assess target company's financial, legal, and operational status."
    },
    {
      step: "04",
      title: "Deal Execution",
      description: "Negotiate and execute transaction with optimal structure and terms."
    },
    {
      step: "05",
      title: "Integration",
      description: "Post-merger integration planning and execution to realize synergies and value."
    }
  ];

  const dealTypes = [
    {
      title: "Mergers",
      description: "Strategic mergers to combine complementary businesses and create synergies.",
      features: [
        "Strategic fit analysis",
        "Synergy identification",
        "Integration planning",
        "Regulatory compliance",
        "Stakeholder communication"
      ]
    },
    {
      title: "Acquisitions",
      description: "Targeted acquisitions to expand market presence and capabilities.",
      features: [
        "Target identification",
        "Due diligence",
        "Valuation analysis",
        "Deal structuring",
        "Integration support"
      ]
    },
    {
      title: "Divestitures",
      description: "Strategic divestitures to optimize portfolio and unlock value.",
      features: [
        "Portfolio analysis",
        "Value maximization",
        "Buyer identification",
        "Transaction execution",
        "Transition support"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Mergers & Acquisitions
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            M&A advisory and due diligence services for strategic growth and value creation
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
                Strategic M&A Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our M&A advisory services provide comprehensive support for mergers, acquisitions, 
                and divestitures. We help businesses identify opportunities, assess risks, and 
                execute transactions that create sustainable value and drive strategic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our M&A Services
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

      {/* Deal Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Types of M&A Transactions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dealTypes.map((type, index) => (
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
            Benefits of Professional M&A Advisory
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
            Our M&A Process
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-montserrat font-bold text-secondary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
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
                Success Story: Strategic Acquisition
              </h2>
              <p className="text-lg mb-6">
                "PGC guided us through a complex $50M acquisition that expanded our market 
                presence by 40%. Their expertise in due diligence and deal structuring helped 
                us identify $8M in additional value and complete the transaction ahead of schedule."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Jennifer Martinez</p>
                  <p className="text-gray-200">CEO, Growth Dynamics Inc.</p>
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
            Ready for Strategic Growth?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our M&A experts help you identify opportunities and execute transactions that create lasting value.
          </p>
          <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MergersAcquisitions;
