import { Leaf } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WaveDivider = () => (
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 md:h-16">
      <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
    </svg>
  </div>
);

const FarmerOriginSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-20 px-4 mesh-bg-2">
      <div className="container mx-auto max-w-3xl">
        <div
          ref={ref}
          className={`text-center space-y-6 scroll-reveal ${isVisible ? "visible" : ""}`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Leaf className="w-4 h-4" />
            Creata da chi lavora sul campo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Un agricoltore per gli agricoltori.
            <br />
            <span className="text-gradient-green">Zero complicazioni.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            MelaSmart nasce dall'esperienza diretta di chi ogni giorno è in campo.
            Niente fronzoli: solo ciò che serve per gestire i trattamenti in modo rapido ed efficace.
            È una <strong>Progressive Web App</strong> — si installa in un tap, si aggiorna da sola e non occupa spazio. Le funzioni di calcolo miscela restano disponibili anche offline, mentre meteo, AI e altre funzionalità cloud richiedono connessione internet.
          </p>
        </div>
      </div>
      <WaveDivider />
    </section>
  );
};

export default FarmerOriginSection;
