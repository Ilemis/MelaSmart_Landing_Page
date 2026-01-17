import { Check, Star } from "lucide-react";

const ValueSection = () => {
  const features = [
    "Calcolo automatico volumi d'acqua",
    "Magazzino prodotti con scorte",
    "Registro trattamenti digitale",
    "Assistente AI agronomico",
    "Meteo localizzato e Delta T",
    "Creazione miscele guidata",
    "Calibrazione irroratrici",
    "Gestione multi-appezzamento",
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Valore Accessibile
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Funzionalità premium,
              <br />
              <span className="text-gradient-green">prezzo onesto.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Le app professionali per l'agricoltura costano centinaia di euro all'anno. 
              MelaSmart offre le stesse funzionalità — e molto di più — ad una 
              <strong className="text-foreground"> frazione del costo</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Perché crediamo che la tecnologia debba essere accessibile a tutti gli agricoltori, 
              non solo alle grandi aziende. Strumenti professionali, prezzo da agricoltore.
            </p>
          </div>

          <div className="animate-fade-up-delay-1">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-center">Tutto incluso:</h3>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  Un unico abbonamento per tutto, senza sorprese.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
