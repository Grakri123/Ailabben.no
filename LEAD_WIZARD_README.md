# 🧙‍♂️ Lead Wizard - Interaktiv Behovskartlegging

## Oversikt
Lead Wizard er en interaktiv, forgreinet spørreskjema-flyt som hjelper potensielle kunder med å identifisere sine AI-behov og genererer kvalifiserte leads for AI Labben.

## ✨ Funksjoner

### 🎯 Hovedvalg (5 kategorier)
1. **Få flere leads** - Fylle opp kalenderen med møter
2. **Automatisere e-post/oppfølging** - Spare tid på manuell oppfølging  
3. **Koble systemer sammen** - Få systemene til å snakke sammen
4. **Avlaste support/resepsjon** - Automatisere kundeservice
5. **Bare nysgjerrig** - Vil vite mer om mulighetene

### 📋 Dynamisk spørsmålsflyt
- **2-4 oppfølgingsspørsmål** per hovedkategori
- **2-5 store klikkbare knapper** per spørsmål
- **Flervalg-støtte** der relevant
- **Sømløse overganger** mellom spørsmål

### 🎨 UX-funksjoner
- **Progress-indikator** viser fremgang
- **Navigasjon**: Tilbake og hopp over
- **Responsive design**: Mobil-først
- **Myke animasjoner**: Fade/slide-effekter
- **Moderne UI**: Gradient-knapper, hover-effekter

### 📊 Data og lagring
- **Strukturert lagring** i Supabase `wizard_leads` tabell
- **JSON-format** for wizard-svar
- **Lesbar oppsummering** i melding-feltet
- **Kontaktinformasjon**: Navn, e-post, bedrift (valgfritt)
- **Samtykke-checkbox** for GDPR-compliance

### 🎉 Takkeskjerm
- **Oppsummering** av brukerens valg
- **Forventningsetting** om oppfølging
- **CTA-knapper**: Book møte / lukk

## 🏗️ Teknisk implementasjon

### Filstruktur
```
components/
├── lead-wizard.tsx           # Hovedkomponent
├── ui/                      # shadcn/ui komponenter
app/
├── page.tsx                 # Integrert i hero-seksjon
lib/
├── database.types.ts        # Oppdatert med wizard_leads
WIZARD_DATABASE_SETUP.sql    # SQL for tabellopprettelse
```

### Database-skjema
```sql
wizard_leads (
  id UUID PRIMARY KEY,
  navn TEXT NOT NULL,
  bedrift TEXT,
  epost TEXT NOT NULL,
  melding TEXT NOT NULL,        -- Lesbar oppsummering
  wizard_svar JSONB NOT NULL,   -- Strukturerte svar
  created_at TIMESTAMP
)
```

### State-håndtering
- **React useState** for wizard-tilstand
- **React Hook Form** for kontaktskjema
- **Zod-validering** for form-data
- **TypeScript** for type-sikkerhet

## 🚀 Oppsett og deployment

### 1. Database-oppsett
Kjør SQL-scriptet i Supabase:
```bash
# Åpne Supabase Dashboard → SQL Editor
# Lim inn innholdet fra WIZARD_DATABASE_SETUP.sql
# Kjør scriptet
```

### 2. Miljøvariabler
Samme som eksisterende prosjekt:
```env
NEXT_PUBLIC_SUPABASE_URL=din_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=din_supabase_anon_key
```

### 3. Komponenten er allerede integrert
- Vises som hovedknapp i hero-seksjon
- Erstatter "Få en demo"-knappen
- Tradisjonell kontakt tilgjengelig som sekundær knapp

## 📱 Responsiv design

### Mobil (< 640px)
- Full-bredde knapper
- Stacked layout
- Touch-vennlige elementer
- Optimalisert scrolling

### Desktop (> 640px)
- Sentrert modal (max-width: 2xl)
- Hover-effekter
- Bedre spacing
- Større tekststørrelser

## 🎨 Design-system

