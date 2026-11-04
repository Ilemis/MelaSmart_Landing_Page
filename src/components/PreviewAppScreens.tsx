import { Bot, Brain, Bug, Camera, Check, ChevronRight, CloudSun, Droplets, FileScan, FlaskConical, History, Layers, Leaf, Mic, Package, Plus, Search, Send, ShoppingCart, Tractor, Upload, Wind, Zap } from 'lucide-react';
import './PreviewAppScreens.css';

export type TreatmentScreen = 'mixture' | 'weather' | 'stock' | 'monitoring' | 'assistant';

// Editorial reconstructions of the current app UI, with synthetic sample data.
// They are deliberately static: navigation and actions belong to the real app.
export default function PreviewAppScreens({ screen }: { screen: TreatmentScreen }) {
  return <div className="ms-current-screen" data-screen={screen}>
    <div className="ms-screen-brand"><span><Leaf size={16} /></span><div><b>MelaSmart <small>v4.0</small></b><em>PROFESSIONAL CROP MANAGEMENT</em></div><i>Melo</i></div>
    <div className="ms-screen-workspaces"><span><FlaskConical size={12} /> Trattamenti</span><span>Raccolta</span></div>
    <div className="ms-screen-content">
      {screen === 'assistant' && <>
        <h4><Bot size={20}/> Assistente Agronomo</h4><p className="ms-screen-subtitle">MelaSmart AI™ Copilot</p>
        <div className="ms-ai-levels"><span><Zap size={15}/><b>Standard</b></span><span><Brain size={15}/><b>Ragionamento</b><small>LOW</small></span><span><Brain size={15}/><b>Ragionamento</b><small>HIGH</small></span></div>
        <div className="ms-ai-input"><span>Scrivi la tua domanda…</span><Mic size={15}/></div><div className="ms-ai-actions"><span><Camera size={13}/> SCATTA</span><span><Upload size={13}/> CARICA</span><span><Send size={13}/> INVIA</span></div>
        <p className="ms-screen-footnote">Foto opzionale: con la foto le informazioni di contesto non vengono incluse.</p><div className="ms-ai-notice">L’AI può fornire informazioni inesatte o incomplete. Verifica sempre i dati ufficiali e le prescrizioni delle etichette.</div>
        <div className="ms-ai-history"><h4><History size={16}/> Cronologia domande</h4><span>Premium · fino a 200</span><div><small>DOMANDE SALVATE</small><b>Riapri una domanda dall’archivio <ChevronRight size={14}/></b></div></div>
      </>}
      {screen === 'mixture' && <>
        <div className="ms-wizard-progress">{['Dove', 'Cosa', 'Come', 'Strategia'].map((label,i)=><span className={i===3?'is-current':''} key={label}><i>{i+1}</i>{label}</span>)}</div>
        <div className="ms-strategy"><h4><Layers size={19} /> Strategia Miscela</h4><p>Area nominale: 1,2000 ha</p><p>Area corretta: 1,2000 ha · Riduzione: 0%</p><div className="ms-screen-action"><Tractor size={13} /> Modalità Campo</div><div className="ms-strategy-total"><small><Package size={12} /> Totali richiesti (Magazzino)</small><div><span>Prodotto di esempio A</span><b>1,20 kg</b></div><div><span>Prodotto di esempio B</span><b>0,60 L</b></div></div><div className="ms-water-summary"><div><small>Acqua totale</small><b>600 <em>L</em></b></div><div><small>Cariche</small><b>2 <em>× 300 L</em></b></div></div><div className="ms-load-row"><Droplets size={16}/><div><b>Per ogni carica da 300 L</b><small>A: 600 g · B: 300 ml</small></div><Check size={16}/></div><p className="ms-screen-footnote">Quantità dimostrative, senza valore agronomico.</p></div>
      </>}
      {screen === 'weather' && <>
        <h4><CloudSun size={19} /> Finestra di Trattamento</h4><p className="ms-screen-subtitle">3 campi selezionati · esempio di previsione</p>
        {['Oggi','Domani'].map((day,d)=><div className="ms-forecast" key={day}><div className="ms-forecast-title"><b>{day}</b><span>Delta T <strong>{d?'2,1 – 5,0':'1,2 – 4,6'} °C</strong></span></div><div className="ms-forecast-bars" aria-hidden="true">{Array.from({length:20},(_,i)=><i key={i} style={{height:`${35+Math.sin((i+1)/20*Math.PI)*60}%`,background:i<(d?5:4)||i>15?'#fbbf24':'#10b981'}}/>)}</div><div className="ms-forecast-hours"><span>06:00</span><b>Ideale: {d?'10:00–17:00':'09:00–17:00'}</b><span>20:00</span></div></div>)}
        <div className="ms-screen-legend"><span><i/>Ottimale</span><span><i/>Attenzione</span><span><i/>Non trattare</span></div><div className="ms-meteo-reading"><Wind size={15}/><span>Vento <b>4,8 km/h</b></span><Droplets size={15}/><span>Pioggia <b>0,0 mm</b></span></div><p className="ms-screen-footnote">Previsioni illustrative: verifica le condizioni reali in campo.</p>
      </>}
      {screen === 'stock' && <>
        <h4><Package size={19}/> Magazzino</h4><div className="ms-stock-actions"><span><FileScan size={15}/> Acquisisci fattura <small>JPEG · PDF</small></span><span><Plus size={14}/> Aggiungi</span></div><div className="ms-search-placeholder"><Search size={13}/> Cerca nel magazzino…</div><div className="ms-stock-filters"><b>Tutti 3</b><span>Esauriti 1</span><span>Sotto soglia 1</span></div><div className="ms-inventory-item"><div><b>Prodotto di esempio</b><span>Fungicida</span></div><strong>0,65 <em>kg</em></strong></div><div className="ms-shopping"><h4><ShoppingCart size={17}/> Spesa Intelligente</h4><p>Fabbisogno e scorte, a confronto</p><div className="ms-shopping-metrics"><span>Fabbisogno<b>1,20 kg</b></span><span>In magazzino<b>0,65 kg</b></span><span>Da acquistare<b>0,55 kg</b></span></div><div className="ms-package-suggestion"><Package size={17}/><div><b>2 confezioni × 500 g</b><small>Esempio con formato verificato</small></div><Check size={15}/></div><p className="ms-screen-footnote">Acquisto: 1 kg · residuo previsto: 0,45 kg</p></div>
      </>}
      {screen === 'monitoring' && <>
        <h4><Bug size={19}/> Monitoraggio Carpocapsa</h4><p className="ms-screen-subtitle">Solo coltura Melo · Ciclo a generazioni</p><div className="ms-monitor-top"><b>Generazione 1</b><span>Storico <ChevronRight size={12}/></span></div><div className="ms-biofix"><span>Biofix confermato<b>12 maggio 2026</b></span><span>Trappola installata<b>5 maggio 2026</b></span></div><div className="ms-gdd"><small>Gradi giorno accumulati</small><strong>82,4 <em>GDD</em></strong><div><i/></div><span>Dal biofix della generazione corrente</span></div><div className="ms-thresholds"><div><Check size={16}/><b>Soglia 55 GDD</b><span>Raggiunta</span></div><div><Bug size={16}/><b>Soglia 150 GDD</b><span>Da raggiungere</span></div></div><p className="ms-screen-footnote">Esempio illustrativo del monitoraggio stagionale.</p>
      </>}
    </div>
    <div className="ms-screen-nav"><span><CloudSun size={14}/>Meteo</span><span><Package size={14}/>Magazzino</span><i><Plus size={19}/></i><span><Layers size={14}/>Registro</span><span><Leaf size={14}/>Profilo</span></div>
  </div>;
}
