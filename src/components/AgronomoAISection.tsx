import { Bot, FileSearch, Beaker, MessageSquare, User, Sparkles, AlertTriangle, CheckCircle2, ThermometerSnowflake, Droplets, Leaf } from "lucide-react";

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

        {/* AI Response Example */}
        <div className="animate-fade-up-delay-2">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Esempio di risposta reale
            </span>
          </div>
          
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl max-w-4xl mx-auto">
            {/* Question Header */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-5 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">La tua domanda</p>
                  <p className="font-medium text-foreground">
                    "Ciao, domani alle 14 posso trattare con i prodotti selezionati?"
                  </p>
                </div>
              </div>
            </div>

            {/* AI Response */}
            <div className="p-6 space-y-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Agronomo AI</p>
                  <p className="text-xs text-muted-foreground">Risposta personalizzata</p>
                </div>
              </div>

              <p className="text-sm">Ciao! Analizziamo la situazione per domani.</p>
              
              {/* Alert Box */}
              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-destructive">Risposta Rapida: NO, ti sconsiglio vivamente di trattare domani alle 14:00.</p>
                </div>
              </div>

              <p className="font-semibold text-sm">Motivazioni e Consigli Pratici:</p>

              {/* Reason Cards */}
              <div className="space-y-4">
                <div className="bg-background/50 rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    <span className="font-semibold text-sm text-destructive">1. Rischio Bagnatura/Nebbia (CRITICO!)</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Questo è il problema principale. I prodotti come Dodina e Dithianon (Delan) necessitano di asciugare correttamente sulla vegetazione per formare un film protettivo efficace e aderire bene. Con il rischio di nebbia e bagnatura, i prodotti non asciugherebbero o asciugherebbero molto lentamente, riducendo drasticamente la loro efficacia, favorendo il dilavamento e potenzialmente creando problemi di fitotossicità (anche se in riposo invernale il rischio è minore, l'efficacia è comunque compromessa). Trattare su vegetazione già bagnata o con nebbia in arrivo è controproducente.
                  </p>
                </div>

                <div className="bg-background/50 rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <ThermometerSnowflake className="w-4 h-4 text-cyan-500" />
                    <span className="font-semibold text-sm text-amber-600">2. Temperature Troppo Basse</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Le temperature massime previste di 5.7°C sono molto basse. Sebbene Dodina sia efficace anche a temperature fresche, e Delan abbia una buona attività in un range ampio, l'assorbimento e l'attività sistemica (limitata per questi prodotti, ma comunque un aspetto) sarebbero molto rallentati. È preferibile attendere temperature diurne un po' più miti per ottimizzare l'azione dei fungicidi.
                  </p>
                </div>

                <div className="bg-background/50 rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="w-4 h-4 text-green-500" />
                    <span className="font-semibold text-sm text-primary">3. Fase Fenologica (BBCH 0)</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Siamo in pieno riposo invernale. L'obiettivo di questo trattamento è probabilmente la riduzione dell'inoculo svernante della ticchiolatura. In questa fase, l'efficacia del trattamento è meno urgente rispetto a fasi successive di riapertura delle gemme. Questo ti dà il tempo di aspettare condizioni migliori.
                  </p>
                </div>
              </div>

              {/* Recommendation */}
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm">Cosa farei al tuo posto:</span>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong>Rinvia il trattamento.</strong> È fondamentale aspettare una giornata con assenza di nebbia, rischio bagnatura nullo e, possibilmente, temperature diurne in lieve aumento, che permettano una rapida asciugatura del prodotto sulla pianta.
                  </p>
                  <p>
                    <strong>Monitora il meteo per i prossimi giorni</strong> e cerca una finestra di bel tempo stabile. Idealmente, cerca una giornata con bassa umidità, temperature che salgano sopra i 8-10°C per alcune ore e assenza di vento eccessivo (il 7.4 km/h previsto per domani sarebbe accettabile, ma non compensa gli altri fattori negativi).
                  </p>
                  <p>
                    <strong>Considerando la fase di riposo, hai tempo per riprogrammare</strong> senza compromettere l'efficacia della strategia fitosanitaria generale.
                  </p>
                </div>
              </div>

              {/* Quantities */}
              <div className="bg-background/50 rounded-xl p-5 border border-border">
                <p className="font-semibold text-sm mb-4">📊 Quantità per la tua area (per quando potrai trattare):</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">Dodina Syllit 65</p>
                    <p className="text-xs text-muted-foreground">1.38 kg/ha × 0.2886 ha</p>
                    <p className="font-bold text-base mt-1">0.398 kg</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">Delan® 70 WG</p>
                    <p className="text-xs text-muted-foreground">0.75 kg/ha × 0.2886 ha</p>
                    <p className="font-bold text-base mt-1">0.216 kg</p>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">Acqua</p>
                    <p className="text-xs text-muted-foreground">354 L/ha × 0.2886 ha</p>
                    <p className="font-bold text-base mt-1">102.2 L</p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-muted/50 rounded-xl p-4 border-l-4 border-primary">
                <p className="text-sm leading-relaxed">
                  <strong>In sintesi,</strong> la miscela Dodina + Delan è tecnicamente compatibile e il loro utilizzo in fase di riposo ha senso per la strategia anti-ticchiolatura, ma le condizioni meteo di domani sono assolutamente sfavorevoli. <strong>Meglio aspettare!</strong> 🍎
                </p>
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
