import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import TechnologySection from "@/components/TechnologySection";
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
        <VisionSection />
        <TechnologySection />
        <AppPreviewSection />
        <MeteoSection />
        <ManagementSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
