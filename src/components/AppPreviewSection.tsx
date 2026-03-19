import screenshotAssistente from "@/assets/screenshot-assistente.jpg";
import screenshotMagazzino from "@/assets/screenshot-magazzino.jpg";
import screenshotVolume from "@/assets/screenshot-volume.jpg";
import screenshotMiscela from "@/assets/screenshot-miscela.jpg";
import screenshotStrategia from "@/assets/screenshot-strategia.jpg";
import screenshotCampi from "@/assets/screenshot-campi.jpg";
import screenshotCarpocapsa from "@/assets/screenshot-carpocapsa.png";
import screenshotMeteo from "@/assets/screenshot-meteo.jpg";
import screenshotGarage from "@/assets/screenshot-garage.jpg";
import screenshotCopilot from "@/assets/screenshot-agronomo-copilot.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Bug, Thermometer, Bell, Bot, Brain, Zap, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const screenshots = [
  {
    image: screenshotAssistente,
    title: "Home Dashboard",
    description: "Panoramica giornaliera con finestre di trattamento, fase fenologica, MelaSmart AI™ Copilot, viste veloci su scorte e ultimi trattamenti.",
  },
  {
    image: screenshotMagazzino,
    title: "Magazzino Predittivo",
    description: "Monitora scorte, costi, imposta soglie di allerta. In ogni card prodotto puoi attivare un popup che scarica le info ministeriali come data smaltimento scorte e stato amministrativo e ricevi suggerimenti intelligenti per gli acquisti.",
  },
  {
    image: screenshotMeteo,
    title: "Agri-Meteo Localizzato",
    description: "Semafori intelligenti da oggi a 7 giorni con grafici controllo nebbie, gelate, fenomeni e nuvole. Dati meteo localizzati su campo con Delta T, umidità, vento e rischio bagnatura.",
  },
  {
    image: screenshotGarage,
    title: "Il tuo Garage",
    description: "Salva i tuoi trattori e atomizzatori con foto, potenza e tipologia. Seleziona il mezzo per la calibrazione e sincronizza il parco macchine con i trattamenti.",
  },
  {
    image: screenshotCampi,
    title: "Wizard step 1",
    description: "Selezione dei campi target e bottone dedicato per entrare nella modalità GIS lite Disegna Campo.",
  },
  {
    image: screenshotMiscela,
    title: "Wizard step 2",
    description: "Componi la miscela selezionando la card prodotto e configura le dosi o cercale con AI per riscontro veloce.",
  },
  {
    image: screenshotVolume,
    title: "Wizard step 3",
    description: "Gestione del volume d'acqua ottimale per ogni trattamento.",
  },
  {
    image: screenshotStrategia,
    title: "Wizard step 4",
    description: "Strategia miscela con dosi chiare per facile lettura, avvio modalità campo per attivare la visuale tachimetro GPS con avvisi per discostamento rispetto alla velocità target, salvataggio miscela nei preferiti.",
  },
];

const ScreenshotCard = ({ screenshot }: { screenshot: typeof screenshots[0] }) => (
  <div className="group relative h-full">
    <div className="absolute inset-0 bg-gradient-to-br from-melasmart-green/10 to-transparent rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative glass rounded-4xl p-6 tilt-card h-full">
      <div className="relative overflow-hidden rounded-3xl bg-secondary/30 flex justify-center">
        <img
          src={screenshot.image}
          alt={screenshot.title}
          className="w-auto max-h-[500px] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold mb-2">{screenshot.title}</h3>
        <p className="text-muted-foreground">{screenshot.description}</p>
      </div>
    </div>
  </div>
);

