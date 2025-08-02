import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Search, Filter } from "lucide-react";
import { useState } from "react";

const allInsights = [
  {
    id: "2025-tax-law-changes-impact-on-cross-border-transactions",
    title: "2025 Tax Law Changes: Impact on Cross-Border Transactions",
    excerpt: "Explore the latest tax law updates affecting international business operations across the U.S., Canada, and India. This comprehensive guide covers key changes in tax regulations, compliance requirements, and strategic implications for multinational corporations.",
    date: "December 15, 2024",
    category: "Tax Law",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    featured: true
  },
  {
    id: "fatca-compliance-complete-guide-for-global-businesses",
    title: "FATCA Compliance: A Complete Guide for Global Businesses",
    excerpt: "Navigate FATCA requirements with confidence using our comprehensive compliance framework and best practices. Learn about reporting obligations, due diligence procedures, and risk management strategies for international financial institutions.",
    date: "December 10, 2024",
    category: "Compliance",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    featured: false
  },
  {
    id: "gst-updates-in-india-what-multinational-companies-need-to-know",
    title: "GST Updates in India: What Multinational Companies Need to Know",
    excerpt: "Stay ahead of GST changes in India and their implications for your global tax strategy and compliance requirements. Discover the latest amendments, filing procedures, and strategic considerations for international businesses operating in India.",
    date: "December 5, 2024",
    category: "GST",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    featured: false
  },
  {
    id: "transfer-pricing-regulations-2025",
    title: "Transfer Pricing Regulations: 2025 Updates and Best Practices",
    excerpt: "Understanding the evolving landscape of transfer pricing regulations and how they impact multinational enterprises. Learn about documentation requirements, risk assessment, and compliance strategies.",
    date: "November 28, 2024",
    category: "Transfer Pricing",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    featured: false
  },
  {
    id: "digital-taxation-global-framework",
    title: "Digital Taxation: Global Framework and Implementation",
    excerpt: "Explore the OECD's digital taxation framework and its implementation across different jurisdictions. Understand the implications for digital businesses and e-commerce platforms.",
    date: "November 20, 2024",
    category: "Digital Tax",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    featured: false
  },
  {
    id: "canada-tax-reform-2025",
    title: "Canada Tax Reform 2025: Key Changes for Businesses",
    excerpt: "Comprehensive overview of Canada's 2025 tax reforms, including corporate tax changes, personal tax updates, and implications for cross-border transactions.",
    date: "November 15, 2024",
    category: "Tax Law",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    featured: false
  }
];

const categories = ["All", "Tax Law", "Compliance", "GST", "Transfer Pricing", "Digital Tax"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInsights = allInsights.filter(insight => {
    const matchesCategory = selectedCategory === "All" || insight.category === selectedCategory;
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insight.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = allInsights.find(insight => insight.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-montserrat font-bold mb-6">
              Latest Insights & Analysis
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Stay informed with our expert analysis of tax regulations, compliance updates, 
              and strategic guidance for global businesses.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-montserrat font-bold text-secondary mb-8">Featured Article</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredPost.date} • {featuredPost.readTime}
                    </div>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {featuredPost.category}
                    </span>
                    <h3 className="text-2xl font-montserrat font-bold text-secondary mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-4">
                      {featuredPost.excerpt}
                    </p>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.filter(insight => !insight.featured).map((insight) => (
              <article key={insight.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {insight.date}
                    </div>
                    <span className="text-xs">{insight.readTime}</span>
                  </div>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {insight.category}
                  </span>
                  <h3 className="text-xl font-montserrat font-bold text-secondary mb-3 line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {insight.excerpt}
                  </p>
                  <Link
                    to={`/blog/${insight.id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredInsights.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No insights found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 