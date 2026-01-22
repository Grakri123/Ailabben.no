import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const { messages, services } = await req.json()

    // Les tjenester.txt filen hvis ikke sendt med
    let servicesContent = services
    if (!servicesContent) {
      try {
        const servicesPath = path.join(process.cwd(), 'public', 'tjenester.txt')
        servicesContent = await readFile(servicesPath, 'utf-8')
      } catch (error) {
        console.error('Kunne ikke lese tjenester.txt:', error)
        servicesContent = 'Ingen tjenesteinformasjon tilgjengelig.'
      }
    }

    // System prompt for chatbotten
    const systemPrompt = `Du er en profesjonell kundeservicemedarbeider for AI Labben, et norsk AI-selskap. Din oppgave er å hjelpe potensielle kunder med å finne riktige AI-løsninger for deres bedrift.

VIKTIGE RETNINGSLINJER:
- Vær vennlig, profesjonell og hjelpsom
- Still spørsmål for å forstå kundens behov
- Foreslå relevante tjenester basert på kundens situasjon
- Når det er naturlig, spør om kontaktinformasjon for oppfølging
- Snakk norsk med mindre kunden foretrekker engelsk
- Vær ikke for salgsy - fokuser på å hjelpe

TILGJENGELIGE TJENESTER:
${servicesContent}

Når en kunde virker interessert i en eller flere tjenester, skal du naturlig foreslå at de kan få en gratis konsultasjon ved å oppgi kontaktinformasjon.`

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'mistral-medium',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.status}`)
    }

    const data = await response.json()
    const aiMessage = data.choices[0].message.content

    return NextResponse.json({ message: aiMessage })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Beklager, noe gikk galt. Prøv igjen senere.' },
      { status: 500 }
    )
  }
} 