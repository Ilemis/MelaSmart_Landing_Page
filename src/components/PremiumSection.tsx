import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Map, CloudSun, Truck, ScanLine, FileText, Settings, History } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI™ Copilot",
    desc: "20 rich./gg con MelaSmart AI™ Copilot per analisi, consigli specialistici e miscele. Ragionamento a due livelli con Gemini 3 Flash.",
  },
  {
    icon: Map,
    title: "Campi Multipli",
    desc: "Gestisci fino a 50 campi salvati, senza restare bloccato a un solo appezzamento operativo.",
  },
  {
    icon: CloudSun,
    title: "Meteo Operativo Avanzato",
    desc: "Grafici meteo, Delta T e finestre di trattamento orarie per decidere meglio quando entrare in campo.",
  },
  {
    icon: Truck,
    title: "Garage Completo",
    desc: "Salvi fino a 50 trattori e 50 atomizzatori con setup macchina dedicati.",
  },
  {
    icon: ScanLine,
    title: "OCR Fatture Premium",
    desc: "Carichi la fattura, MelaSmart legge le righe e salva i prodotti in magazzino con revisione guidata.",
  },
  {
    icon: FileText,
    title: "Registro Completo",
    desc: "Esportazioni e PDF senza il limite Free che taglia il registro alle ultime 3 righe.",
  },
  {
    icon: Settings,
    title: "Setup Più Precisi",
    desc: "Calibrazione, configurazioni macchina e calcolo TRV avanzato, disponibile solo nel piano Premium.",
  },
  {
    icon: History,
    title: "Storico AI Salvato",
    desc: "Mantieni la cronologia delle domande all'agronomo e riprendi le analisi quando ti serve.",
  },
];

const PremiumSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05, rootMargin: "0px 0px -20px 0px" });

  return (
    <section id="premium" className="py-20 px-4 mesh-bg-2">
      <div
        ref={ref}
        className={`container mx-auto max-w-6xl scroll-reveal ${isVisible ? "visible" : ""}`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary mb-4">
            PREMIUM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            MelaSmart <span className="text-gradient-green">PREMIUM</span>
          </h2>
          <p className="text-lg font-semibold text-foreground/80 mb-2">
            Più operatività, più storico, più controllo
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium sblocca la parte operativa completa di MelaSmart. Se usi l'app su più appezzamenti, con più macchine o vuoi sfruttare davvero AI, meteo e registro trattamenti, qui trovi tutte le funzioni senza i limiti del piano Free.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="stagger-child group rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-5 hover-lift glow-border"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5 text-sm">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing Box */}
        <div className="max-w-md mx-auto text-center bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-lg">
          <p className="text-muted-foreground text-sm mb-1">
            Pensato per chi usa davvero l'app in stagione
          </p>
          <p className="text-xs text-muted-foreground mb-6">
            Più campi, più macchine, più richieste AI e strumenti meteo completi in un unico piano.
          </p>
          <div className="flex items-baseline justify-center gap-1 mb-6">
            <span className="text-5xl font-bold text-foreground">4,99€</span>
            <span className="text-muted-foreground">/mese</span>
          </div>
          <Button variant="cta" size="lg" asChild className="w-full group glow-border">
            <a href="https://app.melasmart.com" target="_blank" rel="noopener noreferrer">
              Passa a Premium
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
