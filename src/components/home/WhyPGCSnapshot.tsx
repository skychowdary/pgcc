
import { useEffect, useRef, useState } from "react";

export const WhyPGCSnapshot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const differentiators = [
    "40% cost savings compared to Big 4 firms",
    "Audit-ready documentation and processes",
    "Big 4-trained senior professionals",
    "24/7 support across global time zones"
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Venn Diagram */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* USA Circle */}
              <div 
                className={`absolute w-40 h-40 border-4 border-primary bg-primary/20 rounded-full flex items-center justify-center transition-all duration-1000 ${
                  isVisible ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-x-8 -translate-y-8 opacity-0'
                }`}
                style={{ top: '20px', left: '20px' }}
              >
                <span className="text-primary font-bold text-lg">USA</span>
              </div>
              
              {/* Canada Circle */}
              <div 
                className={`absolute w-40 h-40 border-4 border-primary bg-primary/20 rounded-full flex items-center justify-center transition-all duration-1000 delay-300 ${
                  isVisible ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-8 -translate-y-8 opacity-0'
                }`}
                style={{ top: '20px', right: '20px' }}
              >
                <span className="text-primary font-bold text-lg">CANADA</span>
              </div>
              
              {/* India Circle */}
              <div 
                className={`absolute w-40 h-40 border-4 border-primary bg-primary/20 rounded-full flex items-center justify-center transition-all duration-1000 delay-600 ${
                  isVisible ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
              >
                <span className="text-primary font-bold text-lg">INDIA</span>
              </div>
              
              {/* Center Overlap */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PGC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Differentiators */}
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
              Why PGC is Your Strategic Advantage
            </h2>
            <div className="space-y-4">
              {differentiators.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center transition-all duration-500 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
