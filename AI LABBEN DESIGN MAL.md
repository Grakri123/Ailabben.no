# AI Labben – Designmal

> **En universell brand- og designbibel for AI Labben.**  
> Brukes av utviklere som bygger nye verktøy, designere som lager SOME-grafikk, og alle som skal lage noe under AI Labben-merket.
>
> Hvis du skal levere noe i AI Labben sitt navn – les dette først.

---

## 1. Brand-essens

### Hvem vi er

AI Labben er et **lite produktstudio i Norge** som bygger AI-drevne digitale produkter – egne (AutoSEO, LeadFORGE) og skreddersydde. Vi er ikke et SaaS-selskap, ikke et byrå, og ikke et konsulenthus. Vi er et **studio**.

### Personlighet

| Vi er | Vi er ikke |
|---|---|
| Selvsikre | Skrytende |
| Editorial | Korporative |
| Stille | Bråkete |
| Tekniske håndverkere | Hype-selgere |
| Norske, lavmælte | Amerikansk-startup |
| Premium uten å være pretensiøse | Luksus-imitasjoner |

### Designreferanser

Vi sikter mot samme følelse som **Linear, Vercel, Anthropic, Stripe Press, Rauno.me, Resend, Framer**. Mørkt, editorial, presist. Hver detalj har en grunn til å være der.

### Kjernebudskap (kan brukes overalt)

> Vi utvikler AI-drevne digitale produkter. Egne. Skreddersydde. Hostet i EU.

> Et lite produktstudio som bygger verktøy vi selv ville brukt.

> Bygget i Norge. Hostet i EU.

---

## 2. Stemme og copy

### Prinsipper

1. **Korte setninger.** Fragmenter er lov. "Egne. Skreddersydde. Hostet i EU."
2. **Selvsikker, ikke skrytende.** Vi sier *hva vi gjør*, ikke *hvor flinke vi er*.
3. **Editorial, ikke salgsorientert.** Tenk magasinartikkel, ikke landingsside.
4. **Konkret over abstrakt.** "AutoSEO publiserte 48 artikler" > "AutoSEO leverer resultater".
5. **Aldri emojis i headlines eller body.** Aldri utropstegn. Punktum eller ingen ting.
6. **Engelske faguttrykk er greit** der det er presist (RAG, embeddings, pipeline). Forklar ikke det åpenbare.

### Tone i ulike kontekster

| Kontekst | Tone | Eksempel |
|---|---|---|
| Hero/forsider | Selvsikker, kort | *"Vi bygger AI-drevne verktøy."* |
| Produktbeskrivelse | Konkret, faktabasert | *"Skraper Brønnøysund og nettsider, analyserer produkt-fit."* |
| CTA-knapper | Direkte, ikke "Klikk her" | *"Kontakt oss"*, *"Se hvordan det fungerer"*, *"Gå til autoseo.no"* |
| Manifest/credo | Editorial, litt personlig | *"Verktøy vi selv ville brukt."* |
| Feilmeldinger | Rolig, hjelpende | *"Noe gikk galt. Prøv igjen eller ring 95 11 76 49."* |

### Eyebrow-formatet (signaturen)

Liten uppercase-tekst som "tagger" hver seksjon. Brukes overalt – på nettside, i SOME, i presentasjoner.

```
— PRODUKTSTUDIO · EST. 2025
— HVORFOR OSS
— LIVE EKSEMPEL
```

Letter-spacing 0.22em, font-size 11px, font-weight 500, gjerne prefiks med en em-dash `—`.

### Don'ts

- ❌ "Revolusjonerende AI som forandrer alt"
- ❌ "🚀 Klar for å skalere?"
- ❌ "Boost your business with cutting-edge AI"
- ❌ Lange forklarende paragrafer i hero
- ❌ Tre utropstegn på én side

---

## 3. Logo og favicon

### Tekst-logo

Logoen er **ikke et bilde**, det er **tekst** satt i `video`-fonten:

```
AI LABBEN
```

- Font: `video` (Typekit), font-weight `500`
- Letter-spacing: `0.04em`
- Bruk hvit (`#FAFAFA`) på mørk bakgrunn, sort (`#0A0A0B`) på lys bakgrunn
- Min-størrelse: 14px
- Aldri kursiv, aldri bold, aldri all-lowercase

### Favicon

