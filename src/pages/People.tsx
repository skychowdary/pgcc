
import { useState } from "react";
import { Linkedin, Mail, Phone } from "lucide-react";

const People = () => {
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  const leaders = [
    {
      name: "Eshwar Prasad Yadagini",
      title: "MBA (Finance)",
      location: "Hyderabad, India",
      bio: "With over 7 years of experience in taxation and bookkeeping, I bring a strong foundation in Canadian, U.S., and Indian tax and accounting systems.",
      // photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      fullBio: {
        about: "With over 7 years of experience in taxation and bookkeeping, I bring a strong foundation in Canadian, U.S., and Indian tax and accounting systems. My expertise spans across personal and corporate tax compliance, cross-border filings, financial reporting, and day-to-day bookkeeping support for businesses of all sizes. I am committed to delivering accurate, timely, and customized financial solutions to each client, always with a focus on value and cost-effectiveness. Whether it's helping small businesses stay compliant or assisting individuals with complex tax matters, my approach is always rooted in integrity, responsiveness, and results.",
        experience: [
          "7+ years in taxation and bookkeeping",
          "Expertise in Canadian, U.S., and Indian tax systems",
          "Cross-border tax compliance and filings",
          "Financial reporting and day-to-day bookkeeping"
        ],
        education: [
          "MBA (Finance)",
          "Specialized training in international taxation",
          "Certifications in bookkeeping and accounting"
        ],
        skills: ["Canadian, U.S., and Indian Taxation", "Bookkeeping & Financial Reporting", "Cross-Border Tax Compliance", "Corporate & Personal Tax Returns"],
        linkedin: "https://linkedin.com/in/eshwar-yadagini",
        personal: "Outside of work, I find joy in photography, long bike rides, and traveling to new places, experiences that keep me curious, grounded, and inspired."
      }
    },
    {
      name: "Naresh Tummalapalli",
      title: "Chartered Accountant",
      location: "Hyderabad, India",
      bio: "Qualified Chartered Accountant with over 9 years of experience in Taxation, Bookkeeping, and Advisory Services.",
      // photo: "https://images.unsplash.com/photo-1494790108755-2616b612b098?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      fullBio: {
        about: "Naresh is a qualified Chartered Accountant with over 9 years of experience in Taxation, Bookkeeping, and Advisory Services. He brings deep expertise in both Indian and US tax regulations, offering clients a unique cross-border perspective in accounting and compliance. Known for his technical excellence and problem-solving abilities, Naresh has successfully handled complex projects, providing tailored solutions that ensure both compliance and efficiency. He is also highly experienced in conducting Internal and Statutory Audits, helping businesses strengthen their financial and operational frameworks. Naresh is driven by a commitment to deliver high-quality, value-driven services at a very reasonable cost, making professional excellence accessible to businesses of all sizes.",
        experience: [
          "9+ years in Taxation, Bookkeeping, and Advisory Services",
          "Deep expertise in Indian and US tax regulations",
          "Internal and Statutory Audits",
          "Complex project handling and problem-solving"
        ],
        education: [
          "Chartered Accountant (CA)",
          "Specialized training in US tax regulations",
          "Advanced certifications in auditing and compliance"
        ],
        skills: ["Indian & US Taxation", "Bookkeeping & Accounting", "Tax Advisory & Planning", "Internal & Statutory Audits", "Financial Reporting & Compliance", "Complex Tax Structuring"],
        linkedin: "https://linkedin.com/in/naresh-tummalapalli-ca",
        personal: "Outside of his professional commitments, Naresh enjoys reading books and engaging in various other enriching activities during his free time."
      }
    },
    {
      name: "Gopi Kantheti",
      title: "CA (Semi Qualified)",
      location: "Hyderabad, India",
      bio: "Chartered Accountant with over 9 years of professional experience in Indian and US taxation, accounting, and regulatory frameworks.",
      // photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      fullBio: {
        about: "With over 9 years of professional experience, Gopi Kantheti is a Chartered Accountant well-versed in both Indian and US taxation, accounting, and regulatory frameworks. He brings deep technical expertise in taxation, bookkeeping, indirect taxes, and both internal and statutory audits, delivering solutions tailored to the unique needs of retail and service-based businesses. Gopi is known for his ability to solve complex financial and compliance challenges, using his strong investigative skills to identify and rectify discrepancies in client records. His approach is grounded in accuracy, transparency, and a commitment to providing high-quality services at a reasonable cost. Whether it's navigating tax laws or refining accounting systems, Gopi ensures that each client receives personalized attention and value-driven support.",
        experience: [
          "9+ years in Indian and US taxation and accounting",
          "Deep technical expertise in taxation and bookkeeping",
          "Indirect taxes and regulatory compliance",
          "Internal and statutory audits"
        ],
        education: [
          "CA (Semi Qualified)",
          "Specialized training in US taxation",
          "Advanced certifications in accounting and compliance"
        ],
        skills: ["Indian and US Taxation", "Bookkeeping & Accounting", "Indirect Taxes", "Internal & Statutory Audits", "Financial Compliance", "Regulatory Frameworks"],
        linkedin: "https://linkedin.com/in/gopi-kantheti-ca",
        personal: "Outside of his professional life, Gopi enjoys reading and engaging in various personal development activities."
      }
    },
    {
      name: "Vamsi Kora",
      title: "Financial Controller",
      location: "Hyderabad, India",
      bio: "Over 8 years of experience in bookkeeping, taxation, and audit services across US, Canada, UK, and India.",
      // photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      fullBio: {
        about: "Vamsi Kora brings over 8 years of experience in bookkeeping, taxation, and audit services across US, Canada, UK, and India. With a strong command of international accounting standards and compliance frameworks, he has become a go-to expert for resolving complex bookkeeping challenges. Vamsi is known for his analytical mindset, attention to detail, and a client-focused approach. His strength lies not only in technical execution but also in building and maintaining strong client relationships, ensuring that businesses feel supported and understood throughout every financial cycle.",
        experience: [
          "8+ years in bookkeeping, taxation, and audit services",
          "International experience across US, Canada, UK, and India",
          "Complex bookkeeping challenge resolution",
          "Client relationship management"
        ],
        education: [
          "Financial Controller Certification",
          "International accounting standards training",
          "Advanced bookkeeping and audit certifications"
        ],
        skills: ["International Bookkeeping", "Multi-country Taxation", "Audit Services", "International Accounting Standards", "Compliance Frameworks", "Client Relationship Management"],
        linkedin: "https://linkedin.com/in/vamsi-kora",
        personal: "Outside of work, Vamsi enjoys staying active by playing cricket and badminton, bringing the same energy and team spirit to the field as he does to his profession."
      }
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Our People
          </h1>
          <h3 className="text-xl text-blue-100">Leadership Team</h3>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-montserrat font-bold text-secondary mb-2">
                  {leader.name}
                </h3>
                <p className="text-primary font-medium mb-1">{leader.title}</p>
                <p className="text-gray-500 text-sm mb-3">{leader.location}</p>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {leader.bio}
                </p>
                <button
                  onClick={() => setSelectedProfile(leader)}
                  className="btn-primary text-sm"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-montserrat font-bold text-secondary">
                  {selectedProfile.name}
                </h2>
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Contact */}
                <div className="text-center">
                  <h3 className="text-lg font-medium text-primary mb-2">
                    {selectedProfile.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{selectedProfile.location}</p>
                  
                  <div className="flex justify-center space-x-4">
                    <a
                      href={selectedProfile.fullBio.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:contact@pgc.com" className="text-primary hover:text-primary/80">
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Right Column - Detailed Information */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-lg font-montserrat font-bold text-secondary mb-3">About</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedProfile.fullBio.about}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-montserrat font-bold text-secondary mb-3">Experience</h4>
                    <ul className="space-y-2">
                      {selectedProfile.fullBio.experience.map((exp: string, index: number) => (
                        <li key={index} className="text-gray-700">{exp}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-montserrat font-bold text-secondary mb-3">Education</h4>
                    <ul className="space-y-2">
                      {selectedProfile.fullBio.education.map((edu: string, index: number) => (
                        <li key={index} className="text-gray-700">{edu}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-montserrat font-bold text-secondary mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProfile.fullBio.skills.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProfile.fullBio.personal && (
                    <div>
                      <h4 className="text-lg font-montserrat font-bold text-secondary mb-3">Beyond the Numbers</h4>
                      <p className="text-gray-700 leading-relaxed">{selectedProfile.fullBio.personal}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default People;
