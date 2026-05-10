import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 48, suffix: "+", label: "Prodotti nel DB" },
  { value: 12, label: "Serie ugelli" },
  { value: 23, label: "Aggiornamenti" },
];

const Counter = ({ target, suffix }: { target: number; suffix?: string }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-2xl md:text-3xl font-bold text-gradient-green tabular-nums">
      {val}
      {suffix ?? ""}
    </span>
  );
};

const LiveStatsRow = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-8">
      {stats.map((s, i) => (
        <div key={i} className="flex flex-col items-center min-w-[90px]">
          <Counter target={s.value} suffix={s.suffix} />
          <span className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LiveStatsRow;
