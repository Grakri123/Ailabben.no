-- SQL script for å opprette wizard_leads tabell i Supabase
-- Kjør dette i Supabase SQL Editor

-- Opprett wizard_leads tabell
CREATE TABLE wizard_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  navn TEXT NOT NULL,
  bedrift TEXT,
  epost TEXT NOT NULL,
  melding TEXT NOT NULL,
  wizard_svar JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Aktiver Row Level Security
ALTER TABLE wizard_leads ENABLE ROW LEVEL SECURITY;

-- Tillat insert for alle (anon users)
CREATE POLICY "Allow anonymous inserts" ON wizard_leads 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Tillat select for authenticated users (admin)
CREATE POLICY "Allow authenticated select" ON wizard_leads 
FOR SELECT 
TO authenticated 
USING (true);

-- Legg til kommentarer for dokumentasjon
COMMENT ON TABLE wizard_leads IS 'Lagrer leads fra Lead Wizard med strukturerte svar';
COMMENT ON COLUMN wizard_leads.wizard_svar IS 'JSON struktur med hovedvalg og alle svar fra wizard';
COMMENT ON COLUMN wizard_leads.melding IS 'Lesbar oppsummering av wizard-svarene';

-- Opprett indeks for bedre ytelse
CREATE INDEX idx_wizard_leads_created_at ON wizard_leads(created_at DESC);
CREATE INDEX idx_wizard_leads_wizard_svar ON wizard_leads USING GIN (wizard_svar);