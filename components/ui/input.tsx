import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-sm border border-ink-3 bg-ink-1 px-4 py-2 text-sm text-paper-0",
          "placeholder:text-paper-3",
          "transition-colors duration-200",
          "hover:border-ink-5",
          "focus-visible:outline-none focus-visible:border-paper-0 focus-visible:ring-1 focus-visible:ring-paper-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
