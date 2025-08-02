
import { useState } from "react";
import { Linkedin, Mail, Phone } from "lucide-react";

const People = () => {
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  const leaders = [
    {
      name: "Eshwar Prasad Yadagini",
      title: "Managing Director & Cheif Consultant",
      location: "Toronto, Canada",
      bio: "Seasoned tax professional with over 15 years of experience in cross-border taxation and regulatory compliance.",
      // photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      fullBio: {
        about: "Eshwar Prasad Yadagini is a distinguished tax professional with extensive experience in international tax planning and compliance. He leads PGC's Canadian operations and specializes in cross-border tax strategies for multinational corporations.",
        experience: [
          "Managing Director, PGC Canada (2018-Present)",
          "Senior Tax Manager, Big 4 Firm (2014-2018)",
          "Tax Consultant, International Advisory (2009-2014)"
        ],
        education: [
          "CPA, CA - Chartered Professional Accountants of Canada",
          "Master of Taxation, University of Toronto",
          "Bachelor of Commerce, University of British Columbia"
        ],
        skills: ["Cross-Border Taxation", "Canadian Tax Compliance", "International Tax Planning", "FATCA & CRS", "Transfer Pricing"],
        linkedin: "https://linkedin.com/in/eshwar-yadagini"
      }
    },
    {
      name: "Naresh Tummalapalli",
      title: "CA",
      location: "New York, USA",
      bio: "Expert in U.S. federal and state taxation with specialized knowledge in international business structures.",
      // photo: "https://images.unsplash.com/photo-1494790108755-2616b612b098?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      fullBio: {
        about: "Naresh Tummalapalli brings deep expertise in U.S. taxation and international compliance to PGC's clients. He specializes in helping multinational companies navigate complex U.S. tax regulations.",
        experience: [
          "U.S. Tax Director, PGC (2020-Present)",
          "Senior Manager, International Tax, Big 4 Firm (2016-2020)",
          "Tax Associate, Regional CPA Firm (2012-2016)"
        ],
        education: [
          "Chartered Accountant (CA), ICAI",
          "Master of Science in Taxation, NYU",
          "Bachelor of Accounting, University of Pennsylvania"
        ],
        skills: ["U.S. Federal Taxation", "State & Local Tax", "International Compliance", "Form 1120 & 1040", "FATCA Reporting"],
        linkedin: "https://linkedin.com/in/naresh-tummalapalli-ca"
      }
    },
    {
      name: "Gopi Kantheti",
      title: "CA",
      location: "Hyderabad, India",
      bio: "Leading tax professional with comprehensive knowledge of Indian taxation and GST compliance frameworks.",
      // photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      fullBio: {
        about: "Gopi Kantheti oversees PGC's India operations and brings extensive experience in Indian taxation, GST, and regulatory compliance. He helps international businesses establish and maintain compliance in India.",
        experience: [
          "India Operations Head, PGC (2019-Present)",
          "Senior Tax Consultant, Deloitte India (2015-2019)",
          "Assistant Manager, KPMG India (2011-2015)"
        ],
        education: [
          "Chartered Accountant (CA), ICAI",
          "Company Secretary (CS), ICSI",
          "Bachelor of Commerce, Osmania University"
        ],
        skills: ["Indian Income Tax", "GST Compliance", "Transfer Pricing", "FEMA Regulations", "Corporate Law"],
        linkedin: "https://linkedin.com/in/gopi-kantheti-ca"
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
