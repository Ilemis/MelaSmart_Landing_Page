import iconMelasmart from "@/assets/icon-melasmart.png";
import { Smartphone, Zap, RefreshCw, Download } from "lucide-react";

const PWASection = () => {
  const benefits = [
    {
      icon: Download,
      title: "Zero App Store",
      description: "Nessuna installazione da store. Aggiungi alla Home in un tap."
    },
    {
      icon: Zap,
      title: "Performance Nativa",
      description: "Fluida come un'app nativa, anche con connessione debole in campo."
    },
    {
      icon: RefreshCw,
      title: "Sempre Aggiornata",
      description: "Ogni volta che apri l'app hai l'ultima versione, automaticamente."
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: App Preview Card */}
          <div className="flex justify-center animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-melasmart-green/20 to-transparent rounded-4xl blur-3xl" />
              <div className="relative glass rounded-4xl p-8 hover-lift">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={iconMelasmart}
                    alt="MelaSmart App"
                    className="w-20 h-20 rounded-2xl shadow-card"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">MelaSmart</h3>
                    <p className="text-sm text-primary font-medium">PWA Native Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-3 border border-border/50">
                  <Smartphone className="w-5 h-5 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    L'app vive sulla home del tuo smartphone, pronta all'uso in 1 secondo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Progressive Web App
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Tutta la potenza,
              <br />
              <span className="text-gradient-green">nessuna complicazione.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MelaSmart è una PWA: un'app web che si comporta come un'app nativa. 
              Nessun download da App Store, nessun aggiornamento manuale, nessuno spazio occupato.
            </p>

            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 animate-fade-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PWASection;
