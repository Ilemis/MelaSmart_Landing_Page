import WaitlistForm from "@/components/WaitlistForm";
import heroBanner from "@/assets/hero-banner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
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

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            MelaSmart: Il futuro
            <br />
            <span className="text-gradient-green">dell'agricoltura di precisione.</span>
          </h1>
        </div>

        <div className="animate-fade-up-delay-1">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Il copilota agronomico avanzato che trasforma i dati in decisioni.
            <br className="hidden md:block" />
            Ottimizza i trattamenti, riduci l'impatto ambientale, massimizza il raccolto.
          </p>
        </div>

        <div className="animate-fade-up-delay-2 space-y-6">
          <p className="text-base md:text-lg text-foreground font-medium max-w-xl mx-auto">
            Entra nella waitlist oggi e ricevi 30 giorni di tecnologia AI Premium completamente gratis. 
            I primi 20 agricoltori avranno accesso esclusivo al lancio.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
