import { useEffect, useRef, useState, useMemo } from "react";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 66, suffix: "+", label: "Database MelaSmart" },
  { value: 17695, label: "DB Ministeriale" },
  { value: 26, label: "Ettari gestiti" },
  { value: 37, label: "Campi gestiti" },
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
      {val.toLocaleString("it-IT").replace(/\./g, "\u202F")}
      {suffix ?? ""}
    </span>
  );
};

const LiveStatsRow = () => {
  const lastUpdate = useMemo(() => {
    const updateDate = new Date(2026, 8, 14); // 14/09/2026
    const today = new Date();
    const isToday =
      today.getDate() === updateDate.getDate() &&
      today.getMonth() === updateDate.getMonth() &&
      today.getFullYear() === updateDate.getFullYear();
    const formatted = updateDate.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return isToday ? `oggi, ${formatted}` : `aggiornato al ${formatted}`;
  }, []);

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center min-w-[90px]">
            <Counter target={s.value} suffix={s.suffix} />
            <span className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide">
              {s.label}
            </span>
          </div>
        ))}
      </div>
      <p className="text-[10px] md:text-xs text-muted-foreground/70 mt-3 font-medium tracking-wide">
        Ultimo aggiornamento: {lastUpdate}
      </p>
    </div>
  );
};

export default LiveStatsRow;
