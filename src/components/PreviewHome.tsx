import { useRef, useState } from 'react';
import { useHomeMotion, usePhoneTilt } from './useHomeMotion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, FlaskConical, Sprout, CloudSun, Package, Bot, BookOpen, Map, Boxes, ArrowRightLeft, Smartphone, Leaf, Bug, Menu, X, Maximize2, Plus, Gauge, ListChecks, ZoomIn, ZoomOut } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Footer from './Footer';
import icon from '@/assets/icon-melasmart.png';
import orchard from '@/assets/hero-banner.webp';
import treatmentsImage from '@/assets/app-screens/trattamenti.webp';
import harvestImage from '@/assets/app-screens/raccolta.webp';
import weatherImage from '@/assets/app-screens/meteo.webp';
import mixtureImage from '@/assets/app-screens/miscela.webp';
import fieldModeImage from '@/assets/app-screens/modalita-campo.webp';
import PreviewAppScreens, { type TreatmentScreen } from './PreviewAppScreens';
import './PreviewHome.css';
import './PreviewHomeMotion.css';

type Mode = 'treatments' | 'harvest';
type Capture = { src: string; width: number; height: number; alt: string };
type Preview = {
  label: string;
  image?: Capture;
  screen?: TreatmentScreen;
  demo?: 'varieties' | 'containers' | 'destinations';
};
type Feature = Preview & {
  icon: typeof Leaf;
  title: string;
  description: string;
  bullets: string[];
  details: string;
};

const treatmentsCapture: Capture = {
  src: treatmentsImage,
  width: 759,
  height: 840,
  alt: 'Finestra di trattamento con grafico orario e navigazione della modalità Trattamenti',
};
const harvestCapture: Capture = {
  src: harvestImage,
  width: 763,
  height: 1278,
  alt: 'Diario di raccolta con totale stagionale stimato, quantità di oggi e casse per formato',
};
const weatherCapture: Capture = {
  src: weatherImage,
  width: 757,
  height: 1536,
  alt: 'Schede del meteo localizzato per oggi e domani, con avvisi, pioggia, vento, umidità e Delta T',
};
const mixtureCapture: Capture = {
  src: mixtureImage,
  width: 755,
  height: 1536,
  alt: 'Strategia Miscela con i totali di acqua e prodotti, il costo stimato e il pulsante per avviare la Modalità Campo',
};
const fieldModePreview = {
  label: 'Modalità Campo',
  image: {
    src: fieldModeImage,
    width: 761,
    height: 1536,
    alt: 'Modalità Campo con velocità GPS, confronto con la velocità impostata e checklist per botte piena e ultima carica',
  },
} satisfies Preview;

