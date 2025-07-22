# Ailabben.no

Profesjonell nettside for Ailabben - leverandør av skreddersydde AI-agenter for norske bedrifter.

## 🚀 Teknisk stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Komponenter**: shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel
- **Språk**: TypeScript

## 📋 Forutsetninger

- Node.js 18+ 
- npm eller yarn
- Supabase-konto
- Vercel-konto (for deployment)

## 🛠️ Lokalt oppsett

1. **Klon prosjektet**
```bash
git clone <repo-url>
cd ailabben-no
```

2. **Installer dependencies**
```bash
npm install
```

3. **Sett opp miljøvariabler**
Opprett `.env.local` fil i root-mappen:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Sett opp Supabase database**
Opprett følgende tabeller i Supabase:

```sql
-- Leads tabell for kontaktskjema
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  navn TEXT NOT NULL,
  bedrift TEXT,
  epost TEXT NOT NULL,
  melding TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blogginnlegg tabell
CREATE TABLE blogginnlegg (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  tittel TEXT NOT NULL,
  ingress TEXT NOT NULL,
  innhold_md TEXT NOT NULL,
  publisert BOOLEAN DEFAULT FALSE,
  dato DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogginnlegg ENABLE ROW LEVEL SECURITY;

-- Policies for anonymous inserts (contact form)
CREATE POLICY "Enable insert for anonymous users" ON leads
  FOR INSERT WITH CHECK (true);

-- Policies for public read access to published blog posts
CREATE POLICY "Enable read access for published posts" ON blogginnlegg
  FOR SELECT USING (publisert = true);
```

5. **Start utviklingsserver**
```bash
npm run dev
```

Nettsiden er nå tilgjengelig på [http://localhost:3000](http://localhost:3000)

## 📁 Mappestruktur

```
ailabben-no/
├── app/                    # Next.js App Router
│   ├── blogg/             # Blogg funksjonalitet
│   ├── kontakt/           # Kontaktside
│   ├── om-oss/            # Om oss side
│   └── hva-vi-gjor/       # Tjenester side
├── components/            # React komponenter
│   ├── ui/               # shadcn/ui komponenter
│   └── ...               # Custom komponenter
├── lib/                  # Utility funksjoner
│   ├── supabase.ts       # Supabase client
│   ├── database.types.ts # TypeScript typer
│   └── utils.ts          # Hjelpefunksjoner
└── public/               # Statiske filer
```

## 🎨 Design system

Nettsiden bruker Avast-inspirert design med:
- **Primærfarger**: Oransje (#f97316) og lilla (#a855f7)
- **Bakgrunn**: Lys med myke gradienter
- **Typografi**: Inter font
- **Komponenter**: shadcn/ui for konsistens

## 📝 Innholdsadministrasjon

### Blogginnlegg
Legg til nye blogginnlegg direkte i Supabase `blogginnlegg` tabellen:

```sql
INSERT INTO blogginnlegg (slug, tittel, ingress, innhold_md, publisert, dato)
VALUES (
  'ai-fremtiden-for-norske-bedrifter',
  'AI-fremtiden for norske bedrifter', 
  'Hvordan kan norske SMB-er forberede seg på AI-revolusjonen?',
  '# AI-fremtiden\n\nDenne artikkelen handler om...',
  true,
  '2024-01-15'
);
```

### Kontakthenvendelser
Alle henvendelser fra kontaktskjemaet lagres i `leads` tabellen og kan ses i Supabase dashboard.

## 🚀 Deployment til Vercel

1. **Push koden til GitHub**
2. **Koble GitHub til Vercel**
3. **Sett miljøvariabler i Vercel**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL` (https://ailabben.no)

4. **Deploy automatisk**
Vercel bygger og deployer automatisk ved push til main branch.

## 📊 SEO og ytelse

- ✅ Automatisk generert sitemap.xml
- ✅ Robots.txt konfigurasjon
- ✅ Open Graph og Twitter Cards
- ✅ Structured data (JSON-LD) for bloggposter
- ✅ Responsive design og mobile-optimalisert
- ✅ Core Web Vitals optimalisert

## 🔧 Utvikling

### Linting
```bash
npm run lint
```

### Type checking
```bash
npx tsc --noEmit
```

### Build
```bash
npm run build
```

## 📞 Support

For spørsmål eller problemer:
- E-post: hei@ailabben.no
- Telefon: 95 11 76 49

## 📄 Lisens

Proprietær programvare - Ailabben © 2024 