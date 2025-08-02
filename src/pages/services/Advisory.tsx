import { Link } from "react-router-dom";
import { Lightbulb, Target, Users, TrendingUp, Shield, Globe } from "lucide-react";

const Advisory = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Advisory Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Strategic guidance and expert advice to navigate complex financial and tax landscapes
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
                Strategic Advisory Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our advisory services provide strategic guidance and expert advice to help businesses 
                navigate complex financial and tax landscapes. We combine deep industry knowledge with 
                practical insights to deliver solutions that drive growth and ensure compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our Advisory Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Strategic Planning",
                description: "Comprehensive strategic planning to align financial goals with business objectives and market opportunities."
              },
              {
                icon: Users,
                title: "Business Advisory",
                description: "Expert guidance on business structure, operations optimization, and growth strategies."
              },
              {
                icon: TrendingUp,
                title: "Financial Advisory",
                description: "Strategic financial planning, investment guidance, and capital structure optimization."
              },
              {
                icon: Shield,
                title: "Risk Management",
                description: "Comprehensive risk assessment and mitigation strategies for financial and operational risks."
              },
              {
                icon: Globe,
                title: "International Advisory",
                description: "Cross-border business advisory, market entry strategies, and global expansion guidance."
              },
              {
                icon: Lightbulb,
                title: "Innovation Advisory",
                description: "Guidance on digital transformation, technology adoption, and innovation strategies."
              }
            ].map((service, index) => {
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

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our Advisory Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Comprehensive analysis of your current situation, challenges, and opportunities."
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Development of tailored strategies and actionable recommendations."
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Guided implementation of strategies with ongoing support and monitoring."
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Continuous review and optimization to ensure sustained success."
                }
              ].map((step, index) => (
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

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Why Choose Our Advisory Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Knowledge",
                description: "Access to deep industry expertise and specialized knowledge across multiple jurisdictions."
              },
              {
                title: "Strategic Perspective",
                description: "Holistic approach that considers all aspects of your business and market environment."
              },
              {
                title: "Proven Results",
                description: "Track record of successful advisory engagements and measurable outcomes."
              },
              {
                title: "Personalized Approach",
                description: "Tailored solutions that address your specific challenges and objectives."
              },
              {
                title: "Ongoing Support",
                description: "Continuous guidance and support throughout implementation and beyond."
              },
              {
                title: "Global Network",
                description: "Access to our extensive network of experts and resources worldwide."
              }
            ].map((benefit, index) => (
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

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
            Ready to Get Strategic Guidance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our advisory experts help you navigate complex challenges and achieve your business goals.
          </p>
          <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Contact Our Advisors
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Advisory; 