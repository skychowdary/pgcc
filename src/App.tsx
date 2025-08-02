
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";
import Index from "./pages/Index";
import About from "./pages/About";
import People from "./pages/People";
import Services from "./pages/Services";
import WhyPGC from "./pages/WhyPGC";
import LifeAtPGC from "./pages/LifeAtPGC";

import Contact from "./pages/Contact";
import Taxation from "./pages/services/Taxation";
import Outsourcing from "./pages/services/Outsourcing";
import VirtualCFO from "./pages/services/VirtualCFO";
import FinancialReporting from "./pages/services/FinancialReporting";
import MergersAcquisitions from "./pages/services/MergersAcquisitions";
import Valuations from "./pages/services/Valuations";
import SecretarialServices from "./pages/services/SecretarialServices";

import Advisory from "./pages/services/Advisory";
import Retainer from "./pages/services/Retainer";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/people" element={<People />} />
              <Route path="/services/taxation" element={<Taxation />} />
              <Route path="/services/outsourcing" element={<Outsourcing />} />
              <Route path="/services/virtual-cfo" element={<VirtualCFO />} />
              <Route path="/services/financial-reporting" element={<FinancialReporting />} />
              <Route path="/services/mergers-acquisitions" element={<MergersAcquisitions />} />
              <Route path="/services/valuations" element={<Valuations />} />
              <Route path="/services/secretarial" element={<SecretarialServices />} />

              <Route path="/services/advisory" element={<Advisory />} />
              <Route path="/services/retainer" element={<Retainer />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-pgc" element={<WhyPGC />} />
              <Route path="/life-at-pgc" element={<LifeAtPGC />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppChat />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
