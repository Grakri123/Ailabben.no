'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { supabase } from '@/lib/supabase'
import { trackMetaEvent } from '@/lib/metaTrack'
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  X
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { cn } from '@/lib/utils'

function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

function splitFullName(fullName: string): { first_name: string; last_name: string } {
  const parts = fullName.trim().split(/\s+/)
  const first_name = parts[0] || ''
  const last_name = parts.slice(1).join(' ') || ''
  return { first_name, last_name }
}

interface WizardAnswer {
  questionId: string
  answer: string | string[]
  questionText: string
}

interface WizardQuestion {
  id: string
  text: string
  options: string[]
  multiple?: boolean
}

interface WizardState {
  currentStep: number
  mainChoice: string
  answers: WizardAnswer[]
  isComplete: boolean
  showForm: boolean
  showThanks: boolean
}

const contactSchema = z.object({
  navn: z.string().min(2, 'Navn må være minst 2 tegn'),
  epost: z.string().email('Ugyldig e-postadresse'),
  bedrift: z.string().optional(),
  samtykke: z.boolean().refine(val => val === true, 'Du må samtykke for å fortsette')
})

type ContactFormData = z.infer<typeof contactSchema>

const MAIN_CHOICES = [
  { id: 'leads', title: 'Få flere leads', description: 'Fylle opp kalenderen med møter' },
  { id: 'email', title: 'Automatisere e-post / oppfølging', description: 'Spare tid på manuell oppfølging' },
  { id: 'systems', title: 'Koble systemer sammen', description: 'Få systemene til å snakke sammen' },
  { id: 'support', title: 'Avlaste support / resepsjon', description: 'Automatisere kundeservice' },
  { id: 'curious', title: 'Bare nysgjerrig', description: 'Vil vite mer om mulighetene' }
]

const QUESTIONS: Record<string, WizardQuestion[]> = {
  leads: [
    { id: 'leads-source', text: 'Hvordan får dere leads i dag?', options: ['Ingen struktur / manuell innsats', 'Annonser (Google/Facebook)', 'SEO/innhold', 'Kjøpte lister / cold email'] },
    { id: 'leads-bottleneck', text: 'Hvor er flaskehalsen?', options: ['Treffer ikke riktig målgruppe', 'Lav svarrate på e-post', 'Dårlig kvalifisering', 'Mangler verktøy/automatisering'] },
    { id: 'leads-goal', text: 'Hva ønsker du mest?', options: ['Fylle kalenderen med møter', 'Bygge pipeline jevnt', 'Færre, men varmere leads'] },
    { id: 'leads-tech', text: 'Teknologi i dag (kan velge flere):', options: ['HubSpot / Pipedrive / xSale / annet CRM', 'Ingen CRM', 'Egen liste i Excel/Sheets'], multiple: true }
  ],
  email: [
    { id: 'email-type', text: 'Hva vil du automatisere?', options: ['Første outreach', 'Oppfølging på innsendte skjema', 'Purringer/oppfølging tilbud', 'Kundedialog etter kjøp'] },
    { id: 'email-source', text: 'Datakilde for e-poster?', options: ['Egen liste (CSV/CRM)', 'Hentes fra nettside/innhold', 'Usikker'] },
    { id: 'email-control', text: 'Tone og kontroll:', options: ['Fullt automatisert', 'Semi (menneske godkjenner utkast)', 'Bare forslag – jeg sender selv'] },
    { id: 'email-goal', text: 'Mål:', options: ['Booke møter', 'Svartid < 5 min', 'Øke konvertering fra demo → kjøp'] }
  ],
  systems: [
    { id: 'systems-which', text: 'Hvilke systemer ønsker du å koble? (kan velge flere)', options: ['Tripletex/Fiken', 'Webflow/WordPress/Shopify', 'Supabase/Databaser', 'Gmail/Outlook', 'Annet'], multiple: true },
    { id: 'systems-flow', text: 'Hva skal flyte?', options: ['Leads → CRM', 'Ordre → Økonomi', 'Skjema → Automatisert e-post', 'Support → Slack/Teams'] },
    { id: 'systems-requirements', text: 'Kritisk krav:', options: ['GDPR/EU-lagring', 'Driftssikkerhet', 'Lav kost', 'Skalerbarhet'] }
  ],
  support: [
    { id: 'support-where', text: 'Hvor trenger du hjelp?', options: ['Telefon/henvendelser (virtuell resepsjonist)', 'Chat på nettside', 'FAQ/ordrestatus'] },
    { id: 'support-hours', text: 'Åpningstider/krav:', options: ['24/7', 'Vanlig arbeidstid', 'Høy nøyaktighet (heller sakte)'] },
    { id: 'support-integrations', text: 'Integrasjoner:', options: ['Kalenderbooking', 'CRM-oppslag', 'Ordresystem'] }
  ],
  curious: [
    { id: 'curious-industry', text: 'Bransje:', options: ['Håndverk/bygg', 'Konsulent/rådgivning', 'Netthandel', 'Annet'] },
    { id: 'curious-interest', text: 'Hva er du mest nysgjerrig på?', options: ['Hva AI-agenter faktisk kan gjøre', 'Kost/ROI', 'Sikkerhet/GDPR'] },
    { id: 'curious-timeline', text: 'Når ser du for deg å teste?', options: ['Nå', '1–3 mnd', 'Senere'] }
  ]
}

