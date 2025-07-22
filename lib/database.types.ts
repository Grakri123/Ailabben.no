export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          navn: string
          bedrift: string | null
          epost: string
          melding: string
          created_at: string
        }
        Insert: {
          id?: string
          navn: string
          bedrift?: string | null
          epost: string
          melding: string
          created_at?: string
        }
        Update: {
          id?: string
          navn?: string
          bedrift?: string | null
          epost?: string
          melding?: string
          created_at?: string
        }
      }
      blogginnlegg: {
        Row: {
          id: string
          slug: string
          tittel: string
          ingress: string
          innhold_md: string
          publisert: boolean
          dato: string
          created_at: string
        }
        Insert: {
          id?: string
          slug: string
          tittel: string
          ingress: string
          innhold_md: string
          publisert?: boolean
          dato: string
          created_at?: string
        }
        Update: {
          id?: string
          slug?: string
          tittel?: string
          ingress?: string
          innhold_md?: string
          publisert?: boolean
          dato?: string
          created_at?: string
        }
      }
      chatbot_leads: {
        Row: {
          id: string
          navn: string | null
          bedrift: string | null
          epost: string | null
          samtale: string
          created_at: string
        }
        Insert: {
          id?: string
          navn?: string | null
          bedrift?: string | null
          epost?: string | null
          samtale: string
          created_at?: string
        }
        Update: {
          id?: string
          navn?: string | null
          bedrift?: string | null
          epost?: string | null
          samtale?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 