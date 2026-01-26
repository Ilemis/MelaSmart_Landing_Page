import { Check, Star, Zap, Brain, CloudSun, FlaskConical, Calculator, Shield, Leaf, Layers } from "lucide-react";

const ValueSection = () => {
  const premiumFeatures = [
    {
      icon: Calculator,
      name: "Algoritmo TRV Scientifico",
      subtitle: "Tree Row Volume",
      description: "Smetti di sprecare acqua. Calcoliamo l'esatto fabbisogno idrico basandoci sulla volumetria reale della tua parete fogliare, non su stime approssimative."
    },
    {
      icon: Brain,
      name: "MelaSmart AI™ Copilot",
      subtitle: "Agronomo Virtuale",
      description: "Un agronomo senior sempre al tuo fianco. La nostra IA analizza contemporaneamente fenologia, meteo e prodotti per validare ogni tua decisione tecnica."
    },
    {
      icon: CloudSun,
      name: "Predictive Spray Window",
      subtitle: "Delta T Optimization",
      description: "Identifica la finestra di intervento perfetta. Grazie all'analisi del Delta T, sai esattamente quando il trattamento avrà la massima efficacia biologica."
    },
    {
      icon: FlaskConical,
      name: "Mixture Wizard 2.0",
      subtitle: "Precision Mix",
      description: "Zero errori in botte. Generiamo una ricetta millimetrica per ogni singola irroratrice, inclusa la gestione intelligente della 'botte di chiusura'."
    },
    {
      icon: Zap,
      name: "Intelligence Economica",
      subtitle: "ROI per Trattamento",
      description: "Calcola il costo di ogni passaggio al centesimo. Sapere il ROI di ogni trattamento è una funzione da grandi aziende, ora accessibile a tutti."
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
    {
      icon: Layers,
      name: "Ecosistema Integrato",
      subtitle: "Full-Stack Precision",
      description: "Il Magazzino parla con il Wizard, il Meteo parla con l'AI. Questa integrazione totale è ciò che rende MelaSmart veramente Premium."
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
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

        <div className="grid md:grid-cols-2 gap-6">
          {premiumFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{feature.name}</h3>
                  </div>
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{feature.subtitle}</span>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
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
