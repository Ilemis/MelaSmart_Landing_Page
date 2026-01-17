import { Bot, FileSearch, Beaker, MessageSquare } from "lucide-react";

const AgronomoAISection = () => {
  const features = [
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "Parsing e Importazione Prodotti",
      description:
        "Cerca prodotti fitosanitari e importa automaticamente tutti i dati strutturati: Nome, Principio Attivo, Tipo, Dosaggio standard, Numero di Registrazione e Avversità. Pronti per il tuo database in un click.",
    },
    {
      icon: <Beaker className="w-6 h-6" />,
      title: "Ricerca Dosaggio Etichetta",
      description:
        "Trova istantaneamente le dosi di etichetta ministeriale (dose/hl e dose/ha) per ogni prodotto e principio attivo su melo. Sempre aggiornato grazie all'integrazione con ricerca web.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI Agronomo Esperto",
      description:
        "Un agronomo virtuale specializzato nella coltivazione del melo. Risponde alle tue domande considerando fase fenologica, dati meteo e contesto per consigli pratici e immediati.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            Intelligenza Artificiale
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Agronomo AI:
            <br />
            <span className="text-gradient-green">il tuo copilota in campo.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tre strumenti AI che lavorano insieme per velocizzare il tuo lavoro quotidiano 
            e darti risposte precise quando ti servono.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fade-up-delay-1">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover-lift group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <div className="text-primary">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-up-delay-2">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Agronomo AI è incluso nel tuo abbonamento MelaSmart
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgronomoAISection;
