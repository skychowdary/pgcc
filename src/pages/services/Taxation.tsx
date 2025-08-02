
import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, CheckCircle, ArrowRight } from "lucide-react";

const Taxation = () => {
  const [activeTab, setActiveTab] = useState("usa");

  const jurisdictions = {
    usa: {
      title: "United States",
      overview: "Comprehensive U.S. tax services for individuals and corporations, including federal and state compliance, international reporting, and strategic tax planning.",
      offerings: [
        "Individual Tax Returns (Form 1040)",
        "Corporate Tax Returns (Form 1120)",
        "Partnership & S-Corp Returns",
        "FATCA & FBAR Compliance",
        "Form 8938 (FATCA) Reporting",
        "State Tax Compliance",
        "Tax Planning & Advisory",
        "IRS Audit Support"
      ],
      caseStudy: "Helped a multinational technology company reduce their U.S. tax liability by 25% through strategic planning and proper utilization of tax treaties."
    },
    canada: {
      title: "Canada",
      overview: "Expert Canadian tax compliance and advisory services, covering personal, corporate, and trust taxation with specialized cross-border expertise.",
      offerings: [
        "Personal Tax Returns (T1)",
        "Corporate Tax Returns (T2)",
        "Trust Tax Returns (T3)",
        "Non-Resident Tax (NTR)",
        "CRA Inquiries & Audits",
        "GST/HST Compliance",
        "Cross-Border Tax Planning",
        "Emigration & Immigration Tax"
      ],
      caseStudy: "Assisted a U.S. company expanding to Canada with complete tax compliance setup, ensuring seamless operations and optimal tax efficiency."
    },
    india: {
      title: "India",
      overview: "Complete Indian taxation services including income tax, GST, and regulatory compliance for domestic and international businesses operating in India.",
      offerings: [
        "Income Tax Returns (ITR)",
        "GST Registration & Compliance",
        "TDS/TCS Management",
        "Transfer Pricing Documentation",
        "FEMA Compliance",
        "Corporate Tax Planning",
        "Tax Audit Representation",
        "Advance Ruling Applications"
      ],
      caseStudy: "Streamlined GST compliance for a global manufacturing company, reducing compliance time by 60% while ensuring 100% accuracy."
    }
  };

  const processSteps = [
    {
      title: "Analysis",
      description: "Comprehensive review of your tax situation and compliance requirements"
    },
    {
      title: "Preparation",
      description: "Professional preparation of all required tax documents and filings"
    },
    {
      title: "Submission",
      description: "Timely submission to relevant tax authorities with proper documentation"
    },
    {
      title: "Audit Support",
      description: "Ongoing support for any inquiries or audits from tax authorities"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <FileText className="w-12 h-12 text-white mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white">
                Taxation Services
              </h1>
              <p className="text-xl text-blue-100 mt-2">
                Expert tax compliance and planning across three jurisdictions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jurisdiction Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="border border-gray-200 rounded-lg p-1 bg-gray-50">
              {Object.entries(jurisdictions).map(([key, jurisdiction]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    activeTab === key
                      ? "bg-primary text-white shadow-md"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {jurisdiction.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {Object.entries(jurisdictions).map(([key, jurisdiction]) => (
              <div
                key={key}
                className={`${activeTab === key ? "block" : "hidden"} animate-fade-in`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Overview */}
                  <div>
                    <h2 className="text-2xl font-montserrat font-bold text-secondary mb-4">
                      {jurisdiction.title} Tax Services
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {jurisdiction.overview}
                    </p>
                    
                    {/* Case Study */}
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-montserrat font-bold text-primary mb-3">
                        Success Story
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {jurisdiction.caseStudy}
                      </p>
                    </div>
                  </div>

                  {/* Offerings */}
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-secondary mb-4">
                      Our Services Include:
                    </h3>
                    <div className="space-y-3">
                      {jurisdiction.offerings.map((offering, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{offering}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our Tax Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-montserrat font-bold text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
            Ready to Optimize Your Tax Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation with our tax experts today.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Request Consultation
          </Link>
        </div>
      </section>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/contact"
          className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center"
        >
          Request Consultation
        </Link>
      </div>
    </div>
  );
};

export default Taxation;
