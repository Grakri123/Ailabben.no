import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper-0 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primær: hvit pill, sort tekst, glow på hover
        default:
          "rounded-full bg-paper-0 text-ink-0 hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.25),0_0_0_1px_rgba(255,255,255,0.4)]",
        // Sekundær: transparent pill med hairline-border
        secondary:
          "rounded-full bg-transparent text-paper-0 border border-ink-4 hover:border-paper-0 hover:bg-paper-0/[0.04]",
        // Outline – tilsvarer secondary, beholdt for kompatibilitet
        outline:
          "rounded-full bg-transparent text-paper-0 border border-ink-4 hover:border-paper-0 hover:bg-paper-0/[0.04]",
        // Ghost: minimal, kun tekst
        ghost:
          "rounded-md text-paper-2 hover:text-paper-0 hover:bg-ink-2",
        // Link: understreket tekst
        link: "text-paper-0 underline underline-offset-4 decoration-ink-5 hover:decoration-paper-0 rounded-none",
        destructive:
          "rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
