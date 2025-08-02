
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const insights = [
  {
    title: "2025 Tax Law Changes: Impact on Cross-Border Transactions",
    excerpt: "Explore the latest tax law updates affecting international business operations across the U.S., Canada, and India.",
    date: "December 15, 2024",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "FATCA Compliance: A Complete Guide for Global Businesses",
    excerpt: "Navigate FATCA requirements with confidence using our comprehensive compliance framework and best practices.",
    date: "December 10, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "GST Updates in India: What Multinational Companies Need to Know",
    excerpt: "Stay ahead of GST changes in India and their implications for your global tax strategy and compliance requirements.",
    date: "December 5, 2024",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

export const LatestInsights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-secondary mb-4">
            Latest Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest tax insights, regulatory updates, and strategic guidance 
            for cross-border tax planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
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
                  to={`/blog/${insight.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
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
  );
};
