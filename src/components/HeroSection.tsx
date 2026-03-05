import WaitlistForm from "@/components/WaitlistForm";
import heroBanner from "@/assets/hero-banner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Soft overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-background/50" />
      {/* Top fade to blend with header/background */}
      <div className="absolute top-0 left-0 right-0 h-40 z-[1] bg-gradient-to-b from-background to-transparent" />
      {/* Bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[1] bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Full-width title area */}
        <div className="text-center mb-12">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm/10 border border-warm/20 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warm opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-warm"></span>
              </span>
              <span className="text-sm font-semibold text-warm-dark">Lancio imminente</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight drop-shadow-[0_2px_10px_hsl(var(--background))]">
              MelaSmart: Gestione
              <br />
              <span className="text-gradient-green drop-shadow-[0_2px_10px_hsl(var(--background))]">Professionale del Frutteto.</span>
            </h1>
          </div>

          <div className="animate-fade-up-delay-1">
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-0 leading-relaxed font-medium drop-shadow-[0_1px_8px_hsl(var(--background))]">
              Il copilota agronomico avanzato che trasforma i dati in decisioni.
              <br className="hidden md:block" />
              Ottimizza i trattamenti, riduci l'impatto ambientale, massimizza il raccolto.
            </p>
          </div>
        </div>

        {/* Full-width launch announcement */}
        <div className="animate-fade-up-delay-2 mb-8">
          <div className="bg-background/80 backdrop-blur-sm border border-warm/20 rounded-2xl p-6 md:p-8 shadow-lg text-center">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-2 drop-shadow-[0_1px_6px_hsl(var(--background))]">
              🚀 Stiamo per partire!
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Il lancio ufficiale è alle porte. Preparati a gestire il tuo frutteto come mai prima d'ora con l'intelligenza artificiale al tuo fianco.
            </p>
          </div>
        </div>

        {/* Full-width compact waitlist form */}
        <div className="animate-fade-up-delay-2">
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-5 md:p-6 shadow-lg max-w-lg mx-auto">
            <p className="text-sm font-semibold text-foreground mb-1 text-center">
              🎁 Unisciti alla waitlist
            </p>
            <p className="text-xs text-muted-foreground mb-4 text-center">
              30 giorni di AI Premium gratis per i primi 20 iscritti.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
