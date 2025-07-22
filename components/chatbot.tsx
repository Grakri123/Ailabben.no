'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { supabase } from '@/lib/supabase'
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface LeadData {
  navn: string
  bedrift: string
  epost: string
}

const leadSchema = z.object({
  navn: z.string().min(2, 'Navn må være minst 2 tegn'),
  bedrift: z.string().min(2, 'Bedrift må være minst 2 tegn'),
  epost: z.string().email('Ugyldig e-postadresse'),
})

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [hasAutoOpened, setHasAutoOpened] = useState(false)
  const [leadData, setLeadData] = useState<LeadData | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<LeadData>({
    resolver: zodResolver(leadSchema),
  })

  // Auto-åpning etter 5 sekunder (DEAKTIVERT)
  useEffect(() => {
    if (!hasAutoOpened) {
      // Automatisk åpning deaktivert - brukeren må klikke på chatbot-knappen
      // const timer = setTimeout(() => {
      //   setIsOpen(true)
      //   setHasAutoOpened(true)
      //   // Legg til velkomstmelding
      //   const welcomeMessage: Message = {
      //     role: 'assistant',
      //     content: 'Hei! Er det rett av meg å anta at du er nysgjerrig på hvordan AI-agenter kan hjelpe deg med å spare tid eller øke ROI?',
      //     timestamp: new Date()
      //   }
      //   setMessages([welcomeMessage])
      // }, 5000)

      // return () => clearTimeout(timer)
    }
  }, [hasAutoOpened])

  // Scroll til bunn når nye meldinger kommer
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])

      // Sjekk om AI-en foreslår å samle inn kontaktinfo
      if (data.message.toLowerCase().includes('kontakt') || 
          data.message.toLowerCase().includes('møte') ||
          data.message.toLowerCase().includes('demo') ||
          data.message.toLowerCase().includes('hjelpe deg videre')) {
        setShowLeadForm(true)
      }

    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Beklager, noe gikk galt. Prøv igjen eller ring oss direkte på 95 11 76 49.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleLeadSubmit = async (data: LeadData) => {
    setLeadData(data)
    setShowLeadForm(false)

    // Lagre hele samtalen + lead-data til Supabase
    const samtaleText = messages
      .map(m => `${m.role === 'user' ? 'Bruker' : 'AI'}: ${m.content}`)
      .join('\n\n')

    try {
      const { error } = await supabase
        .from('chatbot_leads')
        .insert([{
          navn: data.navn,
          bedrift: data.bedrift,
          epost: data.epost,
          samtale: samtaleText
        }])

      if (error) throw error

      // Bekreftelsesmelding
      const confirmationMessage: Message = {
        role: 'assistant',
        content: `Takk ${data.navn}! Vi har registrert dine opplysninger og vil kontakte deg på ${data.epost} innen 24 timer. Er det noe mer du lurer på i mellomtiden?`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, confirmationMessage])

    } catch (error) {
      console.error('Error saving lead:', error)
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Beklager, vi kunne ikke lagre opplysningene dine. Ring oss direkte på 95 11 76 49.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    }

    resetForm()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleOpenChat = () => {
    setIsOpen(true)
    // Legg til velkomstmelding ved første åpning
    if (!hasAutoOpened && messages.length === 0) {
      setHasAutoOpened(true)
      const welcomeMessage: Message = {
        role: 'assistant',
        content: 'Hei! Er det rett av meg å anta at du er nysgjerrig på hvordan AI-agenter kan hjelpe deg med å spare tid eller øke ROI?',
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleOpenChat}
          className="rounded-full w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <MessageSquare size={24} className="text-white" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`bg-white rounded-lg shadow-2xl border transition-all duration-300 ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-orange-500 to-purple-600 rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={16} className="text-white" />
            </div>
            <div className="text-white">
              <div className="font-semibold text-sm">Ailabben Assistent</div>
              <div className="text-xs opacity-90">AI-ekspert</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20 w-8 h-8"
            >
              {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 w-8 h-8"
            >
              <X size={16} />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[440px]">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user' 
                        ? 'bg-orange-500' 
                        : 'bg-gradient-to-r from-orange-400 to-purple-500'
                    }`}>
                      {message.role === 'user' ? (
                        <User size={12} className="text-white" />
                      ) : (
                        <Bot size={12} className="text-white" />
                      )}
                    </div>
                    <div className={`px-3 py-2 rounded-lg text-sm ${
                      message.role === 'user'
                        ? 'bg-orange-500 text-white rounded-br-sm'
                        : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                    }`}>
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}

              {/* Lead Form */}
              {showLeadForm && (
                <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-4 rounded-lg border">
                  <h3 className="font-semibold text-sm mb-3 text-gray-800">
                    La oss hjelpe deg videre:
                  </h3>
                  <form onSubmit={handleSubmit(handleLeadSubmit)} className="space-y-3">
                    <div>
                      <Input
                        {...register('navn')}
                        placeholder="Ditt navn"
                        className="text-sm"
                      />
                      {errors.navn && (
                        <p className="text-xs text-red-500 mt-1">{errors.navn.message}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        {...register('bedrift')}
                        placeholder="Bedriftsnavn"
                        className="text-sm"
                      />
                      {errors.bedrift && (
                        <p className="text-xs text-red-500 mt-1">{errors.bedrift.message}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        {...register('epost')}
                        type="email"
                        placeholder="E-postadresse"
                        className="text-sm"
                      />
                      {errors.epost && (
                        <p className="text-xs text-red-500 mt-1">{errors.epost.message}</p>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button type="submit" size="sm" className="text-xs">
                        Send
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setShowLeadForm(false)}
                        className="text-xs"
                      >
                        Avbryt
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-purple-500 flex items-center justify-center">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="bg-gray-100 px-3 py-2 rounded-lg rounded-bl-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Skriv en melding..."
                  className="resize-none text-sm"
                  rows={2}
                />
                <Button
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  size="sm"
                  className="px-3"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
} 