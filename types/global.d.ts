/**
 * Global type declarations
 */

declare global {
  interface Window {
    fbq?: (
      command: 'init' | 'track' | 'trackCustom',
      eventName: string,
      params?: Record<string, unknown>,
      options?: { eventID?: string }
    ) => void
  }
}

export {}
