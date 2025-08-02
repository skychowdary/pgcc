
import { Link } from "react-router-dom";

export const FooterCTA = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
          Ready to transform your tax compliance?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join leading companies that trust PGC for their cross-border tax strategy and compliance needs.
        </p>
        <Link
          to="/contact"
          className="bg-white text-primary px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors inline-block"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};
