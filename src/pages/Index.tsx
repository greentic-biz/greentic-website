import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DigitalWorkerCarousel from "@/components/DigitalWorkerCarousel";
import MultilingualSection from "@/components/MultilingualSection";
import FeaturesSection from "@/components/FeaturesSection";
import LiveDemosSection from "@/components/LiveDemosSection";
import UseCasesSection from "@/components/UseCasesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BuiltForRealSection from "@/components/BuiltForRealSection";
import SponsorsSection from "@/components/SponsorsSection";
import OfferCTA from "@/components/OfferCTA";
import DeveloperDocs from "@/components/DeveloperDocs";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <MultilingualSection />
    <FeaturesSection />
    <LiveDemosSection />
    <UseCasesSection />
    <HowItWorksSection />
    <BuiltForRealSection />
    <SponsorsSection />
    <OfferCTA />
    <DeveloperDocs />
    <Footer />
  </div>
);

export default Index;
