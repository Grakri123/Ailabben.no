/**
 * Meta Pixel + Conversion API utilities
 * 
 * Provides functions for hashing user data and sending events to Meta CAPI
 * All functions are edge-safe and follow Meta's requirements
 */

import crypto from 'crypto'

/**
 * Normalize email according to Meta CAPI standards
 * - Lowercase
 * - Trim whitespace
 */
export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim()
}

/**
 * Normalize phone number according to Meta CAPI standards
 * - Lowercase
 * - Trim whitespace
 * - Remove all non-digit characters
 */
export function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '').trim()
}

/**
 * Normalize text fields (first_name, last_name) according to Meta CAPI standards
 * - Lowercase
 * - Trim whitespace
 */
export function normalizeText(text: string): string {
  return text.toLowerCase().trim()
}

/**
 * Hash a string using SHA256
 * Used for all user data fields in Meta CAPI
 */
export function hashValue(value: string): string {
  if (!value) return ''
  return crypto.createHash('sha256').update(value).digest('hex')
}

/**
 * Hash email for Meta CAPI
 */
export function hashEmail(email: string): string {
  const normalized = normalizeEmail(email)
  return hashValue(normalized)
}

/**
 * Hash phone for Meta CAPI
 */
export function hashPhone(phone: string): string {
  const normalized = normalizePhone(phone)
  return hashValue(normalized)
}

/**
 * Hash text field (first_name, last_name) for Meta CAPI
 */
export function hashText(text: string): string {
  const normalized = normalizeText(text)
  return hashValue(normalized)
}

/**
 * Hash external_id for Meta CAPI
 */
export function hashExternalId(externalId: string): string {
  return hashValue(externalId.trim())
}

/**
 * Split full name into first and last name
 * Simple implementation - takes first word as first name, rest as last name
 */
export function splitFullName(fullName: string): { first_name: string; last_name: string } {
  const parts = fullName.trim().split(/\s+/)
  const first_name = parts[0] || ''
  const last_name = parts.slice(1).join(' ') || ''
  return { first_name, last_name }
}

/**
 * Prepare user data for Meta CAPI
 * Returns hashed user data object according to Meta specifications
 */
export interface UserDataInput {
  email?: string
  phone?: string
  first_name?: string
  last_name?: string
  external_id?: string
}

export interface HashedUserData {
  em?: string[]
  ph?: string[]
  fn?: string[]
  ln?: string[]
  external_id?: string[]
}

export function prepareUserData(user: UserDataInput): HashedUserData {
  const hashed: HashedUserData = {}

  if (user.email) {
    const hashedEmail = hashEmail(user.email)
    if (hashedEmail) hashed.em = [hashedEmail]
  }

  if (user.phone) {
    const hashedPhone = hashPhone(user.phone)
    if (hashedPhone) hashed.ph = [hashedPhone]
  }

  if (user.first_name) {
    const hashedFirstName = hashText(user.first_name)
    if (hashedFirstName) hashed.fn = [hashedFirstName]
  }

  if (user.last_name) {
    const hashedLastName = hashText(user.last_name)
    if (hashedLastName) hashed.ln = [hashedLastName]
  }

  if (user.external_id) {
    const hashedExternalId = hashExternalId(user.external_id)
    if (hashedExternalId) hashed.external_id = [hashedExternalId]
  }

  return hashed
}

/**
 * Meta CAPI event types
 */
export type MetaEventName = 'Contact' | 'ViewContent' | 'CompleteRegistration' | 'Lead' | 'SubmitApplication'

/**
 * Prepare Meta CAPI event payload
 */
export interface MetaCAPIEvent {
  event_name: MetaEventName
  event_id: string // UUID v4
  event_source_url: string
  event_time: number // Unix timestamp
  action_source: 'website' | 'email' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other'
  user_data: HashedUserData
  client_user_agent?: string
  custom_data?: Record<string, unknown>
}

export interface MetaCAPIPayload {
  data: MetaCAPIEvent[]
}

/**
 * Validate UUID v4 format
 */
export function isValidUUIDv4(uuid: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  return uuidRegex.test(uuid)
}
