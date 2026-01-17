import { Leaf, Zap, Heart } from "lucide-react";

const FarmerOriginSection = () => {
  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Leaf className="w-4 h-4" />
            Creata da chi lavora sul campo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Un agricoltore per gli agricoltori
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            MelaSmart nasce dall'esperienza diretta di chi ogni giorno è in campo. 
            Niente fronzoli, niente funzioni inutili: solo quello che serve davvero 
            per gestire i trattamenti fitosanitari in modo rapido ed efficace.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fade-up-delay-1">
          <div className="bg-card rounded-2xl p-6 border border-border hover-lift">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Immediata</h3>
            <p className="text-muted-foreground text-sm">
              Interfaccia intuitiva pensata per essere usata anche con i guanti da lavoro. 
              Pochi tap per fare tutto.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border hover-lift">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Pratica</h3>
            <p className="text-muted-foreground text-sm">
              Ogni funzione è stata testata sul campo prima di essere inclusa. 
              Zero sprechi di tempo, massima efficienza.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border hover-lift">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Completa</h3>
            <p className="text-muted-foreground text-sm">
              Tutto quello che ti serve per gestire i trattamenti: 
              calcoli, magazzino, registro e assistente AI in un'unica app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmerOriginSection;
