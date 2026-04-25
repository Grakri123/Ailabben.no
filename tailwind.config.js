/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Monokromt designsystem (dark editorial)
        ink: {
          0: '#0A0A0B', // bakgrunn
          1: '#111113', // kort, paneler
          2: '#18181B', // hover på flater
          3: '#1F1F23', // hairline-borders (subtle)
          4: '#2A2A2F', // hairline-borders (strong)
          5: '#3F3F46', // dempet aksent
        },
        paper: {
          0: '#FAFAFA', // hovedtekst, signal
          1: '#E4E4E7', // brødtekst lys
          2: '#A1A1AA', // sekundærtekst
          3: '#71717A', // captions, meta
        },
      },
      fontFamily: {
        display: ['"video"', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        // Editorial scale med clamp – store, selvsikre titler
        'eyebrow': ['11px', { lineHeight: '1.2', letterSpacing: '0.22em', fontWeight: '500' }],
        'display-xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.0', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        'editorial': '0.22em',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "blink": {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in-up": "fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) both",
        "shimmer": "shimmer 6s linear infinite",
        "blink": "blink 1s step-end infinite",
      },
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.paper.1'),
            '--tw-prose-headings': theme('colors.paper.0'),
            '--tw-prose-lead': theme('colors.paper.2'),
            '--tw-prose-links': theme('colors.paper.0'),
            '--tw-prose-bold': theme('colors.paper.0'),
            '--tw-prose-counters': theme('colors.paper.3'),
            '--tw-prose-bullets': theme('colors.paper.3'),
            '--tw-prose-hr': theme('colors.ink.3'),
            '--tw-prose-quotes': theme('colors.paper.2'),
            '--tw-prose-quote-borders': theme('colors.paper.0'),
            '--tw-prose-captions': theme('colors.paper.3'),
            '--tw-prose-code': theme('colors.paper.0'),
            '--tw-prose-pre-code': theme('colors.paper.1'),
            '--tw-prose-pre-bg': theme('colors.ink.1'),
            '--tw-prose-th-borders': theme('colors.ink.3'),
            '--tw-prose-td-borders': theme('colors.ink.3'),
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
