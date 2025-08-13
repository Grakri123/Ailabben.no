'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { supabase } from '@/lib/supabase'
import { 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Mail, 
  Settings, 
  Headphones, 
  HelpCircle,
  CheckCircle,
  ArrowRight,
  X
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// Types
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

// Form schema
const contactSchema = z.object({
  navn: z.string().min(2, 'Navn må være minst 2 tegn'),
  epost: z.string().email('Ugyldig e-postadresse'),
  bedrift: z.string().optional(),
  samtykke: z.boolean().refine(val => val === true, 'Du må samtykke for å fortsette')
})

type ContactFormData = z.infer<typeof contactSchema>

// Question definitions
const MAIN_CHOICES = [
  {
    id: 'leads',
    title: 'Få flere leads',
    description: 'Fylle opp kalenderen med møter',
    icon: Users,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'email',
    title: 'Automatisere e-post/oppfølging',
    description: 'Spare tid på manuell oppfølging',
    icon: Mail,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'systems',
    title: 'Koble systemer sammen',
    description: 'Få systemene til å snakke sammen',
    icon: Settings,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'support',
    title: 'Avlaste support/resepsjon',
    description: 'Automatisere kundeservice',
    icon: Headphones,
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'curious',
    title: 'Bare nysgjerrig',
    description: 'Vil vite mer om mulighetene',
    icon: HelpCircle,
    color: 'from-pink-500 to-pink-600'
  }
]

const QUESTIONS: Record<string, WizardQuestion[]> = {
  leads: [
    {
      id: 'leads-source',
      text: 'Hvordan får dere leads i dag?',
      options: [
        'Ingen struktur / manuell innsats',
        'Annonser (Google/Facebook)',
        'SEO/innhold',
        'Kjøpte lister / cold email'
      ]
    },
    {
      id: 'leads-bottleneck',
      text: 'Hvor er flaskehalsen?',
      options: [
        'Treffer ikke riktig målgruppe',
        'Lav svarrate på e-post',
        'Dårlig kvalifisering',
        'Mangler verktøy/automatisering'
      ]
    },
    {
      id: 'leads-goal',
      text: 'Hva ønsker du mest?',
      options: [
        'Fylle kalenderen med møter',
        'Bygge pipeline jevnt',
        'Færre, men varmere leads'
      ]
    },
    {
      id: 'leads-tech',
      text: 'Teknologi i dag (kan velge flere):',
      options: [
        'HubSpot / Pipedrive / xSale / annet CRM',
        'Ingen CRM',
        'Egen liste i Excel/Sheets'
      ],
      multiple: true
    }
  ],
  email: [
    {
      id: 'email-type',
      text: 'Hva vil du automatisere?',
      options: [
        'Første outreach',
        'Oppfølging på innsendte skjema',
        'Purringer/oppfølging tilbud',
        'Kundedialog etter kjøp'
      ]
    },
    {
      id: 'email-source',
      text: 'Datakilde for e-poster?',
      options: [
        'Egen liste (CSV/CRM)',
        'Hentes fra nettside/innhold',
        'Usikker'
      ]
    },
    {
      id: 'email-control',
      text: 'Tone og kontroll:',
      options: [
        'Fullt automatisert',
        'Semi (menneske godkjenner utkast)',
        'Bare forslag – jeg sender selv'
      ]
    },
    {
      id: 'email-goal',
      text: 'Mål:',
      options: [
        'Booke møter',
        'Svartid < 5 min',
        'Øke konvertering fra demo → kjøp'
      ]
    }
  ],
  systems: [
    {
      id: 'systems-which',
      text: 'Hvilke systemer ønsker du å koble? (kan velge flere)',
      options: [
        'Tripletex/Fiken',
        'Webflow/WordPress/Shopify',
        'Supabase/Databaser',
        'Gmail/Outlook',
        'Annet'
      ],
      multiple: true
    },
    {
      id: 'systems-flow',
      text: 'Hva skal flyte?',
      options: [
        'Leads → CRM',
        'Ordre → Økonomi',
        'Skjema → Automatisert e-post',
        'Support → Slack/Teams'
      ]
    },
    {
      id: 'systems-requirements',
      text: 'Kritisk krav:',
      options: [
        'GDPR/EU-lagring',
        'Driftssikkerhet',
        'Lav kost',
        'Skalerbarhet'
      ]
    }
  ],
  support: [
    {
      id: 'support-where',
      text: 'Hvor trenger du hjelp?',
      options: [
        'Telefon/henvendelser (virtuell resepsjonist)',
        'Chat på nettside',
        'FAQ/ordrestatus'
      ]
    },
    {
      id: 'support-hours',
      text: 'Åpningstider/krav:',
      options: [
        '24/7',
        'Vanlig arbeidstid',
        'Høy nøyaktighet (heller sakte)'
      ]
    },
    {
      id: 'support-integrations',
      text: 'Integrasjoner:',
      options: [
        'Kalenderbooking',
        'CRM-oppslag',
        'Ordresystem'
      ]
    }
  ],
  curious: [
    {
      id: 'curious-industry',
      text: 'Bransje:',
      options: [
        'Håndverk/bygg',
        'Konsulent/rådgivning',
        'Netthandel',
        'Annet'
      ]
    },
    {
      id: 'curious-interest',
      text: 'Hva er du mest nysgjerrig på?',
      options: [
        'Hva AI-agenter faktisk kan gjøre',
        'Kost/ROI',
        'Sikkerhet/GDPR'
      ]
    },
    {
      id: 'curious-timeline',
      text: 'Når ser du for deg å teste?',
      options: [
        'Nå',
        '1–3 mnd',
        'Senere'
      ]
    }
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  // Get current questions based on main choice
  const getCurrentQuestions = () => {
    if (!wizardState.mainChoice) return []
    return QUESTIONS[wizardState.mainChoice as keyof typeof QUESTIONS] || []
  }

  const getCurrentQuestion = () => {
    const questions = getCurrentQuestions()
    return questions[wizardState.currentStep - 1] // -1 because step 0 is main choice
  }

  const getTotalSteps = () => {
    return getCurrentQuestions().length + 1 // +1 for main choice
  }

  const getProgressPercentage = () => {
    return (wizardState.currentStep / getTotalSteps()) * 100
  }

  // Handle main choice selection
  const handleMainChoice = (choiceId: string) => {
    setWizardState(prev => ({
      ...prev,
      mainChoice: choiceId,
      currentStep: 1
    }))
  }

  // Handle answer selection
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

    // Auto-progress for single choice questions (not multiple choice)
    if (autoProgress && !currentQuestion.multiple) {
      setTimeout(() => {
        goNext()
      }, 300) // Small delay for better UX
    }
  }

  // Navigation functions
  const goNext = () => {
    const totalSteps = getTotalSteps()
    if (wizardState.currentStep < totalSteps) {
      setWizardState(prev => ({
        ...prev,
        currentStep: prev.currentStep + 1
      }))
    } else {
      // Show form
      setWizardState(prev => ({
        ...prev,
        showForm: true
      }))
    }
  }

  const goBack = () => {
    if (wizardState.currentStep > 0) {
      setWizardState(prev => ({
        ...prev,
        currentStep: prev.currentStep - 1
      }))
    }
  }

  const skipQuestion = () => {
    goNext()
  }

  // Form submission
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // Create summary message
      const mainChoiceData = MAIN_CHOICES.find(c => c.id === wizardState.mainChoice)
      const summary = `Lead Wizard - ${mainChoiceData?.title}\n\nSvar:\n${wizardState.answers.map(a => 
        `${a.questionText}\n→ ${Array.isArray(a.answer) ? a.answer.join(', ') : a.answer}`
      ).join('\n\n')}`

      // Prepare wizard answers for JSON storage
      const wizardData = {
        mainChoice: wizardState.mainChoice,
        mainChoiceTitle: mainChoiceData?.title,
        answers: wizardState.answers
      }

      // Save to Supabase
      const { error } = await supabase
        .from('wizard_leads')
        .insert([
          {
            navn: data.navn,
            bedrift: data.bedrift || null,
            epost: data.epost,
            melding: summary,
            wizard_svar: wizardData
          }
        ])

      if (error) throw error

      // Show thanks screen
      setWizardState(prev => ({
        ...prev,
        showForm: false,
        showThanks: true
      }))

      reset()
    } catch (error) {
      console.error('Error submitting wizard:', error)
      // Handle error - could add toast notification
    } finally {
      setIsSubmitting(false)
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

  // Render main choice step
  const renderMainChoice = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Lurer du på hvordan vi kan hjelpe deg?
        </h2>
      </div>
      
      <div className="space-y-3">
        {MAIN_CHOICES.map((choice) => {
          return (
            <button
              key={choice.id}
              onClick={() => handleMainChoice(choice.id)}
              className="w-full p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-left transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{choice.title}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )

  // Render question step
  const renderQuestion = () => {
    const question = getCurrentQuestion()
    if (!question) return null

    const currentAnswer = wizardState.answers.find(a => a.questionId === question.id)?.answer

    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            {question.text}
          </h2>
        </div>
        
        <div className="space-y-3">
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
                    handleAnswer(newAnswers, false) // No auto-progress for multiple choice
                  } else {
                    handleAnswer(option, true) // Auto-progress for single choice
                  }
                }}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {isSelected && <CheckCircle className="w-5 h-5 text-orange-500" />}
                </div>
              </button>
            )
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={goBack}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Tilbake</span>
          </Button>

          <div className="flex space-x-3">
            <Button
              variant="ghost"
              onClick={skipQuestion}
              className="text-gray-500"
            >
              Hopp over
            </Button>
            
            {/* Show Next button only for multiple choice questions */}
            {question.multiple && (
              <Button
                onClick={goNext}
                disabled={!currentAnswer}
                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700"
              >
                <span>Neste</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Render contact form
  const renderContactForm = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Nesten ferdig!
        </h2>
        <p className="text-gray-600">
          La oss ta kontakt og finne den beste løsningen for deg
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="navn">Navn *</Label>
          <Input
            id="navn"
            {...register('navn')}
            className="mt-1"
            placeholder="Ditt fulle navn"
          />
          {errors.navn && (
            <p className="text-red-500 text-sm mt-1">{errors.navn.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="epost">E-post *</Label>
          <Input
            id="epost"
            type="email"
            {...register('epost')}
            className="mt-1"
            placeholder="din@epost.no"
          />
          {errors.epost && (
            <p className="text-red-500 text-sm mt-1">{errors.epost.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="bedrift">Bedrift (valgfritt)</Label>
          <Input
            id="bedrift"
            {...register('bedrift')}
            className="mt-1"
            placeholder="Din bedrift"
          />
        </div>

        <div className="flex items-start space-x-2 pt-4">
          <input
            type="checkbox"
            id="samtykke"
            {...register('samtykke')}
            className="mt-1"
          />
          <Label htmlFor="samtykke" className="text-sm text-gray-600 leading-relaxed">
            Jeg samtykker til at AI Labben kontakter meg angående mine behov og lagrer informasjonen i henhold til personvernreglene.
          </Label>
        </div>
        {errors.samtykke && (
          <p className="text-red-500 text-sm">{errors.samtykke.message}</p>
        )}

        <div className="flex justify-between pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => setWizardState(prev => ({ ...prev, showForm: false }))}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Tilbake</span>
          </Button>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700"
          >
            {isSubmitting ? 'Sender...' : 'Send inn'}
          </Button>
        </div>
      </form>
    </div>
  )

  // Render thanks screen
  const renderThanksScreen = () => {
    const mainChoiceData = MAIN_CHOICES.find(c => c.id === wizardState.mainChoice)
    
    return (
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Takk for at du delte dine behov!
          </h2>
          <p className="text-gray-600 mb-6">
            Vi har mottatt din henvendelse om <strong>{mainChoiceData?.title.toLowerCase()}</strong> og vil ta kontakt innen 24 timer.
          </p>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Hva skjer nå?</h3>
          <ul className="text-sm text-gray-600 space-y-1 text-left">
            <li>✓ Vi analyserer dine svar og behov</li>
            <li>✓ Forbereder en tilpasset demo/forslag</li>
            <li>✓ Tar kontakt for å booke et kort møte</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={resetWizard}
            variant="outline"
          >
            Lukk
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700"
          >
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
    <div className="w-full max-w-4xl mx-auto">
      {/* Inline Wizard Container */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden backdrop-blur-sm bg-white/95">
        {/* Progress bar */}
        {!wizardState.showForm && !wizardState.showThanks && wizardState.currentStep > 0 && (
          <div className="px-8 pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Steg {wizardState.currentStep} av {getTotalSteps()}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={resetWizard}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-gradient-to-r from-orange-500 to-purple-600 h-1.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
          </div>
        )}

        {/* Content */}
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