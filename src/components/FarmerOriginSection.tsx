import { Leaf } from "lucide-react";

const FarmerOriginSection = () => {
  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Leaf className="w-4 h-4" />
            Creata da chi lavora sul campo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Un agricoltore per gli agricoltori.
            <br />
            <span className="text-gradient-green">Zero complicazioni.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            MelaSmart nasce dall'esperienza diretta di chi ogni giorno è in campo.
            Niente fronzoli: solo ciò che serve per gestire i trattamenti in modo rapido ed efficace.
            È una <strong>Progressive Web App</strong> — si installa in un tap, si aggiorna da sola e non occupa spazio. Le funzioni di calcolo miscela restano disponibili anche offline, mentre meteo, AI e altre funzionalità cloud richiedono connessione internet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FarmerOriginSection;