Favicon-merket er en **svart sirkel med "AI" i video-font** sentrert i:

- Sirkel: `#0A0A0B`
- "AI"-tekst: `#FAFAFA`, `video`-font, font-weight 500
- AI-teksten tar ca. 60% av sirkelens diameter (balansert, ikke for tett)

Favicon ligger i `public/favicon.svg` og `public/apple-touch-icon.svg`. Bruk samme symbol som app-ikon i alle apper og verktøy AI Labben bygger.

### Clearspace

Rundt logoen skal det være **minst én x-høyde** med tomrom på alle sider. La logoen puste.

---

## 4. Fargesystem

Hele paletten er **monokrom**. Ingen aksentfarge. Hvit er signal, sort er bakgrunn, gråtoner gir hierarki.

### Ink-skala (mørke flater)

| Token | Hex | HSL | Bruk |
|---|---|---|---|
| `ink-0` | `#0A0A0B` | `240 5% 5%` | Hovedbakgrunn (`<body>`) |
| `ink-1` | `#111113` | `240 4% 7%` | Kort, paneler, modaler |
| `ink-2` | `#18181B` | `240 4% 9%` | Hover på flater, elevated |
| `ink-3` | `#1F1F23` | `240 5% 14%` | Hairline-borders (default) |
| `ink-4` | `#2A2A2F` | `240 5% 18%` | Hairline-borders (sterkere) |
| `ink-5` | `#3F3F46` | `240 5% 26%` | Dempet aksent, decoration-color |

### Paper-skala (tekst og signal)

| Token | Hex | HSL | Bruk |
|---|---|---|---|
| `paper-0` | `#FAFAFA` | `0 0% 98%` | Overskrifter, signal, hvit knapp |
| `paper-1` | `#E4E4E7` | `240 5% 90%` | Brødtekst (lys) |
| `paper-2` | `#A1A1AA` | `240 4% 65%` | Sekundærtekst |
| `paper-3` | `#71717A` | `240 4% 47%` | Captions, meta, footer-tekst |

### Tilstandsfarger

| Token | Hex | Bruk |
|---|---|---|
| `destructive` | `hsl(0 70% 55%)` | Kun feilmeldinger og kritiske advarsler |

> **Vi bruker IKKE grønn for "success", blå for "info" eller gul for "warning".** Suksess vises med ikon (`CheckCircle`) i `paper-0`, ikke farge.

### Glow-effekter

```css
/* Subtil glow på hover av primær-knapp */
box-shadow:
  0 0 40px rgba(255, 255, 255, 0.18),
  0 0 0 1px rgba(255, 255, 255, 0.4);

/* Glow på kort */
box-shadow:
  0 0 0 1px rgba(250, 250, 250, 0.18),
  0 0 60px -10px rgba(255, 255, 255, 0.12);
```

### Kontrast-regler

- Brødtekst på `ink-0` skal alltid være `paper-1` eller lysere (WCAG AA)
- Sekundærtekst (`paper-2`) brukes **kun** til mindre teksttyper (ikke til paragrafer over 4 linjer)
- Aldri `paper-3` på `ink-0` for tekst som skal kunne leses i farten – kun til captions/meta

### Don'ts

- ❌ Ingen oransje. Ingen lilla. Ingen blå. Ingen grønn. Ingen gradient mellom farger.
- ❌ Aldri legg til en "aksentfarge". Hvit *er* aksenten.
- ❌ Aldri bruk `#000000` som bakgrunn (for hardt, dødt). Bruk `ink-0`.
- ❌ Aldri bruk `#FFFFFF` som tekst. Bruk `paper-0`.

---

## 5. Typografi

### Fonter

