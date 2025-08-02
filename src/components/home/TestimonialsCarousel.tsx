import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
const testimonials = [{
  quote: "PGC transformed our tax compliance across three jurisdictions. Their expertise saved us significant time and costs while ensuring full regulatory compliance.",
  name: "Sarah Chen",
  title: "CFO",
  company: "TechGlobal Inc.",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b098?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
}, {
  quote: "The team's deep understanding of cross-border taxation helped us navigate complex international structures with confidence and precision.",
  name: "Michael Rodriguez",
  title: "VP Finance",
  company: "Global Ventures Ltd.",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
}, {
  quote: "Outstanding service and attention to detail. PGC's proactive approach to tax planning has been invaluable for our multinational operations.",
  name: "Priya Sharma",
  title: "CEO",
  company: "Innovation Dynamics",
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
}];
export const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-montserrat font-bold text-white mb-12">
            What Our Clients Say
          </h2>
          
          <div className="relative h-80 flex items-center">
            {testimonials.map((testimonial, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-500 ${index === currentTestimonial ? "opacity-100" : "opacity-0"}`}>
                <div className="text-center">
                  <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
                  
                  <blockquote className="text-xl text-gray-300 mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center">
                    
                    <div className="text-left">
                      <p className="text-white font-medium">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? "bg-primary" : "bg-gray-600"}`} onClick={() => setCurrentTestimonial(index)} />)}
          </div>
        </div>
      </div>
    </section>;
};