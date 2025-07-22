# 🔐 Miljøvariabler som trengs

Opprett `.env.local` fil i root-mappen og legg til disse variablene:

```bash
# Supabase konfigurasjon (eksisterer allerede)
NEXT_PUBLIC_SUPABASE_URL=din_supabase_url_her
NEXT_PUBLIC_SUPABASE_ANON_KEY=din_supabase_anon_key_her

# Mistral AI API-nøkkel (NY - trengs for chatbot)
MISTRAL_API_KEY=din_mistral_api_key_her

# Site URL (eksisterer sannsynligvis allerede)
NEXT_PUBLIC_SITE_URL=https://ailabben.no
```

## Hvor får man disse:

**Mistral API-nøkkel:**
1. Gå til https://console.mistral.ai/
2. Opprett konto
3. Naviger til API Keys
4. Generer ny nøkkel

**Supabase:**
- Disse har du sannsynligvis allerede siden du bruker Supabase
- Finnes i Supabase Dashboard → Settings → API

⚠️ **Viktig:** Ikke commit `.env.local` til git - denne filen inneholder hemmeligheter! 