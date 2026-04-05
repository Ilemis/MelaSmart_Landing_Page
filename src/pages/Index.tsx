import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FarmerOriginSection from "@/components/FarmerOriginSection";
import ValueSection from "@/components/ValueSection";
import AgronomoAISection from "@/components/AgronomoAISection";
import AppPreviewSection from "@/components/AppPreviewSection";
import MeteoSection from "@/components/MeteoSection";
import PremiumSection from "@/components/PremiumSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PremiumSection />
        <AppPreviewSection />
        <FarmerOriginSection />
        <ValueSection />
        <AgronomoAISection />
        <MeteoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