### Farger
- **Gradient**: Orange (#f97316) til Purple (#a855f7)
- **Knapper**: Kategori-spesifikke farger
- **Feedback**: Grønn for suksess, rød for feil

### Animasjoner
- **Hover-effekter**: Scale og translate
- **Overganger**: 200-300ms duration
- **Progress-bar**: Smooth width-animasjon
- **Modal**: Fade-in/out

## 📊 Data-struktur

### Wizard-svar JSON-format
```json
{
  "mainChoice": "leads",
  "mainChoiceTitle": "Få flere leads", 
  "answers": [
    {
      "questionId": "leads-source",
      "questionText": "Hvordan får dere leads i dag?",
      "answer": "Annonser (Google/Facebook)"
    },
    {
      "questionId": "leads-tech",
      "questionText": "Teknologi i dag (kan velge flere):",
      "answer": ["HubSpot / Pipedrive / xSale / annet CRM", "Ingen CRM"]
    }
  ]
}
```

### Melding-format (lesbar)
```
Lead Wizard - Få flere leads

Svar:
Hvordan får dere leads i dag?
→ Annonser (Google/Facebook)

Hvor er flaskehalsen?
→ Lav svarrate på e-post

Teknologi i dag (kan velge flere):
→ HubSpot / Pipedrive / xSale / annet CRM, Ingen CRM
```

## 🔧 Tilpasning

### Legge til nye spørsmål
Rediger `QUESTIONS`-objektet i `lead-wizard.tsx`:
```tsx
const QUESTIONS = {
  leads: [
    {
      id: 'leads-new-question',
      text: 'Ditt nye spørsmål?',
      options: ['Alternativ 1', 'Alternativ 2'],
      multiple: false // eller true for flervalg
    }
  ]
}
```

### Endre hovedkategorier
Rediger `MAIN_CHOICES`-arrayet:
```tsx
const MAIN_CHOICES = [
  {
    id: 'new-category',
    title: 'Ny kategori',
    description: 'Beskrivelse',
    icon: IconComponent,
    color: 'from-color-500 to-color-600'
  }
]
```

## 📈 Analytics og oppfølging

### Supabase Dashboard
- Se alle wizard-leads i tabellen
- Filtrer på dato og hovedkategori
- Eksporter data til CSV

### Oppfølgingsstrategi
1. **Automatisk e-post** (kan implementeres senere)
2. **CRM-integrasjon** via Supabase webhooks
3. **Slack-notifikasjoner** ved nye leads
4. **Dashboard** for lead-analyse

## ⚡ Ytelse

### Optimalisering
- **Lazy loading** av komponenter
- **Memoization** av tunge beregninger
- **Debounced** form-validering
- **Optimistic UI** for bedre UX

### Bundle-størrelse
- Bruker eksisterende avhengigheter
- Minimal overhead (~15kb gzipped)
- Tree-shaking av ubrukte ikoner

## 🧪 Testing

### Manuell testing
1. Åpne hovedsiden
2. Klikk "Finn din AI-løsning"
3. Test alle 5 hovedkategorier
4. Prøv navigasjon (tilbake/hopp over)
5. Fyll ut og send kontaktskjema
6. Verifiser data i Supabase

### Testscenarier
- **Alle spørsmålsflyter** fungerer
- **Flervalg-spørsmål** håndteres korrekt
- **Form-validering** viser feilmeldinger
- **Database-lagring** fungerer
- **Responsiv design** på mobil/desktop

## 🚀 Videre utvikling

### Mulige forbedringer
1. **A/B-testing** av spørsmålsformuleringer
2. **Conditional logic** - vis spørsmål basert på tidligere svar
3. **Progress-saving** - la brukere fortsette senere
4. **Email-templates** for automatisk oppfølging
5. **Analytics-tracking** med Google Analytics/Mixpanel
6. **Multi-language** støtte
7. **Accessibility** forbedringer (ARIA, keyboard nav)

### Integrasjoner
- **HubSpot/Pipedrive** API for CRM-sync
- **Calendly** for automatisk møtebooking  
- **Slack/Teams** for team-notifikasjoner
- **Zapier** for workflow-automatisering

Dette er en komplett, production-ready implementasjon av Lead Wizard som kan skaleres og tilpasses etter behov.