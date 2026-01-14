import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Mail, Calendar, FileText } from "lucide-react";
import iconMelasmart from "@/assets/icon-melasmart.png";

const PrivacyPolicy = () => {
  const lastUpdated = "14 Gennaio 2025";

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
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La tua privacy è importante per noi. Questa informativa descrive come raccogliamo, 
            utilizziamo e proteggiamo i tuoi dati personali.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Ultimo aggiornamento: {lastUpdated}</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <nav className="mb-12 p-6 rounded-2xl border border-border bg-card">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Indice
          </h2>
          <ul className="grid md:grid-cols-2 gap-2">
            {[
              { id: "titolare", label: "Titolare del Trattamento" },
              { id: "dati-raccolti", label: "Dati Raccolti" },
              { id: "finalita", label: "Finalità del Trattamento" },
              { id: "base-giuridica", label: "Base Giuridica" },
              { id: "conservazione", label: "Conservazione dei Dati" },
              { id: "condivisione", label: "Condivisione dei Dati" },
              { id: "diritti", label: "I Tuoi Diritti" },
              { id: "cookie", label: "Cookie Policy" },
              { id: "sicurezza", label: "Sicurezza" },
              { id: "modifiche", label: "Modifiche alla Policy" },
              { id: "contatti", label: "Contatti" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  <FileText className="h-3 w-3" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section id="titolare" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">1</span>
              Titolare del Trattamento
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Il Titolare del trattamento dei dati personali raccolti attraverso questo sito web è:
              </p>
              <div className="mt-4 p-4 rounded-xl bg-muted/50 border border-border">
                <p className="font-semibold text-foreground">MelaSmart</p>
                <p className="text-muted-foreground">Startup innovativa nel settore AgriTech</p>
                <p className="text-muted-foreground">Email: privacy@melasmart.it</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="dati-raccolti" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">2</span>
              Dati Raccolti
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Raccogliamo le seguenti categorie di dati personali:
              </p>
              
              <div className="grid gap-4">
                <div className="p-4 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Dati forniti volontariamente</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Indirizzo email (tramite il form di iscrizione alla waitlist)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Nome e cognome (se forniti)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Qualsiasi altra informazione volontariamente comunicata</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Dati raccolti automaticamente</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Indirizzo IP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Tipo di browser e dispositivo utilizzato</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Pagine visitate e tempo di permanenza</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Dati di navigazione e log di sistema</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="finalita" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">3</span>
              Finalità del Trattamento
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I tuoi dati personali sono trattati per le seguenti finalità:
              </p>
              <div className="grid gap-3">
                {[
                  {
                    title: "Gestione della Waitlist",
                    desc: "Per registrare la tua richiesta di iscrizione e contattarti quando il servizio sarà disponibile."
                  },
                  {
                    title: "Comunicazioni informative",
                    desc: "Per inviarti aggiornamenti sullo sviluppo del progetto MelaSmart e novità correlate."
                  },
                  {
                    title: "Miglioramento del servizio",
                    desc: "Per analizzare l'utilizzo del sito e migliorare l'esperienza utente."
                  },
                  {
                    title: "Adempimenti legali",
                    desc: "Per rispettare obblighi di legge e rispondere a richieste delle autorità competenti."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="base-giuridica" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">4</span>
              Base Giuridica del Trattamento
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Il trattamento dei tuoi dati personali si basa sulle seguenti basi giuridiche ai sensi del 
                Regolamento UE 2016/679 (GDPR):
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">a)</span>
                  <span><strong className="text-foreground">Consenso</strong> (Art. 6.1.a GDPR): per l'iscrizione alla waitlist e l'invio di comunicazioni informative.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">b)</span>
                  <span><strong className="text-foreground">Legittimo interesse</strong> (Art. 6.1.f GDPR): per l'analisi statistica anonima e il miglioramento del servizio.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">c)</span>
                  <span><strong className="text-foreground">Obbligo legale</strong> (Art. 6.1.c GDPR): per adempiere a obblighi previsti dalla legge.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section id="conservazione" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">5</span>
              Conservazione dei Dati
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I tuoi dati personali saranno conservati per il tempo strettamente necessario al raggiungimento 
                delle finalità per cui sono stati raccolti:
              </p>
              <div className="p-4 rounded-xl border border-border bg-card">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Dati della waitlist:</strong> fino al lancio del servizio e per un massimo di 24 mesi dalla raccolta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Dati di navigazione:</strong> massimo 12 mesi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Log di sistema:</strong> massimo 6 mesi per finalità di sicurezza</span>
                  </li>
                </ul>
              </div>
              <p>
                Al termine del periodo di conservazione, i dati saranno cancellati o anonimizzati in modo 
                irreversibile.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="condivisione" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">6</span>
              Condivisione dei Dati
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I tuoi dati personali potranno essere condivisi con:
              </p>
              <div className="grid gap-3">
                <div className="p-4 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Fornitori di servizi</h3>
                  <p className="text-sm">
                    Utilizziamo Formspree per la gestione del form di contatto. Formspree agisce come 
                    responsabile del trattamento e i dati sono trattati in conformità al GDPR.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Servizi di hosting</h3>
                  <p className="text-sm">
                    Il sito è ospitato su Cloudflare Pages. I server sono situati nell'Unione Europea 
                    o in paesi che garantiscono un livello adeguato di protezione.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Autorità competenti</h3>
                  <p className="text-sm">
                    Quando richiesto dalla legge o per tutelare i nostri diritti legali.
                  </p>
                </div>
              </div>
              <p className="font-medium text-foreground">
                Non vendiamo, affittiamo o condividiamo i tuoi dati personali con terze parti per 
                finalità di marketing.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="diritti" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">7</span>
              I Tuoi Diritti
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ai sensi del GDPR, hai i seguenti diritti in relazione ai tuoi dati personali:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { title: "Diritto di accesso", desc: "Ottenere conferma del trattamento e accedere ai tuoi dati" },
                  { title: "Diritto di rettifica", desc: "Correggere dati inesatti o incompleti" },
                  { title: "Diritto alla cancellazione", desc: "Richiedere la cancellazione dei tuoi dati" },
                  { title: "Diritto di limitazione", desc: "Limitare il trattamento in determinate circostanze" },
                  { title: "Diritto alla portabilità", desc: "Ricevere i tuoi dati in formato strutturato" },
                  { title: "Diritto di opposizione", desc: "Opporti al trattamento basato sul legittimo interesse" },
                  { title: "Revoca del consenso", desc: "Revocare il consenso in qualsiasi momento" },
                  { title: "Reclamo all'autorità", desc: "Presentare reclamo al Garante Privacy" },
                ].map((right, index) => (
                  <div key={index} className="p-4 rounded-xl border border-border bg-card">
                    <h3 className="font-semibold text-foreground text-sm">{right.title}</h3>
                    <p className="text-sm mt-1">{right.desc}</p>
                  </div>
                ))}
              </div>
              <p>
                Per esercitare i tuoi diritti, contattaci all'indirizzo{" "}
                <a href="mailto:privacy@melasmart.it" className="text-primary hover:underline">
                  privacy@melasmart.it
                </a>
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="cookie" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">8</span>
              Cookie Policy
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Questo sito utilizza cookie e tecnologie simili per garantire il corretto funzionamento 
                e migliorare l'esperienza di navigazione.
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Cookie tecnici (necessari)</h3>
                  <p className="text-sm">
                    Essenziali per il funzionamento del sito. Non richiedono consenso.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-2">Cookie analitici</h3>
                  <p className="text-sm">
                    Attualmente non utilizziamo cookie analitici di terze parti. In futuro, potremmo 
                    implementare strumenti di analisi nel rispetto della normativa vigente.
                  </p>
                </div>
              </div>
              <p>
                Puoi gestire le preferenze sui cookie attraverso le impostazioni del tuo browser.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="sicurezza" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">9</span>
              Sicurezza dei Dati
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Adottiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati personali 
                da accessi non autorizzati, perdita, distruzione o divulgazione:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Crittografia SSL/TLS per tutte le comunicazioni</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Accesso ai dati limitato al personale autorizzato</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Backup regolari e procedure di disaster recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Monitoraggio continuo delle vulnerabilità</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 10 */}
          <section id="modifiche" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">10</span>
              Modifiche alla Privacy Policy
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. 
                Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo 
                aggiornamento.
              </p>
              <p>
                Ti invitiamo a consultare periodicamente questa pagina per essere informato su eventuali 
                cambiamenti. L'utilizzo continuato del sito dopo la pubblicazione delle modifiche 
                costituisce accettazione delle stesse.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="contatti" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">11</span>
              Contatti
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Per qualsiasi domanda relativa a questa Privacy Policy o al trattamento dei tuoi dati 
                personali, puoi contattarci:
              </p>
              <div className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a 
                      href="mailto:privacy@melasmart.it" 
                      className="text-primary hover:underline"
                    >
                      privacy@melasmart.it
                    </a>
                  </div>
                </div>
                <p className="text-sm">
                  Risponderemo alla tua richiesta entro 30 giorni, come previsto dalla normativa vigente.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-transparent">
          <h2 className="text-xl font-bold text-foreground mb-2">
            Hai altre domande?
          </h2>
          <p className="text-muted-foreground mb-6">
            Siamo qui per aiutarti. Non esitare a contattarci.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla Home
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

export default PrivacyPolicy;