const features: Record<Mode, Feature[]> = {
  treatments: [
    {
      label: 'Miscela e registro',
      icon: FlaskConical,
      title: 'Prepara la miscela, conserva lo storico.',
      description: 'Scegli i campi e i prodotti, imposta il volume d’acqua e calcola quanto serve per ogni carica. Salva l’intervento nel registro con i relativi costi.',
      bullets: ['Dosi e quantità per carica', 'Atomizzatore 3D con ugelli selezionabili', 'Registro degli interventi e dei costi'],
      details: 'Nel Garage puoi ruotare e ingrandire il modello 3D dell’atomizzatore e selezionare gli ugelli durante la calibrazione. Nel percorso guidato trovi anche dosi, acqua e strategia della miscela. Il TRV avanzato e l’esportazione completa del registro sono disponibili con Premium. Verifica sempre i dati inseriti e l’etichetta ufficiale del prodotto.',
      image: mixtureCapture,
    },
    {
      label: 'Meteo',
      icon: CloudSun,
      title: 'Leggi il meteo prima di entrare in campo.',
      description: 'Confronta le schede giornaliere per i campi selezionati o per una località. Ogni scheda mette in evidenza il livello di attenzione e le condizioni che lo determinano.',
      bullets: ['Temperatura, vento, umidità, pioggia e Delta T', 'Segnalazione di probabile nebbia', 'Finestre orarie per oggi e domani con Premium'],
      details: 'Le schede riportano le ragioni del semaforo, come pioggia in arrivo, raffiche o umidità elevata. Premium aggiunge finestre di trattamento orarie e grafici avanzati. Confronta le previsioni con le condizioni in campo e le prescrizioni del prodotto.',
      image: weatherCapture,
    },
    { label: 'Magazzino e spesa', icon: Package, title: 'Dalle scorte\nalla spesa intelligente.', description: 'Tieni sotto controllo i prodotti e pianifica gli acquisti partendo dal fabbisogno e da ciò che hai già in magazzino.', bullets: ['Scorte, consumi e costi nello stesso posto', 'Suggerimenti sui formati verificati', 'Foto e PDF di fatture con OCR Premium'], details: 'La spesa intelligente confronta fabbisogno e disponibilità. Quando il catalogo contiene confezioni verificate, propone formati e quantità da acquistare. Con OCR Premium puoi acquisire JPEG o PDF leggibili fino a 4 pagine e 8 MB, rivedendo i dati prima del carico.', screen: 'stock' },
    {
      label: 'Agronomo AI',
      icon: Bot,
      title: 'Un aiuto per leggere etichette e orientarti.',
      description: 'Chiedi un supporto su prodotti, miscele o sintomi. Scegli una risposta rapida oppure un’analisi più approfondita, secondo il piano.',
      bullets: ['Standard nel piano Free', 'Smart e Avanzato nel Premium', 'Analisi delle foto e cronologia nel Premium'],
      details: 'Il livello Avanzato è pensato per le richieste più articolate e può presentare passaggi ed elementi da verificare. Le risposte sono un aiuto alla consultazione. Fai sempre riferimento all’etichetta ufficiale e al tuo tecnico.',
      screen: 'assistant',
    },
    { label: 'Monitoraggio', icon: Bug, title: 'Osservazioni in campo,\nsempre a portata di mano.', description: 'Segui il monitoraggio della carpocapsa sul melo, registra le catture e consulta l’avanzamento dei gradi giorno.', bullets: ['Registrazione delle catture', 'Biofix e calcolo dei gradi giorno', 'Avvisi al raggiungimento delle soglie'], details: 'Il monitoraggio Carpocapsa è dedicato alla coltura Melo e segue il ciclo a generazioni. Le informazioni aiutano a organizzare le osservazioni: le decisioni di intervento richiedono sempre una valutazione delle condizioni del frutteto.', screen: 'monitoring' },
  ],
  harvest: [
    {
      label: 'Diario',
      icon: BookOpen,
      title: 'Tutta la raccolta, giorno per giorno.',
      description: 'Registra kg, casse o bins per varietà. Nel diario ritrovi il totale della stagione, la quantità di oggi e i contenitori raggruppati per formato.',
      bullets: ['Totale stagionale e riepilogo di oggi', 'Contenitori raggruppati per formato', 'Totale iniziale per partire a stagione avviata'],
      details: 'I pesi stimati dai contenitori sono distinti da quelli effettivi. Puoi inserire una pesata quando la conosci. I riepiloghi restano separati per coltura e anno.',
      image: harvestCapture,
    },
    { label: 'Varietà e mappa', icon: Map, title: 'Il tuo frutteto,\nvarietà per varietà.', description: 'Organizza le varietà, assegna un colore e disegna le loro zone sulla mappa. Anche più gruppi di filari possono appartenere alla stessa varietà.', bullets: ['Zone e superfici sempre consultabili', 'Confini disegnati o copiati dai campi', 'Mappa integrata nella sezione Varietà'], details: 'I confini copiati dai campi dei trattamenti restano indipendenti dagli originali. Per registrare una raccolta non è obbligatorio disegnare una zona: puoi iniziare dalla sola varietà.', demo: 'varieties' },
    { label: 'Casse e bins', icon: Boxes, title: 'Tu conti le casse.\nMelaSmart stima i kg.', description: 'Configura i tuoi contenitori con il riempimento medio. Quando hai una pesata effettiva, inseriscila per usare il peso misurato.', bullets: ['Formati personalizzati di casse e bins', 'Peso medio distinto dalla capacità nominale', 'Ricalcolo delle stime con anteprima'], details: 'Ad esempio, 20 casse con riempimento medio di 13 kg corrispondono a circa 260 kg. Una pesata effettiva ha precedenza sulla stima. Puoi aggiornare esplicitamente le stime passate scegliendo coltura e stagione; le pesate effettive rimangono invariate.', demo: 'containers' },
    { label: 'Destinazioni', icon: ArrowRightLeft, title: 'Sai dove va la frutta.\nE quanta ne resta.', description: 'Segui vendite, conferimenti, trasformazioni e scarti. Programma gli utilizzi futuri e distingui le quantità impegnate da quelle ancora disponibili.', bullets: ['Casse e bins raccolti, utilizzati e impegnati', 'Disponibilità complessiva e per varietà', 'Prodotti ottenuti dalle trasformazioni'], details: 'Nelle destinazioni trovi una riga per ogni formato, con i conteggi di raccolto, utilizzato e impegnato. I pesi medi storici si possono consultare nel dettaglio. Per le trasformazioni puoi annotare il prodotto ottenuto in litri o kg. I saldi dipendono dai pesi e dalle registrazioni inserite; la funzione segue i flussi della raccolta, senza gestire clienti, incassi o contabilità.', demo: 'destinations' },
  ],
};

