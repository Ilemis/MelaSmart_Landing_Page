

# Lancio Web App — Rimozione Waitlist/Countdown + Sezione Premium

## Cosa cambia

### 1. HeroSection — Sostituzione completa della parte bassa
- **Rimuovo**: countdown timer, waitlist form, WaitlistForm import, useCountdown hook, CountdownDigit
- **Badge** "Lancio imminente" → **"Disponibile ora"** (pallino verde, no ping animation)
- **Aggiungo**: un bottone grande "Prova la Web App" che punta a `https://app.melasmart.com` (target _blank), stile `hero` variant, con icona freccia
- Sotto il bottone: testo piccolo "Gratis · Nessuna carta richiesta" come nello screenshot di riferimento
- Mantengo titolo h1 e sottotitolo invariati

### 2. Nuova sezione PremiumSection
Nuova componente `src/components/PremiumSection.tsx` inserita in Index.tsx prima del Footer.

Layout ispirato allo screenshot fornito:
- Titolo "MelaSmart PREMIUM" con sottotitolo "Più operatività, più storico, più controllo"
- Paragrafo introduttivo
- Griglia di 8 feature cards (AI™ Copilot, Campi Multipli, Meteo Operativo, Garage Completo, OCR Fatture, Registro Completo, Setup Più Precisi, Storico AI)
- Box prezzo in evidenza: **4,99€/mese** con bottone "Passa a Premium" → link a `https://app.melasmart.com`
- Scroll reveal animation come le altre sezioni

### 3. File modificati
| File | Modifica |
|------|----------|
| `src/components/HeroSection.tsx` | Rimozione countdown/waitlist, aggiunta CTA bottone webapp |
| `src/components/PremiumSection.tsx` | Nuovo file — sezione premium |
| `src/pages/Index.tsx` | Import PremiumSection, inserita prima del Footer |
| `src/components/WaitlistForm.tsx` | Può essere rimosso (non più usato) |

