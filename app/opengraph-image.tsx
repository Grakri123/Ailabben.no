import { ImageResponse } from 'next/og'
 
// Image metadata
export const alt = 'Ailabben - Skreddersydde AI-agenter for norske bedrifter'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          backgroundImage: 'linear-gradient(45deg, #fff7ed 0%, #faf5ff 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              background: 'linear-gradient(45deg, #f97316, #a855f7)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 32,
              fontWeight: 900,
              marginRight: 24,
            }}
          >
            AL
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              background: 'linear-gradient(45deg, #f97316, #a855f7)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Ailabben
          </div>
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: '#1f2937',
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          Skreddersydde AI-agenter for din bedrift
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#6b7280',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.3,
          }}
        >
          Fra resepsjonister og epostgenerering til fullautomatisert SEO
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
} 