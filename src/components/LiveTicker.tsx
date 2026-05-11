import { Link } from "react-router-dom";

const items = [
  "v1.8.0 · Zoom migliorato e Lente Touch per catturare con precisione gli angoli degli appezzamenti",
  "v1.8.0 · Salvataggio persistente della data di installazione della trappola carpocapsa con storico dedicato",
  "v1.8.0 · Notifiche push per monitoraggio carpocapsa e meteo giornaliero nella finestra di trattamento",
  "v1.8.0 · Layer Catasto Nazionale nelle mappe con slider di opacità regolabile",
  "v1.8.0 · Miglioramenti nel calcolatore decisionale Mills-Jones",
  "v1.8.0 · Altitudine calcolata automaticamente in base alle coordinate",
  "v1.8.0 · Migliorie UX/UI e performance",
];

const LiveTicker = () => {
  const loop = [...items, ...items];
  return (
    <Link
      to="/changelog"
      className="relative block overflow-hidden mb-6 max-w-2xl mx-auto rounded-full border border-primary/20 bg-background/40 backdrop-blur-md hover:border-primary/40 hover:bg-background/60 transition-colors group"
      aria-label="Vai al changelog"
    >
      <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-background/80 to-transparent pointer-events-none" />
      <div className="inline-flex w-max min-w-max gap-8 py-2 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
        {loop.map((t, i) => (
          <span key={i} className="text-xs md:text-sm text-foreground/80 font-medium flex items-center gap-2 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default LiveTicker;