function ModeSwitch({ mode, setMode, label }: { mode: Mode; setMode: (mode: Mode) => void; label: string }) {
  return <div className="ms-mode-switch" role="group" aria-label={label}>
    <button type="button" aria-pressed={mode === 'treatments'} onClick={() => setMode('treatments')}><FlaskConical size={17} />Trattamenti</button>
    <button type="button" aria-pressed={mode === 'harvest'} onClick={() => setMode('harvest')}><Sprout size={17} />Raccolta<span className="ms-new-dot" /></button>
  </div>;
}

function HarvestDemo({ view }: { view?: Preview['demo'] }) {
  return <div className="ms-harvest-demo">
    <div className="ms-demo-heading"><div><small>RACCOLTA · MELO</small><h3>{view === 'destinations' ? 'Dove va la tua raccolta' : view === 'varieties' ? 'Le tue varietà' : 'I tuoi contenitori'}</h3></div><span className="ms-year">2026</span></div>
    {view === 'varieties' && <><p className="ms-demo-sub">Zone e superfici organizzate per varietà.</p>{[['Golden Delicious', '2 zone', '0,80 ha'], ['Renetta del Canada', '3 zone', '0,65 ha'], ['Royal Gala', '1 zona', '0,40 ha']].map(([name, zones, area], i) => <div className="ms-demo-variety" key={name}><i style={{ background: ['#d6aa48', '#7e9651', '#bc6759'][i] }} /><div><b>{name}</b><small>{zones} · {area}</small></div><ChevronDown size={17} /></div>)}<div className="ms-map-note"><Map size={24} /><div><b>Una mappa, tutte le varietà</b><p>Disegna le zone o copia i confini dei tuoi campi.</p></div></div></>}
    {view === 'containers' && <><div className="ms-container-card"><Boxes size={42} /><h4>Cassa da 15 kg</h4><span>Riempimento medio: 13 kg</span></div><div className="ms-conversion"><div><strong>20</strong><small>casse registrate</small></div><ArrowRight size={23} /><div><strong>≈ 260</strong><small>kg stimati</small></div></div><p className="ms-demo-notice"><Check size={16} />Hai una pesata? Il peso effettivo sostituisce la stima.</p></>}
    {view === 'destinations' && <><div className="ms-destination-total"><small>Disponibile da destinare</small><strong>1.860 <em>kg</em></strong><span>su 4.860 kg raccolti</span></div><div className="ms-destination-bar"><i /><i /><i /></div><div className="ms-balance"><span>Utilizzati</span><b>2.400 kg</b><span>Ancora impegnati</span><b>600 kg</b><span>Disponibili</span><b>1.860 kg</b></div><div className="ms-demo-notice"><ArrowRightLeft size={18} /><span><b>Trasformazione in succo</b><br />Quantità e prodotto ottenuto nello stesso percorso.</span></div></>}
    <p className="ms-demo-label">Anteprima illustrativa · dati di esempio</p>
  </div>;
}

