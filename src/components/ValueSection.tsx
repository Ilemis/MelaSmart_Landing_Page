import { Check, Star, Brain, CloudSun, FlaskConical, Calculator, Shield, Leaf, Layers, Zap, ClipboardList, Crosshair, BarChart3, ChevronDown, Eye } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  {
    name: "Pianificazione",
    icon: ClipboardList,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    accentColor: "bg-blue-500/5",
    features: [
      {
        icon: Calculator,
        name: "Algoritmo TRV Scientifico",
        subtitle: "Tree Row Volume",
        description: "Smetti di sprecare acqua. Calcoliamo l'esatto fabbisogno idrico basandoci sulla volumetria reale della tua parete fogliare, non su stime approssimative."
      },
      {
        icon: CloudSun,
        name: "Predictive Spray Window",
        subtitle: "Delta T Optimization",
        description: "Identifica la finestra di intervento perfetta. Grazie all'analisi del Delta T, sai esattamente quando il trattamento avrà la massima efficacia biologica."
      },
      {
        icon: Brain,
        name: "MelaSmart AI™ Copilot",
        subtitle: "Agronomo Virtuale",
        description: "Un agronomo senior sempre al tuo fianco. La nostra IA analizza contemporaneamente fenologia, meteo e prodotti per validare ogni tua decisione tecnica."
      },
      {
        icon: Eye,
        name: "Gemini Vision",
        subtitle: "Diagnosi Visiva AI",
        description: "Scatta una foto e ottieni una diagnosi. Carica un'immagine di foglie, frutti o parassiti e ricevi un'analisi dettagliata con identificazione della malattia e consigli pratici di intervento. Esclusiva Premium."
      },
    ]
  },
  {
    name: "Esecuzione",
    icon: Crosshair,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    accentColor: "bg-emerald-500/5",
    features: [
      {
        icon: FlaskConical,
        name: "Mixture Wizard 2.0",
        subtitle: "Precision Mix",
        description: "Zero errori in botte. Generiamo una ricetta millimetrica per ogni singola irroratrice, inclusa la gestione intelligente della 'botte di chiusura'."
      },
      {
        icon: Shield,
        name: "Compliance Control",
        subtitle: "Audit-Ready",
        description: "Supera qualsiasi controllo burocratico con export PDF professionali e tracciabilità totale, tutto dal tuo smartphone."
      },
      {
        icon: Leaf,
        name: "Sostenibilità Certificata",
        subtitle: "Nano-Dosaggio",
        description: "Riduci l'impronta chimica del tuo frutteto. Un valore immenso per chi vende a GDO o mercati esteri che richiedono standard green."
      },
    ]
  },
  {
    name: "Analisi",
    icon: BarChart3,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    accentColor: "bg-amber-500/5",
    features: [
      {
        icon: Zap,
        name: "Intelligence Economica",
        subtitle: "ROI per Trattamento",
        description: "Calcola il costo di ogni passaggio al centesimo. Sapere il ROI di ogni trattamento è una funzione da grandi aziende, ora accessibile a tutti."
      },
      {
        icon: Layers,
        name: "Ecosistema Integrato",
        subtitle: "Full-Stack Precision",
        description: "Il Magazzino parla con il Wizard, il Meteo parla con l'AI. Questa integrazione totale è ciò che rende MelaSmart veramente Premium."
      },
    ]
  },
];

const FeatureItem = ({ feature, categoryColor }: { feature: typeof categories[0]["features"][0]; categoryColor: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors group"
    >
      <div className="flex items-center gap-3">
        <feature.icon className={`w-5 h-5 ${categoryColor} flex-shrink-0 transition-transform duration-300 group-hover:rotate-12`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-foreground">{feature.name}</span>
            <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider hidden sm:inline">{feature.subtitle}</span>
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </div>
      {open && (
        <p className="text-sm text-muted-foreground mt-2 ml-8 leading-relaxed animate-fade-up">
          {feature.description}
        </p>
      )}
    </button>
  );
};

const ValueSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 px-4 mesh-bg-1">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={ref}
          className={`text-center mb-16 scroll-reveal ${isVisible ? "visible" : ""}`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm/10 text-warm-dark text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Professional Crop Management
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tecnologia Enterprise,
            <br />
            <span className="text-gradient-green">prezzo da agricoltore.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Le app professionali per l'agricoltura costano centinaia di euro all'anno. 
            MelaSmart offre le stesse funzionalità ad una <strong className="text-foreground"> frazione del costo</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`rounded-2xl border ${cat.borderColor} ${cat.accentColor} p-5 glow-border stagger-child`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl ${cat.bgColor} flex items-center justify-center transition-transform duration-300 hover:rotate-12`}>
                  <cat.icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <h3 className="font-bold text-lg text-foreground">{cat.name}</h3>
              </div>

              <div className="flex flex-col gap-1">
                {cat.features.map((feature, j) => (
                  <FeatureItem key={j} feature={feature} categoryColor={cat.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-muted/50 rounded-2xl px-6 py-4 border border-border/50">
            <Check className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              Un unico abbonamento per tutto, senza sorprese. Strumenti professionali, prezzo da agricoltore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
