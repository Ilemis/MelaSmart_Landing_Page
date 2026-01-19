import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FarmerOriginSection from "@/components/FarmerOriginSection";
import ValueSection from "@/components/ValueSection";
import AgronomoAISection from "@/components/AgronomoAISection";
import VisionSection from "@/components/VisionSection";
import AppPreviewSection from "@/components/AppPreviewSection";
import MeteoSection from "@/components/MeteoSection";
import ManagementSection from "@/components/ManagementSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FarmerOriginSection />
        <ValueSection />
        <AgronomoAISection />
        <VisionSection />
        <AppPreviewSection />
        <MeteoSection />
        <ManagementSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
