export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      adult_member: {
        Row: {
          created_at: string
          email: string
          etransfer_name: string | null
          family_id: number | null
          first_name: string
          gender: string
          id: number
          language: string
          last_name: string
          phone: string | null
          preferred_name: string | null
          remarks: string | null
          simplybook_client_id: number | null
          user_id: string | null
          zh_name: string | null
          zoho_contact_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          etransfer_name?: string | null
          family_id?: number | null
          first_name: string
          gender?: string
          id?: number
          language?: string
          last_name: string
          phone?: string | null
          preferred_name?: string | null
          remarks?: string | null
          simplybook_client_id?: number | null
          user_id?: string | null
          zh_name?: string | null
          zoho_contact_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          etransfer_name?: string | null
          family_id?: number | null
          first_name?: string
          gender?: string
          id?: number
          language?: string
          last_name?: string
          phone?: string | null
          preferred_name?: string | null
          remarks?: string | null
          simplybook_client_id?: number | null
          user_id?: string | null
          zh_name?: string | null
          zoho_contact_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "adult_member_family_id_fkey"
            columns: ["family_id"]
            isOneToOne: false
            referencedRelation: "family"
            referencedColumns: ["id"]
          },
        ]
      }
      bank_transaction: {
        Row: {
          adult_member_id: number | null
          balance: string
          bank_account: string
          cheque_no: string
          created_at: string
          date: string
          deposits: string
          description: string
          etransfer_name: string | null
          id: string
          payee: string
          reference_no: string
          withdrawals: string
          zoho_imported_at: string | null
          zoho_transaction_id: string | null
        }
        Insert: {
          adult_member_id?: number | null
          balance: string
          bank_account: string
          cheque_no: string
          created_at?: string
          date: string
          deposits: string
          description: string
          etransfer_name?: string | null
          id: string
          payee: string
          reference_no: string
          withdrawals: string
          zoho_imported_at?: string | null
          zoho_transaction_id?: string | null
        }
        Update: {
          adult_member_id?: number | null
          balance?: string
          bank_account?: string
          cheque_no?: string
          created_at?: string
          date?: string
          deposits?: string
          description?: string
          etransfer_name?: string | null
          id?: string
          payee?: string
          reference_no?: string
          withdrawals?: string
          zoho_imported_at?: string | null
          zoho_transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bank_transaction_adult_member_id_fkey"
            columns: ["adult_member_id"]
            isOneToOne: false
            referencedRelation: "adult_member"
            referencedColumns: ["id"]
          },
        ]
      }
      confirmation: {
        Row: {
          amount: number | null
          completed: boolean | null
          content: Json | null
          created_at: string
          email: string | null
          error: string | null
          id: number
          interac: string | null
          refno: string | null
          remark: string | null
          sender: string | null
          subject: string | null
        }
        Insert: {
          amount?: number | null
          completed?: boolean | null
          content?: Json | null
          created_at?: string
          email?: string | null
          error?: string | null
          id?: number
          interac?: string | null
          refno?: string | null
          remark?: string | null
          sender?: string | null
          subject?: string | null
        }
        Update: {
          amount?: number | null
          completed?: boolean | null
          content?: Json | null
          created_at?: string
          email?: string | null
          error?: string | null
          id?: number
          interac?: string | null
          refno?: string | null
          remark?: string | null
          sender?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      family: {
        Row: {
          city: string | null
          created_at: string
          id: number
          primary_contact: number
          province: string | null
          street_address: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          id?: number
          primary_contact: number
          province?: string | null
          street_address?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string
          id?: number
          primary_contact?: number
          province?: string | null
          street_address?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "family_primary_contact_fkey"
            columns: ["primary_contact"]
            isOneToOne: true
            referencedRelation: "adult_member"
            referencedColumns: ["id"]
          },
        ]
      }
      kv_items: {
        Row: {
          key: string
          value: string
        }
        Insert: {
          key: string
          value: string
        }
        Update: {
          key?: string
          value?: string
        }
        Relationships: []
      }
      minor_member: {
        Row: {
          cantonese_proficiency: string | null
          chinese_char_recognition: string | null
          created_at: string
          dob: string | null
          drug_allergies: string | null
          email: string | null
          family_id: number | null
          first_name: string
          food_allergies: string | null
          gender: string
          id: number
          language: string
          last_name: string
          meta_data: Json | null
          parent_remarks: string | null
          phone: string | null
          preferred_name: string | null
          primary_contact: number | null
          remarks: string | null
          user_id: string | null
          zh_name: string | null
        }
        Insert: {
          cantonese_proficiency?: string | null
          chinese_char_recognition?: string | null
          created_at?: string
          dob?: string | null
          drug_allergies?: string | null
          email?: string | null
          family_id?: number | null
          first_name: string
          food_allergies?: string | null
          gender?: string
          id?: number
          language?: string
          last_name: string
          meta_data?: Json | null
          parent_remarks?: string | null
          phone?: string | null
          preferred_name?: string | null
          primary_contact?: number | null
          remarks?: string | null
          user_id?: string | null
          zh_name?: string | null
        }
        Update: {
          cantonese_proficiency?: string | null
          chinese_char_recognition?: string | null
          created_at?: string
          dob?: string | null
          drug_allergies?: string | null
          email?: string | null
          family_id?: number | null
          first_name?: string
          food_allergies?: string | null
          gender?: string
          id?: number
          language?: string
          last_name?: string
          meta_data?: Json | null
          parent_remarks?: string | null
          phone?: string | null
          preferred_name?: string | null
          primary_contact?: number | null
          remarks?: string | null
          user_id?: string | null
          zh_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "minor_member_family_id_fkey"
            columns: ["family_id"]
            isOneToOne: false
            referencedRelation: "family"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "minor_member_primary_contact_fkey"
            columns: ["primary_contact"]
            isOneToOne: false
            referencedRelation: "adult_member"
            referencedColumns: ["id"]
          },
        ]
      }
      payment: {
        Row: {
          amount: number | null
          client_email: string | null
          client_name: string | null
          client_phone: string | null
          created_at: string
          currency: string | null
          customer_id: number | null
          email_error: string | null
          email_sent: boolean | null
          email_subject: string | null
          email_text: string | null
          id: number
          order_id: number | null
          order_object: Json | null
          payment_due_at: string | null
          webhook_payload: Json | null
        }
        Insert: {
          amount?: number | null
          client_email?: string | null
          client_name?: string | null
          client_phone?: string | null
          created_at?: string
          currency?: string | null
          customer_id?: number | null
          email_error?: string | null
          email_sent?: boolean | null
          email_subject?: string | null
          email_text?: string | null
          id?: number
          order_id?: number | null
          order_object?: Json | null
          payment_due_at?: string | null
          webhook_payload?: Json | null
        }
        Update: {
          amount?: number | null
          client_email?: string | null
          client_name?: string | null
          client_phone?: string | null
          created_at?: string
          currency?: string | null
          customer_id?: number | null
          email_error?: string | null
          email_sent?: boolean | null
          email_subject?: string | null
          email_text?: string | null
          id?: number
          order_id?: number | null
          order_object?: Json | null
          payment_due_at?: string | null
          webhook_payload?: Json | null
        }
        Relationships: []
      }
      program: {
        Row: {
          capacity: number
          capped: boolean
          created_at: string
          dates: string
          dates_zh: string | null
          description: string
          description_zh: string | null
          fee: string
          fee_zh: string | null
          hidden: boolean
          id: number
          image: string
          image_dimension: string
          image_zh: string | null
          name: string
          name_zh: string | null
          price: number | null
          sku: string | null
          visible_from: string | null
          visible_to: string | null
          zoho_item_id: string | null
        }
        Insert: {
          capacity?: number
          capped?: boolean
          created_at?: string
          dates?: string
          dates_zh?: string | null
          description?: string
          description_zh?: string | null
          fee?: string
          fee_zh?: string | null
          hidden?: boolean
          id?: number
          image?: string
          image_dimension?: string
          image_zh?: string | null
          name: string
          name_zh?: string | null
          price?: number | null
          sku?: string | null
          visible_from?: string | null
          visible_to?: string | null
          zoho_item_id?: string | null
        }
        Update: {
          capacity?: number
          capped?: boolean
          created_at?: string
          dates?: string
          dates_zh?: string | null
          description?: string
          description_zh?: string | null
          fee?: string
          fee_zh?: string | null
          hidden?: boolean
          id?: number
          image?: string
          image_dimension?: string
          image_zh?: string | null
          name?: string
          name_zh?: string | null
          price?: number | null
          sku?: string | null
          visible_from?: string | null
          visible_to?: string | null
          zoho_item_id?: string | null
        }
        Relationships: []
      }
      program_enrollment: {
        Row: {
          created_at: string
          enrolled_at: string | null
          member_id: number
          paid_at: string | null
          payment_status: string
          program_id: number
          refunded_at: string | null
          status: string
          unenrolled_at: string | null
        }
        Insert: {
          created_at?: string
          enrolled_at?: string | null
          member_id: number
          paid_at?: string | null
          payment_status?: string
          program_id: number
          refunded_at?: string | null
          status?: string
          unenrolled_at?: string | null
        }
        Update: {
          created_at?: string
          enrolled_at?: string | null
          member_id?: number
          paid_at?: string | null
          payment_status?: string
          program_id?: number
          refunded_at?: string | null
          status?: string
          unenrolled_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "program_enrollment_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "minor_member"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "program_enrollment_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "program"
            referencedColumns: ["id"]
          },
        ]
      }
      project: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      simplybook_callback: {
        Row: {
          body: Json | null
          booking_hash: string | null
          booking_id: number | null
          booking_object: Json | null
          created_at: string
          headers: Json | null
          id: number
          notification_type: string | null
          query: Json | null
        }
        Insert: {
          body?: Json | null
          booking_hash?: string | null
          booking_id?: number | null
          booking_object?: Json | null
          created_at?: string
          headers?: Json | null
          id?: number
          notification_type?: string | null
          query?: Json | null
        }
        Update: {
          body?: Json | null
          booking_hash?: string | null
          booking_id?: number | null
          booking_object?: Json | null
          created_at?: string
          headers?: Json | null
          id?: number
          notification_type?: string | null
          query?: Json | null
        }
        Relationships: []
      }
      simplybook_client: {
        Row: {
          created_at: string
          email: string | null
          id: number
          name: string
          phone: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id: number
          name: string
          phone?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      simplybook_invoice: {
        Row: {
          amount: unknown
          client_email: string | null
          client_id: number | null
          client_name: string | null
          client_phone: string | null
          created_at: string
          date: string | null
          description: string | null
          due_date: string | null
          id: number
          order_no: string | null
          rawdata: Json | null
          sbpay_invoice_id: string | null
          sbpay_reference_id: number | null
          status: string | null
          tax_amount: unknown
          zoho_invoice_id: string | null
        }
        Insert: {
          amount?: unknown
          client_email?: string | null
          client_id?: number | null
          client_name?: string | null
          client_phone?: string | null
          created_at?: string
          date?: string | null
          description?: string | null
          due_date?: string | null
          id: number
          order_no?: string | null
          rawdata?: Json | null
          sbpay_invoice_id?: string | null
          sbpay_reference_id?: number | null
          status?: string | null
          tax_amount?: unknown
          zoho_invoice_id?: string | null
        }
        Update: {
          amount?: unknown
          client_email?: string | null
          client_id?: number | null
          client_name?: string | null
          client_phone?: string | null
          created_at?: string
          date?: string | null
          description?: string | null
          due_date?: string | null
          id?: number
          order_no?: string | null
          rawdata?: Json | null
          sbpay_invoice_id?: string | null
          sbpay_reference_id?: number | null
          status?: string | null
          tax_amount?: unknown
          zoho_invoice_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "simplybook_invoice_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "simplybook_client"
            referencedColumns: ["id"]
          },
        ]
      }
      simplybook_order: {
        Row: {
          amount: unknown
          client_email: string | null
          client_id: number | null
          client_name: string | null
          client_phone: string | null
          created_at: string
          date: string | null
          description: string | null
          due_date: string | null
          id: number
          order_no: string | null
          rawdata: Json | null
          sbpay_invoice_id: string | null
          sbpay_reference_id: number | null
          status: string | null
          tax_amount: unknown
          zoho_uploaded: boolean
          zoho_uploaded_at: string | null
        }
        Insert: {
          amount?: unknown
          client_email?: string | null
          client_id?: number | null
          client_name?: string | null
          client_phone?: string | null
          created_at?: string
          date?: string | null
          description?: string | null
          due_date?: string | null
          id: number
          order_no?: string | null
          rawdata?: Json | null
          sbpay_invoice_id?: string | null
          sbpay_reference_id?: number | null
          status?: string | null
          tax_amount?: unknown
          zoho_uploaded?: boolean
          zoho_uploaded_at?: string | null
        }
        Update: {
          amount?: unknown
          client_email?: string | null
          client_id?: number | null
          client_name?: string | null
          client_phone?: string | null
          created_at?: string
          date?: string | null
          description?: string | null
          due_date?: string | null
          id?: number
          order_no?: string | null
          rawdata?: Json | null
          sbpay_invoice_id?: string | null
          sbpay_reference_id?: number | null
          status?: string | null
          tax_amount?: unknown
          zoho_uploaded?: boolean
          zoho_uploaded_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "simplybook_order_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "simplybook_client"
            referencedColumns: ["id"]
          },
        ]
      }
      simplybook_service: {
        Row: {
          aliases: string[] | null
          created_at: string
          currency: string | null
          deposit_price: unknown
          description: string | null
          id: number
          limit_booking: number | null
          name: string
          price: unknown
          rawdata: Json | null
          sku: string | null
          tax_id: number | null
          tax_name: string | null
          tax_ratio: number | null
          zoho_item_id: string | null
          zoho_item_name: string | null
        }
        Insert: {
          aliases?: string[] | null
          created_at?: string
          currency?: string | null
          deposit_price?: unknown
          description?: string | null
          id: number
          limit_booking?: number | null
          name: string
          price: unknown
          rawdata?: Json | null
          sku?: string | null
          tax_id?: number | null
          tax_name?: string | null
          tax_ratio?: number | null
          zoho_item_id?: string | null
          zoho_item_name?: string | null
        }
        Update: {
          aliases?: string[] | null
          created_at?: string
          currency?: string | null
          deposit_price?: unknown
          description?: string | null
          id?: number
          limit_booking?: number | null
          name?: string
          price?: unknown
          rawdata?: Json | null
          sku?: string | null
          tax_id?: number | null
          tax_name?: string | null
          tax_ratio?: number | null
          zoho_item_id?: string | null
          zoho_item_name?: string | null
        }
        Relationships: []
      }
      time_entry: {
        Row: {
          created_at: string
          created_by: string
          end_date: string | null
          id: number
          note: string | null
          project: number | null
          start_date: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          created_by: string
          end_date?: string | null
          id?: number
          note?: string | null
          project?: number | null
          start_date?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string
          end_date?: string | null
          id?: number
          note?: string | null
          project?: number | null
          start_date?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "time_entry_project_fkey"
            columns: ["project"]
            isOneToOne: false
            referencedRelation: "project"
            referencedColumns: ["id"]
          },
        ]
      }
      user_invite: {
        Row: {
          activated_at: string | null
          created_at: string
          id: string
        }
        Insert: {
          activated_at?: string | null
          created_at?: string
          id: string
        }
        Update: {
          activated_at?: string | null
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      user_profile: {
        Row: {
          access_level: number
          display_name: string
          email: string
          employee_no: string | null
          id: string
          last_sign_in_at: string | null
        }
        Insert: {
          access_level?: number
          display_name: string
          email?: string
          employee_no?: string | null
          id: string
          last_sign_in_at?: string | null
        }
        Update: {
          access_level?: number
          display_name?: string
          email?: string
          employee_no?: string | null
          id?: string
          last_sign_in_at?: string | null
        }
        Relationships: []
      }
      web_posts: {
        Row: {
          content: string
          content_en: string
          created_at: string
          id: number
          image: string
          position: number
          slug: string
          status: string
          title: string
          title_en: string
        }
        Insert: {
          content?: string
          content_en?: string
          created_at?: string
          id?: number
          image?: string
          position: number
          slug: string
          status?: string
          title: string
          title_en: string
        }
        Update: {
          content?: string
          content_en?: string
          created_at?: string
          id?: number
          image?: string
          position?: number
          slug?: string
          status?: string
          title?: string
          title_en?: string
        }
        Relationships: []
      }
    }
    Views: {
      time_entry_summary_daily: {
        Row: {
          date: string | null
          total_hours: number | null
          total_minutes: number | null
        }
        Relationships: []
      }
      time_entry_summary_monthly: {
        Row: {
          date: string | null
          total_hours: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      custom_access_token_hook: { Args: { _event: Json }; Returns: Json }
      get_access_level: { Args: never; Returns: number }
      get_family_id: { Args: { adult_member_id: number }; Returns: number }
      get_user_display_name: {
        Args: { raw_user_meta_data: Json }
        Returns: string
      }
      is_level_allowed: { Args: { p_access_level: number }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const

