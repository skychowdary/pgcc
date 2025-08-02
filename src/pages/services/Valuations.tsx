
import { Link } from "react-router-dom";
import { FileSpreadsheet, Calculator, Target, Shield, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";

const Valuations = () => {
  const services = [
    {
      icon: Calculator,
      title: "Business Valuations",
      description: "Comprehensive business valuations for mergers, acquisitions, and strategic planning."
    },
    {
      icon: FileSpreadsheet,
      title: "Asset Valuations",
      description: "Professional valuation of tangible and intangible assets for financial reporting."
    },
    {
      icon: Target,
      title: "Equity Valuations",
      description: "Accurate equity valuations for investment decisions and shareholder transactions."
    },
    {
      icon: Shield,
      title: "Tax Valuations",
      description: "Tax-compliant valuations for estate planning, gift tax, and transfer pricing."
    },
    {
      icon: TrendingUp,
      title: "Financial Modeling",
      description: "Advanced financial modeling and scenario analysis for valuation support."
    },
    {
      icon: Users,
      title: "Expert Witness",
      description: "Expert witness services for litigation and dispute resolution support."
    }
  ];

  const benefits = [
    {
      title: "Accurate Valuations",
      description: "Professional valuations using industry-standard methodologies and best practices."
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure compliance with regulatory requirements and accounting standards."
    },
    {
      title: "Expert Analysis",
      description: "In-depth analysis by experienced valuation professionals with industry expertise."
    },
    {
      title: "Comprehensive Reports",
      description: "Detailed valuation reports with clear methodology and supporting documentation."
    },
    {
      title: "Strategic Insights",
      description: "Valuable insights to support strategic decision-making and planning."
    },
    {
      title: "Litigation Support",
      description: "Expert witness services and litigation support for dispute resolution."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Engagement",
      description: "Define scope, objectives, and timeline for the valuation engagement."
    },
    {
      step: "02",
      title: "Data Collection",
      description: "Gather comprehensive financial, operational, and market data for analysis."
    },
    {
      step: "03",
      title: "Analysis",
      description: "Conduct detailed analysis using appropriate valuation methodologies."
    },
    {
      step: "04",
      title: "Valuation",
      description: "Determine fair market value using multiple approaches and methodologies."
    },
    {
      step: "05",
      title: "Reporting",
      description: "Prepare comprehensive valuation report with detailed analysis and conclusions."
    }
  ];

  const valuationTypes = [
    {
      title: "Business Valuations",
      description: "Comprehensive valuations of entire businesses or business units.",
      features: [
        "Income approach analysis",
        "Market approach analysis",
        "Asset approach analysis",
        "Synergy and control premiums",
        "Discount for lack of marketability"
      ]
    },
    {
      title: "Asset Valuations",
      description: "Valuation of tangible and intangible assets for various purposes.",
      features: [
        "Real estate valuations",
        "Intellectual property valuations",
        "Equipment and machinery",
        "Inventory valuations",
        "Investment securities"
      ]
    },
    {
      title: "Tax Valuations",
      description: "Valuations for tax compliance and planning purposes.",
      features: [
        "Estate tax valuations",
        "Gift tax valuations",
        "Transfer pricing",
        "Charitable contributions",
        "Tax planning support"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Valuation Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Business and asset valuation services for strategic decision-making and compliance
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FileSpreadsheet className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
                Professional Valuation Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our valuation services provide accurate, defensible valuations for businesses, 
                assets, and equity interests. We use industry-standard methodologies and 
                comprehensive analysis to support strategic decision-making, compliance, 
                and dispute resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our Valuation Services
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

      {/* Valuation Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Types of Valuations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuationTypes.map((type, index) => (
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
            Benefits of Professional Valuations
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
            Our Valuation Process
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
            <div className="bg-primary text-white p-8 rounded-lg">
              <h2 className="text-2xl font-montserrat font-bold mb-4">
                Success Story: Strategic Valuation
              </h2>
              <p className="text-lg mb-6">
                "PGC's valuation expertise helped us secure favorable terms in our $25M 
                acquisition. Their comprehensive analysis identified $3M in additional 
                value that we hadn't considered, significantly improving our ROI."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Robert Thompson</p>
                  <p className="text-blue-100">Managing Director, Capital Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
            Need Professional Valuations?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let our valuation experts provide accurate, defensible valuations for your strategic needs.
          </p>
          <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Valuations;
