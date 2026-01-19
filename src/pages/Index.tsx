import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PWASection from "@/components/PWASection";
import FarmerOriginSection from "@/components/FarmerOriginSection";
import ValueSection from "@/components/ValueSection";
import AgronomoAISection from "@/components/AgronomoAISection";
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
        <PWASection />
        <FarmerOriginSection />
        <ValueSection />
        <AgronomoAISection />
        <AppPreviewSection />
        <MeteoSection />
        <ManagementSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
