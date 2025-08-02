
import { Link } from "react-router-dom";
import { BarChart3, FileText, TrendingUp, Shield, Users, Target, CheckCircle, ArrowRight } from "lucide-react";

const FinancialReporting = () => {
  const services = [
    {
      icon: FileText,
      title: "Financial Statement Preparation",
      description: "Comprehensive preparation of balance sheets, income statements, and cash flow statements."
    },
    {
      icon: BarChart3,
      title: "Management Reporting",
      description: "Custom management reports and dashboards for informed decision-making."
    },
    {
      icon: TrendingUp,
      title: "Performance Analysis",
      description: "In-depth analysis of financial performance, trends, and key metrics."
    },
    {
      icon: Shield,
      title: "Compliance Reporting",
      description: "Ensure compliance with regulatory requirements and accounting standards."
    },
    {
      icon: Users,
      title: "Stakeholder Communication",
      description: "Clear and effective communication of financial information to stakeholders."
    },
    {
      icon: Target,
      title: "Forecasting & Budgeting",
      description: "Financial forecasting and budgeting support for strategic planning."
    }
  ];

  const benefits = [
    {
      title: "Improved Decision Making",
      description: "Access to accurate, timely financial information for better business decisions."
    },
    {
      title: "Enhanced Transparency",
      description: "Clear and transparent financial reporting for stakeholders and investors."
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure compliance with local and international accounting standards."
    },
    {
      title: "Performance Insights",
      description: "Gain valuable insights into business performance and areas for improvement."
    },
    {
      title: "Investor Confidence",
      description: "Build investor confidence through professional and accurate financial reporting."
    },
    {
      title: "Strategic Planning",
      description: "Support strategic planning with comprehensive financial analysis and forecasting."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Data Collection",
      description: "Gather and organize all relevant financial data and documentation."
    },
    {
      step: "02",
      title: "Analysis",
      description: "Comprehensive analysis of financial data and performance metrics."
    },
    {
      step: "03",
      title: "Report Preparation",
      description: "Professional preparation of financial reports and statements."
    },
    {
      step: "04",
      title: "Review & Delivery",
      description: "Quality review and timely delivery of financial reports."
    }
  ];

  const reportingTypes = [
    {
      title: "Monthly Reports",
      description: "Regular monthly financial reports for ongoing monitoring and decision-making.",
      features: [
        "Income statement analysis",
        "Balance sheet review",
        "Cash flow monitoring",
        "Key performance indicators",
        "Variance analysis"
      ]
    },
    {
      title: "Quarterly Reports",
      description: "Comprehensive quarterly reports for strategic planning and stakeholder communication.",
      features: [
        "Detailed financial analysis",
        "Trend analysis",
        "Comparative reporting",
        "Management commentary",
        "Forecast updates"
      ]
    },
    {
      title: "Annual Reports",
      description: "Complete annual financial reporting for compliance and strategic review.",
      features: [
        "Full financial statements",
        "Audit support",
        "Regulatory compliance",
        "Stakeholder reporting",
        "Strategic insights"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Financial Reporting Advisory
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Expert guidance on financial reporting standards and strategic financial communication
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <BarChart3 className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
                Professional Financial Reporting
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our financial reporting advisory services provide expert guidance on financial 
                reporting standards and strategic financial communication. We help businesses 
                create accurate, compliant, and insightful financial reports that support 
                decision-making and stakeholder communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our Financial Reporting Services
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

      {/* Reporting Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Types of Financial Reports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reportingTypes.map((type, index) => (
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
            Benefits of Professional Financial Reporting
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
            Our Reporting Process
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
            <div className="bg-primary text-white p-8 rounded-lg">
              <h2 className="text-2xl font-montserrat font-bold mb-4">
                Success Story: Investor Confidence
              </h2>
              <p className="text-lg mb-6">
                "PGC's financial reporting advisory helped us secure $10M in Series B funding. 
                Their professional financial reports and strategic insights gave investors 
                the confidence they needed to invest in our growth story."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">David Rodriguez</p>
                  <p className="text-blue-100">CEO, InnovateTech Solutions</p>
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
            Ready for Professional Financial Reporting?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let our financial reporting experts help you create accurate, compliant, and insightful reports.
          </p>
          <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FinancialReporting;
