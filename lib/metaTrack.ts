/**
 * Meta Pixel + Conversion API Tracking Helper
 * 
 * Ensures deduplication by using the same event_id for both Pixel and CAPI.
 * eventId must be generated once per submission (not inside this function).
 */

export interface MetaTrackingUserData {
  email: string
  first_name: string
  last_name: string
  external_id?: string
}

export interface TrackMetaEventParams {
  eventName: string
  eventId: string
  eventSourceUrl?: string
  userData: MetaTrackingUserData
}

/**
 * Track Meta Pixel + CAPI event with identical event_id for deduplication
 * 
 * @param params - Tracking parameters
 * @param params.eventName - Event name (must be identical for Pixel and CAPI)
 * @param params.eventId - Event ID (must be generated once per submission, outside this function)
 * @param params.eventSourceUrl - Optional source URL (defaults to window.location.href)
 * @param params.userData - User data to send
 */
export async function trackMetaEvent({
  eventName,
  eventId,
  eventSourceUrl,
  userData,
}: TrackMetaEventParams): Promise<void> {
  try {
    // Track Meta Pixel event (client-side)
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, {}, { eventID: eventId })
      
      // Debug log: Pixel event sent
      console.log('[Meta Tracking] Pixel event sent:', {
        eventName,
        eventId,
      })
    }

    // Send to CAPI (server-side) with same event_id
    const sourceUrl = eventSourceUrl || (typeof window !== 'undefined' ? window.location.href : 'https://www.ailabben.no/')
    
    const capiResponse = await fetch('/api/meta-capi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_name: eventName, // Must be identical to Pixel eventName
        event_id: eventId, // Must be identical to Pixel eventID
        event_source_url: sourceUrl,
        user: userData,
      }),
    })

    if (!capiResponse.ok) {
      const errorData = await capiResponse.json().catch(() => ({}))
      
      // Log different error levels based on status
      if (capiResponse.status === 503) {
        // Configuration missing - just warn, don't treat as error
        console.warn('[Meta CAPI] Configuration missing:', errorData.message || 'Meta Pixel not configured')
      } else {
        // Actual error - log as error
        console.error('[Meta CAPI] Error:', errorData)
      }
    } else {
      // Debug log: CAPI event sent successfully
      const responseData = await capiResponse.json().catch(() => ({}))
      console.log('[Meta Tracking] CAPI event sent:', {
        eventName,
        eventId,
        events_received: responseData.events_received,
      })
    }
  } catch (error) {
    // Don't block form submission if Meta tracking fails
    // Only log if it's not a network error (which is expected if CAPI is not configured)
    if (error instanceof Error && !error.message.includes('Failed to fetch')) {
      console.warn('[Meta Tracking] Error:', error)
    }
  }
}