function CaptureImage({ capture, className, loading = 'lazy' }: {
  capture: Capture;
  className?: string;
  loading?: 'eager' | 'lazy';
}) {
  return (
    <img
      src={capture.src}
      alt={capture.alt}
      width={capture.width}
      height={capture.height}
      loading={loading}
      decoding="async"
      className={className}
    />
  );
}

export default function PreviewHome() {
  const rootRef = useRef<HTMLDivElement>(null);
  const phoneSceneRef = useRef<HTMLDivElement>(null);
  const zoomTrigger = useRef<HTMLButtonElement | null>(null);
  useHomeMotion(rootRef);
  usePhoneTilt(phoneSceneRef);
  const [mode, setModeState] = useState<Mode>('treatments');
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [zoom, setZoom] = useState<Preview | null>(null);
  const [detailZoom, setDetailZoom] = useState(false);
  const feature = features[mode][active];
  const harvestMode = mode === 'harvest';
  const phoneFeature = harvestMode ? 'Destinazioni' : 'Meteo';
  const phoneCapture = harvestMode ? harvestCapture : treatmentsCapture;
  const openPreview = (preview: Preview, trigger: HTMLButtonElement) => {
    zoomTrigger.current = trigger;
    setDetailZoom(false);
    setZoom(preview);
  };
  const changeMode = (next: Mode) => {
    if (next === mode) return;
    setModeState(next);
    setActive(0);
  };
  const jump = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' }); };
  return <div ref={rootRef} className="ms-home ms-experience" data-mode={mode}>
    <a className="ms-skip" href="#/" onClick={e => { e.preventDefault(); document.getElementById('ms-main')?.focus(); }}>Vai al contenuto</a>
    <div className="ms-reading-progress" aria-hidden="true" /><header className="ms-header"><div className="ms-shell ms-header-inner"><Link to="/" className="ms-brand" aria-label="MelaSmart, homepage"><img src={icon} alt="" /><span>MelaSmart<span className="ms-brand-dot">.</span></span></Link><nav className={menuOpen ? 'ms-nav is-open' : 'ms-nav'} aria-label="Navigazione principale"><button onClick={() => jump('ms-functions')}>Esplora l’app</button><button onClick={() => jump('ms-how')}>Come funziona</button><button onClick={() => jump('ms-plans')}>Piani</button><Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></nav><div className="ms-header-actions"><a className="ms-open-app" href="https://app.melasmart.com" target="_blank" rel="noopener noreferrer">Apri l’app <ArrowUpRight size={16} /></a><button className="ms-menu" aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div></div></header>
    <main id="ms-main" tabIndex={-1}>
      <div
        className="ms-hero-backdrop"
        style={{ backgroundImage: `linear-gradient(90deg, #132d24f5 0%, #132d24e8 34%, #132d2480 72%, #132d2455 100%), linear-gradient(0deg, #132d24c9, transparent 52%), url(${orchard})` }}
      >
        <section className="ms-hero ms-shell" aria-labelledby="ms-hero-title">
          <div className="ms-hero-copy">
            <h1 id="ms-hero-title">Dal primo<br />trattamento<br />all’ultima cassa.</h1>
            <p>
              Meteo, miscele e registro dei trattamenti. Diario di raccolta, casse e destinazioni.
            </p>
            <div className="ms-hero-cta">
              <a className="ms-button ms-primary" href="https://app.melasmart.com" target="_blank" rel="noopener noreferrer">
                Inizia gratis <ArrowRight size={18} aria-hidden="true" />
              </a>
              <button className="ms-text-button" onClick={() => { changeMode('harvest'); jump('ms-functions'); }}>
                Scopri la Raccolta <ChevronDown size={17} aria-hidden="true" />
              </button>
            </div>
            <div className="ms-hero-notes">
              <span><Check size={16} aria-hidden="true" /> Nessuna carta richiesta</span>
              <span><Smartphone size={16} aria-hidden="true" /> Smartphone, tablet e PC</span>
            </div>
          </div>
          <div className="ms-phone-stage">
            <div className="ms-phone-scene" ref={phoneSceneRef}>
              <div className="ms-phone-frame">
                <div className="ms-app-window">
                  <div className="ms-phone-camera" aria-hidden="true" />
                  <div className="ms-app-top">
                    <img src={icon} alt="" width="24" height="24" />
                    <b>MelaSmart</b>
                    <span className="ms-phone-demo-tag">Anteprima</span>
                  </div>
                  <ModeSwitch mode={mode} setMode={changeMode} label="Scegli la modalità nell’anteprima" />
                  <div className="ms-hero-demo" data-workspace={mode}>
                    <div className="ms-hero-demo-layer" data-active={!harvestMode} aria-hidden={harvestMode}>
                      <div className="ms-phone-intro">
                        <CloudSun size={16} aria-hidden="true" />
                        <span>Finestra meteo oraria · Premium</span>
                      </div>
                      <CaptureImage capture={treatmentsCapture} className="ms-phone-capture" loading="eager" />
                    </div>
                    <div className="ms-hero-demo-layer" data-active={harvestMode} aria-hidden={!harvestMode}>
                      <CaptureImage capture={harvestCapture} className="ms-phone-capture" loading="eager" />
                    </div>
                  </div>
                  <div className="ms-phone-home-indicator" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="ms-phone-actions">
              <button
                className="ms-phone-note"
                onClick={() => {
                  setActive(Math.max(0, features[mode].findIndex(item => item.label === phoneFeature)));
                  jump('ms-functions');
                }}
              >
                <span className="ms-phone-note-icon">
                  {harvestMode ? <Boxes size={22} aria-hidden="true" /> : <CloudSun size={22} aria-hidden="true" />}
                </span>
                <span className="ms-phone-note-copy" key={mode}>
                  <b>{harvestMode ? 'Segui ogni cassa' : 'Scegli quando entrare in campo'}</b>
                  <span>
                    {harvestMode ? 'Esplora le destinazioni' : 'Esplora il meteo'}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                </span>
              </button>
              <button
                type="button"
                className="ms-phone-zoom"
                aria-haspopup="dialog"
                onClick={event => openPreview({ label: harvestMode ? 'Diario di raccolta' : 'Finestra di trattamento', image: phoneCapture }, event.currentTarget)}
              >
                <Maximize2 size={15} aria-hidden="true" /> Ingrandisci schermata
              </button>
            </div>
          </div>
        </section>
      </div>

      <section id="ms-functions" className="ms-explorer ms-shell" aria-labelledby="ms-explorer-title">
        <div className="ms-section-heading">
          <div>
            <h2 id="ms-explorer-title">Il tuo lavoro, dentro l’app.</h2>
            <p>Scegli una modalità e guarda come funzionano gli strumenti.</p>
          </div>
          <ModeSwitch mode={mode} setMode={changeMode} label="Scegli le funzioni da esplorare" />
        </div>
        <div className="ms-explorer-workbench">
          <div className="ms-feature-picker" role="group" aria-label="Funzioni disponibili">
            {features[mode].map((item, index) => (
              <button
                key={item.label}
                aria-pressed={active === index}
                aria-controls="ms-feature-panel"
                onClick={() => setActive(index)}
              >
                <item.icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          <div
            className="ms-feature-panel"
            id="ms-feature-panel"
            key={`${mode}-${active}`}
            data-feature={feature.label}
          >
            <div className="ms-feature-copy">
              <span className="ms-eyebrow">{feature.label}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul>{feature.bullets.map(bullet => (
                <li key={bullet}><Check size={16} aria-hidden="true" />{bullet}</li>
              ))}</ul>
              <details className="ms-details">
                <summary>Tutti i dettagli <Plus size={17} aria-hidden="true" /></summary>
                <p>{feature.details}</p>
              </details>
              {feature.image === mixtureCapture && (
                <button
                  type="button"
                  className="ms-field-link"
                  onClick={() => {
                    jump('ms-field-mode');
                    document.getElementById('ms-field-mode-title')?.focus({ preventScroll: true });
                  }}
                >
                  Scopri la Modalità Campo <ArrowDown size={17} aria-hidden="true" />
                </button>
              )}
              {mode === 'harvest' && (
                <span className="ms-free-note"><Check size={14} aria-hidden="true" /> Raccolta inclusa nel piano Free</span>
              )}
            </div>
            <div className="ms-feature-visual" data-capture={Boolean(feature.image)}>
              <div className="ms-preview-media">
                {feature.image ? (
                  <CaptureImage capture={feature.image} className="ms-real-screen" />
                ) : feature.screen ? (
                  <PreviewAppScreens screen={feature.screen} />
                ) : (
                  <HarvestDemo view={feature.demo} />
                )}
                <div className="ms-preview-caption">
                  <span>{feature.image ? 'Schermata dell’app' : 'Dati di esempio'}</span>
                  <button
                    aria-label={`Ingrandisci anteprima: ${feature.label}`}
                    aria-haspopup="dialog"
                    onClick={event => openPreview(feature, event.currentTarget)}
                  >
                    <Maximize2 size={14} aria-hidden="true" /> Ingrandisci
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ms-field-mode" className="ms-field-mode ms-shell" aria-labelledby="ms-field-mode-title">
        <div className="ms-field-copy">
          <h2 id="ms-field-mode-title" tabIndex={-1}>Modalità Campo</h2>
          <p>Metti il tablet o lo smartphone sul supporto in cabina e confronta a colpo d’occhio la velocità GPS con quella impostata per il trattamento.</p>
          <dl className="ms-field-functions">
            <div>
              <dt><Gauge size={20} aria-hidden="true" /> Velocità sotto controllo</dt>
              <dd>La barra e il colore segnalano se vai troppo piano o troppo forte. Puoi attivare l’avviso sonoro e la modalità notturna.</dd>
            </div>
            <div>
              <dt><ListChecks size={20} aria-hidden="true" /> Una lista per ogni carica</dt>
              <dd>Consulta le quantità per la botte piena e per l’ultima carica parziale, quando serve. Spunta i prodotti via via che li aggiungi.</dd>
            </div>
          </dl>
          <p className="ms-field-launch">Prima di partire, apri <strong>Avvia Modalità Campo</strong> da <strong>Strategia Miscela</strong> e consenti l’accesso alla posizione.</p>
        </div>
        <figure className="ms-field-visual">
          <div className="ms-field-screen-detail ms-field-screen-speed">
            <CaptureImage capture={{ ...fieldModePreview.image, alt: 'Velocità GPS attuale, velocità impostata e barra di confronto' }} />
          </div>
          <div className="ms-field-screen-detail ms-field-screen-loads">
            <CaptureImage capture={{ ...fieldModePreview.image, alt: 'Schede per la botte piena e l’ultima carica, con lista dei prodotti da spuntare' }} />
          </div>
          <figcaption className="ms-preview-caption">
            <span>Dettagli della schermata</span>
            <button
              type="button"
              aria-label="Ingrandisci anteprima: Modalità Campo"
              aria-haspopup="dialog"
              onClick={event => openPreview(fieldModePreview, event.currentTarget)}
            >
              <Maximize2 size={14} aria-hidden="true" /> Schermata intera
            </button>
          </figcaption>
        </figure>
      </section>
      <section id="ms-how" className="ms-how"><div className="ms-shell"><div className="ms-section-heading"><div><span className="ms-eyebrow">Come funziona</span><h2>Un percorso semplice.<br />Anche a stagione iniziata.</h2></div><p>Parti da quello che ti serve oggi.<br />Il resto cresce insieme al tuo lavoro.</p></div><div className="ms-steps">{(mode === 'harvest' ? [['01', 'Organizza le varietà', 'Aggiungi le varietà. Se vuoi, disegna le zone oppure copia i confini dei campi.'], ['02', 'Registra la raccolta', 'Inserisci kg, casse o bins. Hai già iniziato? Parti dal totale raccolto finora.'], ['03', 'Segui le destinazioni', 'Registra gli utilizzi e programma quelli futuri, con le disponibilità sotto controllo.']] : [['01', 'Imposta il tuo campo', 'Seleziona gli appezzamenti e configura trattore e atomizzatore.'], ['02', 'Prepara il trattamento', 'Valuta il meteo, scegli i prodotti e calcola acqua e quantità per ogni carica.'], ['03', 'Conserva il lavoro fatto', 'Registra l’intervento e ritrova lo storico quando ne hai bisogno.']]).map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="ms-plans" className="ms-plans ms-shell" aria-labelledby="ms-plans-title">
        <div className="ms-section-heading">
          <div><span className="ms-eyebrow">Piani</span><h2 id="ms-plans-title">Free e Premium</h2></div>
          <p className="ms-plans-shared"><Check size={17} aria-hidden="true" /> Raccolta inclusa in entrambi i piani</p>
        </div>
        <div className="ms-plan-grid">
          <article className="ms-plan-card">
            <div className="ms-plan-top">
              <h3>Free</h3>
              <div className="ms-price">0 €<small>senza abbonamento</small></div>
            </div>
            <p>Per gestire la raccolta e iniziare con i trattamenti.</p>
            <ul>
              <li><Check aria-hidden="true" /> Diario di raccolta, varietà, casse e destinazioni</li>
              <li><Check aria-hidden="true" /> Strumenti base per i trattamenti</li>
              <li><Check aria-hidden="true" /> Assistente AI Standard, con limiti giornalieri</li>
            </ul>
            <a className="ms-button ms-outline" href="https://app.melasmart.com" target="_blank" rel="noopener noreferrer">Inizia gratis <ArrowUpRight size={17} aria-hidden="true" /></a>
          </article>
          <article className="ms-plan-card ms-premium">
            <div className="ms-plan-top">
              <h3>Premium</h3>
              <div className="ms-price">4,99 €<small>al mese</small></div>
            </div>
            <p>Per pianificare i trattamenti e gestire scorte e acquisti.</p>
            <ul>
              <li><Check aria-hidden="true" /> Finestre meteo orarie per oggi e domani</li>
              <li><Check aria-hidden="true" /> TRV avanzato in base a chioma e ugelli attivi</li>
              <li><Check aria-hidden="true" /> Importazione di fatture e DDT da foto o PDF con OCR</li>
              <li><Check aria-hidden="true" /> Spesa Intelligente in base a scorte e fabbisogno</li>
              <li><Check aria-hidden="true" /> AI con analisi foto e cronologia</li>
              <li><Check aria-hidden="true" /> Registro dei trattamenti completo in PDF</li>
            </ul>
            <a className="ms-button ms-primary" href="https://app.melasmart.com" target="_blank" rel="noopener noreferrer">Scopri Premium nell’app <ArrowUpRight size={17} aria-hidden="true" /></a>
          </article>
        </div>
        <details className="ms-plan-details"><summary>Confronta tutte le funzioni <ChevronDown size={17} /></summary><div className="ms-table-wrap"><table><caption>Confronto dei piani MelaSmart</caption><thead><tr><th>Funzione</th><th>Free</th><th>Premium</th></tr></thead><tbody><tr><th scope="row">Gestione della raccolta</th><td>Inclusa</td><td>Inclusa: diario, varietà, casse e bins, destinazioni</td></tr><tr><th scope="row">Campi salvati per i trattamenti</th><td>1</td><td>Fino a 50</td></tr><tr><th scope="row">Trattori nel garage</th><td>1</td><td>Fino a 50</td></tr><tr><th scope="row">Atomizzatori nel garage</th><td>1</td><td>Fino a 50</td></tr><tr><th scope="row">TRV avanzato</th><td>Non incluso</td><td>Calcolo basato su chioma e ugelli attivi</td></tr><tr><th scope="row">Modalità AI</th><td>Standard</td><td>Anche Smart e Avanzato</td></tr><tr><th scope="row">Analisi AI delle fotografie</th><td>Non inclusa</td><td>Immagini di piante, sintomi e parassiti</td></tr><tr><th scope="row">Cronologia delle domande all’AI</th><td>Non salvata</td><td>Fino a 200 domande e risposte</td></tr><tr><th scope="row">Importazione fatture e DDT</th><td>Non inclusa</td><td>JPEG e PDF, con revisione prima del carico in magazzino</td></tr><tr><th scope="row">Spesa Intelligente</th><td>Non inclusa</td><td>Stime di fabbisogno e acquisti da consumi, superfici e scorte</td></tr><tr><th scope="row">Finestra di trattamento</th><td>Non inclusa</td><td>Pianificazione meteo per oggi e domani</td></tr><tr><th scope="row">Grafici meteo avanzati</th><td>Non inclusi</td><td>Andamenti orari di temperatura, nebbia, Delta T, pioggia e nuvole</td></tr><tr><th scope="row">Cartografia aggiuntiva</th><td>Mappa satellitare di base</td><td>Anche catasto, AGEA e livelli regionali, storici e tematici, dove disponibili</td></tr><tr><th scope="row">Esportazione PDF dei trattamenti</th><td>Massimo 3 righe</td><td>Esportazione completa</td></tr></tbody></table></div><p>Premium include 20 crediti AI al giorno. Smart usa 2 crediti e Avanzato 4 per risposta riuscita. Consulta nell’app i limiti e le condizioni aggiornate.</p></details>
      </section>
      <section className="ms-origin ms-shell"><div className="ms-origin-mark"><Leaf size={35} /><span>DAL CAMPO,<br />PER IL CAMPO.</span></div><div><span className="ms-eyebrow">Le origini</span><h2>Creata da un agricoltore.<br />Per chi il campo lo vive.</h2><p>MelaSmart nasce dall’esperienza diretta: preparare un trattamento, controllare le scorte, contare le casse. Problemi quotidiani, strumenti concreti.</p></div><Link to="/contatti" className="ms-text-button">Parliamone <ArrowUpRight size={18} /></Link></section>
      <section className="ms-faq ms-shell"><div><span className="ms-eyebrow">FAQ</span><h2>Le risposte, subito.</h2><Link to="/faq" className="ms-text-button">Tutte le domande frequenti <ArrowRight size={17} /></Link></div><div>{[['Devo installare qualcosa?', 'Puoi aprire MelaSmart direttamente nel browser. Sui dispositivi compatibili puoi anche aggiungerla alla schermata Home, come un’app.'], ['Posso usare la Raccolta gratuitamente?', 'Sì. La modalità Raccolta è disponibile anche nel piano Free, per Melo e Vite, con dati separati per coltura e anno.'], ['Funziona anche senza connessione?', 'Il supporto offline è parziale. Alcune funzioni locali possono restare disponibili dopo un utilizzo online; accesso, salvataggi sul server, meteo e AI richiedono una connessione.']].map(([q, a]) => <details key={q}><summary>{q}<Plus size={18} /></summary><p>{a}</p></details>)}</div></section>
      <section className="ms-final ms-shell"><div><span className="ms-eyebrow">Inizia gratis</span><h2>Porta MelaSmart<br />nel tuo campo.</h2></div><div><a href="https://app.melasmart.com" target="_blank" rel="noopener noreferrer" className="ms-button">Prova gratis <ArrowRight size={19} /></a><p>Nessuna carta. Parti dal tuo primo campo.</p></div></section>
    </main>
    <Footer />
    <Dialog open={!!zoom} onOpenChange={open => { if (!open) setZoom(null); }}><DialogContent
      className="max-w-4xl max-h-[94dvh] overflow-y-auto"
      onCloseAutoFocus={event => {
        if (!zoomTrigger.current?.isConnected) return;
        event.preventDefault();
        zoomTrigger.current.focus();
      }}
    >
      <DialogTitle className="pr-8">{zoom?.label}</DialogTitle>
      <DialogDescription>{zoom?.image ? 'Schermata dell’app acquisita il 14 novembre 2026.' : 'Ricostruzione illustrativa dell’interfaccia attuale con dati di esempio. Non è una sessione operativa.'}</DialogDescription>
      {zoom?.image && (
        <>
          <button type="button" className="ms-zoom-control" aria-controls="ms-image-viewer" onClick={() => setDetailZoom(!detailZoom)}>
            {detailZoom ? <ZoomOut size={18} aria-hidden="true" /> : <ZoomIn size={18} aria-hidden="true" />}
            {detailZoom ? 'Adatta allo schermo' : 'Zoom dettagli'}
          </button>
          <div id="ms-image-viewer" className="ms-image-viewer" data-zoomed={detailZoom} tabIndex={0} role="region" aria-label="Schermata dell’app">
            <CaptureImage capture={zoom.image} loading="eager" />
          </div>
        </>
      )}
      {zoom && !zoom.image && <div className="ms-home ms-enlarged">{zoom.screen ? <PreviewAppScreens screen={zoom.screen} /> : <HarvestDemo view={zoom.demo} />}</div>}
    </DialogContent></Dialog>
  </div>;
}
