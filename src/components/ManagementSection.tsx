const ManagementSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            Gestione Completa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Tutto sotto controllo,
            <br />
            <span className="text-gradient-green">fino al centesimo.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-8 rounded-3xl bg-card border border-border hover-lift">
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-accent-foreground mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">GIS Lite</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mappatura interattiva dei tuoi appezzamenti. Visualizza, gestisci e 
              analizza ogni parcella direttamente dalla mappa.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border hover-lift">
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-accent-foreground mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Magazzino Predittivo</h3>
            <p className="text-muted-foreground leading-relaxed">
              Analisi dei costi al centesimo. Prevedi le scorte, ottimizza gli acquisti 
              e tieni traccia di ogni prodotto.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border hover-lift">
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-accent-foreground mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Registro e Calibrazione</h3>
            <p className="text-muted-foreground leading-relaxed">
              Quaderno di campagna PDF scaricabile autocompilato. Gestione e calibrazione 
              atomizzatore con calcolo teorico preciso regolabile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
