import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  RotateCcw,
  X,
  ZoomIn,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type LightboxItem = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

const MIN_SCALE = 1;
const MAX_SCALE = 6;

type Transform = { scale: number; x: number; y: number };
const IDENTITY: Transform = { scale: 1, x: 0, y: 0 };

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/** Zoom keeping the point (px, py) — measured from the viewport centre — fixed. */
function zoomAt(t: Transform, factor: number, px: number, py: number): Transform {
  const scale = clamp(t.scale * factor, MIN_SCALE, MAX_SCALE);
  if (scale === MIN_SCALE) return IDENTITY;
  const ratio = scale / t.scale;
  return { scale, x: px - (px - t.x) * ratio, y: py - (py - t.y) * ratio };
}

/** Keep the image roughly inside the frame while panning. */
function clampPan(t: Transform, width: number, height: number): Transform {
  const maxX = ((t.scale - 1) * width) / 2;
  const maxY = ((t.scale - 1) * height) / 2;
  return {
    scale: t.scale,
    x: clamp(t.x, -maxX, maxX),
    y: clamp(t.y, -maxY, maxY),
  };
}

type LightboxProps = {
  items: LightboxItem[];
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

export function ImageLightbox({ items, index, onIndexChange, onClose }: LightboxProps) {
  const open = index !== null;
  const [t, setT] = React.useState<Transform>(IDENTITY);
  const [smooth, setSmooth] = React.useState(false);

  const viewportRef = React.useRef<HTMLDivElement>(null);
  const pointers = React.useRef(new Map<number, { x: number; y: number }>());
  const pinch = React.useRef<{ dist: number } | null>(null);
  const pan = React.useRef<{ px: number; py: number; x: number; y: number } | null>(null);
  const moved = React.useRef(false);
  const tRef = React.useRef(t);
  tRef.current = t;

  const item = index !== null ? items[index] : null;

  const reset = React.useCallback(() => {
    setSmooth(true);
    setT(IDENTITY);
  }, []);

  React.useEffect(() => {
    pointers.current.clear();
    pinch.current = null;
    pan.current = null;
    moved.current = false;
    setSmooth(false);
    setT(IDENTITY);
  }, [index]);

  const centre = () => {
    const el = viewportRef.current;
    if (!el) return { w: 0, h: 0, cx: 0, cy: 0 };
    const rect = el.getBoundingClientRect();
    return {
      w: rect.width,
      h: rect.height,
      cx: rect.left + rect.width / 2,
      cy: rect.top + rect.height / 2,
    };
  };

  const zoomBy = (factor: number) => {
    const { w, h } = centre();
    setSmooth(true);
    setT((prev) => clampPan(zoomAt(prev, factor, 0, 0), w, h));
  };

  /* Wheel zoom needs a non-passive native listener to stop page scrolling. */
  React.useEffect(() => {
    const el = viewportRef.current;
    if (!el || !open) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const { w, h, cx, cy } = centre();
      setSmooth(false);
      setT((prev) =>
        clampPan(
          zoomAt(prev, Math.exp(-e.deltaY * 0.0018), e.clientX - cx, e.clientY - cy),
          w,
          h,
        ),
      );
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [open]);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    moved.current = false;
    setSmooth(false);
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinch.current = { dist: Math.hypot(a.x - b.x, a.y - b.y) };
      pan.current = null;
    } else {
      pan.current = { px: e.clientX, py: e.clientY, x: tRef.current.x, y: tRef.current.y };
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const { w, h, cx, cy } = centre();

    if (pointers.current.size >= 2) {
      const pts = [...pointers.current.values()];
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const midX = (pts[0].x + pts[1].x) / 2 - cx;
      const midY = (pts[0].y + pts[1].y) / 2 - cy;
      const last = pinch.current?.dist || dist;
      pinch.current = { dist };
      moved.current = true;
      setT((prev) => clampPan(zoomAt(prev, dist / (last || 1), midX, midY), w, h));
      return;
    }

    if (pan.current && tRef.current.scale > 1) {
      const dx = e.clientX - pan.current.px;
      const dy = e.clientY - pan.current.py;
      if (Math.abs(dx) + Math.abs(dy) > 4) moved.current = true;
      const base = pan.current;
      setT((prev) => clampPan({ ...prev, x: base.x + dx, y: base.y + dy }, w, h));
    }
  };

  const endPointer = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinch.current = null;
    if (pointers.current.size === 0) pan.current = null;
  };

  /** Tap / click toggles between fit and 2.5x at the touched point. */
  const toggleZoom = (e: React.MouseEvent) => {
    if (moved.current) return;
    const { w, h, cx, cy } = centre();
    setSmooth(true);
    setT((prev) =>
      prev.scale > 1
        ? IDENTITY
        : clampPan(zoomAt(prev, 2.5, e.clientX - cx, e.clientY - cy), w, h),
    );
  };

  const step = (dir: number) => {
    if (index === null || items.length < 2) return;
    onIndexChange((index + dir + items.length) % items.length);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { step(1); e.preventDefault(); }
    else if (e.key === "ArrowLeft") { step(-1); e.preventDefault(); }
    else if (e.key === "+" || e.key === "=") { zoomBy(1.4); e.preventDefault(); }
    else if (e.key === "-") { zoomBy(1 / 1.4); e.preventDefault(); }
    else if (e.key === "0") { reset(); e.preventDefault(); }
  };

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent
        onKeyDown={onKeyDown}
        className={cn(
          "max-w-none w-[96vw] h-[92vh] p-0 gap-0 overflow-hidden rounded-3xl",
          "border-border/60 bg-background/95 backdrop-blur-xl [&>button]:hidden",
        )}
      >
        {item && (
          <div className="flex h-full flex-col">
            <div className="flex shrink-0 items-center gap-3 border-b border-border/60 px-4 py-3 sm:px-6">
              <DialogTitle className="truncate text-sm font-semibold sm:text-base">
                {item.title ?? item.alt}
              </DialogTitle>
              {items.length > 1 && (
                <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                  {(index ?? 0) + 1} / {items.length}
                </span>
              )}
              <div className="ml-auto flex items-center gap-1">
                <span className="mr-2 hidden text-xs text-muted-foreground tabular-nums sm:inline">
                  {Math.round(t.scale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => zoomBy(1 / 1.4)}
                  aria-label="Riduci zoom"
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => zoomBy(1.4)}
                  aria-label="Aumenta zoom"
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={reset}
                  aria-label="Adatta allo schermo"
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Chiudi"
                  className="ml-1 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div
              ref={viewportRef}
              onClick={toggleZoom}
              onDoubleClick={toggleZoom}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endPointer}
              onPointerCancel={endPointer}
              className={cn(
                "relative flex flex-1 touch-none select-none items-center justify-center overflow-hidden bg-secondary/20",
                t.scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in",
              )}
            >
              <img
                src={item.src}
                alt={item.alt}
                draggable={false}
                style={{ transform: `translate3d(${t.x}px, ${t.y}px, 0) scale(${t.scale})` }}
                className={cn(
                  "max-h-full max-w-full object-contain will-change-transform",
                  smooth && "transition-transform duration-200 ease-out",
                )}
              />

              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); step(-1); }}
                    aria-label="Immagine precedente"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-background/80 p-2.5 shadow-lg backdrop-blur transition-transform hover:scale-110"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); step(1); }}
                    aria-label="Immagine successiva"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-background/80 p-2.5 shadow-lg backdrop-blur transition-transform hover:scale-110"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            <div className="shrink-0 border-t border-border/60 px-4 py-3 sm:px-6">
              {item.description && (
                <DialogDescription className="line-clamp-2 text-sm text-muted-foreground">
                  {item.description}
                </DialogDescription>
              )}
              <p className="mt-1 text-xs text-muted-foreground/70">
                Tocca o clicca per zoommare · rotellina o pizzica per ingrandire · trascina
                per spostarti · freccie per sfogliare
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

/** Keeps the open index and renders the popup for you. */
export function useLightbox(items: LightboxItem[]) {
  const [index, setIndex] = React.useState<number | null>(null);
  return {
    index,
    open: (i: number) => setIndex(i),
    lightbox: (
      <ImageLightbox
        items={items}
        index={index}
        onIndexChange={setIndex}
        onClose={() => setIndex(null)}
      />
    ),
  };
}

/** Image wrapped in an accessible "click to enlarge" trigger. */
export function ZoomableImage({
  src,
  alt,
  onZoom,
  className,
  imgClassName,
  label = "Ingrandisci",
}: {
  src: string;
  alt: string;
  onZoom: () => void;
  className?: string;
  imgClassName?: string;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onZoom}
      aria-label={`${label}: ${alt}`}
      className={cn("group/zoom relative block w-full cursor-zoom-in overflow-hidden", className)}
    >
      <img src={src} alt={alt} draggable={false} className={imgClassName} />
      <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-lg backdrop-blur transition-opacity duration-300 group-hover/zoom:opacity-100">
        <ZoomIn className="h-3.5 w-3.5" />
        {label}
      </span>
    </button>
  );
}
