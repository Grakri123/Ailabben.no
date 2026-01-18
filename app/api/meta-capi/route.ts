/**
 * Meta Conversion API (CAPI) Endpoint
 * 
 * Receives events from frontend and forwards them to Meta Graph API
 * Handles hashing, validation, and error handling
 * 
 * POST /api/meta-capi
 * Body: {
 *   event_name: "Contact" | "ViewContent" | "CompleteRegistration" | "Lead" | "SubmitApplication",
 *   event_id: "uuid-v4",
 *   event_source_url: "https://www.ailabben.no/",
 *   user: {
 *     email?: string,
 *     phone?: string,
 *     first_name?: string,
 *     last_name?: string,
 *     external_id?: string
 *   }
 * }
 */

import { NextRequest, NextResponse } from 'next/server'
import { prepareUserData, isValidUUIDv4, type MetaCAPIPayload, type MetaEventName, type UserDataInput } from '@/lib/meta'

// Environment variables (only available server-side)
const META_PIXEL_ID = process.env.META_PIXEL_ID
const META_CAPI_TOKEN = process.env.META_CAPI_TOKEN

/**
 * POST handler for Meta CAPI events
 */
export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    if (!META_PIXEL_ID || !META_CAPI_TOKEN) {
      const missingVars = []
      if (!META_PIXEL_ID) missingVars.push('META_PIXEL_ID')
      if (!META_CAPI_TOKEN) missingVars.push('META_CAPI_TOKEN')
      
      console.warn('[Meta CAPI] Missing environment variables:', missingVars.join(', '))
      
      // Return 503 Service Unavailable instead of 500 - this is a configuration issue, not a server error
      return NextResponse.json(
        { 
          error: 'Meta Pixel configuration missing',
          message: `Missing environment variables: ${missingVars.join(', ')}. Please configure META_PIXEL_ID and META_CAPI_TOKEN in your environment.`,
          configured: false
        },
        { status: 503 }
      )
    }

    // Parse request body
    let body
    try {
      body = await request.json()
    } catch (error) {
      console.error('[Meta CAPI] Invalid JSON in request body:', error)
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      )
    }

    // Validate required fields
    const { event_name, event_id, event_source_url, user } = body

    if (!event_name || !event_id || !event_source_url || !user) {
      return NextResponse.json(
        { error: 'Missing required fields: event_name, event_id, event_source_url, user' },
        { status: 400 }
      )
    }

    // Validate event_name
    const validEventNames: MetaEventName[] = ['Contact', 'ViewContent', 'CompleteRegistration', 'Lead', 'SubmitApplication']
    if (!validEventNames.includes(event_name)) {
      return NextResponse.json(
        { error: `Invalid event_name. Must be one of: ${validEventNames.join(', ')}` },
        { status: 400 }
      )
    }

    // Validate event_id is UUID v4
    if (!isValidUUIDv4(event_id)) {
      return NextResponse.json(
        { error: 'event_id must be a valid UUID v4' },
        { status: 400 }
      )
    }

    // Validate user object
    if (typeof user !== 'object' || user === null) {
      return NextResponse.json(
        { error: 'user must be an object' },
        { status: 400 }
      )
    }

    // Get user agent from request headers
    const clientUserAgent = request.headers.get('user-agent') || undefined

    // Prepare user data (hash all fields)
    const userDataInput: UserDataInput = {
      email: user.email,
      phone: user.phone,
      first_name: user.first_name,
      last_name: user.last_name,
      external_id: user.external_id,
    }

    const hashedUserData = prepareUserData(userDataInput)

    // Add client_user_agent to user_data (required by Meta)
    if (clientUserAgent) {
      hashedUserData.client_user_agent = clientUserAgent
    }

    // Get current timestamp
    const eventTime = Math.floor(Date.now() / 1000)

    // Build Meta CAPI payload
    const metaPayload: MetaCAPIPayload = {
      data: [
        {
          event_name: event_name as MetaEventName,
          event_time: eventTime,
          event_id: event_id,
          action_source: 'website',
          event_source_url: event_source_url,
          user_data: hashedUserData,
        },
      ],
    }

    // Send to Meta Graph API
    const metaApiUrl = `https://graph.facebook.com/v18.0/${META_PIXEL_ID}/events`
    
    const metaResponse = await fetch(metaApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...metaPayload,
        access_token: META_CAPI_TOKEN,
      }),
    })

    // Parse Meta response
    const metaResponseData = await metaResponse.json()

    // Check for Meta API errors
    if (!metaResponse.ok) {
      console.error('[Meta CAPI] Meta API error:', {
        status: metaResponse.status,
        statusText: metaResponse.statusText,
        response: metaResponseData,
      })
      
      return NextResponse.json(
        { 
          error: 'Meta API error',
          details: metaResponseData.error || metaResponseData,
        },
        { status: 400 }
      )
    }

    // Check for events_received in response
    if (!metaResponseData.events_received || metaResponseData.events_received === 0) {
      console.warn('[Meta CAPI] Meta API received 0 events:', metaResponseData)
    }

    // Success
    console.log('[Meta CAPI] Event sent successfully:', {
      event_name,
      event_id,
      events_received: metaResponseData.events_received,
    })

    return NextResponse.json({
      success: true,
      events_received: metaResponseData.events_received,
      event_id: event_id,
    })

  } catch (error) {
    // Handle unexpected errors
    console.error('[Meta CAPI] Unexpected error:', error)
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

// Only allow POST
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST.' },
    { status: 405 }
  )
}
