import { Link } from "react-router-dom";
import { FileText, CheckCircle, ArrowRight } from "lucide-react";

const Bookkeeping = () => {
  const offerings = [
    "General Ledger Maintenance",
    "Accounts Payable Management", 
    "Accounts Receivable Tracking",
    "Payroll Processing & Compliance",
    "Bank Reconciliation",
    "Financial Statement Preparation",
    "Monthly/Quarterly Reporting",
    "Chart of Accounts Setup",
    "Multi-Currency Accounting",
    "Tax Compliance Support",
    "QuickBooks, Xero & Tally Setup",
    "Year-End Preparation"
  ];

  const processSteps = [
    {
      title: "Setup",
      description: "Initial setup of accounting systems and chart of accounts tailored to your business needs"
    },
    {
      title: "Data Entry",
      description: "Regular data entry and transaction recording with proper categorization"
    },
    {
      title: "Reconciliation",
      description: "Monthly bank reconciliation and account verification for accuracy"
    },
    {
      title: "Reporting",
      description: "Timely preparation of financial statements and management reports"
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
                Bookkeeping Services
              </h1>
              <p className="text-xl text-blue-100 mt-2">
                Professional bookkeeping solutions for UK, US, Canada, India and Australia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-montserrat font-bold text-secondary mb-4">
                  Professional Bookkeeping Services
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our expert bookkeeping team provides comprehensive financial record-keeping services 
                  for businesses across UK, US, Canada, India, and Australia. We handle all aspects 
                  of your accounting needs, from daily transaction recording to monthly financial 
                  reporting, ensuring accuracy and compliance with local regulations.
                </p>
                
                {/* Case Study */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-montserrat font-bold text-primary mb-3">
                    Success Story
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Helped a growing tech startup streamline their financial processes across multiple 
                    countries, reducing bookkeeping time by 70% while improving accuracy and ensuring 
                    compliance with all local regulations.
                  </p>
                </div>
              </div>

              {/* Offerings */}
              <div>
                <h3 className="text-xl font-montserrat font-bold text-secondary mb-4">
                  Our Services Include:
                </h3>
                <div className="space-y-3">
                  {offerings.map((offering, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{offering}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our Bookkeeping Process
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

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-secondary mb-4">
            Competitive Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We start our bookkeeping services from $6 per hour
          </p>
          <div className="bg-primary text-white p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Transparent Pricing
            </h3>
            <p className="text-blue-100 mb-6">
              No hidden fees, no surprise charges. Our bookkeeping services start at just $6 per hour, 
              with flexible packages to suit your business needs.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
            Ready to Streamline Your Bookkeeping?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get professional bookkeeping services starting from $6 per hour.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Request Service
          </Link>
        </div>
      </section>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/contact"
          className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center"
        >
          Request Service
        </Link>
      </div>
    </div>
  );
};

export default Bookkeeping;
