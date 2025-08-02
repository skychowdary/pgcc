import { Link } from "react-router-dom";
import { Calendar, Users, Shield, TrendingUp, Clock, CheckCircle } from "lucide-react";

const Retainer = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Retainer Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ongoing, dedicated support and expert consultation to ensure continuous compliance and strategic alignment
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
                Dedicated Partnership Approach
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our retainer services provide ongoing, dedicated support and expert consultation to ensure 
                continuous compliance and strategic alignment. We become an extension of your team, offering 
                consistent guidance and proactive solutions for your evolving business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Retainer Service Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Dedicated Team",
                description: "Assigned team of experts who understand your business and provide consistent support."
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Round-the-clock access to expert advice and support for urgent matters."
              },
              {
                icon: Shield,
                title: "Compliance Monitoring",
                description: "Continuous monitoring and proactive management of compliance requirements."
              },
              {
                icon: TrendingUp,
                title: "Strategic Planning",
                description: "Ongoing strategic planning and business advisory services."
              },
              {
                icon: CheckCircle,
                title: "Regular Reviews",
                description: "Scheduled reviews and assessments to ensure optimal performance and alignment."
              },
              {
                icon: Calendar,
                title: "Flexible Engagement",
                description: "Customizable retainer packages tailored to your specific needs and budget."
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

      {/* Retainer Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Retainer Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Essential",
                description: "Basic retainer services for small to medium businesses",
                features: [
                  "Monthly compliance reviews",
                  "Quarterly strategic planning",
                  "Email and phone support",
                  "Basic reporting and monitoring",
                  "Annual tax planning"
                ],
                recommended: false
              },
              {
                title: "Professional",
                description: "Comprehensive retainer services for growing businesses",
                features: [
                  "Weekly compliance monitoring",
                  "Monthly strategic reviews",
                  "Priority support access",
                  "Advanced reporting and analytics",
                  "Quarterly tax planning",
                  "Dedicated account manager"
                ],
                recommended: true
              },
              {
                title: "Enterprise",
                description: "Full-service retainer for large organizations",
                features: [
                  "Daily compliance oversight",
                  "Weekly strategic consultations",
                  "24/7 emergency support",
                  "Custom reporting and dashboards",
                  "Monthly tax optimization",
                  "Dedicated team of experts",
                  "On-site support available"
                ],
                recommended: false
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-lg border-2 ${plan.recommended ? 'border-primary' : 'border-gray-200'}`}>
                {plan.recommended && (
                  <div className="bg-primary text-white text-center py-2 px-4 rounded-full text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-montserrat font-bold text-secondary mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.recommended 
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

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Benefits of Retainer Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cost Predictability",
                description: "Fixed monthly costs with no surprise fees, making budgeting easier and more predictable."
              },
              {
                title: "Proactive Support",
                description: "Preventive approach that identifies and addresses issues before they become problems."
              },
              {
                title: "Deep Understanding",
                description: "Long-term relationship allows us to develop deep understanding of your business."
              },
              {
                title: "Scalable Solutions",
                description: "Services that grow with your business, adapting to changing needs and requirements."
              },
              {
                title: "Reduced Risk",
                description: "Continuous monitoring and support helps minimize compliance and operational risks."
              },
              {
                title: "Strategic Focus",
                description: "Frees up your time to focus on core business activities while we handle the details."
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

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Getting Started with Retainer Services
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Comprehensive evaluation of your current needs and requirements."
                },
                {
                  step: "02",
                  title: "Proposal",
                  description: "Customized retainer proposal tailored to your specific needs."
                },
                {
                  step: "03",
                  title: "Onboarding",
                  description: "Smooth transition and setup of dedicated support services."
                },
                {
                  step: "04",
                  title: "Ongoing Support",
                  description: "Continuous partnership with regular reviews and optimization."
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

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
            Ready for Dedicated Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our retainer services can provide the ongoing support your business needs.
          </p>
          <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Retainer; 