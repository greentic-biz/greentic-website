import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DigitalWorkerCarousel from "@/components/DigitalWorkerCarousel";
import MultilingualSection from "@/components/MultilingualSection";
import FeaturesSection from "@/components/FeaturesSection";
import LiveDemosSection from "@/components/LiveDemosSection";
import ComparisonSection from "@/components/ComparisonSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <DigitalWorkerCarousel />
    <MultilingualSection />
    <FeaturesSection />
    <LiveDemosSection />
    <ComparisonSection />
    <UseCasesSection />
    <HowItWorksSection />
    <SponsorsSection />
    <DeveloperDocs />
    <Footer />
  </div>
);

export default Index;
