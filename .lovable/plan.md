

# Piano di miglioramento visivo del sito MelaSmart

Il sito ha gia una buona base. L'obiettivo e aggiungere modernita visiva senza toccare i testi: micro-interazioni, scroll animations, effetti di profondita, separatori piu eleganti e piccoli dettagli che fanno la differenza nel 2026.

---

## Cambiamenti pianificati

### 1. Scroll-triggered animations (Intersection Observer)
Creare un hook `useScrollReveal` che applica animazioni fade-up quando le sezioni entrano nel viewport, invece delle animazioni statiche attuali che partono tutte al mount. Ogni sezione si rivela progressivamente durante lo scroll.

### 2. Header migliorato
- Aggiungere transizione di sfondo: trasparente in cima, glassmorphism con shadow quando l'utente scrolla
- Rimuovere il gradient fade sotto l'header e usare solo il blur dinamico

### 3. Hero Section
- Aggiungere un sottile effetto parallax sullo sfondo (il banner si muove piu lentamente dello scroll)
- Aggiungere un leggero floating animation al badge "Lancio imminente"
- Countdown: aggiungere un leggero effetto flip/scale sui numeri quando cambiano

### 4. Sezioni con separatori moderni
- Sostituire i semplici `bg-accent/30` e `bg-secondary/30` con soft gradient mesh o subtle wave/curve SVG dividers tra le sezioni per un flusso piu organico
- Alternare sfondo con gradienti piu morbidi e mesh-like

### 5. AppPreviewSection - Screenshot cards
- Aggiungere un effetto tilt/3D sottile sulle card screenshot all'hover (CSS perspective transform)
- Le immagini avranno un leggero scale-up al hover

### 6. ValueSection - Categorie
- Aggiungere un accent glow border animato sulle card categoria all'hover
- Le icone ruotano leggermente all'hover

### 7. MeteoSection - Grafico mockup
- Animare le barre del grafico in sequenza con un effetto "crescita" quando la sezione entra nel viewport
- Aggiungere un subtle pulse sul semaforo verde attivo

### 8. Footer
- Aggiungere un gradient top border decorativo (linea sottile con gradient green)
- Social icons con effetto scale + colore brand all'hover

### 9. Nuove utility CSS
Aggiungere in `index.css`:
- `@keyframes float` per effetti floating
- `@keyframes tilt` per micro-tilt
- `@keyframes bar-grow` per le barre del grafico
- Gradient mesh background utilities

---

## File coinvolti

| File | Modifica |
|------|----------|
| `src/hooks/useScrollReveal.ts` | Nuovo hook Intersection Observer |
| `src/index.css` | Nuove keyframes e utility (float, tilt, bar-grow, gradient mesh) |
| `src/components/Header.tsx` | Scroll-aware glassmorphism dinamico |
| `src/components/HeroSection.tsx` | Parallax sfondo, floating badge, countdown flip |
| `src/components/FarmerOriginSection.tsx` | Scroll reveal, wave divider SVG |
| `src/components/AppPreviewSection.tsx` | Card 3D tilt hover, scroll reveal |
| `src/components/ValueSection.tsx` | Glow border hover, icon rotation, scroll reveal |
| `src/components/AgronomoAISection.tsx` | Scroll reveal |
| `src/components/MeteoSection.tsx` | Barre animate, semaforo pulse, scroll reveal |
| `src/components/Footer.tsx` | Gradient top border, social hover effects |

---

## Note tecniche
- Nessun testo verra modificato
- Solo CSS/animazioni e logica di scroll, zero librerie esterne aggiuntive
- Tutto basato su Intersection Observer nativo e CSS transforms/transitions
- Performance: `will-change` e `transform` per animazioni GPU-accelerated

