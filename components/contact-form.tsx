'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

/**
 * Generate UUID v4
 */
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * Split full name into first and last name
 */
function splitFullName(fullName: string): { first_name: string; last_name: string } {
  const parts = fullName.trim().split(/\s+/)
  const first_name = parts[0] || ''
  const last_name = parts.slice(1).join(' ') || ''
  return { first_name, last_name }
}

/**
 * Track Meta Pixel + CAPI event
 */
async function trackMetaEvent(eventName: string, eventId: string, userData: {
  email: string
  first_name: string
  last_name: string
  external_id?: string
}) {
  try {
    // Track Meta Pixel event (client-side)
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, {}, { eventID: eventId })
    }

    // Send to CAPI (server-side)
    const eventSourceUrl = typeof window !== 'undefined' ? window.location.href : 'https://www.ailabben.no/'
    
    const capiResponse = await fetch('/api/meta-capi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_name: eventName,
        event_id: eventId,
        event_source_url: eventSourceUrl,
        user: userData,
      }),
    })

    if (!capiResponse.ok) {
      const errorData = await capiResponse.json()
      console.error('[Meta CAPI] Error:', errorData)
    }
  } catch (error) {
    // Don't block form submission if Meta tracking fails
    console.error('[Meta Tracking] Error:', error)
  }
}

const contactSchema = z.object({
  navn: z.string().min(2, "Navn må være minst 2 tegn"),
  bedrift: z.string().optional(),
  epost: z.string().email("Ugyldig e-postadresse"),
  melding: z.string().min(10, "Melding må være minst 10 tegn"),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Generate unique event ID for deduplication
    const eventId = generateUUID()

    try {
      // Save to Supabase
      const { data: insertedData, error } = await supabase
        .from('leads')
        .insert([
          {
            navn: data.navn,
            bedrift: data.bedrift || null,
            epost: data.epost,
            melding: data.melding,
          },
        ])
        .select()
        .single()

      if (error) {
        throw error
      }

      // Split name for Meta tracking
      const { first_name, last_name } = splitFullName(data.navn)

      // Track Meta Pixel + CAPI event (non-blocking)
      trackMetaEvent('Contact', eventId, {
        email: data.epost,
        first_name,
        last_name,
        external_id: insertedData?.id?.toString(), // Use Supabase ID as external_id if available
      }).catch((error) => {
        // Already logged in trackMetaEvent, just catch to prevent blocking
        console.error('[Meta Tracking] Failed:', error)
      })

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Navn */}
      <div>
        <Label htmlFor="navn" className="text-sm font-medium">
          Navn *
        </Label>
        <Input
          id="navn"
          {...register("navn")}
          className="mt-1"
          placeholder="Ditt fulle navn"
        />
        {errors.navn && (
          <p className="text-sm text-red-600 mt-1">{errors.navn.message}</p>
        )}
      </div>

      {/* Bedrift */}
      <div>
        <Label htmlFor="bedrift" className="text-sm font-medium">
          Bedrift
        </Label>
        <Input
          id="bedrift"
          {...register("bedrift")}
          className="mt-1"
          placeholder="Bedriftsnavn (valgfritt)"
        />
        {errors.bedrift && (
          <p className="text-sm text-red-600 mt-1">{errors.bedrift.message}</p>
        )}
      </div>

      {/* E-post */}
      <div>
        <Label htmlFor="epost" className="text-sm font-medium">
          E-post *
        </Label>
        <Input
          id="epost"
          type="email"
          {...register("epost")}
          className="mt-1"
          placeholder="din@epost.no"
        />
        {errors.epost && (
          <p className="text-sm text-red-600 mt-1">{errors.epost.message}</p>
        )}
      </div>

      {/* Melding */}
      <div>
        <Label htmlFor="melding" className="text-sm font-medium">
          Hva ønsker du hjelp med? *
        </Label>
        <Textarea
          id="melding"
          {...register("melding")}
          className="mt-1"
          rows={5}
          placeholder="Beskriv dine utfordringer eller hvilke AI-løsninger du er interessert i..."
        />
        {errors.melding && (
          <p className="text-sm text-red-600 mt-1">{errors.melding.message}</p>
        )}
      </div>

      {/* Submit Status Messages */}
      {submitStatus === 'success' && (
        <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
          <CheckCircle size={20} />
          <span>Takk for din henvendelse! Vi kontakter deg snart.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
          <AlertCircle size={20} />
          <span>Noe gikk galt. Prøv igjen eller ring oss på 95 11 76 49.</span>
        </div>
      )}

      {/* Submit Button */}
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Sender...
          </>
        ) : (
          <>
            <Send className="mr-2" size={18} />
            Send melding
          </>
        )}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        Ved å sende inn dette skjemaet godtar du vår{" "}
        <a 
          href="/personvern" 
          className="text-orange-600 hover:text-orange-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          personvernerklæring
        </a>{" "}
        og{" "}
        <a 
          href="/vilkaar" 
          className="text-orange-600 hover:text-orange-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          vilkår og betingelser
        </a>
        . Vi kontakter deg angående våre AI-tjenester.
      </p>
    </form>
  )
} 