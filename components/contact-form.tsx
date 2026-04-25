'use client'

import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"
import { trackMetaEvent } from "@/lib/metaTrack"
import { Send, CheckCircle, AlertCircle, ArrowRight } from "lucide-react"

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
  const inFlightRef = useRef(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    if (inFlightRef.current) {
      console.warn('[Contact Form] Submit already in progress, ignoring duplicate call')
      return
    }

    inFlightRef.current = true
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const eventId = generateUUID()
    console.log('[Contact Form] Submitting with eventId:', eventId)

    try {
      const { data: insertedData, error } = await supabase
        .from('leads')
        .insert([{
          navn: data.navn,
          bedrift: data.bedrift || null,
          epost: data.epost,
          melding: data.melding,
        }])
        .select()
        .single()

      if (error) throw error

      const { first_name, last_name } = splitFullName(data.navn)

      trackMetaEvent({
        eventName: 'Contact',
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

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      inFlightRef.current = false
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="navn">Navn *</Label>
        <Input id="navn" {...register("navn")} placeholder="Ditt fulle navn" />
        {errors.navn && (
          <p className="text-xs text-destructive">{errors.navn.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="bedrift">Bedrift</Label>
        <Input id="bedrift" {...register("bedrift")} placeholder="Bedriftsnavn (valgfritt)" />
        {errors.bedrift && (
          <p className="text-xs text-destructive">{errors.bedrift.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="epost">E-post *</Label>
        <Input id="epost" type="email" {...register("epost")} placeholder="din@epost.no" />
        {errors.epost && (
          <p className="text-xs text-destructive">{errors.epost.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="melding">Hva ønsker du hjelp med? *</Label>
        <Textarea
          id="melding"
          {...register("melding")}
          rows={5}
          placeholder="Beskriv dine utfordringer eller hvilke AI-løsninger du er interessert i..."
        />
        {errors.melding && (
          <p className="text-xs text-destructive">{errors.melding.message}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className="flex items-start gap-3 border border-ink-3 bg-ink-1 p-4">
          <CheckCircle size={18} className="text-paper-0 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-paper-1">
            Takk for din henvendelse. Vi kontakter deg snart.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="flex items-start gap-3 border border-destructive/50 bg-destructive/10 p-4">
          <AlertCircle size={18} className="text-destructive mt-0.5 flex-shrink-0" />
          <p className="text-sm text-paper-1">
            Noe gikk galt. Prøv igjen eller ring oss på 95 11 76 49.
          </p>
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <span className="inline-block w-4 h-4 mr-2 border border-ink-0 border-t-transparent rounded-full animate-spin" />
            Sender...
          </>
        ) : (
          <>
            Send melding
            <ArrowRight className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-paper-3 leading-relaxed">
        Ved å sende inn skjemaet godtar du vår{" "}
        <a href="/personvern" className="text-paper-1 underline underline-offset-2 decoration-ink-5 hover:decoration-paper-0 transition-colors" target="_blank" rel="noopener noreferrer">
          personvernerklæring
        </a>
        {" "}og{" "}
        <a href="/vilkaar" className="text-paper-1 underline underline-offset-2 decoration-ink-5 hover:decoration-paper-0 transition-colors" target="_blank" rel="noopener noreferrer">
          vilkår og betingelser
        </a>
        . Vi kontakter deg angående våre AI-tjenester.
      </p>
    </form>
  )
}
