
import { Link } from "react-router-dom";
import { Calculator, TrendingUp, BarChart3, Users, Target, Shield, CheckCircle, ArrowRight } from "lucide-react";

const VirtualCFO = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Financial Strategy",
      description: "Develop comprehensive financial strategies aligned with business objectives and growth plans."
    },
    {
      icon: BarChart3,
      title: "Financial Planning & Analysis",
      description: "Create detailed financial models, forecasts, and analysis to support strategic decision-making."
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Provide guidance and leadership to finance teams, ensuring optimal performance and efficiency."
    },
    {
      icon: Target,
      title: "Performance Management",
      description: "Establish KPIs and metrics to monitor business performance and drive continuous improvement."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify and mitigate financial risks while ensuring compliance with regulatory requirements."
    },
    {
      icon: Calculator,
      title: "Budgeting & Forecasting",
      description: "Develop comprehensive budgets and financial forecasts to guide business planning and operations."
    }
  ];

  const benefits = [
    {
      title: "Cost Efficiency",
      description: "Access to CFO-level expertise without the full-time salary and benefits costs."
    },
    {
      title: "Scalable Solution",
      description: "Services that grow with your business, from startup to enterprise level."
    },
    {
      title: "Expert Knowledge",
      description: "Access to specialized financial expertise and industry best practices."
    },
    {
      title: "Strategic Focus",
      description: "Focus on strategic financial decisions while we handle the operational details."
    },
    {
      title: "Flexible Engagement",
      description: "Customizable service levels to meet your specific needs and budget."
    },
    {
      title: "Technology Integration",
      description: "Leverage modern financial technology and tools for enhanced efficiency."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive evaluation of your current financial situation and business needs."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Creation of tailored financial strategies and implementation plans."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Guided implementation of financial systems, processes, and reporting frameworks."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous monitoring, analysis, and strategic guidance for sustained success."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Virtual CFO Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Strategic financial leadership and planning without the overhead of a full-time CFO
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calculator className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
                Strategic Financial Leadership
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our Virtual CFO services provide strategic financial leadership and planning 
                without the overhead of a full-time CFO. We help businesses make informed 
                financial decisions, optimize performance, and achieve sustainable growth 
                through expert financial guidance and strategic planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our Virtual CFO Services
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
            Benefits of Virtual CFO Services
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

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our Virtual CFO Process
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary text-white p-8 rounded-lg">
              <h2 className="text-2xl font-montserrat font-bold mb-4">
                Success Story: Tech Startup Growth
              </h2>
              <p className="text-lg mb-6">
                "PGC's Virtual CFO services helped us scale from $2M to $15M in revenue 
                within 18 months. Their strategic financial guidance and implementation 
                of proper financial controls were instrumental in our growth and 
                successful Series A funding round."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-blue-100">CEO, TechFlow Solutions</p>
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
            Ready for Strategic Financial Leadership?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let our Virtual CFO experts help you achieve financial excellence and sustainable growth.
          </p>
          <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VirtualCFO;
