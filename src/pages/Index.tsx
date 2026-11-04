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
        <div className="mx-auto my-5 w-fit max-w-[90%] rounded-2xl border-2 border-dashed border-amber-400 bg-amber-100 px-6 py-4 text-center text-amber-950 shadow-lg" role="status">
          <div className="text-3xl" aria-hidden="true">🍎🤖🎉</div>
          <p className="mt-1 text-lg font-bold">ATTENZIONE: una mela ha preso il controllo del sito!</p>
          <p className="text-sm">Test ChatGPT riuscito... se riesci a leggere questo, il branch preview funziona! 😄</p>
        </div>
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