| Rolle | Font | Fallback |
|---|---|---|
| **Display / overskrifter** | `video` (Typekit) | `Georgia, "Times New Roman", serif` |
| **Brødtekst** | `Inter` (Google Fonts, latin subset) | `system-ui, sans-serif` |
| **Mono (numre, kode)** | `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `monospace` | – |

`video` lastes via Typekit-stylesheet:
```html
<link rel="stylesheet" href="https://use.typekit.net/ofa8sxj.css" />
```

### Skala

Bruk `clamp()` for responsiv typografi der det er mulig.

| Token | Størrelse | Line-height | Letter-spacing | Bruk |
|---|---|---|---|---|
| `display-xl` | `clamp(3rem, 7vw, 6rem)` | `0.95` | `-0.04em` | H1 i hero |
| `display-lg` | `clamp(2.5rem, 5vw, 4.5rem)` | `1.0` | `-0.035em` | H2 i seksjoner |
| `display-md` | `clamp(2rem, 3.5vw, 3rem)` | `1.05` | `-0.03em` | Mindre H2 / store undertittler |
| `display-sm` | `clamp(1.5rem, 2.5vw, 2rem)` | `1.15` | `-0.02em` | H3 i kort, badges |
| Body-lg | `18px` | `1.65` | – | Intro-tekst etter H1 |
| Body | `16px` | `1.6` | – | Standard brødtekst |
| Body-sm | `14px` | `1.6` | – | Kompakt info |
| Eyebrow | `11px` | `1.2` | `0.22em` UPPERCASE | Signatur-detaljen |
| Mono caption | `12-13px` | – | `-0.01em` | Numre (01, 02, 03) |

### Typografi-regler

1. **Alle overskrifter er `font-weight: 400`** (regular). `video` ser best ut i regular – aldri bold.
2. **Negativ letter-spacing på store overskrifter** (`-0.02em` til `-0.04em`). Editorial-stilen krever det.
3. **Maks linjelengde 65ch** for brødtekst. Kortere er ok, lengre er ikke.
4. **Alltid Inter for brødtekst.** Aldri serif i body.
5. **Eyebrow før hver større seksjon.** Det er signaturen.

### Eksempel

```tsx
<section>
  <p className="eyebrow eyebrow-line">Hvorfor oss</p>
  <h2 className="font-display text-display-lg leading-[1.0]">
    Vi er seriegründere.<br />
    <span className="text-paper-3">Vi bygger ikke for å imponere.</span>
  </h2>
  <p className="text-lg text-paper-2 max-w-xl">
    Vi har levert produkter fra idé til drift.
  </p>
</section>
```

---

## 6. Layout og grid

### Container

Maksbredde `1400px`, padding `1.5rem` (mobile) til `2rem` (desktop). Sentert.

### Grid-system

12-kolonners grid på desktop. Standard mønster for editorial-seksjoner:

```
[ eyebrow / label ]                  [ stort innhold                       ]
   col-span-4                            col-span-8
```

Mindre kolonner (4) brukes til seksjons-titler/eyebrows til venstre, store kolonner (8) til hovedinnhold til høyre. Dette gir den editoriale "magasin"-følelsen.

### Spacing-skala

Bruk Tailwind-spacing. Foretrukne verdier:

| Bruk | Klasse |
|---|---|
| Mellom inline-elementer | `gap-2` (8px) |
| Mellom relaterte ting | `gap-4` (16px) |
| Mellom kort i grid | `gap-6` til `gap-8` (24-32px) |
| Mellom sub-seksjoner | `mb-12` til `mb-16` (48-64px) |
| Mellom hovedseksjoner | `py-32` (128px vertikalt) |
| Hero-seksjon høyde | `min-h-[88vh]` |

### Seksjons-rytme

Hver hovedseksjon er separert av en **hairline border-top** i `ink-3`:

```html
<section class="py-32 border-t border-ink-3">
```

Dette gir hele siden en rolig, vertikal puls. Ingen runde dekorative elementer mellom seksjoner. Aldri.

### Mixed shapes-prinsippet

| Element | Form |
|---|---|
| Knapper, badges, chips | **Pill** (`rounded-full`) |
| Kort, paneler, infobokser | **Skarpt** (`rounded-none` eller maks 2-4px) |
| Inputs, textareas | Liten radius (`rounded-sm`, 4px) |
| Bilder, medier | Skarpe kanter |

Kontrasten mellom pill-knapper og skarpe kort er **signaturen** for AI Labben sin følelse. Ikke avvik fra dette.

---

## 7. Komponenter

### Knapper

#### Primær (default)

```tsx
<Button>Kontakt oss</Button>
```

```css
/* Hvit pill med sort tekst, glow på hover */
height: 44px;
padding: 0 24px;
border-radius: 9999px;
background: #FAFAFA;
color: #0A0A0B;
font-weight: 500;
font-size: 14px;

