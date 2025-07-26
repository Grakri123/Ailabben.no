# 🤖 AI Labben Chatbot - Implementeringsguide

## Oversikt
AI-drevet salgsassistent som automatisk starter samtaler med besøkende og konverterer dem til leads.

## ✨ Funksjoner

- **Automatisk åpning**: Vises etter 5 sekunder på siden
- **Proaktiv melding**: Starter med naturlig spørsmål om AI og ROI
- **AI-drevet samtale**: Bruker Mistral AI for intelligente svar
- **Tjeneste-kontekst**: Leser `tjenester.txt` for relevante forslag
- **Inline lead-form**: Samler inn navn, bedrift og e-post
- **Database-lagring**: Lagrer hele samtalen + leads i Supabase

## 🔧 Oppset

### 1. Miljøvariabler
Kopier `.env.example` til `.env.local` og fyll inn:

```bash
# Supabase konfigurasjon
NEXT_PUBLIC_SUPABASE_URL=din_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=din_supabase_anon_key

# Mistral AI API
MISTRAL_API_KEY=din_mistral_api_key

# Site URL
NEXT_PUBLIC_SITE_URL=https://ailabben.no
```

### 2. Database-tabell
Opprett `chatbot_leads` tabell i Supabase:

```sql
CREATE TABLE chatbot_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  navn TEXT,
  bedrift TEXT,
  epost TEXT,
  samtale TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Aktiver Row Level Security
ALTER TABLE chatbot_leads ENABLE ROW LEVEL SECURITY;

-- Tillat insert for alle (anon users)
CREATE POLICY "Allow anonymous inserts" ON chatbot_leads 
FOR INSERT 
TO anon 
WITH CHECK (true);
```

### 3. Mistral AI API-nøkkel
1. Gå til [Mistral AI Platform](https://console.mistral.ai/)
2. Opprett konto og generer API-nøkkel
3. Legg til `MISTRAL_API_KEY` i `.env.local`

## 📁 Filstruktur

```
├── components/chatbot.tsx          # Hovedchatbot-komponent
├── app/api/chat/route.ts          # API endpoint for Mistral AI
├── app/layout.tsx                 # Chatbot integrert i layout
├── public/tjenester.txt          # AI-kontekst for tjenester
├── lib/database.types.ts         # Database-typer inkl. chatbot_leads
└── lib/supabase.ts               # Supabase client
```

## 🎯 Samtaleflyt

1. **Automatisk start**: Chatbot åpnes etter 5 sekunder
2. **Velkomst**: "Hei! Er det rett av meg å anta at du er nysgjerrig på hvordan AI-agenter kan hjelpe deg med å spare tid eller øke ROI?"
3. **Behovskartlegging**: AI stiller spørsmål basert på `tjenester.txt`
4. **Tjeneste-forslag**: Foreslår relevante AI-løsninger
5. **Lead-capture**: Når interessert, viser inline skjema
6. **Lagring**: Hele samtalen + kontaktinfo lagres i database

## 🎨 Design

- **Gradient-tema**: Orange til purple (matcher eksisterende design)
- **Responsiv**: Fungerer på desktop og mobil
- **Moderne UI**: Floating widget med minimering
- **Smooth animasjoner**: Fade-in og typing-indikatorer

## 🔧 Tilpasninger

### Endre velkomstmelding
Rediger i `components/chatbot.tsx`:
```tsx
const welcomeMessage: Message = {
  role: 'assistant',
  content: 'Din nye melding her...',
  timestamp: new Date()
}
```

### Oppdatere tjenester
Rediger `public/tjenester.txt` - AI-en bruker dette som kontekst.

### Endre design
Alle styles bruker Tailwind CSS og matcher eksisterende design-system.

## 🚀 Testing

1. Start utviklingsserver: `npm run dev`
2. Gå til nettsiden
3. Vent 5 sekunder - chatbot skal åpne automatisk
4. Test samtale og lead-skjema
5. Sjekk at data lagres i Supabase `chatbot_leads` tabell

## 🔍 Feilsøking

**Chatbot åpner ikke:**
- Sjekk at komponenten er importert i layout.tsx
- Kontroller browser console for feil

**AI svarer ikke:**
- Verifiser `MISTRAL_API_KEY` i .env.local
- Sjekk API endpoint `/api/chat`
- Se server logs

**Lead-data lagres ikke:**
- Kontroller Supabase-konfigurasjon
- Sjekk at `chatbot_leads` tabell eksisterer
- Verifiser Row Level Security policies

## 📊 Database-struktur

**chatbot_leads tabell:**
- `id`: Unik UUID
- `navn`: Brukerens navn (nullable)
- `bedrift`: Bedriftsnavn (nullable)  
- `epost`: E-postadresse (nullable)
- `samtale`: Full samtalehistorikk (required)
- `created_at`: Tidsstempel

Dette gir full sporbarhet av leads og samtalekonvertering. 