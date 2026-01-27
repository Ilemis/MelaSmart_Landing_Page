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