&:hover {
  background: #FFFFFF;
  box-shadow:
    0 0 40px rgba(255, 255, 255, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.4);
}
```

#### Sekundær

```tsx
<Button variant="secondary">Les mer</Button>
```

```css
/* Transparent pill med hairline-border */
border: 1px solid #2A2A2F; /* ink-4 */
color: #FAFAFA;
background: transparent;

&:hover {
  border-color: #FAFAFA;
  background: rgba(250, 250, 250, 0.04);
}
```

#### Størrelser

| Size | Høyde | Padding | Font |
|---|---|---|---|
| `sm` | 36px | 16px | 12px |
| `default` | 44px | 24px | 14px |
| `lg` | 56px | 32px | 16px |

### Kort

```tsx
<Card>
  <CardHeader>
    <CardTitle>Tittel</CardTitle>
    <CardDescription>Beskrivelse</CardDescription>
  </CardHeader>
</Card>
```

```css
background: #111113;          /* ink-1 */
border: 1px solid #1F1F23;    /* ink-3 */
padding: 32px;                 /* p-8 */
transition: all 300ms ease;

&:hover {
  border-color: #3F3F46;       /* ink-5 */
  background: #18181B;         /* ink-2 */
}
```

Skarpe kanter. Aldri box-shadow på kort i default-tilstand.

### Inputs

```css
height: 48px;
background: #111113;          /* ink-1 */
border: 1px solid #1F1F23;
border-radius: 4px;            /* rounded-sm */
color: #FAFAFA;
padding: 0 16px;
font-size: 14px;

