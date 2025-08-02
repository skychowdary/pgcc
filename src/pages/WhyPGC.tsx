
import { useState } from "react";
import { Globe, Cpu, Users, Target, Clock } from "lucide-react";

const WhyPGC = () => {
  const [selectedDifferentiator, setSelectedDifferentiator] = useState<number | null>(null);

  const differentiators = [
    {
      icon: Globe,
      title: "Tri-Jurisdictional Expertise",
      description: "Unmatched expertise across U.S., Canada, and India with deep local knowledge in each market.",
      caseStudy: "Helped a technology company optimize their global tax structure, reducing overall tax burden by 30% while maintaining full compliance across all three jurisdictions."
    },
    {
      icon: Cpu,
      title: "Automation & Efficiency",
      description: "Cutting-edge technology and automated processes that reduce processing time and human error.",
      caseStudy: "Implemented automated tax compliance system for a multinational client, reducing processing time by 75% and eliminating manual errors."
    },
    {
      icon: Users,
      title: "Big 4-Trained Talent",
      description: "Our senior team brings Big 4 experience and expertise at a fraction of the cost.",
      caseStudy: "Former Big 4 partners on our team identified $2M in tax savings opportunities that the client's previous advisors had missed."
    },
    {
      icon: Target,
      title: "Audit-Ready Accuracy",
      description: "98% audit success rate with documentation and processes that exceed regulatory standards.",
      caseStudy: "Successfully defended a complex cross-border transaction during IRS audit, resulting in no adjustments and $500K in penalty savings."
    },
    {
      icon: Clock,
      title: "24/7 Global Support",
      description: "Round-the-clock support across all time zones with dedicated relationship managers.",
      caseStudy: "Provided emergency tax filing support during critical acquisition deadline, ensuring transaction closed on time with all regulatory approvals."
    }
  ];

  const metrics = [
    { number: "1,500+", label: "Returns Filed" },
    { number: "$10M+", label: "Savings Delivered" },
    { number: "98%", label: "Audit Success Rate" },
    { number: "24/7", label: "Global Support" }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Why Partner with PGC?
          </h1>
          <p className="text-xl text-blue-100">Expertise. Efficiency. Trust.</p>
        </div>
      </section>

      {/* Differentiator Blocks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1460925895917-afdab827c52f' :
                        index === 1 ? '1551288049-bebda4e38f71' :
                        index === 2 ? '1486312338219-ce68d2c6f44d' :
                        index === 3 ? '1554224155-6726b3ff858f' :
                        '1581091226825-a6a2a5aee158'
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                      alt={diff.title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center mb-4">
                      <Icon className="w-12 h-12 text-primary mr-4" />
                      <h2 className="text-3xl font-montserrat font-bold text-secondary">
                        {diff.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {diff.description}
                    </p>
                    <button
                      onClick={() => setSelectedDifferentiator(selectedDifferentiator === index ? null : index)}
                      className="text-primary hover:text-primary/80 font-medium transition-colors inline-flex items-center"
                    >
                      {selectedDifferentiator === index ? 'Hide' : 'Learn More'} Case Study →
                    </button>
                    
                    {selectedDifferentiator === index && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg animate-fade-in">
                        <h4 className="font-montserrat font-bold text-primary mb-2">Success Story</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{diff.caseStudy}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-white mb-12">
            Our Track Record
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-montserrat font-bold text-primary mb-2">
                  {metric.number}
                </div>
                <div className="text-gray-300 text-lg">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "PGC's expertise across all three jurisdictions has been invaluable. They've saved us significant time and money while ensuring complete compliance."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-secondary">David Chen</p>
                  <p className="text-gray-500 text-sm">CFO, TechGlobal Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "The quality of service and attention to detail from PGC is outstanding. They truly understand the complexities of international tax."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-secondary">Sarah Mitchell</p>
                  <p className="text-gray-500 text-sm">VP Finance, Global Ventures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyPGC;
