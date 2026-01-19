import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Smartphone } from "lucide-react";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-melasmart-green/10 flex items-center justify-center animate-fade-up">
            <CheckCircle className="w-14 h-14 text-melasmart-green" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Account Verificato!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            La tua azienda agricola è pronta per{" "}
            <span className="text-melasmart-green font-semibold">
              MelaSmart 4.0 Professional Crop Management
            </span>
          </p>
        </div>

        {/* Central Text */}
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            L'email è stata confermata correttamente. Ora puoi accedere a tutti 
            gli strumenti di precisione per il tuo frutteto.
          </p>
        </div>

        {/* CTA Button - Apple High-Contrast Style */}
        <div className="pt-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button
            asChild
            size="xl"
            className="bg-foreground text-background hover:bg-foreground/90 font-semibold text-lg px-12 py-6 h-auto shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <a
              href="https://melasmart-frontend-979042610060.europe-west1.run.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              Accedi alla Dashboard
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* Additional Instruction */}
        <div 
          className="pt-6 animate-fade-up" 
          style={{ animationDelay: "0.4s" }}
        >
          <div className="inline-flex items-center gap-3 bg-muted/50 rounded-2xl px-6 py-4 border border-border/50">
            <Smartphone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              Se hai già installato l'app sulla tua Home, puoi chiudere questa 
              pagina e aprirla direttamente da lì.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-melasmart-green/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-melasmart-primary/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
