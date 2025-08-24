
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Globe } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jurisdiction: "",
    message: ""
  });

  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [showChat, setShowChat] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLanguageToggle = (language: string) => {
    setSelectedLanguages(prev => 
      prev.includes(language) 
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Simulate form submission
    toast.success("Thank you! Your message has been sent. We'll get back to you within 24 hours.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      jurisdiction: "",
      message: ""
    });
    setSelectedLanguages([]);
  };

  const offices = [
    {
      country: "India",
      flag: "🇮🇳",
      title: "India Headquarters",
      address: "Hyderabad",
      phone: "8895458388",
      email: "info@pgcglobal.in"
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200">
            Let's make tax strategy your competitive advantage
          </p>
        </div>
      </section>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-secondary mb-6">
                Get in Touch
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="jurisdiction" className="block text-gray-700 font-medium mb-2">
                      Primary Jurisdiction
                    </label>
                    <select
                      id="jurisdiction"
                      name="jurisdiction"
                      value={formData.jurisdiction}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select Jurisdiction</option>
                      <option value="usa">United States</option>
                      <option value="canada">Canada</option>
                      <option value="india">India</option>
                      <option value="multiple">Multiple Jurisdictions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your tax and compliance needs..."
                    required
                  ></textarea>
                </div>

                {/* Preferred Languages */}
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    Preferred Languages
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["English", "Hindi", "Telugu"].map((language) => (
                      <label key={language} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedLanguages.includes(language)}
                          onChange={() => handleLanguageToggle(language)}
                          className="mr-2 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-gray-700">{language}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Information */}
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-secondary mb-6">
                Our Global Offices
              </h2>
              
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{office.flag}</span>
                      <h3 className="text-lg font-montserrat font-bold text-secondary">
                        {office.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-primary" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-primary" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Widget */}
      {showChat && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">Chat with PGC Expert</h3>
            <button
              onClick={() => setShowChat(false)}
              className="text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>
          <div className="p-4 h-72 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-3 text-gray-400" />
              <p>Live chat will be available soon!</p>
              <p className="text-sm mt-2">For immediate assistance, please use our contact form.</p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
