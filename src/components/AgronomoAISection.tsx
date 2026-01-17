import { Bot, FileSearch, Beaker, MessageSquare, User, Sparkles, AlertTriangle, CheckCircle2, ThermometerSnowflake, Droplets } from "lucide-react";

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
      <div className="container mx-auto max-w-6xl">
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

        <div className="grid md:grid-cols-3 gap-6 animate-fade-up-delay-1 mb-16">
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

        {/* Chat Example */}
        <div className="animate-fade-up-delay-2">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Esempio di conversazione reale
            </span>
          </div>
          
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl max-w-4xl mx-auto">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-4 border-b border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Agronomo AI</h4>
                <p className="text-xs text-muted-foreground">Esperto in melicoltura</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-6 max-h-[600px] overflow-y-auto">
              {/* User Message */}
              <div className="flex gap-3 justify-end">
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-5 py-3 max-w-md">
                  <p className="text-sm">Ciao, domani alle 14 posso trattare con i prodotti selezionati?</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted rounded-2xl rounded-tl-sm px-5 py-4 max-w-2xl space-y-4">
                  <p className="text-sm">Ciao! Analizziamo la situazione per domani.</p>
                  
                  {/* Alert Box */}
                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-destructive">Risposta Rapida: NO</p>
                      <p className="text-sm text-muted-foreground mt-1">Ti sconsiglio vivamente di trattare domani alle 14:00.</p>
                    </div>
                  </div>

                  <p className="font-semibold text-sm">Motivazioni e Consigli Pratici:</p>

                  {/* Reason Cards */}
                  <div className="space-y-3">
                    <div className="bg-background/50 rounded-xl p-3 border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Droplets className="w-4 h-4 text-blue-500" />
                        <span className="font-medium text-sm text-destructive">Rischio Bagnatura/Nebbia (CRITICO!)</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        I prodotti come Dodina e Dithianon necessitano di asciugare correttamente. Con nebbia, non asciugherebbero, riducendo drasticamente l'efficacia.
                      </p>
                    </div>

                    <div className="bg-background/50 rounded-xl p-3 border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <ThermometerSnowflake className="w-4 h-4 text-cyan-500" />
                        <span className="font-medium text-sm text-amber-600">Temperature Troppo Basse</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Le temperature massime previste di 5.7°C sono molto basse. Attendi temperature diurne più miti per ottimizzare l'azione dei fungicidi.
                      </p>
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-sm">Cosa farei al tuo posto:</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>Rinvia il trattamento.</strong> Cerca una giornata con assenza di nebbia, temperature sopra 8-10°C e bassa umidità. Considerando la fase di riposo, hai tempo per riprogrammare.
                    </p>
                  </div>

                  {/* Quantities */}
                  <div className="bg-background/50 rounded-xl p-4 border border-border">
                    <p className="font-semibold text-sm mb-3">📊 Quantità per la tua area (0.29 ha):</p>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-muted rounded-lg p-2">
                        <p className="text-xs text-muted-foreground">Dodina Syllit 65</p>
                        <p className="font-bold text-sm">0.398 kg</p>
                      </div>
                      <div className="bg-muted rounded-lg p-2">
                        <p className="text-xs text-muted-foreground">Delan® 70 WG</p>
                        <p className="font-bold text-sm">0.216 kg</p>
                      </div>
                      <div className="bg-muted rounded-lg p-2">
                        <p className="text-xs text-muted-foreground">Acqua</p>
                        <p className="font-bold text-sm">102.2 L</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground italic">
                    In sintesi, la miscela è compatibile ma le condizioni meteo sono sfavorevoli. <strong>Meglio aspettare!</strong> 🍎
                  </p>
                </div>
              </div>
            </div>
          </div>
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
