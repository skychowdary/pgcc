import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2, User, Tag } from "lucide-react";

// Blog post data - in a real app, this would come from a CMS or API
const blogPosts = {
  "2025-tax-law-changes-impact-on-cross-border-transactions": {
    title: "2025 Tax Law Changes: Impact on Cross-Border Transactions",
    excerpt: "Explore the latest tax law updates affecting international business operations across the U.S., Canada, and India. This comprehensive guide covers key changes in tax regulations, compliance requirements, and strategic implications for multinational corporations.",
    date: "December 15, 2024",
    category: "Tax Law",
    readTime: "8 min read",
    author: "PGC Tax Team",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="text-xl text-gray-600 leading-relaxed mb-8">
        The year 2025 brings significant changes to international tax regulations that will impact 
        how multinational corporations conduct cross-border transactions. This comprehensive guide 
        explores the key updates and their strategic implications for businesses operating across 
        the U.S., Canada, and India.
      </p>

      <h2 class="text-2xl font-montserrat font-bold text-secondary mt-12 mb-6">
        Key Changes in U.S. Tax Regulations
      </h2>
      
      <p class="mb-6">
        The United States has introduced several critical updates to its international tax framework, 
        primarily focused on strengthening anti-avoidance measures and ensuring fair taxation of 
        digital services.
      </p>

      <h3 class="text-xl font-montserrat font-bold text-secondary mt-8 mb-4">
        1. Global Intangible Low-Taxed Income (GILTI) Modifications
      </h3>
      
      <p class="mb-6">
        The 2025 updates include significant modifications to GILTI calculations, affecting how 
        U.S. multinationals report and pay taxes on their foreign earnings. Key changes include:
      </p>

      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Revised calculation methods for qualified business asset investment (QBAI)</li>
        <li>Updated foreign tax credit limitations</li>
        <li>Enhanced reporting requirements for controlled foreign corporations (CFCs)</li>
        <li>New documentation standards for intangible asset transfers</li>
      </ul>

      <h3 class="text-xl font-montserrat font-bold text-secondary mt-8 mb-4">
        2. Digital Services Tax Implementation
      </h3>
      
      <p class="mb-6">
        The implementation of digital services taxation represents a fundamental shift in how 
        digital businesses are taxed globally. The new framework includes:
      </p>

      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Unified approach to digital service taxation across jurisdictions</li>
        <li>New nexus rules for digital businesses</li>
        <li>Revenue-based taxation for digital services</li>
        <li>Enhanced compliance and reporting requirements</li>
      </ul>

      <h2 class="text-2xl font-montserrat font-bold text-secondary mt-12 mb-6">
        Canadian Tax Reform Updates
      </h2>
      
      <p class="mb-6">
        Canada's 2025 tax reforms focus on modernizing the tax system to address emerging 
        challenges in international commerce and digital transformation.
      </p>

      <h3 class="text-xl font-montserrat font-bold text-secondary mt-8 mb-4">
        1. Enhanced Transfer Pricing Regulations
      </h3>
      
      <p class="mb-6">
        The Canadian Revenue Agency (CRA) has strengthened its transfer pricing framework with:
      </p>

      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Mandatory country-by-country reporting for large multinationals</li>
        <li>Enhanced documentation requirements for related-party transactions</li>
        <li>New penalties for non-compliance with transfer pricing rules</li>
        <li>Advanced pricing agreement (APA) program improvements</li>
      </ul>

      <h2 class="text-2xl font-montserrat font-bold text-secondary mt-12 mb-6">
        Strategic Implications for Businesses
      </h2>
      
      <p class="mb-6">
        These regulatory changes require businesses to reassess their international tax strategies 
        and compliance frameworks. Key considerations include:
      </p>

      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h4 class="font-montserrat font-bold text-secondary mb-4">Immediate Action Items:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Review and update transfer pricing documentation</li>
          <li>Assess impact on existing tax structures</li>
          <li>Update compliance procedures and reporting systems</li>
          <li>Train staff on new regulatory requirements</li>
          <li>Engage with tax authorities for advance rulings where appropriate</li>
        </ul>
      </div>

      <h2 class="text-2xl font-montserrat font-bold text-secondary mt-12 mb-6">
        Conclusion
      </h2>
      
      <p class="mb-8">
        The 2025 tax law changes represent a significant evolution in international taxation, 
        requiring businesses to adapt their strategies and compliance frameworks. Proactive 
        planning and expert guidance are essential to navigate these changes successfully 
        while maintaining competitive advantage in the global marketplace.
      </p>

      <p class="text-gray-600">
        For detailed guidance on implementing these changes in your organization, 
        contact our international tax experts at PGC Global Tax Nexus.
      </p>
    `
  },
  "fatca-compliance-complete-guide-for-global-businesses": {
    title: "FATCA Compliance: A Complete Guide for Global Businesses",
    excerpt: "Navigate FATCA requirements with confidence using our comprehensive compliance framework and best practices. Learn about reporting obligations, due diligence procedures, and risk management strategies for international financial institutions.",
    date: "December 10, 2024",
    category: "Compliance",
    readTime: "12 min read",
    author: "PGC Compliance Team",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="text-xl text-gray-600 leading-relaxed mb-8">
        The Foreign Account Tax Compliance Act (FATCA) represents one of the most significant 
        international tax compliance frameworks affecting global financial institutions and 
        multinational corporations. This comprehensive guide provides essential insights for 
        businesses navigating FATCA requirements.
      </p>

      <h2 class="text-2xl font-montserrat font-bold text-secondary mt-12 mb-6">
        Understanding FATCA: Core Principles
      </h2>
      
      <p class="mb-6">
        FATCA was enacted to combat tax evasion by U.S. persons holding financial accounts 
        outside the United States. The legislation requires foreign financial institutions 
        (FFIs) to report information about financial accounts held by U.S. taxpayers.
      </p>

      <h3 class="text-xl font-montserrat font-bold text-secondary mt-8 mb-4">
        Key Objectives of FATCA
      </h3>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Prevent U.S. tax evasion through foreign accounts</li>
        <li>Enhance transparency in international financial transactions</li>
        <li>Establish reporting requirements for foreign financial institutions</li>
        <li>Implement withholding mechanisms for non-compliant entities</li>
      </ul>

      <h2 class="text-2xl font-montserrat font-bold text-secondary mt-12 mb-6">
        FATCA Compliance Framework
      </h2>
      
      <h3 class="text-xl font-montserrat font-bold text-secondary mt-8 mb-4">
        1. Registration Requirements
      </h3>
      
      <p class="mb-6">
        Financial institutions must register with the IRS and obtain a Global Intermediary 
        Identification Number (GIIN) to participate in FATCA compliance.
      </p>

      <div class="bg-blue-50 p-6 rounded-lg mb-6">
        <h4 class="font-montserrat font-bold text-secondary mb-3">Registration Process:</h4>
        <ol class="list-decimal pl-6 space-y-2">
          <li>Complete FATCA registration through the IRS portal</li>
          <li>Provide detailed information about the institution</li>
          <li>Designate responsible officers for compliance</li>
          <li>Obtain and maintain GIIN</li>
          <li>Renew registration annually</li>
        </ol>
      </div>

      <h2 class="text-2xl font-montserrat font-bold text-secondary mt-12 mb-6">
        Implementation Strategies for Global Businesses
      </h2>
      
      <p class="mb-6">
        FATCA compliance requires a comprehensive, systematic approach that integrates people, 
        processes, and technology. By implementing robust compliance frameworks and staying 
        abreast of regulatory developments, global businesses can successfully navigate FATCA 
        requirements while maintaining operational efficiency.
      </p>

      <p class="text-gray-600">
        For expert guidance on FATCA compliance implementation and ongoing support, 
        contact our compliance specialists at PGC Global Tax Nexus.
      </p>
    `
  },
  "gst-updates-in-india-what-multinational-companies-need-to-know": {
    title: "GST Updates in India: What Multinational Companies Need to Know",
    excerpt: "Stay ahead of GST changes in India and their implications for your global tax strategy and compliance requirements. Discover the latest amendments, filing procedures, and strategic considerations for international businesses operating in India.",
    date: "December 5, 2024",
    category: "GST",
    readTime: "10 min read",
    author: "PGC India Tax Team",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="text-xl text-gray-600 leading-relaxed mb-8">
        India's Goods and Services Tax (GST) framework continues to evolve with significant 
        updates that impact multinational corporations operating in the country. This comprehensive 
        guide explores the latest changes and their implications for international businesses.
      </p>

      <h2 class="text-2xl font-montserrat font-bold text-secondary mt-12 mb-6">
        Recent GST Amendments: Key Highlights
      </h2>
      
      <p class="mb-6">
        The Indian government has introduced several critical amendments to the GST framework, 
        focusing on digital services, e-commerce, and cross-border transactions. These changes 
        aim to enhance compliance, improve tax collection, and address emerging business models.
      </p>

      <h3 class="text-xl font-montserrat font-bold text-secondary mt-8 mb-4">
        1. Digital Services Taxation Framework
      </h3>
      
      <p class="mb-6">
        The latest GST updates include comprehensive provisions for taxing digital services 
        provided by foreign entities to Indian consumers.
      </p>

      <div class="bg-blue-50 p-6 rounded-lg mb-6">
        <h4 class="font-montserrat font-bold text-secondary mb-3">Key Changes:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Expanded definition of online information and database access (OIDAR) services</li>
          <li>Mandatory registration for foreign service providers</li>
          <li>Enhanced place of supply rules for digital services</li>
          <li>New compliance requirements for e-commerce operators</li>
          <li>Updated reverse charge mechanism provisions</li>
        </ul>
      </div>

      <h2 class="text-2xl font-montserrat font-bold text-secondary mt-12 mb-6">
        Cross-Border Transaction Updates
      </h2>
      
      <p class="mb-6">
        The GST framework has strengthened provisions for taxing imported services, 
        affecting how multinational companies structure their Indian operations.
      </p>

      <h2 class="text-2xl font-montserrat font-bold text-secondary mt-12 mb-6">
        Strategic Implications for Multinational Companies
      </h2>
      
      <p class="mb-6">
        These GST updates require multinational companies to reassess their Indian 
        operations and compliance strategies.
      </p>

      <div class="bg-red-50 p-6 rounded-lg mb-8">
        <h4 class="font-montserrat font-bold text-secondary mb-4">Immediate Action Items:</h4>
        <ol class="list-decimal pl-6 space-y-3">
          <li><strong>Review Business Models:</strong> Assess impact on current service delivery models and pricing structures.</li>
          <li><strong>Update Compliance Procedures:</strong> Revise internal processes to meet new reporting and documentation requirements.</li>
          <li><strong>Enhance Technology Infrastructure:</strong> Invest in systems to support e-invoicing and digital compliance.</li>
          <li><strong>Train Staff:</strong> Provide comprehensive training on new GST requirements and procedures.</li>
          <li><strong>Engage with Authorities:</strong> Seek clarification on complex provisions and obtain advance rulings where necessary.</li>
        </ol>
      </div>

      <h2 class="text-2xl font-montserrat font-bold text-secondary mt-12 mb-6">
        Conclusion
      </h2>
      
      <p class="mb-8">
        The latest GST updates in India represent a significant evolution in the country's 
        indirect tax framework, requiring multinational companies to adapt their strategies 
        and compliance approaches. By understanding these changes and implementing appropriate 
        measures, businesses can successfully navigate the new requirements while maintaining 
        operational efficiency and competitive advantage.
      </p>

      <p class="text-gray-600">
        For expert guidance on implementing these GST updates in your organization, 
        contact our India tax specialists at PGC Global Tax Nexus.
      </p>
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !blogPosts[slug as keyof typeof blogPosts]) {
    return <Navigate to="/blog" replace />;
  }

  const post = blogPosts[slug as keyof typeof blogPosts];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-primary">Insights</Link>
              <span className="mx-2">/</span>
              <span>{post.category}</span>
            </nav>

            {/* Article Meta */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
              </div>
              <button className="flex items-center text-gray-500 hover:text-primary transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>

            {/* Category Tag */}
            <div className="mb-6">
              <span className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <Tag className="w-3 h-3 mr-1" />
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-secondary mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Hero Image */}
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Info */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-secondary">{post.author}</h4>
                  <p className="text-gray-600 text-sm">
                    Our tax experts provide comprehensive guidance on international taxation, 
                    compliance, and strategic planning for multinational corporations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-montserrat font-bold text-secondary mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(blogPosts)
                .filter(([key]) => key !== slug)
                .slice(0, 2)
                .map(([key, relatedPost]) => (
                  <Link
                    key={key}
                    to={`/blog/${key}`}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-montserrat font-bold text-secondary mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {relatedPost.excerpt.substring(0, 100)}...
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 