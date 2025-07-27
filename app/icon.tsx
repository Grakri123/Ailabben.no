import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #f97316 0%, #a855f7 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
        }}
      >
        {/* AI Labben ikon-inspirert design */}
        <div
          style={{
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Enkel sirkel som representerer AI-ikonet */}
          <div
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: '#122a39',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#f97316',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 