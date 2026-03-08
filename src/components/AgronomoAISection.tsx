import { Bot, FileSearch, Beaker, MessageSquare, User, Sparkles, AlertTriangle, CheckCircle2, ThermometerSnowflake, Droplets, Leaf, ChevronLeft, ChevronRight, FlaskConical, ShieldAlert, XCircle, Camera, Eye, Scissors, Search, Sprout, TreeDeciduous } from "lucide-react";
import visionImage from "@/assets/screenshot-vision-ticchiolatura.jpg";
import { useState } from "react";

const AgronomoAISection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const features = [
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "Parsing e Importazione Prodotti",
      description:
        "Cerca prodotti fitosanitari e importa automaticamente tutti i dati strutturati: Nome, Principio Attivo, Tipo, Dosaggio standard, Numero di Registrazione e Avversità. I dati vengono recuperati direttamente dal dataset ministeriale ed elaborati da Gemini AI. Pronti per il tuo database in un click.",
      note: "Se il prodotto è già presente nel database MelaSmart, non verranno consumati crediti AI.",
    },
    {
      icon: <Beaker className="w-6 h-6" />,
      title: "Ricerca Dosaggio Etichetta",
      description:
        "Trova istantaneamente le dosi di etichetta ministeriale (dose/hl e dose/ha) per ogni prodotto e principio attivo sulla coltura selezionata. I dosaggi vengono consultati direttamente dal dataset ministeriale e, se necessario, integrati tramite ricerca web AI.",
      note: "Se il prodotto è già presente nel database MelaSmart, non verranno consumati crediti AI.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI Agronomo Esperto",
      description:
        "Un agronomo virtuale specializzato nella coltivazione del melo o della cultivar che selezioni. Risponde alle tue domande considerando fase fenologica, dati meteo e contesto. Con la nuova funzione Vision puoi caricare una foto del contesto agricolo — malattie, parassiti, carenze — e ricevere una diagnosi mirata con consigli pratici e immediati.",
      note: "Costa 1 credito AI.",
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
            MelaSmart AI™ Copilot:
            <br />
            <span className="text-gradient-green">il tuo agronomo virtuale.</span>
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
              {feature.note && (
                <p className="text-xs text-primary mt-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* AI Response Examples - Slider */}
        <div className="animate-fade-up-delay-2">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Esempi di risposte reali
            </span>
          </div>

          {/* Slider Navigation */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={() => setActiveSlide(0)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSlide === 0
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              Esempio 1 — Finestra di trattamento
            </button>
            <button
              onClick={() => setActiveSlide(1)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSlide === 1
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              Esempio 2 — Compatibilità miscela
            </button>
            <button
              onClick={() => setActiveSlide(2)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSlide === 2
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              Esempio 3 — Gemini Vision
            </button>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Arrows */}
            <button
              onClick={() => setActiveSlide(prev => prev === 0 ? 2 : prev - 1)}
              className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-card flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Slide precedente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveSlide(prev => prev === 2 ? 0 : prev + 1)}
              className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-card flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Slide successiva"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slides Container */}
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {/* SLIDE 1 — Finestra di trattamento */}
                <div className="w-full flex-shrink-0">
                  <SlideOne />
                </div>
                {/* SLIDE 2 — Compatibilità miscela */}
                <div className="w-full flex-shrink-0">
                  <SlideTwo />
                </div>
                {/* SLIDE 3 — Gemini Vision */}
                <div className="w-full flex-shrink-0">
                  <SlideThree />
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {[0, 1].map(i => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === i ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Vai allo slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center animate-fade-up-delay-2">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              MelaSmart AI™ Copilot è incluso anche nella versione free con limiti giornalieri
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── SLIDE 1: Finestra di trattamento (existing) ─── */
const SlideOne = () => (
  <div className="bg-card border border-border overflow-hidden shadow-xl">
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
      
      <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-sm text-destructive">Risposta Rapida: NO, ti sconsiglio vivamente di trattare domani alle 14:00.</p>
        </div>
      </div>

      <p className="font-semibold text-sm">Motivazioni e Consigli Pratici:</p>

      <div className="space-y-4">
        <div className="bg-background/50 rounded-xl p-4 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-4 h-4 text-blue-500" />
            <span className="font-semibold text-sm text-destructive">1. Rischio Bagnatura/Nebbia (CRITICO!)</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I prodotti come Dodina e Dithianon necessitano di asciugare correttamente sulla vegetazione. Con il rischio di nebbia, i prodotti non asciugherebbero, riducendo drasticamente la loro efficacia.
          </p>
        </div>

        <div className="bg-background/50 rounded-xl p-4 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <ThermometerSnowflake className="w-4 h-4 text-cyan-500" />
            <span className="font-semibold text-sm text-amber-600">2. Temperature Troppo Basse</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Le temperature massime previste di 5.7°C sono molto basse. L'assorbimento e l'attività sarebbero molto rallentati. Meglio attendere temperature diurne più miti.
          </p>
        </div>

        <div className="bg-background/50 rounded-xl p-4 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="w-4 h-4 text-green-500" />
            <span className="font-semibold text-sm text-primary">3. Fase Fenologica (BBCH 0)</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Siamo in pieno riposo invernale. L'obiettivo è la riduzione dell'inoculo svernante della ticchiolatura. Questo ti dà il tempo di aspettare condizioni migliori.
          </p>
        </div>
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold text-sm">Cosa farei al tuo posto:</span>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p><strong>Rinvia il trattamento.</strong> Aspetta una giornata con assenza di nebbia e temperature diurne in lieve aumento.</p>
          <p><strong>Monitora il meteo per i prossimi giorni</strong> e cerca una finestra di bel tempo stabile.</p>
        </div>
      </div>

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

      <div className="bg-muted/50 rounded-xl p-4 border-l-4 border-primary">
        <p className="text-sm leading-relaxed">
          <strong>In sintesi,</strong> la miscela Dodina + Delan è tecnicamente compatibile, ma le condizioni meteo di domani sono sfavorevoli. <strong>Meglio aspettare!</strong> 🍎
        </p>
      </div>
    </div>
  </div>
);

/* ─── SLIDE 2: Compatibilità miscela ─── */
const SlideTwo = () => (
  <div className="bg-card border border-border overflow-hidden shadow-xl">
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-5 border-b border-border">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <User className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">La tua domanda</p>
          <p className="font-medium text-foreground">
            "Ciao, quale prodotto posso usare insieme a quello selezionato?"
          </p>
        </div>
      </div>
    </div>

    <div className="p-6 space-y-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-sm">Agronomo AI</p>
          <p className="text-xs text-muted-foreground">Risposta personalizzata · BBCH 0 · Gemma dormiente</p>
        </div>
      </div>

      <p className="text-sm">
        Ottima domanda! Dato il contesto operativo (fase BBCH 0 — Gemma dormiente) e il prodotto selezionato (<strong>CUPRAVIT BIO ADVANCED</strong> a base di rame), ecco il mio consiglio pratico:
      </p>

      <p className="text-sm">
        In questa fase l'obiettivo del rame è la <strong>"pulizia invernale"</strong> e la prevenzione delle prime infezioni di patogeni svernanti (peronospora, escoriosi, batteriosi). Il rischio di fitotossicità è minimo.
      </p>

      {/* Compatible Section */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold text-sm">Prodotti compatibili con CUPRAVIT BIO ADVANCED in BBCH 0:</span>
        </div>
        <div className="space-y-4">
          <div className="bg-background/60 rounded-xl p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <FlaskConical className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm">1. Oli Minerali / Insetticidi Invernali</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Controllano le forme svernanti di insetti e acari (cocciniglie, acari rossi, psille, metcalfa). Il rame non ha azione insetticida, quindi amplia lo spettro d'azione del trattamento.
            </p>
          </div>

          <div className="bg-background/60 rounded-xl p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Droplets className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm">2. Adesivanti / Bagnanti / Coadiuvanti</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Migliorano la copertura e l'adesione sulla superficie lignea. Ottimizzano l'efficacia del rame e la resistenza al dilavamento.
            </p>
          </div>
        </div>
      </div>

      {/* Incompatible Section */}
      <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <XCircle className="w-5 h-5 text-destructive" />
          <span className="font-semibold text-sm">Sconsigliati o inutili in questa fase:</span>
        </div>
        <div className="space-y-4">
          <div className="bg-background/60 rounded-xl p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="w-4 h-4 text-amber-500" />
              <span className="font-semibold text-sm text-amber-600">Zolfo</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              L'azione dello zolfo è principalmente contro l'oidio, che in fase di gemma dormiente non è un problema. La miscela sarebbe superflua per l'obiettivo specifico.
            </p>
          </div>

          <div className="bg-background/60 rounded-xl p-4 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Leaf className="w-4 h-4 text-amber-500" />
              <span className="font-semibold text-sm text-amber-600">Concimi Fogliari o Biostimolanti</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In BBCH 0 la pianta non ha foglie attive per assorbire nutrienti. L'applicazione sarebbe uno spreco senza alcun beneficio.
            </p>
          </div>
        </div>
      </div>

      {/* Practical Tips */}
      <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-semibold text-sm">Consigli pratici per la miscela:</span>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
          <p>📋 <strong>Ordine di miscelazione:</strong> acqua → polveri bagnabili (WP) → granuli (WG come CUPRAVIT) → sospensioni (SC) → emulsioni (EC/oli) → adesivanti.</p>
          <p>🧪 <strong>Jar test:</strong> verifica la compatibilità fisica in un piccolo contenitore prima di riempire l'atomizzatore.</p>
          <p>📑 <strong>Etichette ufficiali:</strong> consulta sempre le etichette di tutti i prodotti per avvertenze specifiche sulla compatibilità.</p>
        </div>
      </div>

      <div className="bg-muted/50 rounded-xl p-4 border-l-4 border-primary">
        <p className="text-sm leading-relaxed">
          <strong>In sintesi,</strong> per la pulizia invernale in BBCH 0 con CUPRAVIT BIO ADVANCED, valuta l'aggiunta di <strong>oli minerali/insetticidi per forme svernanti</strong> e/o un <strong>adesivante</strong> per ottimizzare l'efficacia. 🍎
        </p>
      </div>
    </div>
  </div>
);

export default AgronomoAISection;
