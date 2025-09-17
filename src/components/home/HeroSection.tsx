import { Link } from "react-router-dom";
export const HeroSection = () => {
  return <section className="relative h-screen flex items-center justify-center bg-secondary">
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6 animate-fade-in">Offshore Expert in Bookkeeping Solutions for UK, US, Canada, India and Australia</h1>
        
        <p className="text-xl md:text-2xl font-medium mb-8 animate-fade-in">We start our services from $6 per hours</p>
        

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link to="/contact" className="btn-primary inline-block text-center">
            Request a service
          </Link>
          <Link to="/about" className="btn-secondary inline-block text-center">
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
};