import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import iconMelasmart from "@/assets/icon-melasmart.png";
import Footer from "@/components/Footer";

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
    "id": "faq-1",
    "question": "Cos’è MelaSmart?",
    "answer": "MelaSmart è un’app per la gestione di frutteto e vigneto, attualmente dedicata a melo e vite. Riunisce strumenti per preparare e registrare i trattamenti, consultare i prodotti, gestire il magazzino e ricevere supporto dall’assistente AI. La modalità Raccolta permette inoltre di organizzare varietà e zone, registrare le quantità raccolte e seguirne le destinazioni."
  },
  {
    "id": "faq-2",
    "question": "MelaSmart è già disponibile? Come posso iniziare?",
    "answer": "Sì, MelaSmart è già disponibile. Apri app.melasmart.com dal browser e crea il tuo account per iniziare. Puoi utilizzarla da smartphone, tablet o computer e, sui dispositivi compatibili, installarla come app dalla schermata del browser."
  },
  {
    "id": "faq-3",
    "question": "MelaSmart è gratuita?",
    "answer": "MelaSmart offre un piano gratuito con funzionalità e limiti dedicati e un abbonamento Premium per gli strumenti avanzati. La gestione della raccolta è disponibile anche con il piano gratuito. Funzioni come il riconoscimento di fatture e DDT per il magazzino richiedono Premium. Consulta la sezione dedicata ai piani per confrontare le condizioni aggiornate."
  },
  {
    "id": "faq-4",
    "question": "Su quali dispositivi posso usare MelaSmart?",
    "answer": "Puoi usare MelaSmart su smartphone, tablet e computer con un browser moderno. È una Progressive Web App: si apre direttamente dal browser e può essere installata sui dispositivi compatibili, senza doverla cercare negli store."
  },
  {
    "id": "faq-5",
    "question": "Come posso contattarvi per assistenza, partnership o collaborazioni?",
    "answer": "Puoi scrivere a melasmart@proton.me oppure utilizzare il modulo nella pagina Contatti. Per segnalare un problema, descrivi cosa stavi facendo e indica il dispositivo e il browser utilizzati. Per partnership e collaborazioni, raccontaci la tua proposta."
  },
  {
    "id": "faq-6",
    "question": "Come posso installare MelaSmart sul telefono o sul computer?",
    "answer": "Apri app.melasmart.com. Su Android, cerca nel menu del browser la voce “Installa app” o “Aggiungi alla schermata Home”. Su iPhone e iPad, apri l’app in Safari e usa Condividi → Aggiungi alla schermata Home. Su computer, nei browser compatibili, puoi trovare l’opzione di installazione nella barra degli indirizzi o nel menu. Le voci possono variare in base al dispositivo; puoi comunque utilizzare MelaSmart dal browser."
  },
  {
    "id": "faq-7",
    "question": "Come vengono gestiti i pagamenti e l’abbonamento Premium?",
    "answer": "I pagamenti dell’abbonamento Premium sono gestiti tramite Stripe. I dati completi della carta non vengono memorizzati da MelaSmart. Puoi accedere alla gestione dell’abbonamento dall’app; importo, periodicità e condizioni applicabili sono indicati prima della conferma dell’acquisto."
  },
  {
    "id": "faq-8",
    "question": "Come devo usare i dosaggi e i suggerimenti dell’AI?",
    "answer": "Usa MelaSmart come supporto ai calcoli e alla consultazione, verificando sempre i dati inseriti e i risultati. L’AI può commettere errori e non sostituisce l’etichetta ufficiale aggiornata del prodotto né la valutazione di un tecnico qualificato. Prima di un trattamento controlla coltura, impieghi consentiti, dosi, intervalli e prescrizioni riportati sull’etichetta."
  },
  {
    "id": "faq-9",
    "question": "Come funziona il calcolo della miscela per l’atomizzatore?",
    "answer": "MelaSmart utilizza i campi selezionati, il volume d’acqua impostato, la capacità dell’atomizzatore e le dosi dei prodotti per calcolare le quantità necessarie e la suddivisione delle cariche. Puoi configurare i parametri del tuo impianto e utilizzare gli strumenti di calibrazione e TRV disponibili. Il risultato dipende dai dati e dalla modalità di dosaggio scelti: verifica le impostazioni prima di preparare la miscela."
  },
  {
    "id": "faq-10",
    "question": "Quale intelligenza artificiale utilizza MelaSmart?",
    "answer": "MelaSmart AI Copilot utilizza modelli della famiglia Google Gemini. Nell’app sono disponibili un livello Standard e modalità Premium con capacità di ragionamento più avanzate. Gli strumenti di analisi delle immagini e dei documenti supportano funzioni come il riconoscimento di prodotti e quantità. Modelli disponibili e limiti di utilizzo possono essere aggiornati: fai riferimento alle opzioni mostrate nell’app."
  },
  {
    "id": "faq-11",
    "question": "Come vengono gestiti i miei dati?",
    "answer": "I dati aziendali salvati, come campi, trattamenti e raccolte, sono associati al tuo account e protetti da controlli di accesso. Alcune funzioni utilizzano servizi esterni: ad esempio, le richieste AI e i documenti da analizzare richiedono l’elaborazione dei contenuti necessari al servizio. Trovi informazioni su trattamento, fornitori e diritti nella Privacy Policy."
  },
  {
    "id": "faq-12",
    "question": "Come mi aiuta MelaSmart a scegliere quando effettuare un trattamento?",
    "answer": "Gli strumenti Agri-Meteo e l’assistente AI aiutano a valutare le condizioni previste, considerando dati come temperatura, umidità, vento e precipitazioni. Quando disponibili, l’assistente utilizza anche il contesto della coltura e le informazioni aziendali pertinenti. Le indicazioni aiutano a pianificare il lavoro, ma vanno confrontate con le condizioni reali in campo e le prescrizioni del prodotto."
  },
  {
    "id": "faq-13",
    "question": "Cosa devo fare se trovo un errore in un calcolo o nei dati di un prodotto?",
    "answer": "Controlla prima le impostazioni inserite e confronta i dati del prodotto con la sua etichetta ufficiale aggiornata. Se il problema rimane, segnalalo tramite il supporto dell’app oppure scrivi a melasmart@proton.me, indicando prodotto, operazione effettuata e risultato ottenuto. Le segnalazioni aiutano a individuare e correggere problemi nei dati o nel software."
  },
  {
    "id": "faq-14",
    "question": "Posso usare MelaSmart senza connessione?",
    "answer": "MelaSmart dispone di un supporto offline parziale. Dopo un precedente utilizzo online, l’interfaccia può rimanere accessibile e alcune funzioni locali possono continuare a funzionare. Accesso all’account, caricamento e salvataggio dei dati sul server, AI, meteo e altri servizi online richiedono una connessione. Non considerare l’app un gestionale completamente offline e verifica sempre che i salvataggi siano riusciti."
  },
  {
    "id": "faq-15",
    "question": "Posso caricare fatture e DDT in PDF per aggiornare il magazzino?",
    "answer": "Sì. Con la funzione OCR Premium puoi caricare una foto JPEG oppure un PDF di una fattura o di un DDT. MelaSmart riconosce prodotti e quantità e ti permette di controllare e correggere i dati prima di confermare l’inserimento nel magazzino. I PDF devono essere leggibili, non protetti da password, di massimo 4 pagine e 8 MB."
  },
  {
    "id": "faq-16",
    "question": "La gestione della raccolta è disponibile per mele e uva?",
    "answer": "Sì. La modalità Raccolta è disponibile per tutti gli account, anche gratuiti, sia per Melo sia per Vite. Registrazioni e riepiloghi sono separati per coltura e anno di raccolta. Puoi passare da Trattamenti a Raccolta attraverso il selettore dell’app."
  },
  {
    "id": "faq-17",
    "question": "Ho già iniziato a raccogliere: devo inserire tutte le giornate precedenti?",
    "answer": "No. Puoi inserire un “Totale già raccolto”, indicando la data fino alla quale hai raccolto e la quantità complessiva, per una varietà oppure per tutta la coltura. Da quel momento puoi continuare con registrazioni giornaliere o riferite a una data. Il totale iniziale non viene distribuito sulle giornate precedenti e l’app impedisce di aggiungere registrazioni già comprese nello stesso totale."
  },
  {
    "id": "faq-18",
    "question": "Posso registrare casse e bins invece dei chilogrammi?",
    "answer": "Sì. Puoi registrare direttamente i kg oppure il numero di contenitori, creando i tuoi formati di casse e bins. Per ogni formato puoi indicare capacità nominale e riempimento medio. Ad esempio, una cassa da 15 kg può avere un riempimento medio di 13 kg. I conteggi di formati diversi rimangono distinti."
  },
  {
    "id": "faq-19",
    "question": "Come vengono calcolati i pesi stimati? Posso correggerli successivamente?",
    "answer": "Se registri contenitori senza una pesata, MelaSmart può stimare i kg usando il riempimento medio del formato scelto. Se inserisci il peso effettivo, viene utilizzato quello, mantenendo anche il conteggio dei contenitori. Quando cambi il riempimento medio puoi aggiornare esplicitamente le stime delle raccolte già registrate, scegliendo coltura e stagione e verificando l’anteprima. I pesi effettivamente misurati non vengono modificati. Senza pesata né riempimento medio, i contenitori restano registrati e il totale in kg viene segnalato come incompleto."
  },
  {
    "id": "faq-20",
    "question": "Devo disegnare i campi per registrare una raccolta? Posso dividerli per varietà?",
    "answer": "Puoi registrare raccolte per una varietà anche senza disegnare zone sulla mappa. Se vuoi organizzare gli appezzamenti, puoi associare più zone alla stessa varietà, disegnarle oppure copiarle dai campi già salvati per i trattamenti. Le copie sono indipendenti dai campi originali. La mappa è accessibile nella sezione Varietà, che mostra anche il numero di zone e la loro superficie complessiva."
  },
  {
    "id": "faq-21",
    "question": "Posso tenere traccia della frutta venduta, conferita, trasformata o scartata?",
    "answer": "Sì. Nella sezione Destinazioni puoi registrare quantità aggregate per vendita diretta, conferimento a cooperativa, altre cessioni, trasformazioni, scarti o altri utilizzi. Puoi indicare una varietà oppure una quantità mista e riferire l’utilizzo a una data, a un periodo o a un totale fino a una certa data. Il riepilogo mostra le quantità utilizzate e residue. Per le trasformazioni puoi annotare anche il prodotto ottenuto in litri o kg. La funzione riguarda i flussi della raccolta e non comprende clienti, incassi o contabilità."
  },
  {
    "id": "faq-22",
    "question": "Posso prenotare una parte della raccolta per un utilizzo futuro?",
    "answer": "Sì. Con “Programma destinazione” puoi riservare una quantità, ad esempio per un conferimento o una trasformazione, e completarla anche in più passaggi. Se programmi 100 kg per il succo e ne trasformi 30, risultano 30 kg utilizzati e 70 kg ancora impegnati. Puoi liberare il residuo quando non serve più. Le quantità senza peso o basate su stime vengono segnalate, così da rendere chiara la precisione della disponibilità mostrata."
  }
];

const renderAnswer = (answer: string) =>
  answer.split(/(app\.melasmart\.com|melasmart@proton\.me|Privacy Policy)/g).map((part, index) => {
    const className = "text-primary underline underline-offset-4 hover:text-foreground transition-colors";
    if (part === "Privacy Policy") {
      return <Link key={index} to="/privacy" className={className}>{part}</Link>;
    }
    if (part === "app.melasmart.com" || part === "melasmart@proton.me") {
      const href = part === "app.melasmart.com" ? "https://app.melasmart.com" : "mailto:melasmart@proton.me";
      return <a key={index} href={href} className={className}>{part}</a>;
    }
    return part;
  });

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
                  {renderAnswer(faq.answer)}
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

      <Footer />
    </div>
  );
};

export default FAQ;
