const MeteoSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full">
              Agri-Meteo Localizzato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Tratta solo quando
              <br />
              <span className="text-gradient-green">è il momento giusto.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I nostri semafori intelligenti analizzano in tempo reale Delta T e Rischio 
              Evaporazione. Saprai sempre se è il momento ideale per trattare o se è 
              meglio aspettare.
            </p>

            <div className="flex gap-6">
              <div className="flex items-center gap-3">
                <div className="semaforo semaforo-verde" />
                <span className="text-sm font-medium">Ottimale</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="semaforo semaforo-giallo" />
                <span className="text-sm font-medium">Attenzione</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="semaforo semaforo-rosso" />
                <span className="text-sm font-medium">Non trattare</span>
              </div>
            </div>
          </div>

          {/* Meteo Dashboard Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-melasmart-green/10 to-transparent rounded-4xl blur-3xl" />
            <div className="relative glass rounded-4xl p-6 space-y-4 hover-lift">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Finestra di Trattamento</h3>
                <span className="text-xs text-muted-foreground">Oggi</span>
              </div>

              {/* Chart mockup */}
              <div className="h-40 flex items-end gap-2">
                {[40, 65, 85, 90, 95, 88, 75, 60, 45, 35, 30, 25].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-lg transition-all duration-300"
                    style={{
                      height: `${height}%`,
                      backgroundColor:
                        height > 80
                          ? "hsl(var(--semaforo-verde))"
                          : height > 50
                          ? "hsl(var(--semaforo-giallo))"
                          : "hsl(var(--semaforo-rosso) / 0.5)",
                    }}
                  />
                ))}
              </div>

              <div className="flex justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                <span>06:00</span>
                <span className="font-medium text-foreground">Ideale: 09:00 - 14:00</span>
                <span>18:00</span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-background/50">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="semaforo semaforo-verde" />
                    <span className="text-xs text-muted-foreground">Delta T</span>
                  </div>
                  <span className="text-xl font-semibold">4.2°C</span>
                </div>
                <div className="p-4 rounded-2xl bg-background/50">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="semaforo semaforo-verde" />
                    <span className="text-xs text-muted-foreground">Evaporazione</span>
                  </div>
                  <span className="text-xl font-semibold">Basso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeteoSection;
