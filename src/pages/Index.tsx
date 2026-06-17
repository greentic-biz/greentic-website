import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DigitalWorkerCarousel from "@/components/DigitalWorkerCarousel";
import MultilingualSection from "@/components/MultilingualSection";
import FeaturesSection from "@/components/FeaturesSection";
import LiveDemosSection from "@/components/LiveDemosSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonSection from "@/components/ComparisonSection";
import SponsorsSection from "@/components/SponsorsSection";
import PartnersSection from "@/components/PartnersSection";
import OfferCTA from "@/components/OfferCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <DigitalWorkerCarousel />
      <MultilingualSection />
      <FeaturesSection />
      <LiveDemosSection />
      <HowItWorksSection />
      <ComparisonSection />
      <SponsorsSection />
      <PartnersSection />
      <OfferCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
