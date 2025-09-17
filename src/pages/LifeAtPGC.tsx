
import { useState } from "react";
import { Building, Users, Lightbulb, Calendar, Download, Filter } from "lucide-react";

const LifeAtPGC = () => {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState("all");

  const jobListings = [
    {
      title: "Senior Tax Manager",
      location: "Hyderabad, India",
      type: "Full-time",
      jurisdiction: "india",
      description: "Lead tax compliance and advisory services for our India operations."
    },
    {
      title: "Canada Tax Specialist",
      location: "Toronto, Canada",
      type: "Full-time",
      jurisdiction: "canada",
      description: "Manage Canadian tax compliance and cross-border planning."
    },
    {
      title: "U.S. Tax Associate",
      location: "New York, USA",
      type: "Full-time",
      jurisdiction: "usa",
      description: "Support U.S. tax preparation and compliance activities."
    },
    {
      title: "Financial Analyst",
      location: "Remote",
      type: "Contract",
      jurisdiction: "all",
      description: "Provide financial analysis and reporting support."
    }
  ];

  const complianceEvents = [
    {
      date: "January 31, 2025",
      jurisdiction: "USA",
      filing: "Form 1099 Filing Deadline",
      type: "Individual"
    },
    {
      date: "February 28, 2025",
      jurisdiction: "Canada",
      filing: "T4 Slip Distribution",
      type: "Employment"
    },
    {
      date: "March 15, 2025",
      jurisdiction: "USA",
      filing: "Corporate Tax Return (Calendar Year)",
      type: "Corporate"
    },
    {
      date: "March 31, 2025",
      jurisdiction: "India",
      filing: "Advance Tax Payment Q4",
      type: "Corporate"
    },
    {
      date: "April 15, 2025",
      jurisdiction: "USA",
      filing: "Individual Tax Return Deadline",
      type: "Individual"
    },
    {
      date: "April 30, 2025",
      jurisdiction: "Canada",
      filing: "Individual Tax Return Deadline",
      type: "Individual"
    }
  ];

  const filteredJobs = selectedJurisdiction === "all" 
    ? jobListings 
    : jobListings.filter(job => job.jurisdiction === selectedJurisdiction || job.jurisdiction === "all");

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-96 bg-gradient-to-r from-secondary to-primary flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Life at PGC
          </h1>
          <p className="text-xl text-gray-200">
            Empowering talent across three continents
          </p>
        </div>
      </section>

      {/* Culture Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-secondary mb-4">
              Our Culture Pillars
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where talent thrives and innovation flourishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Growth",
                description: "Continuous learning opportunities and career advancement paths across multiple jurisdictions."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Global teamwork with diverse perspectives from our offices in India, Canada, and the U.S."
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Cutting-edge technology and processes that keep us ahead in the rapidly evolving tax landscape."
              }
            ].map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-montserrat font-bold text-secondary mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-montserrat font-bold text-secondary">
              Current Opportunities
            </h2>
            
            {/* Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedJurisdiction}
                onChange={(e) => setSelectedJurisdiction(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="all">All Locations</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="india">India</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-montserrat font-bold text-secondary mb-2">
                  {job.title}
                </h3>
                <div className="text-gray-600 text-sm mb-3">
                  <span>{job.location}</span> • <span>{job.type}</span>
                </div>
                <p className="text-gray-700 mb-4">
                  {job.description}
                </p>
                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-montserrat font-bold text-secondary">
              2025 Compliance Calendar
            </h2>
            <button className="flex items-center text-primary hover:text-primary/80 font-medium">
              <Download className="w-5 h-5 mr-2" />
              Download ICS
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Jurisdiction
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Filing Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {complianceEvents.map((event, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {event.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        event.jurisdiction === 'USA' ? 'bg-blue-100 text-blue-800' :
                        event.jurisdiction === 'Canada' ? 'bg-red-100 text-red-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {event.jurisdiction}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {event.filing}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {event.type}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


    </div>
  );
};

export default LifeAtPGC;