export function LeadWizard() {
  const [wizardState, setWizardState] = useState<WizardState>({
    currentStep: 0,
    mainChoice: '',
    answers: [],
    isComplete: false,
    showForm: false,
    showThanks: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const inFlightRef = useRef(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const getCurrentQuestions = () => {
    if (!wizardState.mainChoice) return []
    return QUESTIONS[wizardState.mainChoice as keyof typeof QUESTIONS] || []
  }

  const getCurrentQuestion = () => {
    const questions = getCurrentQuestions()
    return questions[wizardState.currentStep - 1]
  }

  const getTotalSteps = () => getCurrentQuestions().length

  const getProgressPercentage = () => (wizardState.currentStep / getTotalSteps()) * 100

  const handleMainChoice = (choiceId: string) => {
    setWizardState(prev => ({
      ...prev,
      mainChoice: choiceId,
      currentStep: 1
    }))
  }

  const handleAnswer = (answer: string | string[], autoProgress: boolean = true) => {
    const currentQuestion = getCurrentQuestion()
    if (!currentQuestion) return

    const newAnswer: WizardAnswer = {
      questionId: currentQuestion.id,
      questionText: currentQuestion.text,
      answer
    }

    setWizardState(prev => ({
      ...prev,
      answers: [...prev.answers.filter(a => a.questionId !== currentQuestion.id), newAnswer]
    }))

    if (autoProgress && !currentQuestion.multiple) {
      setTimeout(() => goNext(), 300)
    }
  }

  const goNext = () => {
    const questions = getCurrentQuestions()
    const totalQuestions = questions.length

    if (wizardState.currentStep >= totalQuestions) {
      setWizardState(prev => ({ ...prev, showForm: true }))
    } else {
      setWizardState(prev => ({ ...prev, currentStep: prev.currentStep + 1 }))
    }
  }

  const goBack = () => {
    if (wizardState.currentStep > 0) {
      setWizardState(prev => ({ ...prev, currentStep: prev.currentStep - 1 }))
    }
  }

  const skipQuestion = () => goNext()

  const onSubmit = async (data: ContactFormData) => {
    if (inFlightRef.current) {
      console.warn('[Lead Wizard] Submit already in progress, ignoring duplicate call')
      return
    }

    inFlightRef.current = true
    setIsSubmitting(true)
    const eventId = generateUUID()
    console.log('[Lead Wizard] Submitting with eventId:', eventId)

    try {
      const mainChoiceData = MAIN_CHOICES.find(c => c.id === wizardState.mainChoice)
      const summary = `Lead Wizard - ${mainChoiceData?.title}\n\nSvar:\n${wizardState.answers.map(a =>
        `${a.questionText}\n→ ${Array.isArray(a.answer) ? a.answer.join(', ') : a.answer}`
      ).join('\n\n')}`

      const wizardData = {
        mainChoice: wizardState.mainChoice,
        mainChoiceTitle: mainChoiceData?.title,
        answers: wizardState.answers
      }

      const { data: insertedData, error } = await supabase
        .from('wizard_leads')
        .insert([{
          navn: data.navn,
          bedrift: data.bedrift || null,
          epost: data.epost,
          melding: summary,
          wizard_svar: wizardData
        }])
        .select()
        .single()

      if (error) throw error

      const { first_name, last_name } = splitFullName(data.navn)
      trackMetaEvent({
        eventName: 'CompleteRegistration',
        eventId,
        userData: {
          email: data.epost,
          first_name,
          last_name,
          external_id: insertedData?.id?.toString(),
        },
      }).catch((error) => {
        console.error('[Meta Tracking] Failed:', error)
      })

      setWizardState(prev => ({
        ...prev,
        showForm: false,
        showThanks: true
      }))
      reset()
    } catch (error) {
      console.error('Error submitting wizard:', error)
    } finally {
      setIsSubmitting(false)
      inFlightRef.current = false
    }
  }

  const resetWizard = () => {
    setWizardState({
      currentStep: 0,
      mainChoice: '',
      answers: [],
      isComplete: false,
      showForm: false,
      showThanks: false
    })
  }

  const renderMainChoice = () => (
    <div className="space-y-8">
      <div>
        <p className="eyebrow eyebrow-line mb-4">Steg 1</p>
        <h3 className="font-display text-display-sm text-paper-0 leading-tight">
          Hva trenger du hjelp med?
        </h3>
      </div>

      <div className="space-y-2">
        {MAIN_CHOICES.map((choice) => (
          <button
            key={choice.id}
            onClick={() => handleMainChoice(choice.id)}
            className="group w-full text-left flex items-center justify-between gap-4 p-5 border border-ink-3 hover:border-paper-0 hover:bg-paper-0/[0.03] transition-all duration-300"
          >
            <div className="flex-1 min-w-0">
              <p className="text-paper-0 font-medium">{choice.title}</p>
              <p className="text-sm text-paper-3 mt-0.5">{choice.description}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-paper-3 group-hover:text-paper-0 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
          </button>
        ))}
      </div>
    </div>
  )

  const renderQuestion = () => {
    const question = getCurrentQuestion()
    if (!question) return null

    const currentAnswer = wizardState.answers.find(a => a.questionId === question.id)?.answer

    return (
      <div className="space-y-8">
        <div>
          <p className="eyebrow eyebrow-line mb-4">
            Steg {wizardState.currentStep + 1}
          </p>
          <h3 className="font-display text-display-sm text-paper-0 leading-tight">
            {question.text}
          </h3>
        </div>

        <div className="space-y-2">
          {question.options.map((option, index) => {
            const isSelected = question.multiple
              ? Array.isArray(currentAnswer) && currentAnswer.includes(option)
              : currentAnswer === option

            return (
              <button
                key={index}
                onClick={() => {
                  if (question.multiple) {
                    const currentAnswers = Array.isArray(currentAnswer) ? currentAnswer : []
                    const newAnswers = currentAnswers.includes(option)
                      ? currentAnswers.filter(a => a !== option)
                      : [...currentAnswers, option]
                    handleAnswer(newAnswers, false)
                  } else {
                    handleAnswer(option, true)
                  }
                }}
                className={cn(
                  'group w-full p-5 border text-left transition-all duration-300 flex items-center justify-between gap-4',
                  isSelected
                    ? 'border-paper-0 bg-paper-0/[0.05] text-paper-0'
                    : 'border-ink-3 text-paper-1 hover:border-paper-0 hover:bg-paper-0/[0.03]'
                )}
              >
                <span className="font-medium">{option}</span>
                {isSelected ? (
                  <CheckCircle className="w-4 h-4 text-paper-0 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-paper-3 group-hover:text-paper-0 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                )}
              </button>
            )
          })}
        </div>

        <div className="flex justify-between items-center pt-4">
          <Button variant="ghost" onClick={goBack} size="sm">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Tilbake
          </Button>

          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={skipQuestion} size="sm">
              Hopp over
            </Button>

            {question.multiple && (
              <Button onClick={goNext} disabled={!currentAnswer} size="sm">
                Neste
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  const renderContactForm = () => (
    <div className="space-y-8">
      <div>
        <p className="eyebrow eyebrow-line mb-4">Siste steg</p>
        <h3 className="font-display text-display-sm text-paper-0 leading-tight">
          Nesten ferdig.
        </h3>
        <p className="mt-3 text-paper-2">
          La oss ta kontakt og finne den beste retningen for deg.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="wiz-navn">Navn *</Label>
          <Input id="wiz-navn" {...register('navn')} placeholder="Ditt fulle navn" />
          {errors.navn && <p className="text-xs text-destructive">{errors.navn.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="wiz-epost">E-post *</Label>
          <Input id="wiz-epost" type="email" {...register('epost')} placeholder="din@epost.no" />
          {errors.epost && <p className="text-xs text-destructive">{errors.epost.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="wiz-bedrift">Bedrift</Label>
          <Input id="wiz-bedrift" {...register('bedrift')} placeholder="Din bedrift (valgfritt)" />
        </div>

        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register('samtykke')}
              className="mt-1 flex-shrink-0 accent-paper-0"
            />
            <span className="text-sm text-paper-2 leading-relaxed">
              Jeg samtykker til at AI Labben kontakter meg angående mine behov og lagrer informasjonen i henhold til personvernreglene.
            </span>
          </label>
          {errors.samtykke && <p className="text-xs text-destructive mt-2">{errors.samtykke.message}</p>}
        </div>

        <div className="flex justify-between items-center pt-4">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setWizardState(prev => ({
              ...prev,
              showForm: false,
              currentStep: getCurrentQuestions().length
            }))}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Tilbake
          </Button>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sender...' : 'Send inn'}
            {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
          </Button>
        </div>
      </form>
    </div>
  )

  const renderThanksScreen = () => {
    const mainChoiceData = MAIN_CHOICES.find(c => c.id === wizardState.mainChoice)

    return (
      <div className="space-y-6">
        <div className="w-12 h-12 rounded-full bg-paper-0 flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-ink-0" />
        </div>

        <div>
          <p className="eyebrow eyebrow-line mb-4">Mottatt</p>
          <h3 className="font-display text-display-sm text-paper-0 leading-tight">
            Takk for at du delte dine behov.
          </h3>
          <p className="mt-4 text-paper-2 leading-relaxed">
            Vi har mottatt din henvendelse om <span className="text-paper-0 font-medium">{mainChoiceData?.title.toLowerCase()}</span> og tar kontakt innen 24 timer.
          </p>
        </div>

        <div className="border-t border-ink-3 pt-6">
          <h4 className="eyebrow mb-4">Hva skjer nå</h4>
          <ul className="space-y-2 text-sm text-paper-2">
            <li className="flex items-start gap-3">
              <span className="text-paper-3 mt-0.5">01</span>
              <span>Vi analyserer dine svar og behov</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-paper-3 mt-0.5">02</span>
              <span>Forbereder en tilpasset demo eller forslag</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-paper-3 mt-0.5">03</span>
              <span>Tar kontakt for å booke et kort møte</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button onClick={resetWizard} variant="secondary" size="sm">
            Lukk
          </Button>
          <Button asChild size="sm">
            <a href="mailto:kristian@ailabben.no?subject=Ønsker rask kontakt">
              Book møte nå
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="border border-ink-3 bg-ink-1 overflow-hidden">
        {/* Progress bar */}
        {!wizardState.showForm && !wizardState.showThanks && wizardState.currentStep > 0 && (
          <div className="px-8 pt-6 pb-2 border-b border-ink-3">
            <div className="flex items-center justify-between mb-3">
              <span className="eyebrow">
                {wizardState.currentStep} av {getTotalSteps()}
              </span>
              <button
                onClick={resetWizard}
                className="text-paper-3 hover:text-paper-0 transition-colors"
                aria-label="Lukk"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="w-full h-px bg-ink-3 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-paper-0 transition-all duration-500 ease-out"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
          </div>
        )}

        <div className="p-8">
          {wizardState.showThanks && renderThanksScreen()}
          {wizardState.showForm && renderContactForm()}
          {!wizardState.showForm && !wizardState.showThanks && (
            wizardState.currentStep === 0 ? renderMainChoice() : renderQuestion()
          )}
        </div>
      </div>
    </div>
  )
}
