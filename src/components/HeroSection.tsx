import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";
import LiveTicker from "./LiveTicker";
import LiveStatsRow from "./LiveStatsRow";

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          top: "-10%",
          bottom: "-10%",
        }}
      />
      <div className="absolute inset-0 z-0 bg-background/50" />
      <div className="absolute top-0 left-0 right-0 h-40 z-[1] bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[1] bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-primary">Disponibile ora</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight drop-shadow-[0_2px_10px_hsl(var(--background))]">
              MelaSmart: Gestione
              <br />
              <span className="text-gradient-green drop-shadow-[0_2px_10px_hsl(var(--background))]">Professionale del Frutteto.</span>
            </h1>
          </div>

          <div className="animate-fade-up-delay-1">
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-0 leading-relaxed font-medium drop-shadow-[0_1px_8px_hsl(var(--background))]">
              Il copilota agronomico avanzato che trasforma i dati in decisioni.
              <br className="hidden md:block" />
              Ottimizza i trattamenti, riduci l'impatto ambientale, massimizza il raccolto.
            </p>
          </div>
        </div>

        <div className="animate-fade-up-delay-2 text-center">
          <Button
            variant="cta"
            size="xl"
            asChild
            className="group glow-border"
          >
            <a href="https://app.melasmart.com" target="_blank" rel="noopener noreferrer">
              Prova la Web App
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Gratis · Nessuna carta richiesta
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
