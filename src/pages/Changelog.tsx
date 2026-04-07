import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import iconMelasmart from "@/assets/icon-melasmart.png";
import Footer from "@/components/Footer";

// ============================================
// 📝 CHANGELOG DATA - MODIFICA QUI PER AGGIUNGERE NUOVE VOCI
// ============================================
// Struttura di ogni voce:
// {
//   version: "v1.0.0",           // Numero versione
//   date: "20 Maggio 2024",      // Data in formato leggibile
//   changes: [
//     {
//       type: "nuovo" | "fix" | "migliorato",  // Tipo di cambiamento
//       description: "Descrizione breve"        // Cosa è cambiato
//     }
//   ]
// }
// ============================================

interface Change {
  type: "nuovo" | "fix" | "migliorato";
  description: string;
}

interface ChangelogEntry {
  version: string;
  date: string;
  changes: Change[];
}

// 👇 AGGIUNGI NUOVE VOCI QUI (le più recenti in alto)
// Queste sono le novità dell'APP MelaSmart, non della landing page
const changelogData: ChangelogEntry[] = [
  {
    version: "v1.6.1",
    date: "07/04/2026",
    changes: [
      { type: "nuovo", description: "Aggiunto al contesto inviato a MelaSmart AI™ Copilot il meteo dei prossimi 3 giorni e gli ultimi 2 trattamenti eseguiti per risposte ancora più mirate e coerenti col contesto" },
      { type: "nuovo", description: "Nuova gestione delle dosi con switch per singolo prodotto tra dose a ettaro e dose a percentuale pura per gestire prodotti come concimi fogliari che non seguono la regola dei 1500lt/Ha standard" },
      { type: "migliorato", description: "Varie migliorie UX/UI" },
    ],
  },
  {
    version: "v1.6.0.4",
    date: "31/03/2026",
    changes: [
      { type: "fix", description: "Migliorato il tooltip del grafico finestra di trattamento con informazioni più utili e leggibili" },
      { type: "nuovo", description: "Aggiunta della funzionalità OCR per le fatture con riconoscimento automatico di quantità e prodotti e aggiornamento automatico del magazzino per utenti Premium" },
      { type: "migliorato", description: "Aggiunta di nuove proprietà per il vento e miglioramenti nei calcoli meteo. Aggiornati i componenti per visualizzare i dati del vento, inclusi minimi, massimi e raffiche" },
      { type: "nuovo", description: "Aggiunta gestione della percentuale di pendenza/fallanze per singolo campo per eliminare le possibili rimanenze in botte" },
    ],
  },
  {
    version: "v1.1.1",
    date: "25/03/2026",
    changes: [
      { type: "fix", description: "Aggiunta sincronizzazione dello scroll tra i grafici meteo e migliorata la scala verticale della temperatura per una lettura più chiara" },
      { type: "nuovo", description: "Possibilità di trascinare i punti (POI) quando si traccia un campo sulla mappa, con aggiornamento dell'area in tempo reale" },
      { type: "migliorato", description: "Aggiunto livello di zoom extra per le zone rurali, che solitamente hanno meno risoluzione, per segnare i punti precisi del campo da salvare" },
      { type: "nuovo", description: "Aggiunta la possibilità di accedere con LinkedIn per un login professionale rapido e sicuro" },
    ],
  },
  {
    version: "v1.1.0.2",
    date: "20/03/2026",
    changes: [
      { type: "nuovo", description: "Aggiunta la possibilità di accedere con Google per un login più rapido e semplice" },
    ],
  },
  {
    version: "v1.0.5",
    date: "19/03/2026",
    changes: [
      { type: "nuovo", description: "Assistente Agronomo - MelaSmart AI™ Copilot: aggiunte 3 modalità di ragionamento — Standard (Gemini 3.1 Flash Lite), Ragionamento LOW e Ragionamento HIGH (Gemini 3 Flash) per risposte più precise e approfondite" },
      { type: "migliorato", description: "Upgrade motore AI da Gemini 2.5 Flash a Gemini 3 Flash per i livelli di ragionamento, con grande salto di qualità nelle risposte agronomiche" },
      { type: "nuovo", description: "Salvataggio e ricaricamento delle domande dalla cronologia nell'Assistente Agronomo" },
    ],
  },
  {
    version: "v1.0.4",
    date: "18/03/2026",
    changes: [
      { type: "nuovo", description: "Possibilità di cancellare la cronologia delle domande all'Agronomo AI" },
      { type: "nuovo", description: "Aggiunta gestione della data di ultima taratura per gli atomizzatori" },
      { type: "nuovo", description: "Aggiunta sezione Patentino Fitosanitario sia nel Profilo che nei Dati Aziendali, con badge colorato in base alla data di scadenza" },
      { type: "nuovo", description: "Nello Step 4 del wizard, aggiunto il costo stimato per trattamento in base ai prezzi salvati in magazzino per riscontro live" },
      { type: "migliorato", description: "Scheda trattore: aggiornata la grafica della targa italiana" },
      { type: "migliorato", description: "Agronomo AI, parsing prodotti e ricerca dosaggio aggiornati a Gemini 3.1 Flash Lite Preview per maggiori performance" },
    ],
  },
  {
    version: "v1.0.3",
    date: "13/03/2026",
    changes: [
      { type: "nuovo", description: "Aggiunta la card \"Costo per Trattamento\" nella sezione Analisi Costi, con data, costo totale e €/ha" },
      { type: "nuovo", description: "Aggiunta funzionalità di aggiornamento per i trattamenti già salvati, inclusa la modifica delle quantità dei prodotti, la data e le note" },
      { type: "migliorato", description: "Migliorie varie nella visualizzazione dei grafici meteo" },
      { type: "nuovo", description: "Aggiunta del modulo Risorse Tecniche con informazioni su formulazioni, resistenze e consigli per la gestione con focus su melo e vite con selezione dinamica, migliorando l'accesso alle informazioni agronomiche" },
    ],
  },
  {
    version: "v1.0.2",
    date: "08/03/2026",
    changes: [
      { type: "fix", description: "Adesso cliccando \"+ Nuovo Calcolo\" dal registro si apre il wizard invece di tornare in home" },
      { type: "nuovo", description: "Aggiunta la nuova funzione Vision per Assistente Agronomo - MelaSmart AI™ Copilot: bottone dedicato che permette di caricare una foto del contesto agricolo (malattie, parassiti, ecc.) con una domanda per ricevere una risposta pertinente" },
    ],
  },
  {
    version: "v1.0.0",
    date: "01/03/2026",
    changes: [
      { type: "nuovo", description: "feat: Aggiunti nuova serie di ugelli ALBUZ ATI 80, ALBUZ ATF 80, ALBUZ AVI 80 nella calibrazione atomizzatore, ora conta 12 serie diverse" },
      { type: "fix", description: "Pannello carpocapsa, minifix vari" },
      { type: "nuovo", description: "Aggiunta la cronologia delle domande fatte all'Agronomo AI, fino a 200 per premium" },
      ],
  }, 
  {
    version: "v0.6.2",
    date: "26/02/2026",
    changes: [
      { type: "nuovo", description: "Feat: Solo per la cultivar MELO inserita la scheda per la gestione COMPLETA del monitoraggio Carpocapsa con gestione automatica del calcolo gradi giorno ed alert a 55° e 150°" },
      { type: "migliorato", description: "Inserita icona grappolo o mela nelle schede prodotto magazzino e nel wizard per distinzione visiva immediata" },
      { type: "migliorato", description: "Database Melasmart 48 prodotti disponibili" },
    ],
  },
  {
    version: "v0.5.0",
    date: "19/02/2026",
    changes: [
      { type: "nuovo", description: "Ripartizione per Categoria: grafico a ciambella (Donut Chart) che mostra come viene divisa la spesa totale tra le varie tipologie di prodotti, per avere una visione immediata della distribuzione dei costi" },
      { type: "nuovo", description: "Top 3 Prodotti più Costosi: widget dedicato che evidenzia i 3 prodotti commerciali su cui l'azienda ha investito di più, utile per identificare i principali centri di costo e valutare alternative o negoziare prezzi migliori" },
    ],
  },
  {
    version: "v0.4.2",
    date: "14/02/2026",
    changes: [
      { type: "nuovo", description: "Selezione cultivar: ora è possibile scegliere tra melo e vite, con Agronomo AI dedicato, fasi fenologiche specifiche e gestione prodotti calibrata sulle avversità di ciascuna coltura. L'app si apre a un pubblico più ampio senza sacrificare la precisione che la contraddistingue" },
      { type: "fix", description: "Se il prodotto ha solo la dose per ettolitro, viene ora calcolata automaticamente la dose per ettaro" },
    ],
  },
  {
    version: "v0.3.0",
    date: "11/02/2026",
    changes: [
      { type: "nuovo", description: "Regole per l'aggiornamento delle etichette ministeriali e del dosaggio: se i dati sono più vecchi di 2 mesi (etichette) o 3 mesi (dosaggi), vengono aggiornati automaticamente" },
      { type: "nuovo", description: "Dataset ministeriale utilizzato quando possibile per popolare il database MelaSmart con tutti i dati disponibili" },
      { type: "migliorato", description: "Nel magazzino, popup intelligente che mostra i dati più rilevanti di ogni prodotto: Principio Attivo, dose standard, descrizione prodotto, stato amministrativo" },
    ],
  },
  {
    version: "v0.2.2",
    date: "05/02/2026",
    changes: [
      { type: "nuovo", description: "Implementato la possibilità di simulare la chiusura degli ugelli nella sezione di calibrazione dell'atomizzatore. Questa funzione permette di ottenere calcoli precisi dei litri/ettaro anche quando alcuni ugelli vengono chiusi fisicamente (es. durante il dirado)" },
      { type: "nuovo", description: "Aggiunto bottone nel magazzino per popup info prodotto" },
     ],
  }, 
  {
    version: "v0.2.1",
    date: "03/02/2026",
    changes: [
      { type: "nuovo", description: "Database Melasmart: 27 prodotti disponibili" },
      { type: "nuovo", description: "Aggiunta sezione termini e servizi" },
      { type: "migliorato", description: "Sezione profilo: inserito banner premium per abbonarsi con stripe" },
      { type: "fix", description: "Risolto bug che non aggiornava il calcolo delle chiamate a gemini nel magazzino" },
    ],
  }, 
  {
    version: "v0.2.0",
    date: "02/02/2026",
    changes: [
      { type: "nuovo", description: "Diventa Preimum con STRIPE" },
      { type: "migliorato", description: "Sezione profilo: migliorata UX/UI con tre sezioni separate: Profilo, Abbonamento, Supporto" },
    ],
  },
  {
    version: "v0.1.4",
    date: "27/01/2026",
    changes: [
      { type: "nuovo", description: "Aggiunta la mini guida interattiva nella home al primo utilizzo" },
    ],
  },
  {
    version: "v0.1.3",
    date: "25/01/2026",
    changes: [
      { type: "migliorato", description: "Magazzino: aggiunta dinamica di un prodotto, ora viene ricalcolata la quantità e il prezzo rispetto a quello già presente" },
      { type: "fix", description: "Risolta la modalita campo che nn permetteva di scrollare una lunga lista prodotti" },
      { type: "nuovo", description: "Aggiunta la gestione della obsolescenza dei dati nel database" },
    ],
  },
  {
    version: "v0.1.2",
    date: "22/01/2026",
    changes: [
      { type: "nuovo", description: "Aggiunto carosello per oggi e domani nel grafico finestra trattamenti" },
      { type: "fix", description: "Icona cestino nelle card prodotto correttamente posizionata" },
    ],
  },
  {
    version: "v0.1.0",
    date: "08/01/2026",
    changes: [
      { type: "migliorato", description: "autoscroll in cima ad ogni cambio di tab" },
      { type: "nuovo", description: "Gestione magazzino con tracciabilità completa" },
      { type: "nuovo", description: "Calcolatore miscele intelligente" },
      { type: "nuovo", description: "Assistente AI Agronomo integrato" },
      { type: "nuovo", description: "Dashboard meteo in tempo reale" },
    ],
  },
  // 👆 AGGIUNGI ALTRE VERSIONI SOPRA QUESTA LINEA
  // Esempio di nuova versione:
  // {
  //   version: "v0.2.0",
  //   date: "08/02/2026",
  //   changes: [
  //     { type: "nuovo", description: "Nuova funzione X" },
  //     { type: "fix", description: "Risolto bug Y" },
  //     { type: "migliorato", description: "Ottimizzata velocità Z" },
  //   ],
  // },
];

// Configurazione badge per tipo di cambiamento
const badgeConfig = {
  nuovo: {
    emoji: "🚀",
    label: "Nuovo",
    className: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  fix: {
    emoji: "🛠️",
    label: "Fix",
    className: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  migliorato: {
    emoji: "⚡",
    label: "Migliorato",
    className: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
};

const Changelog = () => {
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
      
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Changelog App
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tutte le novità e gli aggiornamenti dell'app MelaSmart.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {changelogData.map((entry, index) => (
            <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h2 className="text-xl font-semibold text-foreground">
                    {entry.version}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {entry.date}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {entry.changes.map((change, changeIndex) => {
                    const config = badgeConfig[change.type];
                    return (
                      <li key={changeIndex} className="flex items-start gap-3">
                        <Badge 
                          variant="outline" 
                          className={`${config.className} shrink-0 text-xs`}
                        >
                          {config.emoji} {config.label}
                        </Badge>
                        <span className="text-muted-foreground">
                          {change.description}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Changelog;
