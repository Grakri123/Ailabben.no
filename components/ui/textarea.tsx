import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-sm border border-ink-3 bg-ink-1 px-4 py-3 text-sm text-paper-0",
          "placeholder:text-paper-3",
          "transition-colors duration-200",
          "hover:border-ink-5",
          "focus-visible:outline-none focus-visible:border-paper-0 focus-visible:ring-1 focus-visible:ring-paper-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