const CopilotCard = () => (
  <div className="group relative h-full">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-melasmart-green/10 to-accent/10 rounded-4xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative overflow-hidden rounded-4xl border-2 border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 p-8 tilt-card h-full">
      <div className="absolute top-4 right-4 z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider animate-pulse">
          🆕 Novità
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="relative overflow-hidden rounded-3xl bg-secondary/20 flex justify-center lg:w-1/2 border border-primary/10">
          <img
            src={screenshotCopilot}
            alt="Assistente Agronomo - MelaSmart AI™ Copilot"
            className="w-full max-h-[420px] object-contain"
          />
        </div>

        <div className="lg:w-1/2 space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-primary/10">
              <Bot className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">MelaSmart AI™ Copilot</h3>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed">
            Ora con <strong>3 modalità di ragionamento</strong>: Standard per risposte rapide, e due livelli di Ragionamento avanzato per analisi approfondite. Salva e ricarica le tue domande dalla cronologia.
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-melasmart-green/10 border border-melasmart-green/20">
              <Zap className="h-4 w-4 text-melasmart-green" />
              <span className="text-sm font-medium">Standard · Flash Lite</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-accent border border-accent-foreground/10">
              <Brain className="h-4 w-4 text-accent-foreground" />
              <span className="text-sm font-medium">Ragionamento LOW</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-primary/10 border border-primary/30">
              <Brain className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Ragionamento HIGH</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-secondary border border-border">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Cronologia domande</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground italic">
            Gemini 3.1 Flash Lite · Gemini 3 Flash · Upgrade da Gemini 2.5 Flash
          </p>
        </div>
      </div>
    </div>
  </div>
);

const CarpocapsaCard = () => (
  <div className="group relative h-full">
    <div className="absolute inset-0 bg-gradient-to-br from-semaforo-verde/15 via-melasmart-green/10 to-semaforo-giallo/10 rounded-4xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative overflow-hidden rounded-4xl border-2 border-melasmart-green/30 bg-gradient-to-br from-card via-card to-melasmart-green/5 p-8 tilt-card h-full">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="relative overflow-hidden rounded-3xl bg-secondary/20 flex justify-center lg:w-1/2 border border-melasmart-green/10">
          <img
            src={screenshotCarpocapsa}
            alt="Monitoraggio Carpocapsa"
            className="w-full max-h-[420px] object-contain"
          />
        </div>

        <div className="lg:w-1/2 space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-melasmart-green/10">
              <Bug className="h-7 w-7 text-melasmart-green" />
            </div>
            <h3 className="text-2xl font-bold">Monitoraggio Carpocapsa</h3>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed">
            Registra le catture nelle trappole e il conteggio dei <strong>Gradi Giorno (GDD)</strong> parte automaticamente. Ricevi alert intelligenti al raggiungimento delle soglie critiche.
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-melasmart-green/10 border border-melasmart-green/20">
              <Thermometer className="h-4 w-4 text-melasmart-green" />
              <span className="text-sm font-medium">Calcolo GDD automatico</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-semaforo-giallo/10 border border-semaforo-giallo/30">
              <Bell className="h-4 w-4 text-semaforo-giallo" />
              <span className="text-sm font-medium">Alert a 55° GDD</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-semaforo-rosso/10 border border-semaforo-rosso/30">
              <Bell className="h-4 w-4 text-semaforo-rosso" />
              <span className="text-sm font-medium">Alert a 150° GDD</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground italic">
            Esclusivo per coltura Melo · Ciclo a generazioni
          </p>
        </div>
      </div>
    </div>
  </div>
);

const AppPreviewSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div
          ref={ref}
          className={`text-center mb-16 space-y-4 scroll-reveal ${isVisible ? "visible" : ""}`}
        >
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full">
            Anteprima App
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Un'esperienza <span className="text-gradient-green">intuitiva e potente</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interfaccia pensata per il campo: veloce, chiara e sempre a portata di mano.
          </p>
        </div>

        {/* Carpocapsa highlight */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
          <CarpocapsaCard />
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
          {screenshots.map((screenshot, index) => (
            <ScreenshotCard key={index} screenshot={screenshot} />
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          {/* Carpocapsa highlight mobile */}
          <div className="mb-6">
            <CarpocapsaCard />
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <ScreenshotCard screenshot={screenshot} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="relative static translate-y-0" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
