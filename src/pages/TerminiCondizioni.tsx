import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const TerminiCondizioni = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna alla Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Termini e Condizioni</h1>
          <p className="text-muted-foreground mb-8">
            Ultimo aggiornamento: 14 marzo 2026
          </p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            {/* Indice */}
            <nav className="bg-muted/50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Indice</h2>
              <ul className="space-y-2 text-sm">
                {[
                  { id: "accettazione", label: "1. Accettazione dei Termini" },
                  { id: "descrizione", label: "2. Descrizione del Servizio" },
                  { id: "disclaimer-ai", label: "3. Disclaimer sull'Intelligenza Artificiale e Prodotti Fitosanitari" },
                  { id: "emergenze", label: "4. Situazioni di Emergenza" },
                  { id: "uso-consentito", label: "5. Uso Consentito" },
                  { id: "proprieta-intellettuale", label: "6. Proprietà Intellettuale" },
                  { id: "fonti-dati", label: "7. Fonti dei Dati e Licenze" },
                  { id: "modifiche", label: "8. Modifiche ai Termini" },
                  { id: "legge-applicabile", label: "9. Legge Applicabile" },
                  { id: "contatti", label: "10. Contatti" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                      className="text-primary hover:underline text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 1. Accettazione */}
            <section id="accettazione">
              <h2 className="text-2xl font-semibold mb-4">1. Accettazione dei Termini</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizzando l'applicazione MelaSmart ("App"), l'utente accetta integralmente i presenti 
                Termini e Condizioni. L'utilizzo dell'App implica la piena conoscenza e accettazione 
                di tutte le clausole qui contenute. Se non si accettano questi termini, si prega di 
                non utilizzare l'App.
              </p>
            </section>

            {/* 2. Descrizione */}
            <section id="descrizione">
              <h2 className="text-2xl font-semibold mb-4">2. Descrizione del Servizio</h2>
              <p className="text-muted-foreground leading-relaxed">
                MelaSmart è un'applicazione dedicata alla gestione agricola che utilizza tecnologie 
                di intelligenza artificiale per assistere gli utenti nella gestione del magazzino 
                fitosanitari, nella ricerca di etichette ministeriali, nella formulazione di miscele 
                e in altre attività connesse alla produzione agricola. L'App è fornita "così com'è" 
                e "come disponibile".
              </p>
            </section>

            {/* 3. Disclaimer AI */}
            <section id="disclaimer-ai" className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-semibold text-destructive">
                  3. Disclaimer sull'Intelligenza Artificiale e Prodotti Fitosanitari
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">3.1 Natura Informativa</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Le informazioni fornite dall'intelligenza artificiale integrata in MelaSmart, 
                    inclusi ma non limitati a: suggerimenti su miscele di prodotti fitosanitari, 
                    dosaggi, modalità d'uso, ricerca di etichette ministeriali e qualsiasi altro 
                    contenuto generato automaticamente, hanno <strong>esclusivamente natura informativa 
                    e orientativa</strong> e non costituiscono in alcun modo consulenza professionale 
                    agronomica, tecnica o legale.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">3.2 Limitazione di Responsabilità</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Il titolare dell'applicazione <strong>declina ogni responsabilità</strong> per 
                    eventuali danni diretti, indiretti, incidentali, consequenziali, punitivi o 
                    speciali derivanti dall'utilizzo delle informazioni fornite dall'IA, inclusi 
                    ma non limitati a:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>Danni alle colture, alle produzioni agricole o all'ambiente</li>
                    <li>Danni alla salute di persone o animali</li>
                    <li>Violazioni della normativa vigente in materia fitosanitaria</li>
                    <li>Perdite economiche di qualsiasi natura</li>
                    <li>Sanzioni amministrative o penali</li>
                    <li>Qualsiasi altro danno patrimoniale o non patrimoniale</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">3.3 Obbligo di Verifica dell'Utente</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    L'utente si impegna a <strong>verificare sempre e in ogni caso</strong>, prima 
                    di qualsiasi applicazione o utilizzo, le informazioni fornite dall'IA consultando:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>Le etichette ministeriali ufficiali dei prodotti fitosanitari</li>
                    <li>La banca dati ufficiale del Ministero della Salute</li>
                    <li>La documentazione tecnica aggiornata dei produttori</li>
                    <li>Un tecnico agronomico abilitato per consulenze specifiche</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    L'utilizzo di prodotti fitosanitari è regolamentato dal <strong>Regolamento (CE) 
                    n. 1107/2009</strong> e dal <strong>D.Lgs. 150/2012</strong> (Piano d'Azione 
                    Nazionale per l'uso sostenibile dei prodotti fitosanitari). L'utente è l'unico 
                    responsabile del rispetto di tali normative.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">3.4 Manleva</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    L'utente si impegna a <strong>manlevare e tenere indenne</strong> il titolare 
                    dell'applicazione, i suoi collaboratori, dipendenti e fornitori da qualsiasi 
                    pretesa, reclamo, danno, costo o spesa (incluse le spese legali) derivanti 
                    dall'utilizzo improprio delle informazioni fornite dall'intelligenza artificiale 
                    o dalla mancata verifica delle stesse secondo quanto previsto al punto 3.3.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">3.5 Limiti dell'Intelligenza Artificiale</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    L'utente riconosce e accetta che:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>L'IA può generare informazioni inesatte, incomplete o non aggiornate</li>
                    <li>Le condizioni locali, climatiche e colturali specifiche potrebbero non essere 
                        considerate adeguatamente</li>
                    <li>La normativa fitosanitaria è soggetta a frequenti aggiornamenti che l'IA 
                        potrebbe non riflettere tempestivamente</li>
                    <li>I prodotti fitosanitari possono essere revocati, sospesi o modificati nelle 
                        loro autorizzazioni senza preavviso</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Emergenze */}
            <section id="emergenze" className="bg-destructive/10 border-2 border-destructive rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <Phone className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <h2 className="text-2xl font-semibold text-destructive">
                  4. Situazioni di Emergenza
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed font-medium">
                  In caso di sospetta intossicazione, contatto accidentale con prodotti pericolosi, 
                  o qualsiasi altra situazione di emergenza sanitaria:
                </p>
                
                <div className="bg-background rounded-lg p-4 border border-destructive/30">
                  <p className="text-destructive font-bold text-lg text-center mb-2">
                    ⚠️ NON CONSULTARE L'APPLICAZIONE ⚠️
                  </p>
                  <p className="text-center text-muted-foreground">
                    Contattare immediatamente:
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                    <div className="text-center p-3 bg-destructive/10 rounded-lg">
                      <p className="font-bold text-destructive text-xl">118</p>
                      <p className="text-sm text-muted-foreground">Emergenza Sanitaria</p>
                    </div>
                    <div className="text-center p-3 bg-destructive/10 rounded-lg">
                      <p className="font-bold text-destructive text-lg">Centro Antiveleni</p>
                      <p className="text-sm text-muted-foreground">della propria zona</p>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  L'applicazione MelaSmart <strong>non è uno strumento medico</strong> e non può 
                  in alcun modo sostituire l'intervento di personale sanitario qualificato. 
                  Qualsiasi ritardo nel contattare i servizi di emergenza a causa della 
                  consultazione dell'app è sotto l'esclusiva responsabilità dell'utente.
                </p>
              </div>
            </section>

            {/* 5. Uso Consentito */}
            <section id="uso-consentito">
              <h2 className="text-2xl font-semibold mb-4">5. Uso Consentito</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'utente si impegna a utilizzare l'App esclusivamente per scopi leciti e in 
                conformità con le leggi vigenti. È vietato:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Utilizzare l'App per scopi illegali o non autorizzati</li>
                <li>Tentare di accedere a sistemi o dati non autorizzati</li>
                <li>Interferire con il funzionamento dell'App o dei suoi server</li>
                <li>Distribuire virus, malware o altri codici dannosi</li>
                <li>Violare i diritti di proprietà intellettuale</li>
              </ul>
            </section>

            {/* 6. Proprietà Intellettuale */}
            <section id="proprieta-intellettuale">
              <h2 className="text-2xl font-semibold mb-4">6. Proprietà Intellettuale</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tutti i contenuti dell'App, inclusi testi, grafica, loghi, icone, immagini, 
                clip audio e video, software e qualsiasi altro materiale, sono di proprietà 
                esclusiva di MelaSmart o dei suoi licenzianti e sono protetti dalle leggi 
                sul diritto d'autore e sulla proprietà intellettuale.
              </p>
            </section>

            {/* 7. Fonti dei Dati e Licenze */}
            <section id="fonti-dati">
              <h2 className="text-2xl font-semibold mb-4">7. Fonti dei Dati e Licenze</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                MelaSmart utilizza dati pubblici resi disponibili dal{" "}
                <strong>Ministero della Salute</strong> della Repubblica Italiana, relativi 
                ai prodotti fitosanitari e alle relative etichette autorizzate. Tali dati 
                possono essere integrati nell'App sia tramite accesso diretto alla banca dati 
                ministeriale, sia attraverso informazioni estrapolate dall'intelligenza 
                artificiale (Google Gemini) che attinge a fonti pubbliche disponibili online, 
                inclusi i dati ministeriali.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I dati ministeriali sono distribuiti con licenza{" "}
                <a
                  href="https://www.dati.gov.it/content/italian-open-data-license-v20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Italian Open Data Licence v2.0 (IODL 2.0)
                </a>
                , pubblicata da FormezPA, che ne consente il libero riutilizzo, anche per 
                finalità commerciali, a condizione di citare la fonte del dato.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Si precisa che le informazioni generate dall'intelligenza artificiale, pur 
                potendo basarsi su dati ministeriali, sono soggette ai limiti descritti nella 
                sezione 3 (Disclaimer sull'Intelligenza Artificiale) e devono sempre essere 
                verificate dall'utente sulle fonti ufficiali.
              </p>
              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Attribuzione:</strong> I dati relativi ai prodotti fitosanitari 
                  e alle etichette ministeriali utilizzati in MelaSmart sono forniti dal{" "}
                  <strong>Ministero della Salute — Banca Dati dei Prodotti Fitosanitari</strong>.{" "}
                  Licenza:{" "}
                  <a
                    href="https://www.dati.gov.it/content/italian-open-data-license-v20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    IODL 2.0
                  </a>.
                </p>
              </div>
            </section>

            {/* 8. Modifiche */}
            <section id="modifiche">
              <h2 className="text-2xl font-semibold mb-4">8. Modifiche ai Termini</h2>
              <p className="text-muted-foreground leading-relaxed">
                MelaSmart si riserva il diritto di modificare i presenti Termini e Condizioni 
                in qualsiasi momento. Le modifiche saranno effettive dal momento della loro 
                pubblicazione sull'App. L'uso continuato dell'App dopo tali modifiche costituisce 
                accettazione dei nuovi termini.
              </p>
            </section>

            {/* 9. Legge Applicabile */}
            <section id="legge-applicabile">
              <h2 className="text-2xl font-semibold mb-4">9. Legge Applicabile</h2>
              <p className="text-muted-foreground leading-relaxed">
                I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi 
                controversia derivante dall'interpretazione o dall'esecuzione dei presenti termini 
                sarà competente in via esclusiva il Foro di residenza del titolare dell'applicazione.
              </p>
            </section>

            {/* 10. Contatti */}
            <section id="contatti">
              <h2 className="text-2xl font-semibold mb-4">10. Contatti</h2>
              <p className="text-muted-foreground leading-relaxed">
                Per qualsiasi domanda relativa ai presenti Termini e Condizioni, è possibile 
                contattarci attraverso la{" "}
                <Link to="/contatti" className="text-primary hover:underline">
                  pagina contatti
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TerminiCondizioni;
