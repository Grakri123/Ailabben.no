'use client'

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back()
    } else {
      window.location.href = '/'
    }
  }

  return (
    <Button 
      size="lg" 
      variant="outline"
      className="text-lg px-8"
      onClick={handleBack}
    >
      <ArrowLeft className="mr-2" size={20} />
      Gå tilbake
    </Button>
  )
}
