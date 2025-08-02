
import { HeroSection } from "../components/home/HeroSection";
import { ServicesPreview } from "../components/home/ServicesPreview";
import { WhyPGCSnapshot } from "../components/home/WhyPGCSnapshot";
import { TestimonialsCarousel } from "../components/home/TestimonialsCarousel";
import { LatestInsights } from "../components/home/LatestInsights";
import { FooterCTA } from "../components/home/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <WhyPGCSnapshot />
      <TestimonialsCarousel />
      <LatestInsights />
      <FooterCTA />
    </div>
  );
};

export default Index;
