export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          role: "admin" | "client" | "viewer";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          role?: "admin" | "client" | "viewer";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          role?: "admin" | "client" | "viewer";
          created_at?: string;
          updated_at?: string;
        };
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          icon: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          icon?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          icon?: string | null;
          created_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string | null;
          category_id: string | null;
          featured: boolean;
          status: "draft" | "published" | "archived";
          metadata: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          description?: string | null;
          category_id?: string | null;
          featured?: boolean;
          status?: "draft" | "published" | "archived";
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          description?: string | null;
          category_id?: string | null;
          featured?: boolean;
          status?: "draft" | "published" | "archived";
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      service_requests: {
        Row: {
          id: string;
          service_id: string | null;
          client_name: string;
          client_email: string;
          company_name: string | null;
          message: string;
          status: "pending" | "contacted" | "in_progress" | "completed" | "cancelled";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          service_id?: string | null;
          client_name: string;
          client_email: string;
          company_name?: string | null;
          message: string;
          status?: "pending" | "contacted" | "in_progress" | "completed" | "cancelled";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          service_id?: string | null;
          client_name?: string;
          client_email?: string;
          company_name?: string | null;
          message?: string;
          status?: "pending" | "contacted" | "in_progress" | "completed" | "cancelled";
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
