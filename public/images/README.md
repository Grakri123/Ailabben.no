# Bildemappe for Ailabben.no

Denne mappen inneholder alle statiske bilder for nettsiden.

## Mappestruktur:

### `/images/`
- **`blog/`** - Bilder til bloggartikler
- **`logos/`** - Firmalogos, partnere, etc.  
- **`team/`** - Teambilder og portrett
- **`general/`** - Generelle bilder til nettsiden

## Hvordan bruke bildene:

### I React/TypeScript komponenter:
```tsx
import Image from 'next/image'

// Eksempel: Bilde i blog-mappen
<Image 
  src="/images/blog/ai-fremtiden.jpg" 
  alt="AI fremtiden" 
  width={800} 
  height={400} 
/>

// Eksempel: Logo
<Image 
  src="/images/logos/ailabben-logo.png" 
  alt="Ailabben logo" 
  width={200} 
  height={50} 
/>
```

### I CSS eller Tailwind:
```css
/* Bakgrunnsbilde */
background-image: url('/images/general/hero-bg.jpg');
```

### Direkte HTML:
```html
<img src="/images/team/ceo-portrait.jpg" alt="CEO portrett" />
```

## Anbefalte filformater:
- **JPEG (.jpg)** - For fotografier og komplekse bilder
- **PNG (.png)** - For logos og bilder med transparens  
- **WebP (.webp)** - For optimale ytelse (Next.js konverterer automatisk)
- **SVG (.svg)** - For vektorgrafik og ikoner

## Filnavnkonvensjoner:
- Bruk bindestrek (-) istedenfor mellomrom
- Beskrivende navn: `ai-agent-illustration.jpg`
- Ikke bruk æ, ø, å i filnavn

## Bildestørrelser:
- **Hero-bilder**: 1920x1080px eller større
- **Bloggbilder**: 800x400px  
- **Logoer**: SVG eller PNG med høy oppløsning
- **Portrett**: 400x400px (kvadratisk) 