&::placeholder { color: #71717A; }

&:hover { border-color: #3F3F46; }

&:focus {
  border-color: #FAFAFA;
  outline: 1px solid #FAFAFA;
  outline-offset: 0;
}
```

### Labels (uppercase eyebrows)

```css
font-size: 12px;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.18em;
color: #A1A1AA;       /* paper-2 */
```

### Badges / chips

```css
display: inline-flex;
align-items: center;
gap: 8px;
padding: 4px 12px;
border: 1px solid #1F1F23;
border-radius: 9999px;
font-size: 11px;
text-transform: uppercase;
letter-spacing: 0.22em;
color: #71717A;
```

Med en liten dot foran:

```tsx
<span className="badge">
  <span className="w-1 h-1 rounded-full bg-paper-3" />
  Eget produkt
</span>
```

### Eyebrow-line

Signaturen. Liten uppercase-tekst med en em-dash foran:

```tsx
<p className="eyebrow eyebrow-line">Hvorfor oss</p>
```

```css
.eyebrow {
  font-family: Inter, sans-serif;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: #A1A1AA;
}
.eyebrow-line::before {
  content: "—";
  margin-right: 0.6em;
  color: #71717A;
}
```

### Numrert liste (signature pattern)

Brukes i prosess-seksjoner og stegvise forklaringer:

```tsx
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-b border-ink-3">
  <div className="lg:col-span-2">
    <span className="font-mono text-sm text-paper-3">01</span>
  </div>
  <div className="lg:col-span-4">
    <h3 className="font-display text-2xl text-paper-0">Steg-tittel</h3>
  </div>
  <div className="lg:col-span-6">
    <p className="text-paper-2">Beskrivelse</p>
  </div>
</div>
```

---

## 8. Visuelle behandlinger

### Hero-grid (subtilt rastergrid)

På alle hero-seksjoner. Knapt synlig, men gir tekstur og dybde:

```css
.hero-grid {
  background-image:
    linear-gradient(to right, rgba(250, 250, 250, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(250, 250, 250, 0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
}
```

### Spotlight (mus-følgende glød)

På interaktive heroer. Subtilt – ikke overdrev:

```css
background: radial-gradient(
  600px circle at var(--mx, 50%) var(--my, 30%),
  rgba(255, 255, 255, 0.06),
  transparent 40%
);
```

### Noise-tekstur

For å gi den der "film/editorial"-følelsen. Lavt opacity:

```css
.hero-noise { opacity: 0.5; }
/* SVG fractalNoise med matrix som filtrerer ut alt unntatt 0.04 alpha */
```

### Bildebehandling

Alle fotos brukt på AI Labben sine flater behandles slik:

| Modus | Behandling |
|---|---|
| **Default i listevisninger** | `filter: grayscale(100%)` |
| **Hover/focus** | `filter: grayscale(0)` med `transition: 500ms` |
| **Hero-bilder** | Kan være farge, men med en mørk overlay (`bg-ink-0/60`) på toppen |
| **Profilbilder** | Alltid sort/hvitt, høy kontrast |

### Vignette (fade fra hero til neste seksjon)

På alle heroer, et 32-40px gradient til `ink-0` nederst:

```html
<div class="absolute inset-x-0 bottom-0 h-32
            bg-gradient-to-b from-transparent to-ink-0" />
```

### Don'ts

- ❌ Ingen drop-shadows på bilder
- ❌ Ingen gradient-overlays med farger (bare fra `ink-0` til transparent)
- ❌ Ingen dekorative blob-shapes eller "blur-bobler"
- ❌ Ingen avrundede bildehjørner

---

## 9. Motion og animasjon

### Timing-funksjoner

| Bruk | cubic-bezier |
|---|---|
| Standard ease (alle reveal/fade) | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Hover/quick interactions | `ease` eller `300ms ease` |

### Durasjoner

| Type | Durasjon |
|---|---|
| Hover-states | 200-300ms |
| Page transitions | 350ms |
| Reveal-animasjoner | 800ms |
| Hero-elementer som fader inn | 800ms-1000ms |
| Shimmer (kontinuerlig) | 6s loop |
| Cursor blink | 1s step |

### Signatur-animasjoner

#### Typewriter (for hero-overskrifter)

50-70ms per bokstav, med ±25ms tilfeldighet for å føles menneskelig. Cursor blinker kontinuerlig mens man skriver. Når ferdig: cursor blir værende, og **shimmer**-animasjonen aktiveres på teksten.

#### Shimmer

Hvit→grå metallisk gradient som sveiper kontinuerlig over teksten:

```css
background: linear-gradient(
  110deg,
  #FAFAFA 0%, #FAFAFA 35%, #FFFFFF 50%, #A1A1AA 65%, #FAFAFA 100%
);
background-size: 200% 100%;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: shimmer 6s linear infinite;
```

#### Reveal-on-scroll

Alle hovedinnholds-blokker fader inn 24px nedenfra ved 60px before viewport:

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
/>
```

#### Page transition

Mellom rutevisninger:

```tsx
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -4 }}
transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
```

### Hover-prinsipper

- Knapper får **glow** (white shadow), ikke skala-endring
- Kort får **lysere border** + lysere bakgrunn, ikke shadow
- Lenker får **hvitere underline-decoration** (decoration-color: paper-0)
- Pil-ikoner får **translate-x: 2px** for å antyde retning

### Don'ts

- ❌ Aldri bouncing/spring-animasjoner
- ❌ Aldri rotate på hover
- ❌ Aldri scale > 1.05 på hover
- ❌ Aldri parallax-bakgrunner
- ❌ Aldri auto-spillende videoer på hero (med mindre eksplisitt godkjent)

---

## 10. Ikonografi

### Bibliotek

**Lucide React eksklusivt.** Aldri Font Awesome, Material Icons, Heroicons.

```tsx
import { ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react'
```

### Stroke-width

Default `stroke-width: 1.5` (Lucide default er 2 — vi reduserer for finere editorial-følelse).

### Størrelser

| Bruk | Størrelse |
|---|---|
| Inline med tekst | `w-3.5 h-3.5` (14px) |
| Standard ikon i knapp | `w-4 h-4` (16px) |
| Ikon i listeelement | `w-5 h-5` (20px) |
| Stort ikon (sjelden) | `w-6 h-6` (24px) |

### Pil-konvensjoner

| Pil | Bruk |
|---|---|
| `ArrowRight` | Intern lenke, "neste" |
| `ArrowUpRight` | Ekstern lenke, "åpner i ny fane" |
| `ChevronRight` | I lister, mindre subtil |
| `ChevronLeft` | "Tilbake" |

### Don'ts

- ❌ Aldri bland ikon-stiler (stroke + fill samtidig)
- ❌ Aldri farge på ikoner (bortsett fra inherit fra forelder eller `paper-0`/`paper-2`/`paper-3`)
- ❌ Aldri emoji som erstatning for ikoner

---

## 11. SOME (sosiale medier)

Universelle prinsipper for alle plattformer:

- **Sort bakgrunn** (`#0A0A0B`) som default
- **Hvit tekst** (`#FAFAFA`) som signal
- **Eyebrow alltid med** – det er signaturen som binder alt sammen
- **`video`-fonten på overskrifter**, Inter på alt annet
- **Subtilt rastergrid** i bakgrunnen om mulig
- **Aldri farger.** Aldri stockfotos med mennesker som ler.

### LinkedIn-poster

**Format:** 1200×1200 (square) eller 1200×627 (landscape).

**Layout-mal:**

```
┌────────────────────────────────────────┐
│                                         │
│   — INNSIKT · OKTOBER 2025              │
│                                         │
│   Stort sitat eller hovedbudskap        │
│   i video-font, display-lg.             │
│   Maks 2-3 linjer.                      │
│                                         │
│                                         │
│                              AI LABBEN  │
└────────────────────────────────────────┘
```

- Padding 80px på alle sider
- Eyebrow øverst venstre
- Hovedtittel venstrejustert, `video`-font, ~72px på 1200×1200
- Logo nederst høyre, alltid

**Eksempler på godt sitat-format:**

> *"AI er ikke et tillegg. Det er kjernen."*

> *"Vi bygger verktøy vi selv ville brukt."*

### Instagram

**Feed-format:** 1080×1080 eller 1080×1350. **Stories:** 1080×1920.

**To godkjente layouts:**

1. **Tekstplakat** – som LinkedIn over, men typografien kan være større og mer dramatisk (`display-xl`-skalaen)
2. **Atmosfære** – sort/hvitt foto med subtil noise-tekstur, eyebrow + kort tekst over

**Aldri:**
- Karusell-poster med fargerike elementer
- Stock-illustrasjoner av "AI-roboter" eller "data flyer rundt"
- Reels med bouncing tekst

### X/Twitter

**Format:** 1600×900 for embed-bilder.

Bruk samme layout som LinkedIn landscape. Ekstra fokus på lesbarhet i feed (større tekst, klar kontrast).

### OG-bilder (link-previews)

**Format:** 1200×630.

**Standard mal:**

```
┌────────────────────────────────────────┐
│  — AILABBEN.NO/AUTOSEO                  │
│                                         │
│   AutoSEO.                              │
│   SEO-publisering på autopilot.         │
│                                         │
│  [shimmer-effekt på siste linje]       │
│                                         │
│                              AI LABBEN  │
└────────────────────────────────────────┘
```

- Padding 60px
- URL-eyebrow øverst
- H1 nedenfor i `video`-font
- Logo nederst høyre

### SOME-tone

Det samme som på nettsiden:

✅ *"AutoSEO publiserte 48 artikler på 12 måneder. Trafikk +340%. Ingen manuell innsats."*

❌ *"🚀 Boost your SEO with our incredible AutoSEO tool! Check it out!"*

---

## 12. For utviklere som bygger nye verktøy

### Stack

Bygg alltid på samme grunnstack:

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS + CSS-variabler
- **UI-primitives:** Radix UI
- **Animasjon:** Framer Motion
- **Ikoner:** Lucide React
- **Font:** Typekit `video` + Inter (Google Fonts)
- **Skjema:** React Hook Form + Zod

### Tailwind-config

Kopier `tailwind.config.js` fra hovedrepoet. Spesielt viktig:

```js
colors: {
  ink: { 0: '#0A0A0B', 1: '#111113', 2: '#18181B', 3: '#1F1F23', 4: '#2A2A2F', 5: '#3F3F46' },
  paper: { 0: '#FAFAFA', 1: '#E4E4E7', 2: '#A1A1AA', 3: '#71717A' }
}
```

### CSS-variabler

I `globals.css`:

```css
:root {
  --background: 240 5% 5%;
  --foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 6% 10%;
  --border: 240 5% 14%;
  --ring: 0 0% 98%;
  --radius: 0.5rem;
}
```

### Komponentbiblioteket

Alltid kopier disse komponentene fra hovedrepoet (eller publiser dem som privat npm-pakke):

- `Button`, `Card`, `Input`, `Textarea`, `Label`
- `Spotlight`, `Reveal`, `StatCounter`/`StatStatic`
- `TypewriterHero`, `CommandPalette`, `PageTransition`

### Nytt verktøys "starterpakke"

Hver nytt verktøy under AI Labben skal ha:

1. **Hero med eyebrow + display-xl tittel** + en eller to underlinjer i `paper-2`
2. **Editorial 12-kolonners grid** for hovedseksjoner
3. **Hairline `border-t border-ink-3`** mellom seksjoner
4. **Pill-knapper, skarpe kort**
5. **Footer med stort credo** ("Bygget i Norge.")
6. **Cmd+K command palette** hvis det er en app med flere ruter
7. **Page transitions** med Framer Motion
8. **Reveal-on-scroll** på alle hovedinnholds-blokker

### Filstruktur (anbefalt)

```
app/
  globals.css           # Designtokens
  layout.tsx            # Root, monter CommandPalette + PageTransition
  page.tsx              # Forside
components/
  ui/                   # Primitives (button, card, input, ...)
  navbar.tsx
  footer.tsx
  reveal.tsx            # Scroll-reveal wrapper
  spotlight.tsx
  stat-counter.tsx
lib/
  utils.ts              # cn() helper
```

### Kvalitetssjekk før release

- [ ] Ingen oransje, lilla, blå eller andre farger noe sted
- [ ] Eyebrow brukt på minst én seksjon
- [ ] Hairline borders mellom seksjoner
- [ ] Pill-knapper, skarpe kort
- [ ] Cmd+K virker (hvis multiruter)
- [ ] Reveal-animasjoner på scroll
- [ ] Custom `::selection` (hvit blokk, sort tekst)
- [ ] Hvit fokusring (ikke standard blå)
- [ ] Logo i hvit på mørk bakgrunn
- [ ] Favicon = svart sirkel + "AI"

---

## 13. Don'ts (samlet)

- ❌ **Aldri farger** utover sort/hvitt/grå
- ❌ **Aldri emoji** i UI eller copy
- ❌ **Aldri bold** på `video`-overskrifter
- ❌ **Aldri stock-fotos** av smilende business-folk
- ❌ **Aldri runde bilder/avatarer** med svake skygger
- ❌ **Aldri bouncing/spring-animasjoner**
- ❌ **Aldri parallax** eller tunge bakgrunns-effekter
- ❌ **Aldri "Klikk her"** som CTA-tekst
- ❌ **Aldri tre punkter "..."** for å antyde mer (bruk hairline-skille i stedet)
- ❌ **Aldri "100% gratis!" / "Begrenset tilbud!"** – det er ikke vår tone
- ❌ **Aldri runde knapper med farget bakgrunn** som ikke er hvit eller transparent
- ❌ **Aldri Helvetica/Arial** som hovedfont (bruk Inter)

---

## 14. Ressurser og referanser

### Fonter

- **Video** – Typekit/Adobe Fonts: `https://use.typekit.net/ofa8sxj.css` (kit-id `ofa8sxj`)
- **Inter** – Google Fonts: `next/font/google` med `subsets: ['latin']`

### Designtokens som JSON (for designverktøy)

```json
{
  "color": {
    "ink": {
      "0": "#0A0A0B",
      "1": "#111113",
      "2": "#18181B",
      "3": "#1F1F23",
      "4": "#2A2A2F",
      "5": "#3F3F46"
    },
    "paper": {
      "0": "#FAFAFA",
      "1": "#E4E4E7",
      "2": "#A1A1AA",
      "3": "#71717A"
    }
  },
  "spacing": {
    "section": "8rem",
    "card-padding": "2rem",
    "container-max": "1400px"
  },
  "radius": {
    "sharp": "0",
    "input": "4px",
    "card": "0",
    "pill": "9999px"
  },
  "easing": {
    "standard": "cubic-bezier(0.16, 1, 0.3, 1)"
  }
}
```

### Inspirasjon (ikke kopier, men kalibrer mot)

- [linear.app](https://linear.app)
- [vercel.com](https://vercel.com)
- [anthropic.com](https://anthropic.com)
- [resend.com](https://resend.com)
- [rauno.me](https://rauno.me)
- [press.stripe.com](https://press.stripe.com)

### Kontakt

For spørsmål om denne guiden eller godkjenning av nye visuelle elementer:

**Kristian Granli**  
kristian@ailabben.no · 95 11 76 49

---

## Versjonshistorikk

| Versjon | Dato | Endringer |
|---|---|---|
| 1.0 | 2025 | Første utgivelse. Etablerer monokromt mørkt designsystem på tvers av nettside, SOME og fremtidige produkter. |
