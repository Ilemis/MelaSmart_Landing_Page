import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    version: "v0.1.0",
    date: "Coming Soon",
    changes: [
      { type: "nuovo", description: "Lancio ufficiale di MelaSmart PWA" },
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
  //   date: "15 Febbraio 2025",
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
      <Header />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Changelog App
            </h1>
            <p className="text-muted-foreground text-lg">
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Changelog;
