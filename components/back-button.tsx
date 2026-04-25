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
      variant="secondary"
      onClick={handleBack}
    >
      <ArrowLeft className="mr-2" size={18} />
      Gå tilbake
    </Button>
  )
}
