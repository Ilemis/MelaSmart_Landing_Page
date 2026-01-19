import { Zap, RefreshCw, Download } from "lucide-react";

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
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
            Progressive Web App
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tutta la potenza,
            <br />
            <span className="text-gradient-green">nessuna complicazione.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            MelaSmart è una PWA: un'app web che si comporta come un'app nativa. 
            Nessun download da App Store, nessun aggiornamento manuale, nessuno spazio occupato.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PWASection;
