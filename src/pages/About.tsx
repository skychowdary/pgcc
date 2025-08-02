import { Building, Target, Globe, Award, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const About = () => {
  return <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-r from-secondary to-primary flex items-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            About PGC
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Leading cross-border tax consultancy with expertise spanning the United States, Canada, and India.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-montserrat font-bold text-secondary mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">To provide strategic, efficient, and compliant tax solutions that enable businesses to thrive in the global marketplace. We simplify complex cross-border business challenges while maximizing opportunities for our clients across the U.S., Canada, and India.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-montserrat font-bold text-secondary mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">To be the world's most trusted partner for cross-border business advisory services, setting the standard for excellence in international tax compliance and strategic planning through innovation, expertise, and unwavering client commitment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            <div className="space-y-12">
              {[{
              year: "2023",
              event: "PGC established with vision for cross-border excellence"
            }, {
              year: "2024",
              event: "Advanced AI integration for enhanced tax services and received Tax Excellence Award"
            }, {
              year: "2025",
              event: "Expanded global partnerships and digital transformation initiatives"
            }].map((milestone, index) => <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-montserrat font-bold text-primary mb-2">
                        {milestone.year}
                      </h3>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-center text-secondary mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: Building,
            title: "Integrity",
            description: "We uphold the highest ethical standards in all our professional relationships and business practices."
          }, {
            icon: Target,
            title: "Innovation",
            description: "We embrace technology and innovative approaches to deliver superior tax solutions and client experiences."
          }, {
            icon: Award,
            title: "Client-First",
            description: "We prioritize our clients' success and build lasting partnerships through exceptional service and results."
          }].map((value, index) => <div key={index} className="text-center">
                <value.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-montserrat font-bold text-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-secondary mb-4">
              Latest Insights & Analysis
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with our expert analysis of tax regulations, compliance updates, 
              and strategic guidance for global businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "2025 Tax Law Changes: Impact on Cross-Border Transactions",
                excerpt: "Explore the latest tax law updates affecting international business operations across the U.S., Canada, and India.",
                date: "December 15, 2024",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                slug: "2025-tax-law-changes-impact-on-cross-border-transactions"
              },
              {
                title: "FATCA Compliance: A Complete Guide for Global Businesses",
                excerpt: "Navigate FATCA requirements with confidence using our comprehensive compliance framework and best practices.",
                date: "December 10, 2024",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                slug: "fatca-compliance-complete-guide-for-global-businesses"
              },
              {
                title: "GST Updates in India: What Multinational Companies Need to Know",
                excerpt: "Stay ahead of GST changes in India and their implications for your global tax strategy and compliance requirements.",
                date: "December 5, 2024",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                slug: "gst-updates-in-india-what-multinational-companies-need-to-know"
              }
            ].map((insight, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {insight.date}
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-secondary mb-3 line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {insight.excerpt}
                  </p>
                  <Link
                    to={`/blog/${insight.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="btn-primary inline-block"
            >
              View All Insights
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default About;