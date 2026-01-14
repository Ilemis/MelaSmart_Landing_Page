import iconMelasmart from "@/assets/icon-melasmart.png";

const VisionSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full">
              Copilota Agronomico
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              L'intelligenza al servizio
              <br />
              <span className="text-gradient-green">del tuo campo.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MelaSmart è il tuo copilota agronomico: un sistema intelligente che analizza, 
              prevede e consiglia. Ogni decisione è supportata da dati reali, algoritmi 
              avanzati e anni di esperienza agronomica.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-melasmart-green/20 to-transparent rounded-4xl blur-3xl" />
              <div className="relative glass rounded-4xl p-8 hover-lift">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={iconMelasmart}
                    alt="MelaSmart App"
                    className="w-16 h-16 rounded-2xl shadow-card"
                  />
                  <div>
                    <h3 className="font-semibold">MelaSmart</h3>
                    <p className="text-sm text-muted-foreground">PWA Native Experience</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  L'app vive sulla home del tuo smartphone con prestazioni fluide 
                  anche in campo. Nessuna installazione da App Store, sempre aggiornata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
