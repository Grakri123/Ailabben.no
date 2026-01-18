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

# Meta Pixel + Conversion API (NY - trengs for Meta Ads tracking)
NEXT_PUBLIC_META_PIXEL_ID=din_meta_pixel_id_her
META_PIXEL_ID=din_meta_pixel_id_her
META_CAPI_TOKEN=din_meta_capi_token_her
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

**Meta Pixel + Conversion API:**
1. Gå til https://business.facebook.com/
2. Naviger til Events Manager
3. Opprett eller velg en Pixel
4. Kopier Pixel ID (f.eks. "123456789012345")
5. For CAPI Token:
   - Gå til Pixel → Settings → Conversions API
   - Generer eller kopier Access Token
   - Merk: Token må ha `ads_management` og `manage_pages` rettigheter

⚠️ **Viktig:** Ikke commit `.env.local` til git - denne filen inneholder hemmeligheter! 