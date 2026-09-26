import { Link } from "react-router-dom";

const items = [
  "v1.9.0 · MelaSmart AI™ Copilot passa alla nuova generazione Google Gemini 3.x",
  "Gemini 3.8 Flash · Ragionamento High per diagnosi e piani di trattamento complessi",
  "Gemini 3.5 Flash · OCR Premium di etichette, fatture e DDT ancora più preciso",
  "Gemini 3.1 Flash-Lite · Risposte Standard ultrarapide accessibili a tutti",
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
