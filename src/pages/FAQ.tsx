import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import iconMelasmart from "@/assets/icon-melasmart.png";

// =====================================================
// FAQ DATA - MODIFICA QUI LE DOMANDE E RISPOSTE
// =====================================================
// Ogni elemento ha:
// - id: identificatore unico (es. "faq-1", "faq-2", ecc.)
// - question: la domanda
// - answer: la risposta (può contenere HTML semplice)
// =====================================================

const faqData = [
  {
    id: "faq-1",
    question: "Cos'è MelaSmart?",
    answer:
      "MelaSmart è un'app di precisione agricola progettata specificamente per la melicoltura. Utilizza intelligenza artificiale per ottimizzare la gestione del tuo meleto.",
  },
  {
    id: "faq-2",
    question: "Quando sarà disponibile l'app?",
    answer:
      "Stiamo lavorando duramente per rilasciare la prima versione. Iscriviti alla waitlist per essere tra i primi a provarla e ricevere aggiornamenti sullo sviluppo.",
  },
  {
    id: "faq-3",
    question: "L'app sarà gratuita?",
    answer:
      "Offriremo un piano gratuito con funzionalità base. Per funzionalità avanzate e supporto professionale, saranno disponibili piani a pagamento.",
  },
  {
    id: "faq-4",
    question: "Su quali dispositivi funzionerà?",
    answer:
      "MelaSmart sarà disponibile come Progressive Web App (PWA), funzionando su qualsiasi dispositivo con un browser moderno: smartphone, tablet e computer.",
  },
  {
    id: "faq-5",
    question: "Come posso contattarvi per partnership o collaborazioni?",
    answer:
      "Puoi scriverci all'indirizzo melasmart@proton.me oppure utilizzare il form nella pagina Contatti. Siamo sempre aperti a nuove collaborazioni nel settore AgriTech.",
  },
  // =====================================================
  // AGGIUNGI NUOVE FAQ QUI SOTTO
  // Copia il formato sopra:
  // {
  //   id: "faq-6",
  //   question: "La tua domanda?",
  //   answer: "La tua risposta.",
  // },
  // =====================================================
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={iconMelasmart}
                alt="MelaSmart"
                className="h-10 w-10 rounded-xl"
              />
              <span className="font-semibold text-lg text-foreground">MelaSmart</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Torna alla Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Domande Frequenti
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Risposte rapide alle domande più comuni su MelaSmart.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="p-6 md:p-8 rounded-2xl border border-border bg-card">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-transparent">
          <h2 className="text-xl font-bold text-foreground mb-2">
            Non hai trovato la risposta?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contattaci direttamente, saremo felici di aiutarti.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Vai ai Contatti
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MelaSmart. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
